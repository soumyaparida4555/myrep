import React from "react";
import ShimmerUi from "./ShimmerUi";



class UseClass extends React.Component{

    constructor(props)
    {
       super(props)

       this.state={
        info:{
            name:null
        }
       }

    }


  async componentDidMount()
  {
    
    const ftch=await fetch("https://api.github.com/users/soumyaparida4555");

    const jsn=await ftch.json();

    console.log(jsn);

   this.setState({
    info:jsn
   })


  }


  componentDidUpdate()
  {
    console.log("compononet update");
  }

  componentWillUnmount()
  {
    console.log("will unmount");
  }

    render()
    {

        if(this.state.info.name===null)
        {
            return <ShimmerUi/>
        }


        const {name,location}=this.state.info;
  return(
    <div>

    <h2>{name}</h2>
    <h3>{location}</h3>






    </div>









  )








    }








}


export default UseClass;