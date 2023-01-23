<script>
import AppNav from './components/AppNav.vue'

import AppMain from './components/AppMain.vue'
import AppBanner from './components/AppBanner.vue';
export default {
    components: {
        AppNav,
        AppMain,
        AppBanner
    },
}
</script>

<template>

    <AppNav></AppNav>
    <AppBanner></AppBanner>
    <RouterView></RouterView>

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
}
</style>