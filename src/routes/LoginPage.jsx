import React from "react";

export default function LoginPage() {
  return (
    <div className="login-page">
      <h2>Вход</h2>
      {/* Добавьте поля ввода и логику для входа пользователя */}
      {/* Например: */}
      <div className="form-group">
        <label>Номер телефона:</label>
        <input type="text" placeholder="+7 XXX XXX XX XX" />
      </div>
      <div className="form-group">
        <label>Пароль:</label>
        <input type="password" />
      </div>
      <button>Войти</button>
      <p>Нет аккаунта? <a href="/registration">Зарегистрироваться</a></p>
    </div>
  );
}