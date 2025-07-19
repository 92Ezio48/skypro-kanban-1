import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import PopBrowseComponent from "../components/PopBrowse";
import PopEditComponent from "../components/PopEdit";
import { fetchTaskById, deleteTask, editTask } from "../services/api";
import { useState, useEffect, useContext, useRef } from "react";
import { TasksContext } from "../context/TasksContext";
import { AuthContext } from "../context/AuthContext";

function PopBrowseModal({ isDarkTheme, setIsDarkTheme }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { onTaskCreated } = useOutletContext() || {};
  const { tasks, fetchTasks } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isEdit, setIsEdit] = useState(false);
  const [editLoading, setEditLoading] = useState(false); // индикатор загрузки во время сохранения

  // Флаг, чтобы не отображать контент после удаления
  const isDeleted = useRef(false);

  useEffect(() => {
    if (isDeleted.current) return; // Если удалено — отменяем вообще этот эффект

    let found = tasks.find((t) => t._id === id || t.id === id);
    if (found) {
      setTask(found);
      setLoading(false);
      return;
    }

    const loadTask = async () => {
      setLoading(true);
      try {
        const data = await fetchTaskById({ token: user?.token, _id: id });
        setTask(data);
      } catch {
        setTask(null);
      } finally {
        setLoading(false);
      }
    };

    if (user?.token) {
      loadTask();
    } else {
      setLoading(false);
      setTask(null);
    }
  }, [id, tasks, user?.token]);

  // Удаление задачи
  const handleDeleteTask = async () => {
    if (!user?.token) return;
    try {
      await deleteTask({ token: user.token, id: task._id });
      isDeleted.current = true; // Ставим флаг
      navigate("/"); // Навигация мгновенно
      fetchTasks?.(); // Просто обновляем список асинхронно (await не нужен)
      onTaskCreated?.();
    } catch (e) {
      alert("Ошибка при удалении: " + (e.message || e));
    }
  };

  // Сохранение изменений задачи
  const handleSaveEditedTask = async (editData) => {
    if (!user?.token) return;
    setEditLoading(true);
    try {
      await editTask({
        token: user.token,
        id: task._id,
        ...editData,
      });
      await fetchTasks?.();
      onTaskCreated?.();
      setIsEdit(false); // Возвращаемся в режим просмотра
    } catch (e) {
      alert("Ошибка при редактировании: " + (e.message || e));
    } finally {
      setEditLoading(false);
    }
  };

  // Мгновенно убираем контент, если задача удалена
  if (isDeleted.current) return null;
  if (loading) return <div>Загрузка...</div>;
  if (!task) return <div>Задача не найдена</div>;

  // === 1. Если редактирование - показываем форму редактирования ===
  if (isEdit) {
    return (
      <PopEditComponent
        task={task}
        loading={editLoading}
        onSave={handleSaveEditedTask}
        onCancel={() => setIsEdit(false)}
        onDelete={handleDeleteTask}
        onClose={() => navigate("/")}
        isDarkTheme={isDarkTheme} // Вот это добавь!
        setIsDarkTheme={setIsDarkTheme} // (если надо)
      />
    );
  }

  // === 2. Если не редактируем - показываем обычный PopBrowseComponent ===
  return (
    <PopBrowseComponent
      isOpen={true}
      task={task}
      onClose={() => navigate("/")}
      onEdit={() => setIsEdit(true)}
      onDelete={handleDeleteTask}
      isDarkTheme={isDarkTheme} // Вот это добавь!
      setIsDarkTheme={setIsDarkTheme} // (если надо)
      token={user?.token}
    />
  );
}

export default PopBrowseModal;
