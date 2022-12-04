<script setup>
import {
  mdiMonitorCellphone,
  mdiTableBorder,
  mdiTableOff,
  mdiGithub,
} from "@mdi/js";
import { reactive, ref } from "vue";
import SectionMain from "@/components/SectionMain.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import TableCoures from "@/components/TableCoures.vue";
import CardBox from "@/components/CardBox.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBoxComponentEmpty from "@/components/CardBoxComponentEmpty.vue";
import FormControl from "@/components/FormControl.vue";
import FormField from "@/components/FormField.vue";
import courseService from "@/service/course.service";
import axios from "axios";
import { authHeader } from "@/service/base.service";
import { notify } from "@kyvg/vue3-notification";
import { BASE_API_URL } from "@/common/constants";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
const isGV = mainStore.role == "TEACHER";

const selectOptions = [
  "ENGLISH",
  "SCIENCE",
  "SOFTWARE",
  "COMPUTER",
  "INFORMATION",
  "UIUX",
];

const form = reactive({
  name: "",
  description: "",
  price: "",
  category: selectOptions[0],
});

const visibleCourseCreate = ref(false);

const submit = async () => {
  await axios({
    method: "post",
    url: BASE_API_URL + "/course",
    data: {
      name: form.name,
      description: form.description,
      price: form.price,
      category: form.category,
    },
    headers: authHeader(),
  })
    .then((res) => {
      notify({
        type: "success",
        title: "Thành công",
        text: "Tạo khóa học thành công",
      });
      location.reload();
    })
    .catch((err) => {
      notify({
        type: "error",
        title: "Lỗi",
        text: "Tạo khóa học thất bại",
      });
    });
};
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <BaseButton
        class="my-3"
        color="info"
        label="Create Course"
        @click="visibleCourseCreate = !visibleCourseCreate"
        v-if="isGV"
      />
      <CardBox form @submit="submit" v-if="visibleCourseCreate" class="mb-3">
        <div class="grid grid-cols-2 gap-6 my-4">
          <FormField label="Course Name">
            <FormControl v-model="form.name" />
          </FormField>
          <FormField label="Price">
            <FormControl v-model="form.price" />
          </FormField>
        </div>

        <FormField label="Category">
          <FormControl v-model="form.category" :options="selectOptions" />
        </FormField>

        <FormField label="Description">
          <FormControl v-model="form.description" type="textarea" />
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton
              type="submit"
              color="info"
              label="Submit"
              class="mx-3"
              @click="submit"
            />
            <BaseButton type="reset" color="info" outline label="Reset" />
          </BaseButtons>
        </template>
      </CardBox>
      <CardBox title="Courses" class="m-3" has-table>
        <Suspense> <TableCoures checkable /> </Suspense>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
