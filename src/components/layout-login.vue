<template>
  <div class="auth-content">
    <div class="content-presentation">
      <span class="logo">WRDS</span>
    </div>
    <div class="content-login">
      <div class="login-form">
        <h1>Wrds вход</h1>
        <p>Используйте свой логин и праоль для входа в систему либо зарегистрируйтесь</p>
        <form action="">
          <div class="row">
            <input type="text" placeholder="Имя пользователя" name="username" required>
            <input type="password" placeholder="Пароль" name="password" required>
          </div>
          <div class="row">
            <button type="submit">Вход</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  
</style>