<template>
  <div class="container">
    <h1>Меня зовут Андрей</h1>
    <p>Привет! На сайте разместил информацию о себе и моих проектах в веб-дизайне, верстке. Основная цель — показать портфолио начинающего веб-разработчика. К созданию сайта-портфолио постарался подойти с долей креатива и местами юмора.

В прошлом профессиональный детский врач с 12-летним стажем, который нашел свое предназначение в мире IT. Мне нравиться работать с кодом, разбираться как построен процесс, его логику. Когда сидишь над задачей часами или днями, и потом получается и работает — это офигенное чувство. Поедая «большого цифрового слона» по кусочкам, все больше понимаю, насколько он «вкусный»).</p>
    <h1>Стек технологий</h1>

    <div class="cards">
      <div v-for="tech in technologies" :key="tech.id" class="card">
        <div class="card-border"></div>
        <div class="card-content">
          <img :src="tech.icon" :alt="tech.name" class="card-image">
          <h3>{{ tech.name }}</h3>
          <p>{{ tech.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      technologies: [
        {
          id: 1,
          name: 'HTML5',
          icon: 'https://syhanoff.ru/wp-content/uploads/html.svg',
          description: 'Каркас сайта, скелет. Делаем валидным и семантическим...'
        },
        {
          id: 2,
          name: 'CSS3',
          icon: 'https://syhanoff.ru/wp-content/uploads/css3.svg',
          description: 'Язык стилей, который постоянно развивается, совершенствуется...'
        },
        {
          id: 3,
          name: 'JavaScript',
          icon: 'https://syhanoff.ru/wp-content/uploads/javascript.svg',
          description: 'Язык программирования, благодаря которому можно «оживить» что угодно...'
        },
        {
          id: 4,
          name: 'Figma',
          icon: 'https://syhanoff.ru/wp-content/uploads/figma.svg',
          description: 'Инструмент веб-дизайнера для создания прототипов сайтов, интерфейсов приложений...'
        },
        {
          id: 5,
          name: 'WordPress',
          icon: 'https://syhanoff.ru/wp-content/uploads/wordpress.svg',
          description: 'Популярная CMS. Использую для создания панели управления, что позволяет управлять сайтом самостоятельно...'
        },
        {
          id: 6,
          name: 'Bootstrap',
          icon: 'https://syhanoff.ru/wp-content/uploads/bootstrap.svg',
          description: 'Фреймворк, включает в себя готовые шаблоны для создания сайтов и веб-приложений...'
        },
        {
          id: 7,
          name: 'DIVI',
          icon: 'https://syhanoff.ru/wp-content/uploads/divi.svg',
          description: 'Популярный, интуитивно понятный конструктор страниц на CMS WordPress с большим выбором дополнений...'
        },
        {
          id: 8,
          name: 'Parcel',
          icon: 'https://syhanoff.ru/wp-content/uploads/parcel.svg',
          description: 'Сборщик проектов. Можно использовать сразу «из коробки», с минимумом настроек...'
        }
      ]
    };
  }
};
</script>

<style scoped>
.container p{
  padding: 20px 0px;
}
.container {
  max-width: 80%;
  margin: 40px auto;
  text-align: center;
}
h1{
  display: inline;
  border-bottom: 2px solid rgba(51, 255, 234, 1);
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}
img{
  background-color: #1A302C; 
}
h3{
  background-color: #1A302C; 

}
.card {
  width: 300px;
  height: 300px;
  perspective: 1000px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid #1A302C;
  transition: transform 0.5s, background-color 0.3s; 
}

.card:hover {
  background-color: #1A302C; 
}
.card-content p{
  padding-top: 10px;
  background-color: #1A302C; 

}
.card-content {
  background-color: #1A302C; 
padding: 10px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.card:hover .card-content {
  opacity: 1;
}

.card-image {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>
