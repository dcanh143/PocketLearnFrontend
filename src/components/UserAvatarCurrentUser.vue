<script setup>
import { useMainStore } from "@/stores/main";
import UserAvatar from "@/components/UserAvatar.vue";

const mainStore = useMainStore();
</script>

<template>
  <UserAvatar :username="mainStore.name" :avatar="mainStore.userAvatar">
    <slot />
  </UserAvatar>
</template>
