<template>
    <div class="container d-flex justify-content-center align-items-center c-content">
        <div class="row">
            <div class="col-12 mb-5">
                <h4 style="text-align: center;">Login</h4>
            </div>
            <div class="col-12">
                <div class="login-form">
                <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input v-model="formData.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div v-for="error in v$.email.$errors" :key="error.$uid" id="emailHelp" class="form-text text-danger">*{{error.$message}}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="formData.password" type="password" class="form-control" id="exampleInputPassword1">
                    <div v-for="error in v$.password.$errors" :key="error.$uid" id="passHelp" class="form-text text-danger">*{{error.$message}}</div>
                </div>
                <div class="d-flex justify-content-between">
                    <button type="submit" class="btn btn-primary" @click.prevent="methods.login">Sig in</button>
                    <button type="submit" class="btn btn-secondary" @click.prevent="methods.register">Sign up</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from "@/router";
import { computed, inject, reactive, ref } from "vue";
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators'
import { authStore } from '../stores/auth'
import useVuelidate from '@vuelidate/core'

const auth = authStore();
const swal = inject('$swal');

const formData = reactive({
    email: '',
    password: ''
})

const rules = computed(() => {
    return {
        email: { 
            required: helpers.withMessage('This email cannot be empty', required), 
            email 
        },
        password: { 
            required: helpers.withMessage('This password cannot be empty', required), 
            minLength: minLength(8) 
        }
    }
})

const v$ = useVuelidate(rules, formData)

const data = ref({
    email: ref(null),
    password: ref(null)
})

const methods = {
    login: async () => {
        const validate = await v$.value.$validate();  
              
        if(validate){
            await auth.login(data.value.email, data.value.password).then((response) => {
                router.push('/home')
                swal.fire({
                    icon: 'success',
                    toast: true,
                    title: 'Login succesfull !',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    position: 'top-end',
                });
            }).catch((err) => {
                console.log(err);
                swal.fire({
                    icon: 'error',
                    toast: true,
                    title: 'Login Failed !',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    position: 'top-end',
                });
            })
        }
    },

    register: () => {
        router.push('/register')
    }
}

</script>

<style scoped>
    .c-content {
        height: 100vh;
    }
</style>