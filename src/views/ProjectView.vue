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
        }
    },

    prevPage(url) {
        console.log(url)
        this.getProject(url)
    },
    nextPage(url) {
        console.log(url)
        this.getProject(url)
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
                    <img class="card-image rounded-top" src="" alt="">
                    <h4>{{ project.title }}</h4>
                    <p>
                        {{ project.body }}
                    </p>
                    <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">Read
                        more</router-link>
                </div>



            </div>



            <div v-else>Ciao</div>
        </div>


        <!--
        <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
            <ul class="pagination    ">
                <li class="page-item" v-if="project.prev_page_url" @click="prevPage(project.prev_page_url)">
                    <a class="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                    project.current_page
                }}</a></li>

                <li class="page-item" v-if="project.next_page_url" @click="nextPage(project.next_page_url)">
                    <a class="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
        -->




    </section>
</template>

<style lang="scss" scoped>

</style>