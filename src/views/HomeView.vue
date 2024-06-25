<template>
  <div class="container">
    <div class="sidebar">
      <p>Сайт-портфолио WEB-разработчика</p>
      <h1>Hello, world!</h1>
      <a href="projects"><button>Проекты</button></a>
      <button>Бесполезная кнопка</button>
    </div>
    <div class="text-container">
      <span v-for="(char, index) in textWithSpaces" :key="index" class="animated-letter">{{ char }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      text: '<img height="400px" width="300px" loading="lazy" decoding="async" src="foto.jpg" alt="фото замечательного человека" / >', 
    };
  },
  computed: {
    textWithSpaces() {
      let chars = this.text.split('');
      return chars.map(char => char === ' ' ? '\u00A0' : char);
    }
  },
  mounted() {
    this.animateText();
  },
  methods: {
    animateText() {
      const letters = this.$el.querySelectorAll('.animated-letter'); 
      letters.forEach(letter => {
        letter.style.opacity = 0;
        letter.style.transform = 'translateY(20px)';
      });
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.style.transition = 'opacity 0.1 ease, transform 0.3s ease';
          letter.style.opacity = 1;
          letter.style.transform = 'translateY(0)';
        }, index * 100); 
      });
    }
  }
};
</script>

<style scoped>
.container {
  
  max-width: 80%;
  margin: 200px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-container {
  color: rgba(51, 255, 234, 1);
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  width: 40%; 
}

.animated-letter {
  display: inline-block;
}

.sidebar {
  width: 40%; 
  padding: 20px;
}

.sidebar h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.sidebar p {
  margin-bottom: 10px;
}

.sidebar button {
  padding: 10px 20px;
  margin: 40px 40px 0px 0px;
  background-color: #2995DB;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sidebar button:hover {
  background-color: rgba(51, 255, 234, 0.8);
}
</style>
