<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const { getSession } = useAuth()
const session = getSession()
</script>

<template>
  <v-container>
    session: {{ session }}
  </v-container>
</template>