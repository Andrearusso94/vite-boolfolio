<script>
export default {
    name: 'AppNav'
}
</script>

<template>
    <nav class="navbar navbar-expand-sm position-sticky navbar-dark border-bottom">
        <div class="container">
            <a class="navbar-brand" href="/">Navbar</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
                aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" :to="{ name: 'home' }" aria-current="page">Home <span
                                class="visually-hidden">(current)</span></RouterLink>
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
    border-color: #1f1f38;
    z-index: 100;
    top: 0;
    left: 0;

}

a:hover {
    border-radius: 4rem;
    background-color: #696973;

}
</style>