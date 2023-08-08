import React  from "react";
import './App.css' 

const Blog=(state)=>{
const {items,DeleteItem,CompEdit,handleChange,handleSubmit}=state;

         
    const man = items.map(item=>{
      return(
<div key={item.id} className="man">
  
<div >
<input
  key = "searchBox"
  type = "text"
  defaultValue = {item.name}
  placeholder = "Search"
  onChange = {handleChange}
  onSubmit = {handleSubmit}
/>

  </div> 
    
     <button onClick={CompEdit}>Edit Course</button>
    
        
    <button onClick={()=>DeleteItem(item.id)}>Delete Item</button>
      </div>
       )

      })
  return(
<div key={items.id} >
  {man}
</div>
  )     

}
export default Blog;
