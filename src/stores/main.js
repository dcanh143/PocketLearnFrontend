import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    /* User */
    name: localStorage.getItem("name"),
    username: localStorage.getItem("username"),
    jwt_token: localStorage.getItem("jwt_token"),
    role: localStorage.getItem("role"),

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    clients: [],
    history: [],
  }),
  actions: {
    setUser(payload) {
      localStorage.setItem("name", payload.name);
      localStorage.setItem("jwt_token", payload.token);
      localStorage.setItem("username", payload.username);
      localStorage.setItem("role", payload.role);
    },

    fetch(sampleDataKey) {
      axios
        .get(`data-sources/${sampleDataKey}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            this[sampleDataKey] = r.data.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
});
