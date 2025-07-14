import { useContext, useState, useEffect, useCallback } from "react";
import { fetchTasks, createTask, editTask, deleteTask } from "../services/api";
import { AuthContext } from "./AuthContext";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  // Явная функция загрузки задач!
  const reloadTasks = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchTasks({ token: user?.token });
      setTasks(data);
    } catch {
      setError("Ошибка загрузки задач");
      setTasks([]);
    }
    setLoading(false);
  }, [user?.token]);

  useEffect(() => {
    if (user?.token) {
      reloadTasks();
    } else {
      setTasks([]);
    }
  }, [user?.token, reloadTasks]);

  // Добавление задачи (вариант 1: пусть только добавляет)
  const addNewTask = async ({ title, topic, status, description, date }) => {
    setLoading(true);
    setError("");
    try {
      await createTask({
        token: user?.token,
        title,
        topic,
        status,
        description,
        date,
      });
      // После создания - перезагрузи задачи!
      await reloadTasks();
    } catch {
      setError("Ошибка добавления задачи");
    }
    setLoading(false);
  };

  // Редактирование задачи
  const updateTask = async ({
    id,
    title,
    topic,
    status,
    description,
    date,
  }) => {
    setLoading(true);
    setError("");
    try {
      await editTask({
        token: user?.token,
        id,
        title,
        topic,
        status,
        description,
        date,
      });
      // После редактирования - перезагрузи задачи!
      await reloadTasks();
    } catch {
      setError("Ошибка редактирования задачи");
    }
    setLoading(false);
  };

  // Удаление задачи
  const removeTask = async (id) => {
    setLoading(true);
    setError("");
    try {
      await deleteTask({
        token: user?.token,
        id,
      });
      // После удаления - перезагрузи задачи!
      await reloadTasks();
    } catch {
      setError("Ошибка удаления задачи");
    }
    setLoading(false);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        loading,
        error,
        addNewTask,
        updateTask,
        removeTask,
        fetchTasks: reloadTasks, // 🔥 Вот эту функцию обязательно пробрасывай!
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
