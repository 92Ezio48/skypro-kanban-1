import axios from "axios";

export const API_URL = "https://wedev-api.sky.pro/api/kanban";
// Получение задач
export async function fetchTasks({ token }) {
  try {
    // Искусственная задержка (1.5 сек)
    await new Promise((res) => setTimeout(res, 1500));

    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.tasks;

    // когда работаем с axios, не забываем, что результат лежит в ключе data
  } catch (error) {
    throw new Error(error.message);
  }
}
// Получение одной задачи по id
export async function fetchTaskById({ token, _id }) {
  try {
    const response = await axios.get(`${API_URL}/${_id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    // Обычно в ответе приходит { task: {...} }
    return response.data.task;
  } catch (error) {
    throw new Error(error.message);
  }
}
// Добавить задачу в список
export async function createTask({
  token,
  title,
  topic,
  status,
  description,
  date,
}) {
  try {
    const response = await axios.post(
      API_URL, // Адрес: https://wedev-api.sky.pro/api/kanban
      {
        title,
        topic,
        status,
        description,
        date,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "",
        },
      }
    );
    // Сервер возвращает { tasks: [...] }
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}
// Редактировать задачу
export async function editTask({
  token,
  id,
  title,
  topic,
  status,
  description,
  date,
}) {
  try {
    const response = await axios.put(
      `${API_URL}/${id}`,
      {
        title,
        topic,
        status,
        description,
        date,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "", // Можно оставить пустым для axios
        },
      }
    );
    // Сервер возвращает { tasks: [...] }
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}
// Удалить задачу
export async function deleteTask({ token, id }) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "", // можно оставить пустым для axios
      },
    });
    // Сервер возвращает { tasks: [...] }
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}
// Получить список пользователей
export async function getAllUsers() {
  try {
    const response = await axios.get("https://wedev-api.sky.pro/api/user");
    // Сервер возвращает объект { users: [...] }
    return response.data.users;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Ошибка при получении пользователей"
    );
  }
}
// Зарегистрироваться
export async function registerUser({ login, name, password }) {
  try {
    const response = await axios.post(
      "https://wedev-api.sky.pro/api/user",
      {
        login,
        name,
        password,
      },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    // Сервер возвращает объект { user: { ... } }
    return response.data.user;
  } catch (error) {
    throw new Error(
      error.response?.data?.error ||
        error.response?.data?.message ||
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
    );
  }
}
// Авторизироваться
export async function loginUser({ login, password }) {
  try {
    const response = await axios.post(
      "https://wedev-api.sky.pro/api/user/login",
      { login, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    // Сервер возвращает { user: { ... } }
    return response.data.user;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
    );
  }
}
