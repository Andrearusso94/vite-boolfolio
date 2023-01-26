<script>
import axios from 'axios';
import { state } from '../state';
export default {
    name: 'ContactsView',
    data() {
        return {
            state,
            name: '',
            email: '',
            message: '',
            success: false,
            loading: false


        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            console.log(this.name);
            console.log(this.email);
            console.log(this.message);
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            axios.post(`${this.state.api_base_url}/api/contacts`, data).then((response) => {
                this.success = response.data.success;

                console.log(response);

                if (this.success) {
                    this.name = '';
                    this.email = '';
                    this.message = '';

                }
                this.loading = false;
            });

        }
    }
} 
</script>

<template>
    <div class="container">
        <div v-if="success" class=" mt-2 alert alert-success text-start" role="alert">Email inviata</div>
        <h2 class="text-white text-center py-1">Contattami</h2>
        <form @submit.prevent="sendForm()">

            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" id="name" v-model="name" class="form-control"
                    placeholder="inserisci il tuo nome" aria-describedby="helpId">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" name="email" id="email" v-model="email" class="form-control"
                    placeholder="la tua email" aria-describedby="helpId">
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Scrivimi</label>
                <textarea class="form-control" name="message" id="message" v-model="message" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading">{{
                loading? 'Sendig...': 'Contact me'
            }}</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>