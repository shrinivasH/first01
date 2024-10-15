import React from "react"
import  ReactDOM  from "react-dom/client"

const HeaderComponent = ()=>{
  return(<div id="container">
  <h1>Header</h1>
</div>)  
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderComponent/>)