<script>
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue';
export default {
    components: {
        AppNav,
        AppFooter
    },
}
</script>

<template>

    <AppNav></AppNav>

    <RouterView></RouterView>
    <AppFooter></AppFooter>
</template>

<style lang="scss">
@use './styles/general.scss';

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

body {
    background-color: #1f1f38;
    color: white;
}
</style>