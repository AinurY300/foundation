<script setup lang="ts">
const users = await $fetch('/api/users')
const { signIn, signOut, status, getSession } = useAuth()
const session = await getSession()
const drawer = ref(false)
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model:model-value="drawer">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus accusamus numquam quam quas culpa sit qui recusandae reiciendis quidem praesentium ullam, consectetur, iure libero, ut accusantium voluptates unde commodi inventore.
    </v-navigation-drawer>
    <v-app-bar>
      <v-btn @click="signIn">Войти</v-btn>
      <v-btn v-if="status == 'authenticated'" @click="signOut">выйти</v-btn>
      <v-btn @click="drawer = !drawer">Открыть меню</v-btn>
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
