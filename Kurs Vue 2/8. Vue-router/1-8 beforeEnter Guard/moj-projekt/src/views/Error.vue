<template>
  <div class="error">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Błąd 404</h1>
    <p>Strona nie istnieje</p>
    <router-link to="/" tag="button" class="btn btn-primary">
      Wróć na stronę główną
    </router-link>
  </div>
</template>

<script>


export default {
  name: 'ErrView'
}
</script>
