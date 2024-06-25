<template>
  <header>
    <div class="container">
      <menu>
        <nav><router-link to="/">Главная</router-link></nav>
        <nav><router-link to="/about">Про меня</router-link></nav>
        <nav><router-link to="/projects">Проекты</router-link></nav>
        <nav><router-link to="/contact">Контакты</router-link></nav>
      </menu>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style>
.container {
  max-width: 80%;
  margin: 0 auto;
}

menu {
  display: flex;
  justify-content: center;
}

nav {
  position: relative;
  font-size: 28px;
  padding: 20px;
}

nav a {
  position: relative;
  color: #fff;
  text-decoration: none;
  transition: color 0.6s ease; 
}

nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: rgba(51, 255, 234, 1);
  transition: width 0.6s ease, background-color 0.6s ease;
  transform: translateX(-50%);

}


nav a:hover::before {
  width: 100%; 
}

nav a:hover {
  color: rgba(51, 255, 234, 1); 
}
</style>
