import React,{Component}  from "react";
import Blog from "./blog";
import Hazem from "./hazem";
import './App.css' 
var i=3;

class App extends Component{

  state = {
    items:[
{

name:'html'
,id:1
}
,{
name:'css',
id:2
},
{
name:'java script',
id:3
}
    ],
    current:''
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  
  
  

  
  handleSubmit=(e)=>
  {
    e.preventDefault();

  this.Addd(this.state);
  
  
  }
  
  Addd = (item)=>{
    i++;
      let items = this.state.items;
      
      items.push(item);
      item.id=i;
      this.setState({
      items
      })
        }


  DeleteItem=(id)=>{
    let items=this.state.items.filter(item=>{
            return(
              item.id!==id
              )
              })
              this.setState({
 items             
})
        }
        
CompEdit=(e)=>{



this.setState({
  [e.target.id]:e.target.value

})
e.preventDefault();


}
  
        

  render()
  {


    return(
<div className="App">
  Add Courses
  <Hazem   handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
  <Blog handleChange={this.handleChange} handleSubmit={this.handleSubmit} items={this.state.items}  DeleteItem={this.DeleteItem}   CompEdit={this.CompEdit}/>

</div>
    );
  }
}
export default App;