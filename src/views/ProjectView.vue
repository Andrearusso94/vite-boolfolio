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
            <div class="row" v-if="project">
                <div class="col" v-for="project in project.data">
                    <div class="card">
                        <div class="card-header">
                            <img class="card-image rounded-top" :src="getImagePath(project.cover_image)" alt="">
                        </div>
                        <div class="card-body">
                            <h4>{{ project.title }}</h4>
                            <p>
                                {{ project.body }}
                            </p>
                            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">Read
                                more</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>Ciao</div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>