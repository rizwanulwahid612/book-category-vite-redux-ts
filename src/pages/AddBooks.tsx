/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from 'react-router-dom';
//import { addToCart, removeFromCart, removeOne } from '../redux/features/cart/cartSlice';
//import { useAppDispatch } from '../redux/hook';
import { useGetaddnewQuery } from '../redux/features/books/booksApi';
import { useAppSelector } from '../redux/hook';

export default function AddBooks() {
  
  const {user}:any=useAppSelector(state=>state.user)
  const {data,isLoading,error,}=useGetaddnewQuery(undefined,{refetchOnMountOrArgChange:true,pollingInterval:30000});
  
  
  console.log(data?.data)
  console.log(isLoading)
  console.log(error)
  //const {products}=useAppSelector((state)=>state.cart);
  //const dispatch = useAppDispatch()
  const newaddbookget= data?.data?.filter((nab:any)=>{
    if(nab?.user===user?.email){
      return nab
    }

  })
  console.log(newaddbookget?.map((u:any)=>u))
  return (
    
        <div className="space-y-5">
         <h1 style={{alignItems:'center',display:'flex',justifyContent:'center'}} className='text-3xl'>Please click the card for Edit And Delete</h1>
          {newaddbookget?.map((product:any) => (
            <Link to= {`/addbookdetails/${product?._id}`}>
            <div
              className="border h-44 p-5 flex justify-between rounded-md"
              key={product.title}
            >
              <div className="border-r pr-5 shrink-0 w-96">
                <img src={product?.image} alt="" className="h-full" />

              </div>
        <div style={{justifyContent:"center"}} className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
      <div className="badge badge-secondary text-xl ">{product?.title}</div> 
      <div className=" text-xl"><p>Author:{}</p> {product?.author}</div>
      <div className=" text-xl "><p>Genre:{}</p>{product?.genre}</div> 
      <div className=" text-xl"><p>Publication Date:{}</p>{product?.publicationdate}</div>
       <div className=" text-xl"><p>Rating:{}</p>{product?.rating}</div>
    </div>
              {/* <div className="px-2 w-full flex flex-col gap-3">
                <h1 className="text-2xl self-center">{product?.title}</h1>
                <p>Quantity: {product.quantity}</p>
               
              </div> */}
              {/* <div className="border-l pl-5 flex flex-col justify-between">
                <button onClick={()=>dispatch(addToCart(product))}>
                  plus +
                </button>
                <button onClick={()=>dispatch(removeOne(product))}>
                  minus -
                </button>
                <button onClick={()=>dispatch(removeFromCart(product))}
                  
                  className="bg-red-500 hover:bg-red-400"
                >
                  delete
                </button>
              </div> */}
            </div>
            </Link>
          ))}
        </div>
  
  );
}
