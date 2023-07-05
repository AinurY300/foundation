<script setup lang="ts">
definePageMeta({
  layout: false
})

const { signIn } = useAuth()
</script>

<template>
  <v-main>
    <v-container class="fill-height">
      <v-row class="justify-center">
        <v-col cols="4">
          <v-card>
            <v-card-actions>
              <v-btn size="large" border class="flex-fill" @click="signIn('github')">
                <v-img width="22" height="22" src="https://oflmdeykteiflhehnhfe.supabase.co/storage/v1/object/public/svg/github.svg"/>
              </v-btn>
              <v-btn size="large" border class="flex-fill" @click="signIn('google')">
                <v-img width="22" height="22" src="https://oflmdeykteiflhehnhfe.supabase.co/storage/v1/object/public/svg/google.svg"/>
              </v-btn>
              <v-btn size="large" border class="flex-fill" @click="signIn('yandex')">
                <v-img width="22" height="22" src="https://oflmdeykteiflhehnhfe.supabase.co/storage/v1/object/public/svg/vk.svg"/>
              </v-btn>
              <v-btn size="large" border class="flex-fill" @click="signIn('vk')">
                <v-img width="22" height="22" src="https://oflmdeykteiflhehnhfe.supabase.co/storage/v1/object/public/svg/yandex.svg"/>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>


<!-- <v-form>
  <v-card>
    
      <v-card-actions>
        <v-btn class="flex-0-1" style="background: #000000">
          <v-img height="20" src="assets/auth/github.svg"></v-img>
        </v-btn>
        <v-btn class="flex-0-1" style="background: #ffffff">
          <v-img height="20" src="assets/auth/google.svg"></v-img>
        </v-btn>
        <v-btn class="flex-0-1" style="background: #ffffff">
          <v-img height="20" src="assets/auth/yandex.svg"></v-img>
        </v-btn>
        <v-btn class="flex-0-1" style="background: #0077FF">
          <v-img height="20" src="assets/auth/vk2.svg"></v-img>
        </v-btn>
      </v-card-actions>

  </v-card>
</v-form> -->