<script setup lang="ts">
const users = await $fetch('/api/users')
const { signIn, getSession, signOut } = useAuth()
const session = await getSession()
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-btn @click="signIn">Войти</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        Пользователь: {{ session }}
        <v-btn v-if="session.user" @click="signOut">Выйти</v-btn>
      </v-container>
      <v-container>
        Привет, мир!
        {{ users }}
      </v-container>
    </v-main>
  </v-app>
</template>
