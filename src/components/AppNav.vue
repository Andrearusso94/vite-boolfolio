<script>
export default {
    name: 'AppNav'
}
</script>

<template>
    <!--top navbar-->
    <nav class="navbar navbar-expand-sm position-sticky navbar-dark border-bottom">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                Andrea Russo
            </a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
                aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <RouterLink href="#home" class="nav-link active" :to="{ name: 'home' }" aria-current="page">
                            Home<span class="visually-hidden"></span></RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active" :to="{ name: 'project' }">Project</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active" :to="{ name: 'about' }">About</RouterLink>

                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active" :to="{ name: 'contacts' }">Contacts</RouterLink>

                    </li>
                </ul>

            </div>
        </div>
    </nav>








</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.navbar {

    background-color: rgba(36, 70, 108, 1);
    z-index: 100;
    top: 0;
    left: 0;
    overflow: hidden;

}

a:hover {
    border-radius: 1rem;
    background-color: rgb(162, 190, 214);

}
</style>