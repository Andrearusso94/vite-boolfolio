<script>
export default {
    name: 'AppFooter',

}
</script>

<template>



    <!--bottom navbar-->

    <section id="bottom-navbar" class="animate__animated animate__backInUp mt-3 position fixed">
        <div class="container text-center bottom-nav ">
            <div class="row row-cols-4">
                <div class="col">
                    <RouterLink href="#home" class="nav-link active" :to="{ name: 'home' }" aria-current="page">
                        <i class="fa-solid fa-house"></i>
                    </RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="nav-link active" :to="{ name: 'project' }"><i class="fa-solid fa-user"></i>
                    </RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="nav-link active" :to="{ name: 'about' }"><i class="fa-solid fa-code"></i>
                    </RouterLink>
                </div>
                <div class="col">
                    <RouterLink class="nav-link active" :to="{ name: 'contacts' }"><i class="fa-solid fa-rocket"></i>
                    </RouterLink>

                </div>
            </div>

        </div>
    </section>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

#bottom-navbar {
    width: 100%;
    height: 6rem;
    display: none;

}

.bottom-nav {
    height: 4rem;

    background-color: #151527;
    border-radius: 3rem;
    z-index: 100;
    align-items: center;
    position: relative;
    display: grid
}

.bottom-nav i {
    cursor: pointer;
    transition: all 4s ease-in-out;
    color: white;
}

@media only screen and (max-width:575px) {
    #bottom-navbar {
        display: block;
        margin: 0 auto;
    }

    .bottom-nav {
        padding: 0;

    }
}
</style>