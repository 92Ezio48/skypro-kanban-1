import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import PopBrowseComponent from "../components/PopBrowse";
import { fetchTaskById } from "../services/api";
import { useState, useEffect } from "react";
const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

function PopBrowseModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { onTaskCreated } = useOutletContext() || {}; // <-- всегда вызывай хук!

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTask = async () => {
      try {
        const data = await fetchTaskById({ token, _id: id });
        setTask(data);
      } catch {
        setTask(null);
      } finally {
        setLoading(false);
      }
    };
    loadTask();
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (!task) return <div>Задача не найдена</div>;

  return (
    <PopBrowseComponent
      isOpen={true}
      task={task}
      onClose={() => navigate("/")}
      onTaskEdited={onTaskCreated}
      token={token}
    />
  );
}

export default PopBrowseModal;
