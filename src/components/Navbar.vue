<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">🎬 Movie Explorer</router-link>
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/">Search</router-link>
      </li>
      <li>
        <router-link to="/favorites">Favorites</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111;
  color: #fff;
  padding: 1rem 2rem;
}
@media (max-width: 500px) {
  .navbar {
  padding: 1rem 1rem;
}
}
.navbar .logo a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
