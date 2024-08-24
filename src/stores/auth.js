import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const authStore = defineStore('auth', {
    state: () => {
        return {
            isAuthenticate: false,
            token: ''
        }
    },

    getters: {
        userData: (state) => state.token,
    },

    actions: {
        login(email, password){
            return new Promise((resolve, reject) => {
                let params = {
                    email: email,
                    password: password
                }

                axios({
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: 'http://127.0.0.1:8000/api/login',
                    data: JSON.stringify(params)
                }).then((response) => {
                    
                    this.isAuthenticate = true
                    this.token = response.data.token

                    localStorage.setItem('token_login', response.data.token)

                    if(response.status == 200){
                        resolve ({
                            status: true,
                            data: response.data
                        })
                    }else {
                        resolve ({
                            status: false,
                            data: response.data
                        })
                    }
                }).catch((err) => {
                    reject(err)
                })
            })
        },

        register(payload){
            return new Promise((resolve, reject) => {
                let params = {
                    name: payload.username,
                    email: payload.email,
                    password: payload.password
                }

                axios({
                    method: 'POST',
                    url: 'http://127.0.0.1:8000/api/register',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    data: JSON.stringify(params)
                }).then((response) => {
                    if(response.status == 201){
                        resolve ({
                            status: true,
                            data: response.data.user
                        })
                    }else {
                        resolve ({
                            status: false,
                            data: response.data
                        })
                    }
                    
                }).catch((err) => {
                    reject(err)
                })
            })
        }
    }

  })