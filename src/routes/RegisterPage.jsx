import { useState } from "react";

export default function RegisterPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegistration = () => {
    // Здесь вы можете добавить логику для отправки данных на сервер и регистрации пользователя.

    // Пример валидации полей:
    if (!phoneNumber || !password || !confirmPassword) {
      alert('Заполните все поля');
      return;
    }

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    // Если все данные валидны, выполните регистрацию пользователя.
  };

  return (
    <div className="registration-page">
      <h2>Регистрация</h2>
      <div className="form-group">
        <label>Номер телефона:</label>
        <input
          type="text"
          placeholder="+7 XXX XXX XX XX"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="form-group">
        <label>Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="form-group">
        <label>Подтверждение пароля:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <button onClick={handleRegistration}>Зарегистрироваться</button>
      <p>Уже есть аккаунт? <a href="/login">Войти</a></p>
    </div>)
}
