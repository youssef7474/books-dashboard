import React, { useState } from 'react';
import { BiBookBookmark} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css"
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from  "../../state/BooksSlice"
const LoginForm = () => {



    
    const navigate=useNavigate()
   

    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const dispatch =useDispatch();


    const {loading,error} = useSelector((state)=>state.Books)
      
    
    const navgateAdmin=(e)=>{
      e.preventDefault();
      let userdata={
        email,password
      }
      dispatch(loginUser(userdata)).then((result)=>
      {
        console.log(result.meta.requestStatus)
        
        if(result.meta.requestStatus==='fulfilled'){
          setemail('')
          setpassword('')
          navigate("/admin/home")
        }
      })
  }


  return (
    <div className="login-page page">
    <div className="contanier">
      <h1 className="title" style={{color:"black"}}>
        OCEAN FOR PUBLISHING
        <BiBookBookmark style={{color:"green" ,fontSize:"50px",marginBottom:"10px",}}></BiBookBookmark>
      </h1>
      <form onSubmit={navgateAdmin} >
        <input style={{marginTop:"100px"}} type="email" placeholder="My Email" id="email" value={email} onChange={(e)=>setemail(e.target.value)}></input>
        <input type="password" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)} ></input>
        <input  type="submit" value={loading?'loading..':"login"} ></input>
        {error&&(
          <div className='alert alert-danger' role='alert' >incorrect email or password</div>
        )}
      </form>
    </div>
  </div>
  );
}

export default LoginForm;
