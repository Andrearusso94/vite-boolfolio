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
    background-color: rgba(36, 70, 108, 1);
    color: white;
    font-family: 'Noto Serif TC', serif;
    font-family: 'Old Standard TT', serif;
    font-family: 'Roboto Mono', monospace;
}
</style>