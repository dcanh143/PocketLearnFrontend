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

const form = reactive({
  login: "",
  pass: "",
});

const router = useRouter();
const mainStore = useMainStore();

const submit = async () => {
  await axios
    .post(BASE_API_URL + "/authentication/sign-in", {
      username: form.login,
      password: form.pass,
    })
    .then((res) => {
      notify({
        type: "success",
        title: "Thành công",
        text: "Đăng nhập thành công",
      });
      mainStore.setUser(res.data);
      router.push("/dashboard");
    })
    .catch((err) => {
      notify({
        type: "error",
        title: "Lỗi",
        text: "Sai thông tin đăng nhập hoặc mật khẩu",
      });
    });
};
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormField label="Login" help="Please enter your login">
          <FormControl
            v-model="form.login"
            :icon="mdiAccount"
            name="login"
            autocomplete="username"
          />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl
            v-model="form.pass"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Login" />
            <BaseButton to="/register" color="info" outline label="Register" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
