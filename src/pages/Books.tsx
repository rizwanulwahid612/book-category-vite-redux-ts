import { Link } from "react-router-dom"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Books = ({books}:{books: any}) => {

  

  return (
    <div  className="card w-full bg-base-100 shadow-xl" >
     <Link to={`/book/${books?._id}`}>
    <div  className="card w-full h-96 bg-base-100 shadow-xl">
 <figure><img src={books?.image} alt="book" width={'full'}/></figure>
  <div className="card-body justify-center justify-items-center">
    <h2 className="card-title">
      Book
    </h2>
    <div style={{display:'flex'}} className="card-actions justify-between inline">
      <div className="badge badge-secondary text-xl ">{books?.title}</div> 
      <div className="badge badge text-xl"><p>Author:{}</p> {books?.author}</div>
      <div className="badge badge text-xl "><p>Genre:{}</p>{books?.genre}</div> 
      <div className="badge badge text-xl"><p>Publication Date:{}</p>{books?.publicationdate}</div>
       <div className="badge badge text-xl"><p>Rating:{}</p>{books?.rating}</div>
    </div>
  </div>

</div>
</Link>

</div>
  )
}

export default Books