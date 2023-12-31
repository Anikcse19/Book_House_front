import { useNavigate } from "react-router-dom";
import { BookInterface } from "../types/bookType";

const BookCard = ({ book }: { book: BookInterface }) => {
  const navigate = useNavigate();
  return (
    <div className="card border border-purple-700  flex flex-col items-center rounded-md">
      <div
        onClick={() => navigate(`/book/${book._id}`)}
        className="w-[200px] h-[300px] flex  items-center  p-2 cursor-pointer">
        <img className="w-[100%]" src={book?.image} alt="" />
      </div>
      <div className="p-3">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold">{book?.title}</h1>
          <span>Autor: {book?.author}</span>
          <span>Genre: {book.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
