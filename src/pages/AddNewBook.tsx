import { useEffect, useState } from "react";
import { usePostBookMutation } from "../redux/feature/book/bookApi";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useAppSelector } from "../redux/hook";

const AddNewBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [postBook, { isLoading, isError, isSuccess }] = usePostBookMutation();

  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setAuthor("");
      setGenre("");
      setImage("");
      toast.success("Add book successful");
    }
  }, [isSuccess]);

  const handleAddBook = () => {
    postBook({
      userId: user._id,
      title,
      author,
      genre,
      publicationDate: startDate,
      image,
    });
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }
  return (
    <div className="p-24 flex flex-col items-center bg-[#00aab3] w-[60%] mx-auto mb-3 rounded-mds">
      <h1 className="text-2xl font-bold mb-7">Add New Book</h1>
      <div className=" p-3 w-[100%]">
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center my-2">
            <label className="text-xl font-medium" htmlFor="title">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Write the book title"
              className="border border-blue-500 rounded-md outline-none px-3 py-2 w-[70%]"
              type="text"
              name="title"
              id=""
            />
          </div>
          <div className="flex justify-between items-center my-2">
            <label className="text-xl font-medium " htmlFor="author">
              Author
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Write the author name"
              className="border border-blue-500 rounded-md outline-none px-3 py-2 w-[70%]"
              type="text"
              name="author"
              id=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="flex justify-between items-center my-2">
            <label className="text-xl font-medium " htmlFor="genre">
              Genre
            </label>
            <input
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Write the genre "
              className="border border-blue-500 rounded-md outline-none px-3 py-2 w-[70%]"
              type="text"
              name="genre"
              id=""
            />
          </div>
          <div className="flex justify-between items-center my-2">
            <label className="text-xl font-medium mr-3" htmlFor="publication">
              Publication
            </label>
            <div className="w-[70%] border border-blue-500 rounded-md outline-none ">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                // renderYearContent={renderYearContent}
                className="w-full px-3 py-2 !outline-none border-none "
                showYearPicker
                dateFormat="yyyy"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center my-2">
            <label className="text-xl font-medium " htmlFor="image">
              Image
            </label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Provide img host link"
              className="border border-blue-500 rounded-md outline-none px-3 py-2 w-[70%]"
              type="text"
              name="image"
              id=""
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleAddBook}
        className="ml-[420px] bg-green-500 px-12 rounded-md text-white font-semibold py-2">
        Save
      </button>
    </div>
  );
};
export default AddNewBook;
