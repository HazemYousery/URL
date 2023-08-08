import React from "react";
import './App.css' 

const Hazem=(state)=>{
    
const{handleChange,handleSubmit}=state;
      
return(
<div className="hazem">     
       <form onSubmit={handleSubmit}> 
        <input type="text" placeholder="enter name"  id="name" onChange={handleChange}/>
    <input type="submit" placeholder="submit" />
        </form>

    </div>

)
}
export default Hazem;