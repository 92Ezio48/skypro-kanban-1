import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import PopBrowseComponent from "../components/PopBrowse";
import { fetchTaskById } from "../services/api";
import { useState, useEffect, useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { AuthContext } from "../context/AuthContext";

function PopBrowseModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { onTaskCreated } = useOutletContext() || {};
  const { tasks, fetchTasks } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let found = tasks.find((t) => t._id === id || t.id === id);
    if (found) {
      setTask(found);
      setLoading(false);
      return;
    }
    // Если не нашли — ищем в API
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

  if (loading) return <div>Загрузка...</div>;
  if (!task) return <div>Задача не найдена</div>;

  return (
    <PopBrowseComponent
      isOpen={true}
      task={task}
      onClose={() => navigate("/")}
      onTaskEdited={async () => {
        await fetchTasks?.();
        onTaskCreated?.();
      }}
      token={user?.token}
    />
  );
}

export default PopBrowseModal;
