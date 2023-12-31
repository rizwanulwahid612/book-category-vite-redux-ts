/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { IBook } from "../types/globalTypes";
import toast from "react-hot-toast";
import { useEditbookMutation, useGetAddBookbyIdQuery, } from "../redux/features/books/booksApi";
import { useState } from "react";


const EditBooks = () => {
  const { id } = useParams();
  const {data:book,isLoading,error} = useGetAddBookbyIdQuery(id,{refetchOnMountOrArgChange:true,pollingInterval:30000});
  console.log(isLoading)
  console.log(error)
  console.log(book)
   
  const[editbook]=useEditbookMutation()
  const navigate =useNavigate()
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBook>();
  const [formChanged, setFormChanged] = useState(false);
 const handleInputChange = () => {
    // Set formChanged to true when any input changes
    setFormChanged(true);
  };
  const onSubmit =async (data: IBook) => {
    
  try {
          if (!formChanged) {
        return;
      }

      await editbook({ id:id, data }).unwrap();
      navigate(`/addbookdetails/${id}`)
      toast.success("Book Successfully Updated!");
      
    } catch (error: any) {
      console.error(error.message);
      toast.error("Book did not Updated!")
    }

  };

  return (
    
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 gap-4">
       <form className="card-body gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control gap-4">
          <label className="label">
            <span className="label-text">Edit Book!</span>
          </label>
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input  id="title"
              placeholder="title"
              defaultValue={book?.title || ''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('title')}
               onChange={handleInputChange}
              className="input input-bordered" />
       {errors.title && <p>{errors.title.message}</p>}
       <label className="label">
            <span className="label-text">Author</span>
          </label>
                 <input  id="author"
              placeholder="author"
              defaultValue={book?.author || ''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('author', )}
              onChange={handleInputChange}
              className="input input-bordered" />
       {errors.author && <p>{errors.author.message}</p>}
       <label className="label">
            <span className="label-text">Genre</span>
          </label>
                 <input  id="genre"
              placeholder="genre"
              defaultValue={book?.genre || ''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('genre',)}
              onChange={handleInputChange}
               className="input input-bordered"/>
       {errors.genre && <p>{errors.genre.message}</p>}
       <label className="label">
            <span className="label-text">Publication Date</span>
          </label>
                 <input  id="publicationdate"
              placeholder="publicationdate"
               defaultValue={book?.publicationdate || ''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('publicationdate')}
              onChange={handleInputChange}
               className="input input-bordered"/>
       {errors.publicationdate && <p>{errors.publicationdate.message}</p>}
        <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input  id="rating"
              placeholder="rating"
               defaultValue={book?.rating || ''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('rating')}
              onChange={handleInputChange}
               className="input input-bordered"/>
       {errors.rating && <p>{errors.rating.message}</p>}
       
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" disabled={!formChanged}>Send</button>
        </div>
      </form>
      
      
    </div>
  </div>

  )
}

export default EditBooks