<script setup lang="ts">
const users = await $fetch('/api/users')
const { signIn, signOut } = useAuth()
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-btn @click="signIn">Войти</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
      </v-container>
      <v-container>
        Привет, мир!
        {{ users }}
      </v-container>
    </v-main>
  </v-app>
</template>
