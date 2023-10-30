import { useState } from "react";

export default function RegisterPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);


  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    const handleRegistration = () => {
      if (!phoneNumber || !password || !confirmPassword) {
        alert('Заполните все поля');
        return;
      setRegistrationSuccess(true);
    };

    // Если все данные валидны, выполните регистрацию пользователя.
  };

  return (
    <div className="registration-page">
      <h2>Регистрация</h2>
      {registrationSuccess ? (
        <p>Вы зарегистрировались! Подтвердите номер телефона.</p>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
}
