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
        <div class="row text-center g-5 py-2">
            <div class="col-12 col-md-6 about">
                <img src="../assets/undraw_programming_re_kg9v.svg" alt="">
            </div>
            <div class="col">Ciao! sono Andrea, un Junior FullStack Developer che dopo anni di lavoro nel campo
                Immobilare ha deciso di cambiare vita ed entrare nel mondo dello sviluppo Web! <br> Se vuoi saperne di
                pi?? su di me... <br>
                <RouterLink class="nav-link active" :to="{ name: 'about' }"><a class="mt-2 btn btn-primary">Clicca
                        qui</a>
                </RouterLink>
            </div>
        </div>
    </div>


    <!--Project Section-->
    <div class=" mt-5 container text-center">
        <h2>My Projects</h2>
        <img class="code py-2" src="../assets/undraw_static_assets_rpm6.svg" alt="">
        <div class="row text-center g-5 mt-5" v-if="project">
            <div class="col-12 text-center
            
             col-md-6 col-lg-4" v-for="project in project.data">
                <div class="card text-center">
                    <div class="card-header">
                        <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"> <img class=""
                                :src="getImagePath(project.cover_image)" alt=""> </router-link>
                    </div>
                    <div class="card-body">
                        <h4 class="text-center fw-bold">{{ project.title }}</h4>
                        <div class="technology">
                            <strong>Technology: </strong>
                            <div v-if="project.technologys.length > 0">
                                <span v-for="technologys in project.technologys">
                                    #{{ technologys.name }}
                                </span>
                            </div>
                            <div v-else>
                                <span>No tags.</span>
                            </div>
                        </div>
                        <p>
                            {{ project.body }}
                        </p>
                        <div class="container buttons justify-content-center  d-flex">
                            <a :href="project.link" class="button mx-2 l">Link</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div v-else>Ciao</div>


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

.code {
    width: 50%;
}

.card {
    margin: 10px;
    background-color: rgba(162, 190, 214, 1);
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 325px;
}

.card-header img {
    width: 100%;
    object-fit: cover;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

a {
    text-decoration: none;
}

.button {
    margin-left: 0 5rem;
    font-size: 1rem;
    color: #4db5ff;
    cursor: pointer;
    padding: 0.75rem 1.2rem;
    border: 1px solid #4db5ff;
    border-radius: 0.5rem;
    background: transparent;

}

.button:hover {
    color: rgba(162, 190, 214, 1);
    background-color: rgba(36, 70, 108, 1);
    border-color: rgba(36, 70, 108, 1);
}
</style>