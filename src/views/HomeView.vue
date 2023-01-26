<script>

import axios from 'axios';
export default {
    name: "HomeView",
    components: {

    },
    data() {
        return {
            project: null,
            base_api_url: 'http://127.0.0.1:8000',
        };
    },
    methods: {
        getProject(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.project = response.data;
                })
                .catch(error => {
                    console.error(error.message)
                })
        },
        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return 'null'
        },
    },
    mounted() {
        this.getProject(this.base_api_url + '/api/project');
    }
}

</script>

<template>
    <!--home section-->
    <div class="container mt-3">
        <div class="row g-5">
            <div class="col-12 col-md-6 text-center">
                <div class="my-card">
                    <h1>Andrea Russo</h1>
                    <h5>Studente Full-stack Developer</h5>
                    <h6>Boolean Academy Srl</h6>
                </div>
            </div>
            <div class="col-12 col-md-6 text-center">
                <div class="my-photo">
                    <img class="rounded-circle" src="../assets/6ea7cbc7-6027-41dd-b9c3-1ceda334458d.jpeg" alt="">
                </div>
            </div>
        </div>
    </div>


    <!--about section-->
    <div class="container mt-5">
        <h2 class="text-center">About Me</h2>
        <div class="row text-center g-5 mt-5">
            <div class="col-12 col-md-6 about">
                <img src="../assets/undraw_programming_re_kg9v.svg" alt="">
            </div>
            <div class="col">ciao</div>
        </div>
    </div>




</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.container {
    color: white;
}

.about img {
    width: 50%;
}
</style>