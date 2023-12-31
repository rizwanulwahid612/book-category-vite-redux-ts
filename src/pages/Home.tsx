import { Link } from "react-router-dom"
import Carosol from "../components/ui/Carosol"
import Footer from "../layouts/Footer"
import { useGetBooksQuery } from "../redux/features/books/booksApi"
import { IBook } from "../types/globalTypes"
import Login from "./Login"
import { Key } from "react"


const Home = () => {
    const {data,isLoading,error,}=useGetBooksQuery(undefined,{refetchOnMountOrArgChange:true,pollingInterval:30000});
     console.log(data?.data.map((p:IBook)=>p))
     console.log(isLoading)
     console.log(error)
   
     return (
    <div>
        <Carosol/>
        <h1 className="text-5xl font-extrabold" style={{justifyContent:'center',textAlign:'center',margin:"50px"}}>Recently 10 Added Books</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">

{data?.data?.slice().reverse().slice(0, 10).map((books:IBook,i: Key | null | undefined)=><div key={i}>

  <div  className="card w-full bg-base-100 shadow-xl" >
     <Link to={`/book/${books?._id}`}>
    <div  className="card w-full h-96 bg-base-100 shadow-xl">
 <figure><img src={books?.image} alt="book" width={'full'}/></figure>
  <div className="card-body justify-center justify-items-center">
    <h2 className="card-title">
      Book
    </h2>
    <div style={{display:'flex'}} className="card-actions justify-between inline">
      <div style={{margin:'2px'}} className="badge badge-secondary text-xl ">{books?.title}</div> 
      <div style={{margin:'2px'}} className="badge badge text-xl"><p>Author:{}</p> {books?.author}</div>
      <div style={{margin:'2px'}} className="badge badge text-xl "><p>Genre:{}</p>{books?.genre}</div> 
      <div style={{margin:'2px'}}  className=" text-xl"><p>Publication Date:{}</p>{books?.publicationdate}</div>
       <div style={{margin:'2px'}} className="badge badge text-xl"><p>Rating:{}</p>{books?.rating}</div>
    </div>
  </div>

</div>
</Link>

</div>

 
</div> 

)}
</div>
<div style={{display:"flex",justifyContent:"center", alignItems:"center",margin:"40px"}}>
  <Link to="/allbooks"><button  className="btn btn-primary">See More</button></Link>

</div>

        <Login/>
        <Footer/>
    </div>
  )
}

export default Home