<script setup lang="ts">
const users = await $fetch('/api/users')
const { signIn, signOut, status, getSession } = useAuth()
const session = await getSession()
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-btn @click="signIn">Войти</v-btn>
      <v-btn v-if="status == 'authenticated'" @click="signOut">выйти</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        Пользователь: {{ session }}
      </v-container>
      <v-container>
        Привет, мир!
        {{ users }}
      </v-container>
    </v-main>
  </v-app>
</template>
