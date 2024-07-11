import { useState } from "react";
import { Link } from "react-router-dom"; 
const Title=()=>
    (<a href="/" style={{ textDecoration: 'none' ,color:"salmon", border:"2px solid salmon", borderRadius:"15px",marginLeft:"10px"}}><h2 id="hi" key="hi">ApnaKitchen</h2></a>);


  const HeaderComponent=()=>{
     const [isLogin,setLogin]=useState(true);
     return(
       <div className="header">
         <Title/>
         <div className="nav-items">
           <ul>
            <li><Link to="/"  >Home</Link></li>
            <li> <Link to="/about">About</Link></li>
             <li><Link to="/contact">Contact</Link></li>
             <li><Link to="/cart">Cart 🛒</Link></li>
           </ul></div>
           {
            // js expression and statement
            (isLogin)? <button className="btnl LogOut" onClick={()=>setLogin(false)}>LogOut</button>:<button className="btnl Login" onClick={()=>setLogin(true)}>Login</button>
           }
           
         
       </div>
     );
   }
   export default HeaderComponent;