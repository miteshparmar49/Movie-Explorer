<template>
  <div id="app">
    <Navbar />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
/* top-level minimal layout */
#app {
  font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  color: #111827;
  background: #f8fafc;
  min-height: 100vh;
}
.container {
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
  margin-bottom: 0;
  padding-bottom: 30px;
}
</style>
