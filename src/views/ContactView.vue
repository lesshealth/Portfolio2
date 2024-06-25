<template>
  <div class="container">
    <h1>Жду от вас весточки</h1>
    <div class="form-wrapper">
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Имя:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Сообщение:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
h1 {
  display: inline;
  border-bottom: 2px solid rgba(51, 255, 234, 1);
}
input{
  color:#fff
}
.container {
  max-width: 80%;
  margin: 100px auto;
}

.form-wrapper {
  margin-top: 20px;
}

.contact-form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: calc(100% - 12px);
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
  color:#fff
}

button {
  background-color: rgba(51, 255, 234, 1);
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: rgba(51, 255, 234, 0.8);
}
</style>
