<template>
    <main>
        <div class="container d-flex justify-content-center align-items-center c-content">
            <div class="row">
                <div class="col-12 d-flex justify-content-center mb-5">
                    <h4>Table Karyawan</h4>
                </div>
                <div class="col-12 border">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nomor Induk</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Tanggal Lahir</th>
                            <th scope="col">Tanggal Bergabung</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in listData" :key="item.id">
                            <tr>
                                <th scope="row">1</th>
                                <td>{{item.nomor_induk}}</td>
                                <td>{{item.nama}}</td>
                                <td>{{item.alamat}}</td>
                                <td>{{item.tanggal_lahir}}</td>
                                <td>{{item.tanggal_bergabung}}</td>
                                <td>
                                    <div id="button-action" class="d-flex button-action">
                                        <button type="" class="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" @click="methods.setEditState(item)">Edit</button>
                                        <button class="btn btn-danger" @click="methods.delete(item)">Hapus</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-12 mt-5">
                    <div class="mb-5 d-flex justify-content-center">
                        <h4>Karyawan Pertama Bergabung</h4>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nomor Induk</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Tanggal Lahir</th>
                            <th scope="col">Tanggal Bergabung</th>
                            <!-- <th scope="col">Action</th> -->
                            </tr>
                        </thead>
                        <tbody v-for="item in listDataFirst" :key="item.id">
                            <tr>
                                <th scope="row">1</th>
                                <td>{{item.nomor_induk}}</td>
                                <td>{{item.nama}}</td>
                                <td>{{item.alamat}}</td>
                                <td>{{item.tanggal_lahir}}</td>
                                <td>{{item.tanggal_bergabung}}</td>
                                <!-- <td>
                                    <div id="button-action" class="d-flex button-action">
                                        <button type="" class="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" @click="methods.setEditState(item)">Edit</button>
                                        <button class="btn btn-danger" @click="methods.delete(item)">Hapus</button>
                                    </div>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-12 mt-5">
                    <div class="mb-5 d-flex justify-content-center">
                        <h4>Karyawan Pernah Cuti</h4>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nomor Induk</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Tanggal Lahir</th>
                            <th scope="col">Tanggal Bergabung</th>
                            <!-- <th scope="col">Action</th> -->
                            </tr>
                        </thead>
                        <tbody v-for="item in listDataOff" :key="item.id">
                            <tr>
                                <th scope="row">1</th>
                                <td>{{item.nomor_induk}}</td>
                                <td>{{item.nama}}</td>
                                <td>{{item.alamat}}</td>
                                <td>{{item.tanggal_lahir}}</td>
                                <td>{{item.tanggal_bergabung}}</td>
                                <!-- <td>
                                    <div id="button-action" class="d-flex button-action">
                                        <button type="" class="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" @click="methods.setEditState(item)">Edit</button>
                                        <button class="btn btn-danger" @click="methods.delete(item)">Hapus</button>
                                    </div>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-12 mt-5">
                    <div class="mb-5 d-flex justify-content-center">
                        <h4>Sisa Cuti</h4>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nomor Induk</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Sisa Cuti</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in listDataRemain" :key="item.id">
                            <tr>
                                <th scope="row">1</th>
                                <td>{{item.nomor_induk}}</td>
                                <td>{{item.nama}}</td>
                                <td>{{item.sisa_cuti}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- modal section -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Data Karyawan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Nama</label>
                        <input type="text" class="form-control" id="recipient-name" v-model="editData.nama">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Alamat</label>
                        <textarea class="form-control" id="message-text" v-model="editData.alamat"></textarea>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="methods.update" data-bs-dismiss="modal">Submit</button>
                </div>
                </div>
            </div>
            </div>
    </main>
</template>

<script setup>
import { apiStore } from "@/stores/api";
import { inject, reactive, ref } from "vue";

const api = apiStore();
const swal = inject('$swal');

const editData = reactive({
    id: '',
    nama: '',
    alamat: ''
})

const showModal = ref(false)

const listData = ref({})
const listDataOff = ref({})
const listDataRemain = ref({})
const listDataFirst = ref({})

const methods = {
    initialFetch: async () => {
        await api.getAllData()
        .then((response) => {
            listData.value = response.data.data
            
        }).catch((err) =>{
            console.log(err);
            
        })
    },

    fetchEmployeeFirst: async () => {
        await api.getAllDataFirst()
        .then((response) => {
            listDataFirst.value = response.data.data
            
        }).catch((err) =>{
            console.log(err);
            
        })
    },

    fetchEmployeeOff: async () => {
        await api.historyEmployee()
        .then((response) => {
            listDataOff.value = response.data.data
            
        }).catch((err) =>{
            console.log(err);
            
        })
    },

    fetchRemaining: async () => {
        await api.remainingOff()
        .then((response) => {
            listDataRemain.value = response.data.data
            
        }).catch((err) =>{
            console.log(err);
            
        })
    },

    setEditState: (params) => {
        editData.id = params.id
        editData.nama = params.nama
        editData.alamat = params.alamat
    },

    update: async () => {
        await api.updateData(editData).then((response) => {
            if(response.status){
                swal.fire({
                    icon: 'success',
                    toast: true,
                    title: 'Update Success !',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    position: 'top-end',
                });
                methods.initialFetch();
            }
        }).catch((err) => {
            console.log(err);
        })
    },

    delete: async (data) => {
        const dialog = swal.fire({
            icon: 'warning',
            toast: false,
            title: `Are you sure want to delete ${data.nama} ?`,
            showConfirmButton: true,
            showCancelButton: true,
        }).then(async (result) => {
            if(result.isConfirmed){
            await api.deleteData(data.id).then((response) => {
                    if(response.status){
                        swal.fire({
                            icon: 'success',
                            toast: true,
                            title: 'Success Delete Data !',
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            position: 'top-end',
                        });
                        methods.initialFetch();
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }  
        })
        
    }
}

methods.initialFetch();
methods.fetchEmployeeFirst();
methods.fetchEmployeeOff();
methods.fetchRemaining()

</script>

<style scoped>
.c-content {
    height: 100vh;
}

.button-action:nth-child(){
    margin: 10px;
}
</style>