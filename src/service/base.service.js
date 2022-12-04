import { useMainStore } from "@/stores/main";
import { stringify } from "postcss-value-parser";
import { useRouter } from "vue-router";

export const authHeader = () => {
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("jwt_token"),
  };
};
