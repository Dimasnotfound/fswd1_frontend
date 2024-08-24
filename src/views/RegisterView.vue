<template>
    <main>
        <div class="container d-flex justify-content-center align-items-center c-content">
        <div class="row">
            <div class="col-12 mb-5">
                <h4 style="text-align: center;">Register</h4>
            </div>
            <div class="col-12">
                <div class="login-form">
                <form>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input v-model="formData.email" type="email" class="form-control" id="username" aria-describedby="emailHelp">
                    <div v-for="error in v$.username.$errors" :key="error.$uid" id="nameHelp" class="form-text text-danger">*{{error.$message}}</div>
                </div>
                <div class="mb-3">
                    <label for="email1" class="form-label">Email</label>
                    <input v-model="formData.email" type="email" class="form-control" id="email1" aria-describedby="emailHelp">
                    <div v-for="error in v$.email.$errors" :key="error.$uid" id="emailHelp" class="form-text text-danger">*{{error.$message}}</div>
                </div>
                <div class="mb-3">
                    <label for="password1" class="form-label">Password</label>
                    <input v-model="formData.password" type="password" class="form-control" id="password1">
                     <div v-for="error in v$.password.$errors" :key="error.$uid" id="passHelp" class="form-text text-danger">*{{error.$message}}</div>
                </div>
                <div class="mb-3">
                    <label for="password2" class="form-label">Confirm Password</label>
                    <input v-model="formData.cpassword" type="password" class="form-control" id="password2">
                    <div v-for="error in v$.cpassword.$errors" :key="error.$uid" id="cpassHelp" class="form-text text-danger">*{{error.$message}}</div>
                </div>
                <div class="d-flex justify-content-between">
                    <button type="submit" class="btn btn-secondary" @click.prevent="methods.login">Back</button>
                    <button type="submit" class="btn btn-primary" @click.prevent="methods.register">Submit</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    </div>
    </main>
</template>

<script setup>
import router from "@/router";
import useVuelidate from "@vuelidate/core";
import { computed, reactive, ref } from "vue";
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators'

const formData = reactive({
    username: '',
    email: '',
    password: '',
    cpassword: ''
})

const rules = computed(() => {
    return {
        username: {
            required: helpers.withMessage('This username cannot be empty', required)
        },
        email: { 
            required: helpers.withMessage('This email cannot be empty', required), 
            email 
        },
        password: { 
            required: helpers.withMessage('This password cannot be empty', required), 
            minLength: minLength(8) 
        },
        cpassword: { 
            required: helpers.withMessage('This confirm password cannot be empty', required), 
            sameAs: sameAs(formData.password) 
        }
    }
})

const v$ = useVuelidate(rules, formData);
const data = ref({
    email: ref(null),
    password: ref(null)
})

const methods = {
    login: () => {
        router.push({ name: 'home' })
    },

    register: async () => {
        await v$.value.$validate()
    }
}

</script>

<style scoped>
    .c-content {
        height: 100vh;
    }
</style>