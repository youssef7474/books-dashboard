import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "./Sidebar.css"
import { AiFillHome } from 'react-icons/ai';
import { BiBookBookmark, BiCategory, BiLogOut } from 'react-icons/bi'

import { PiChalkboardTeacherBold } from 'react-icons/pi'
//import {LiaChalkboardTeacherSolid} from "react-icons/li"
//import { logout } from '../../state/BooksSlice';
import { useDispatch } from 'react-redux';
import { logoutfunction } from '../../state/BooksSlice';

const Sidebar = () => {

    const dispatch=useDispatch()
    const navigate = useNavigate();

const logout=()=>{
    dispatch(logoutfunction()).then((result)=>
    {
      console.log(result.meta.requestStatus)
      
      if(result.meta.requestStatus==='fulfilled'){
        navigate("/")
      }
    })
}
   /*
     <li>
           
            <Link to={"/admin/categories/AddBook"} style={{textDecoration:"none",color:"black",fontSize:"20px"}}>
                <div style={{display:"flex",alignItems:"",justifyContent:"end"}}>
                     <p> اضافه كتاب جديد</p>
                    <i>
                    <BiBookBookmark  style={{fontSize:"30px", marginLeft:"5px",color:"green"}}></BiBookBookmark>
                    </i>
                </div>
            </Link>

        </li>
        */

  return (
    <div>
    <div>
    <div className="sidebar " style={{position:"relative",backgroundColor:"white",minHeight:"100vh",padding:"20px"}}>
    <h3 className=" txt-c" style={{position:"relative",marginTop:"0px"}}>
        <BiBookBookmark style={{color:"green" ,fontSize:"40px",marginBottom:"50px"}}></BiBookBookmark>
    </h3>
    <ul>
        <li>
            
                <Link to={"home"} style={{textDecoration:"none",color:"black",fontSize:"20px" }}>
                    <div style={{display:"flex",alignItems:"",justifyContent:"end"}}>
                        <p>القائمة الرئيسية</p>
                        <i>
                            <AiFillHome style={{fontSize:"30px", marginLeft:"5px",color:"green"}}></AiFillHome>
                        </i>
                        
                    </div>
                </Link>
            
        </li>

        <li>
           
                    <Link to={"categories"} style={{textDecoration:"none",color:"black",fontSize:"20px"}}>
                        <div style={{display:"flex",alignItems:"",justifyContent:"end"}}>
                            <p>كل الفئات</p>
                            <i>
                            <BiCategory style={{fontSize:"30px", marginLeft:"5px",color:"green"}}></BiCategory>
                            </i>
                        </div>
                    </Link>
           
        </li>

      

        <li>
            
            <Link to={"/admin/Allteacherspage"} style={{textDecoration:"none",color:"black",fontSize:"20px" }}>
                <div style={{display:"flex",alignItems:"",justifyContent:"end"}}>
                    <p> كل المعلمين</p>
                    <i>
                        <PiChalkboardTeacherBold style={{fontSize:"30px", marginLeft:"5px",color:"green"}}></PiChalkboardTeacherBold>
                    </i>
                
                </div>
            </Link>
    
        </li>




        <li onClick={logout}>
            <NavLink >
                <div style={{display:"flex",alignItems:"",justifyContent:"end" ,color:"black" ,fontSize:"20px"}}>
                    <p> تسجيل الخروج</p>
                    <i>
                        <BiLogOut style={{fontSize:"30px", marginLeft:"5px",color:"green"}}></BiLogOut>
                    </i>
                </div>
            </NavLink>
        </li>
    
       
    
    </ul>
</div>
    </div>
    </div>
  );
}

export default Sidebar;
