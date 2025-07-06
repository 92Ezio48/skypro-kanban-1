import { useNavigate, useParams } from "react-router-dom";
import PopBrowseComponent from "../components/PopBrowse";
import { cardList } from "../CardData";

function PopBrowseModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = cardList.find((t) => String(t.id) === String(id));

  if (!task) return null;

  return (
    <PopBrowseComponent
      isOpen={true}
      task={task}
      onClose={() => navigate("/")}
    />
  );
}

export default PopBrowseModal;
