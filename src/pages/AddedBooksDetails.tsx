/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useDeleteBookMutation, useGetAddBookbyIdQuery, useGetReviewQuery, useGetUsersQuery, usePostReviewMutation} from "../redux/features/books/booksApi"
import { Link, useNavigate, useParams } from "react-router-dom";
//import { useState } from "react";
//import { useAppSelector } from "../redux/hook";
import toast from "react-hot-toast";
import { useAppSelector } from "../redux/hook";
interface ReviewFormInputs {
  text: string;

}

const AddedBooksDetails = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ReviewFormInputs>();

  const { id } = useParams();
 
 const {user}:any=useAppSelector(state=>state.user)
 const {data:users}=useGetUsersQuery(undefined,{refetchOnMountOrArgChange:true,pollingInterval:30000});
 console.log(users)
 console.log(user)
 const {data:revires}=useGetReviewQuery(id,{refetchOnMountOrArgChange:true,pollingInterval:30000});
 const [postReview,{isSuccess}]=usePostReviewMutation();
 console.log(revires)
 
 
 
 
 const {data:book,isLoading,error} = useGetAddBookbyIdQuery(id,{refetchOnMountOrArgChange:true,pollingInterval:30000});
console.log(book)

   const onSubmit = (datas: ReviewFormInputs) => {
    console.log(datas.text);
    const options={
      id:id,
      data:{
        review:datas.text,
      },
    }
      if(user?.email){
    postReview(options)

    console.log(options)
    toast.success('Review send successfully')
    reset()
      }else{
        navigate("/login")
      }
   
  };
 
console.log(isLoading);
console.log(error);
console.log(book)
console.log(isSuccess)

 const [deleteBook] = useDeleteBookMutation(book?.title)

const navigate =useNavigate()
const handleDeleteBook=(data: any)=>{

  if(user?.email){
   deleteBook(data)
   console.log(data)
   navigate('/addbooks')
   toast.success("Book has deleted successfully")
  }else{
    toast.error("Please login")
  navigate('/login')
  
  }

   }
  // const handleEditBook=(data: any)=>{
  //   console.log(data)
    
  //  }
   
  return (
    <div style={{display:'flex'} }>
    <div className="card card-side w-1/2 h-auto bg-base-100 shadow-xl grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
  <figure><img src={book?.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New book is released!</h2>
    <div>
      <div className="badge badge-secondary text-xl ">{book?.title}</div> 
      <div className="badge badge text-xl"><p>Author:{}</p> {book?.author}</div>
      <div className="badge badge text-xl "><p>Genre:{}</p>{book?.genre}</div> 
      <div className="badge badge text-xl"><p>Publication Date:{}</p>{book?.publicationdate}</div>
       <div className="badge badge text-xl"><p>Rating:{}</p>{book?.rating}</div>
    </div>
    <Link to={`/editbook/${book?._id}`}>
    <button style={{width:'100%'}} className="btn btn-primary">Edit Book</button>
    </Link>

    <label htmlFor="my_modal_6" className="btn btn-warning">Delete Book</label>
{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
       <label htmlFor="my_modal_6" onClick={()=>handleDeleteBook(book?._id)} className="btn btn-error">Delete Book</label>
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>

      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review Please!</span>
          </label>

          <input  id="text"
              placeholder="Write Your Review"
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('text', { required: 'Review is required' })} className="input input-bordered" required />
       {errors.text && <p>{errors.text.message}</p>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
    
  </div>
   <div className="card card-side w-1/2 h-auto bg-base-100">
 
  <div className="card-body">
    <h2 className="card-title">Reviews</h2>
    <div>
       {revires?.reviews?.map((review:string, index:number) => (
          
          <div key={index} className="flex gap-3 items-center mb-5">
            <div>
<div className="card card-side w-96 h-1/2 bg-base-100 shadow-xl">


  <div className="avatar">
  <div className="w-8 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>

  {/* <p>{user.email}</p> */}
    </div>




    <div>
<div className="badge badge-secondary text-xl ">{book?.title}</div>
  <p>{review}</p>
</div>
  
            </div>
          </div>
        ))}
    </div>
    </div>
  </div>
  </div>
  )
}

export default AddedBooksDetails