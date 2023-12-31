

import {  useAppSelector } from '../redux/hook';

export default function AddBooks() {
  //! Dummy data
  const {products}=useAppSelector((state)=>state.cart);
 // const dispatch = useAppDispatch()
  return (
    
        <div className="space-y-5">
         
          {products.map((product) => (
            <div
              className="border h-44 p-5 flex justify-between rounded-md"
              key={product.title}
            >
              <div className="border-r pr-5 shrink-0">
                <img src={product?.image} alt="" className="h-full w-96"  />
              </div>
              <div className="px-2 w-full flex flex-col gap-2">
                <h1 className="text-2xl self-center">{product?.title}</h1>
                  
            <div className="badge badge text-xl"><p>Author:{}</p> {product?.author}</div>
            <div className="badge badge text-xl "><p>Genre:{}</p>{product?.genre}</div> 
            <div className="badge badge text-xl"><p>Publication Date:{}</p>{product?.publicationdate}</div>
            <div className="badge badge text-xl"><p>Rating:{}</p>{product?.rating}</div>
               
              </div>
            
            </div>
          ))}
        </div>
  
  );
}
