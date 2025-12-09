import { useNavigate } from "react-router-dom";

export const Back = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="py-2 rounded underline text-blue-600 hover:text-blue-600/60 mb-4 cursor-pointer"
    >
      Back
    </button>
  );
};
