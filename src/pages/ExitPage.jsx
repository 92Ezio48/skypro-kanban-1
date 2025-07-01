import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ExitPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Очистить данные пользователя (localStorage, куки и т.д.)
    localStorage.removeItem("token"); // или твой способ выхода
    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 5000); // Задержка 1000 мс = 1 секунда
    // Редирект на страницу входа
  }, [navigate]);

  return <div>Выход из аккаунта...</div>;
}

export default ExitPage;
