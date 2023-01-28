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
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

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