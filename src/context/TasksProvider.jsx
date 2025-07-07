import { useContext, useState, useEffect } from "react";
import { fetchTasks, createTask, editTask, deleteTask } from "../services/api";
import { AuthContext } from "./AuthContext";
import { TasksContext } from "./TasksContext"; // путь к твоему TasksContext

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadTasks = async () => {
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
    };
    if (user?.token) {
      loadTasks();
    } else {
      setTasks([]);
    }
  }, [user?.token]);

  // Добавление задачи
  const addNewTask = async ({ title, topic, status, description, date }) => {
    setLoading(true);
    setError("");
    try {
      const newTasks = await createTask({
        token: user?.token,
        title,
        topic,
        status,
        description,
        date,
      });
      setTasks(newTasks);
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
      const newTasks = await editTask({
        token: user?.token,
        id,
        title,
        topic,
        status,
        description,
        date,
      });
      setTasks(newTasks);
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
      const newTasks = await deleteTask({
        token: user?.token,
        id,
      });
      setTasks(newTasks);
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
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
