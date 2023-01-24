<script>
export default {
    name: 'ContactsView'
} 
</script>

<template>
    <div class="container">
        <h2 class="text-white text-center py-1">Contattami</h2>
        <form action="" method="post">

            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="inserisci il tuo nome"
                    aria-describedby="helpId">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" name="email" id="email" class="form-control" placeholder="la tua email"
                    aria-describedby="helpId">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Scrivimi</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>