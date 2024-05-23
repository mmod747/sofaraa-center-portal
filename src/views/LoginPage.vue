<template>
  <div dir="rtl">
    <v-img class="mx-auto my-2" max-width="350" src="/src/assets/icons/sofaraaLogo2 .png"></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-medium-emphasis">أسم المستخدم</div>

      <v-text-field
        @keyup.enter="LoginBtn"
        v-model="UserData.Name"
        density="compact"
        placeholder="ادخل اسم المستخدم"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        :rules="[() => !!UserData.Name || ' إدخالك غير صحيح !']"
        required
      ></v-text-field>

      <div class="text-medium-emphasis d-flex align-center justify-space-between">
        كلمة المرور

        <a
          class="text-caption text-decoration-none text-[#AD1457]"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          هل نسيت رمز الدخول؟</a
        >
      </div>

      <v-text-field
        @keyup.enter="LoginBtn"
        v-model="UserData.password"
        type="password"
        density="compact"
        placeholder="ادخل رمز الدخول"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        :rules="[() => !!UserData.Name || ' إدخالك غير صحيح !']"
        required
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <!-- <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked
          for three hours. If you must login now, you can also click "Forgot login password?" below
          to reset the login password.
        </v-card-text>
      </v-card> -->

      <v-btn
        @click.self="LoginBtn"
        @keyup.enter="testFun"
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
      >
        دخول
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-decoration-none text-[#AD1457]"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { ref, watchEffect } from 'vue'
import apiClient from '@/axios'

const show1 = ref(false)

const router = useRouter()

type user = {
  Name: string
  password: string
}
const UserData = ref<user>({
  Name: '',
  password: ''
})
const visible = ref(true)

watchEffect(() => {
  console.log(UserData.value.Name)
  console.log(UserData.value.password)
})

const LoginBtn = async () => {
  const response = await apiClient.post('Auth/Login', {
    userName: UserData.value.Name,
    password: UserData.value.password
  })
  // console.log(response.data)
  console.log(response.data.token)
  localStorage.setItem('token', response.data.token)

  router.replace('/')
}

const testFun = () => {
  console.log('works')
}
</script>
