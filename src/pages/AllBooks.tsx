/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
//import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import Books from "./Books";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { addToCart } from "../redux/features/cart/cartSlice";
import {  useEffect, useState } from "react";



const AllBooks = () => {


  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
const [searchTerm,setSearchTerm]=useState('')

console.log(searchTerm)

    // const dataSearch =filteredData?.filter((item:any)=>item?.toString()?.toLowerCase());

     const {data,isLoading,error,}=useGetBooksQuery(undefined,{refetchOnMountOrArgChange:true,pollingInterval:30000});
     
     const uniqueCategorySet = new Set(data?.data?.map((p:any) => p?.genre));
     console.log(uniqueCategorySet)
     const uniqueCategoryNames = Array.from(uniqueCategorySet);

  const uniqueCategorySet2 = new Set(data?.data?.map((p:any) => p?.
publicationdate));
     console.log(uniqueCategorySet2)
     const uniqueCategoryNames2 = Array.from(uniqueCategorySet2);



   const {user}= useAppSelector((state)=>state.user)
   console.log(user)
   console.log(error);
   console.log(isLoading);
   console.log(data?.data?.map((b:any)=>b));
const dispatch = useAppDispatch()
   const handleAddNew=(data:any)=>{
    dispatch((addToCart(data)))
    
   }

  const handleCheckboxChange = (categoryName: string) => {
  const index = selectedCategories.indexOf(categoryName);
  let newSelectedCategories: string[] = [];

  if (index === -1) {
    newSelectedCategories = [...selectedCategories, categoryName];
  } else {
    newSelectedCategories = selectedCategories.filter((name) => name !== categoryName);
  }

  setSelectedCategories(newSelectedCategories);
  let updatedFilteredData = [] as any;
  const productPriceRangeData = data?.data || []; // Initialize with all data
  
  if (newSelectedCategories.length > 0) {
    updatedFilteredData = data?.data?.filter((p: any) => {
      return newSelectedCategories.includes(p?.genre);
    });
  } else {
    updatedFilteredData = data?.data || []; // Show all if no category selected
  }
  updatedFilteredData = updatedFilteredData.filter((category: any) => {
    return productPriceRangeData.some((item: any) => item.genre === category.genre);
  });

  setFilteredData(updatedFilteredData);
  
};

useEffect(() => {
  if (selectedCategories.length === 0) {
    let updatedFilteredData = [];
      updatedFilteredData = data?.data || [];
    setFilteredData(updatedFilteredData);
  }
}, [data?.data, selectedCategories.length]);
const handleCheckboxChange2 = (categoryName: string) => {
  const index = selectedCategories.indexOf(categoryName);
  let newSelectedCategories: string[] = [];

  if (index === -1) {
    newSelectedCategories = [...selectedCategories, categoryName];
  } else {
    newSelectedCategories = selectedCategories.filter((name) => name !== categoryName);
  }

  setSelectedCategories(newSelectedCategories);
  let updatedFilteredData = [] as any;
  const productPriceRangeData = data?.data || []; // Initialize with all data
  
  if (newSelectedCategories.length > 0) {
    updatedFilteredData = data?.data?.filter((p: any) => {
      return newSelectedCategories.includes(p?.
publicationdate);
    });
  } else {
    updatedFilteredData = data?.data || []; // Show all if no category selected
  }
  updatedFilteredData = updatedFilteredData.filter((category: any) => {
    return productPriceRangeData.some((item: any) => item.
publicationdate === category.
publicationdate);
  });

  setFilteredData(updatedFilteredData);
  
};
  return (
    
 <div>
 <div style={{margin:"20px"}}>
  <h1 className="text-xl font-bold">Filter by Genre</h1>
   {uniqueCategoryNames?.map((categoryName:any, index) => (
          <label key={index} style={{ marginRight: '10px' }}>
            <input
              type="checkbox"
            
              checked={selectedCategories.includes(categoryName)}
               
              onChange={() => handleCheckboxChange(categoryName)}
            />
            {categoryName}
          </label>
        ))}
        </div>
{/* new filter */}
<div style={{margin:"20px"}}>
  <h1 className="text-xl font-bold">Filter by Publication Date</h1>
   {uniqueCategoryNames2?.map((categoryName:any, index) => (
          <label key={index} style={{ marginRight: '10px' }}>
            <input
              type="checkbox"
            
              checked={selectedCategories.includes(categoryName)}
               
              onChange={() => handleCheckboxChange2(categoryName)}
            />
            {categoryName}
          </label>
        ))}
        </div>
<div style={{margin:"20px"}}>
  <h1 className="text-xl font-bold">Search</h1>
 <input 
  id="searchInput"
  type="text" 
  placeholder="Search here..." 
  onChange={(e)=>{
    setSearchTerm(e.target.value)
  }} className="input input-bordered input-secondary w-full max-w-xs" />
  </div>

<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
  
    {
      filteredData.filter((books:any)=>{
        if(searchTerm ==""){
           return books;
        }else if(books.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return books
        }else if(books.author.toLowerCase().includes(searchTerm.toLowerCase())){
          return books
        }else if(books.genre.toLowerCase().includes(searchTerm.toLowerCase())){
          return books
        }
      })
      .map((books:any,i:any)=><div key={i}>

 <Books books={books}/>

  <Link to='/addbooks'>
        <button
          onClick={() => handleAddNew(books)}
          className="btn btn-primary"
          style={{ width: '100%' }} /* Adjust width as needed */
        >
          Add New
        </button>
      </Link>
</div> 

)
      }
  

</div>
</div>
 
 
  )
}

export default AllBooks


  
