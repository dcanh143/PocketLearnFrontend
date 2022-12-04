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
  <CardBox form @submit.prevent="submit" v-if="visibleCourseCreate">
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
        <BaseButton type="submit" color="info" label="Submit" class="mx-3" />
        <BaseButton type="reset" color="info" outline label="Reset" />
      </BaseButtons>
    </template>
  </CardBox>
</template>
