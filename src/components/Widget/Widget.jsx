import React from 'react';
import {BiBookBookmark, BiCategory} from "react-icons/bi"
import "./Widget.css"
import { useSelector } from 'react-redux';

const Widget = ({type}) => {

    let data;


    const {books,categories,subcatigory} = useSelector((state)=>state.Books)
    var booksnumber
    var catigoresnumber
    var subcatigoriesnumber
    if(books!=null){
        booksnumber=books.length
        catigoresnumber=categories.length
        subcatigoriesnumber=subcatigory.length
    }
    



    switch(type)
    {
        case"Books":
            data={
                title:"عدد الكتب",
                counter:booksnumber,
                icon:<BiBookBookmark style={{marginLeft:"5px",fontSize:"50px" ,color:"green"}}></BiBookBookmark>
            };
            break;
            case"categories":
            data={
                title:"كل الفئات",
                counter:catigoresnumber,
                icon:<BiCategory style={{marginLeft:"5px",fontSize:"50px",color:"green"}}></BiCategory>
            };
            break;
            case"subcategory":
            data={
                title:"كل الفئات الفرعيه",
                counter:subcatigoriesnumber,
                icon:<BiCategory style={{marginLeft:"5px",fontSize:"50px",color:"green"}}></BiCategory>
            };
            break;
        default:
            break;
            
    }






  return (
    



    








    <div className='widget ' style={{borderRadius:"6px",backgroundColor:"white",padding:"20px"}}>
    <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.counter}</span>
    </div>
    <div className='right' >
       

        <div>
            {data.icon}
        </div>

    </div>
</div>
  );
}

export default Widget;
