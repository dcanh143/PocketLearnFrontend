<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import CardBox from "@/components/CardBox.vue";
import FormCheckRadio from "@/components/FormCheckRadio.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import { BASE_API_URL } from "@/common/constants";
import { notify } from "@kyvg/vue3-notification";
import { useMainStore } from "@/stores/main";
import axios from "axios";

const roles = ["TEACHER", "STUDENT"];

const form = reactive({
  login: "",
  pass: "",
  pass_remind: "",
  name: "",
  role: roles[1],
});

const router = useRouter();
const mainStore = useMainStore();

const submit = async () => {
  await axios
    .post(BASE_API_URL + "/authentication/sign-up", {
      username: form.login,
      password: form.pass,
      name: form.name,
      role: form.role,
    })
    .then((res) => {
      notify({
        type: "success",
        title: "Thành công",
        text: "Đăng ký thành công",
      });
      mainStore.setUser(res.data);
      router.push("/login");
    })
    .catch((err) => {
      notify({
        type: "error",
        title: "Lỗi",
        text: "Thông tin không hợp lệ",
      });
    });
};
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormField label="Name">
          <FormControl
            v-model="form.name"
            :icon="mdiAccount"
            name="login"
            autocomplete="name"
            placeholder="Enter your name"
          />
        </FormField>
        <FormField label="Username">
          <FormControl
            v-model="form.login"
            :icon="mdiAccount"
            name="login"
            autocomplete="username"
            placeholder="Enter your username"
          />
        </FormField>

        <FormField label="Password">
          <FormControl
            v-model="form.pass"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder="Enter your password"
          />
        </FormField>

        <FormField label="Password">
          <FormControl
            v-model="form.pass_remind"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder="Enter your password"
          />
        </FormField>

        <FormField label="Role">
          <FormControl
            v-model="form.role"
            :icon="mdiAsterisk"
            :options="roles"
            autocomplete="current-password"
          />
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Login" />
            <BaseButton
              to="/login"
              color="info"
              outline
              label="Back to Login"
            />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
