<script>


export default {

    name: "HomeView",

} 
</script>

<template>
    <!--home section-->
    <div class="container mt-3">
        <div class="row">
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
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.container {
    color: white;
}
</style>