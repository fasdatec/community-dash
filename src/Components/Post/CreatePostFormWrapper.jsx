import { useParams } from "react-router-dom";
import FormPost from "../CreatePost/FormPost";  // <-- import correcto

const CreatePostFormWrapper = () => {
  const { social } = useParams(); // Obtiene parámetro :social de la URL

  return (
    <div>
      {/* Pasamos el parámetro socialMedia al componente FormPost */}
      <FormPost socialMedia={social} />
    </div>
  );
};

export default CreatePostFormWrapper;
