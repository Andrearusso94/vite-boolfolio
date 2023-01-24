<script>
import axios from 'axios';
export default {
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
    <section class="vue-home">
        <div class="container">
            <div class="row row-cols-md-2 row-cols-lg-3" v-if="project">
                <div class="col" v-for="project in project.data">
                    <div class="card text-center">
                        <div class="card-header">
                            <img class="" :src="getImagePath(project.cover_image)" alt="">
                        </div>
                        <div class="card-body">
                            <h4>{{ project.title }}</h4>
                            <div class="technology">
                                <strong>Technology: </strong>
                                <template v-if="project.technologys.lenght > 0">
                                    <span v-for="technologys in project.technologys">
                                        #{{ technologys.name }}
                                    </span>
                                </template>
                                <template v-else>
                                    <span>No tags.</span>
                                </template>
                            </div>
                            <p>
                                {{ project.body }}
                            </p>
                            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">Read
                                more</router-link> <span>or visit <a href="{{ $project.link }}">App</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>Ciao</div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.card {
    margin: 10px;
    background-color: black;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 300px;
}

.card-header img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
</style>