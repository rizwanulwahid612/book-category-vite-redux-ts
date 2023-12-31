/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IBook } from "../types/globalTypes";
import toast from "react-hot-toast";
import { usePostBookMutation} from "../redux/features/books/booksApi";
import { useState } from "react";


const CreateBook = () => {
 
   
  const[postBook]=usePostBookMutation()
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
    postBook(data)
  toast.success("book is created")
  navigate("/")
  };

  return (
    
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 gap-4">
       <form className="card-body gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control gap-4">
          <label className="label">
            <span className="label-text">Create Book!</span>
          </label>
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input  id="title"
              placeholder="title"
              defaultValue={ ''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('title',{ required: 'Title is required' })}
               onChange={handleInputChange}
              className="input input-bordered" />
       {errors.title && <p>{errors.title.message}</p>}
        <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input  id="image"
              placeholder="image"
              defaultValue={ ''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('image',{ required: 'Image is required' })}
               onChange={handleInputChange}
              className="input input-bordered" />
       {errors.image && <p>{errors.image.message}</p>}
       <label className="label">
            <span className="label-text">Author</span>
          </label>
                 <input  id="author"
              placeholder="author"
              defaultValue={''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('author',{ required: 'Author is required' } )}
              onChange={handleInputChange}
              className="input input-bordered" />
       {errors.author && <p>{errors.author.message}</p>}
       <label className="label">
            <span className="label-text">Genre</span>
          </label>
                 <input  id="genre"
              placeholder="genre"
              defaultValue={''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('genre',{ required: 'Genre is required' })}
              onChange={handleInputChange}
               className="input input-bordered"/>
       {errors.genre && <p>{errors.genre.message}</p>}
       <label className="label">
            <span className="label-text">Publication Date</span>
          </label>
                 <input  id="publicationdate"
              placeholder="publicationdate"
               defaultValue={''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('publicationdate',{ required: 'Publication Date is required' })}
              
              onChange={handleInputChange}
               className="input input-bordered"/>
       {errors.publicationdate && <p>{errors.publicationdate.message}</p>}
        <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input  id="rating"
              placeholder="rating"
               defaultValue={''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('rating',{ required: 'Rating is required' })}
            
              onChange={handleInputChange}
               className="input input-bordered" />
       {errors.rating && <p>{errors.rating.message}</p>}
       
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" disabled={!formChanged}>Create</button>
        </div>
      </form>
      
      
    </div>
  </div>

  )
}

export default CreateBook