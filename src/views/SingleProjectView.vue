<script>
import axios from 'axios';

import AppBanner from '../components/AppBanner.vue';
export default {
    name: 'SingleProjectView',
    components: { AppBanner },
    data() {
        return {
            project: null,
            api_base_url: 'http://127.0.0.1:8000',
            loading: true,
        }
    },
    mounted() {
        //console.log(this.$route.params.slug);
        const url = this.api_base_url + '/api/project/' + this.$route.params.slug
        console.log(url);
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    this.project = response.data.project
                    this.loading = false
                } else {
                    /*404*/
                }
                console.log(response);
            }).catch(error => {
                console.log(error)
            })
    }

}
</script>

<template>
    <AppBanner :title="$route.params.slug"></AppBanner>
    <div class="container" v-if="!loading">
        <h1>{{ project.title }}</h1>
        <h2>{{ project.body }}</h2>

    </div>
    <div v-else> no project</div>
</template>

<style lang="scss" scoped>

</style>