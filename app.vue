<script setup lang="ts">
const users = await $fetch('/api/users')
</script>

<template>
  <v-app>
    <v-app-bar/>
    <v-main>
      <v-container>
        Привет, мир!
        {{ users }}
      </v-container>
    </v-main>
  </v-app>
</template>
