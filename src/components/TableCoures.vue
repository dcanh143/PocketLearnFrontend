<script setup>
import { computed, reactive, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiShopping, mdiEye, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import courseService from "@/service/course.service";
import axios from "axios";
import { BASE_API_URL } from "@/common/constants";
import { authHeader } from "@/service/base.service";
import { notify } from "@kyvg/vue3-notification";

defineProps({
  checkable: Boolean,
});

const courses = (await courseService.getAllCourse()).data;

const courseContent = reactive({
  value: "",
});

const courseBuyInfo = reactive({
  value: "",
  id: "",
  price: "",
});

const mainStore = useMainStore();

const isGV = mainStore.role == "TEACHER";

const items = computed(() => courses);

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);

const checkedRows = ref([]);

const itemsPaginated = computed(() =>
  items.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(items.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

const remove = (arr, cb) => {
  const newArr = [];

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client);
  } else {
    checkedRows.value = remove(
      checkedRows.value,
      (row) => row.id === client.id
    );
  }
};

const watchCourse = (text) => {
  courseContent.value = text;

  isModalActive.value = true;
};

const deleteCourseModal = (id, name) => {
  courseBuyInfo.id = id;
  courseBuyInfo.value = name;

  isModalDangerActive.value = true;
};

const isModalBuyActive = ref(false);

const buyCourse = (name, id, price) => {
  courseBuyInfo.value = name;
  courseBuyInfo.id = id;
  courseBuyInfo.price = price;

  isModalBuyActive.value = true;
};

const submit = async () => {
  await axios({
    method: "post",
    url: BASE_API_URL + "/purchase",
    data: {
      userId: mainStore.id,
      courseId: courseBuyInfo.id,
      price: courseBuyInfo.price,
    },
    headers: authHeader(),
  })
    .then((res) => {
      notify({
        type: "success",
        title: "Th??nh c??ng",
        text: "Th??m kh??a h???c th??nh c??ng",
      });
    })
    .catch((err) => {
      notify({
        type: "error",
        title: "L???i",
        text: "Th??m kh??a h???c th???t b???i",
      });
    });
};

const deleteCourse = () => {
  const data = courseService
    .deleteCourse(courseBuyInfo.id)
    .then((res) => {
      notify({
        type: "success",
        title: "Th??nh c??ng",
        text: "X??a kh??a h???c th??nh c??ng",
      });
    })
    .catch((err) => {
      notify({
        type: "error",
        title: "L???i",
        text: "X??a kh??a h???c th???t b???i",
      });
    });
};
</script>

<template>
  <CardBoxModal v-model="isModalActive" title="Description">
    <span v-html="courseContent.value" />
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalDangerActive"
    title="Please confirm"
    button="danger"
    has-cancel
    @confirm="deleteCourse"
  >
    <p>Delete {{ courseBuyInfo.value }}?</p>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalBuyActive"
    title="Please confirm"
    button="success"
    has-cancel
    @confirm="submit"
  >
    <p>Add {{ courseBuyInfo.value }}</p>
  </CardBoxModal>

  <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
    <span
      v-for="checkedRow in checkedRows"
      :key="checkedRow.id"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"
    >
      {{ checkedRow.name }}
    </span>
  </div>

  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Created</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in itemsPaginated" :key="client.id">
        <TableCheckboxCell
          v-if="checkable"
          @checked="checked($event, client)"
        />

        <td data-label="Name">
          {{ client.name }}
        </td>
        <td data-label="Category">
          {{ client.category }}
        </td>
        <td data-label="Price">
          {{ client.price }}
        </td>
        <td data-label="Created" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="client.created"
            >{{ Date(client.createTime).toString() }}</small
          >
        </td>
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton
              color="info"
              :icon="mdiEye"
              small
              @click="watchCourse(client.description)"
            />
            <BaseButton
              v-if="isGV"
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="deleteCourseModal(client.id, client.name)"
            />
            <BaseButton
              color="success"
              :icon="mdiShopping"
              small
              @click="buyCourse(client.name, client.id, client.price)"
            />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
