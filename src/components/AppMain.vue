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
                    <h4>{{ project.title }}</h4>
                </div>

            </div>
            <div v-else>Ciao</div>
        </div>
    </section>

</template>



<style lang="scss">
@use '../styles/general.scss';
</style>
