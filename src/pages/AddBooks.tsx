
import { addToCart, removeFromCart, removeOne } from '../redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hook';

export default function AddBooks() {
  //! Dummy data
  const {products}=useAppSelector((state)=>state.cart);
  const dispatch = useAppDispatch()
  return (
    
        <div className="space-y-5">
         
          {products.map((product) => (
            <div
              className="border h-44 p-5 flex justify-between rounded-md"
              key={product.title}
            >
              <div className="border-r pr-5 shrink-0">
                <img src={product?.image} alt="" className="h-full" />
              </div>
              <div className="px-2 w-full flex flex-col gap-3">
                <h1 className="text-2xl self-center">{product?.title}</h1>
                <p>Quantity: {product.quantity}</p>
               
              </div>
              <div className="border-l pl-5 flex flex-col justify-between">
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
              </div>
            </div>
          ))}
        </div>
  
  );
}
