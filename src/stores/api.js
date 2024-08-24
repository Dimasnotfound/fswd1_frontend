import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const apiStore = defineStore('api', {
    state: () => {
        return {
            data_employee: {}
        }
    },

    getters: {
        employeeData: (state) => state.data_employee,
    },

    actions: {
        getAllData(){
            return new Promise((resolve, reject) => {
                const token = localStorage.getItem('token_login');
                axios({
                    method: 'get',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    url: 'http://127.0.0.1:8000/api/employee'
                }).then((response) => {
                
                    this.data_employee = response.data.data

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

        getAllDataFirst(){
            return new Promise((resolve, reject) => {
                const token = localStorage.getItem('token_login');
                axios({
                    method: 'get',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    url: 'http://127.0.0.1:8000/api/employee/first-join'
                }).then((response) => {

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

        historyEmployee(){
            return new Promise((resolve, reject) => {
                const token = localStorage.getItem('token_login');
                axios({
                    method: 'get',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    url: 'http://127.0.0.1:8000/api/employee/history-off'
                }).then((response) => {

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

        remainingOff(){
            return new Promise((resolve, reject) => {
                const token = localStorage.getItem('token_login');
                axios({
                    method: 'get',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    url: 'http://127.0.0.1:8000/api/employee/remaining-days-off'
                }).then((response) => {

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

        updateData(payload){
            const token = localStorage.getItem('token_login');
            let params = {
                id: payload.id,
                nama: payload.nama,
                alamat: payload.alamat
            }

            return new Promise((resolve, reject) => {
                axios({
                    method: "PUT",
                    url: 'http://127.0.0.1:8000/api/employee',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify(params)
                }).then((response) => {
    
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

        deleteData(id){
            const token = localStorage.getItem('token_login');
            let params = {
                id: id
            }

            return new Promise((resolve, reject) => {
                axios({
                    method: "DELETE",
                    url: 'http://127.0.0.1:8000/api/employee',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify(params)
                }).then((response) => {
    
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
        }
    }

  })