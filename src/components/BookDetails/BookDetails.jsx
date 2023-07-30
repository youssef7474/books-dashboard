import React, { useEffect, useState } from 'react';
//import cover from "../../assets/download.jpeg"
import { Button } from 'react-bootstrap';
import "./BookDetails.css"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from "../../components/Loadingcompo/Loading"
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { allserials, bookserail, editbook, filtercode, generateserial } from '../../state/BooksSlice';




const BookDetails = () => {

    const dispatch=useDispatch()
    
    const {bookDetailsdata,loading,allserialscode} = useSelector((state)=>state.Books)
    
    useEffect(()=>{
        setitem(bookDetailsdata)
        //dispatch(allserials())
        dispatch(bookserail(bookDetailsdata.id))
    },[bookDetailsdata,dispatch])

    /*useEffect(()=>{
  
      let fitercodes={
        data:allserialscode,
        bookid:bookDetailsdata.id
      }
      dispatch(filtercode(fitercodes))
    },[allserialscode, dispatch, bookDetailsdata.id])*/


    const {filteredcode} = useSelector((state)=>state.Books)
 
    //const [bookserial,setbookserial]=useState()
   
    //console.log(allserialscode)

    //let filteredcatigories 

/*if(allserialscode){
   filteredcatigories =allserialscode.filter((el)=>{
    return(
      el.Book_id===parseInt(bookDetailsdata.id)
    )
  })
}*/

    /*const filteredcatigories =allserialscode.filter((el)=>{
        return(
          el.Book_id===parseInt(bookDetailsdata.id)
        )
      })*/

      
     // console.log(filteredcatigories)

   /*  let data
if(filteredcatigories){

 

   const catigoriesData=categories.map((el,idx)=>{
    return(
      <tr key={el.idx}>
          <td>
            <button onClick={()=>testDelete(el.id)}  class="bg-red  btn-shape-my" style={{color:"white",border:"none",margin:"5px"}} >مسح الفئه</button>
          </td>

          <td>
            <button onClick={()=>editnav(el)}  class="bg-blue  btn-shape-my" style={{ color:"white",border:"none" ,marginLeft:"auto"}} >تعديل الفئه</button>
          </td>

          <td>
            <button onClick={()=>subcatnav(el.id)}  class="bg-green btn-shape-my" style={{color:"white",border:"none",margin:"5px"}} >عرض الفئات الفرعية  </button>
          </td>

          <td>{el.title}</td>
          
          <td>{++idx}</td>
                
      </tr>
    )
  })







}*/

var data

if(filteredcode!=null){

   data=filteredcode.map((el,idx)=>{
    return(
  
      <tr key={el.idx}>
  
      <td>{el.material_code}</td>
      
      <td>{++idx}</td>
            
  </tr>
    )
  })

} else{

}



    const [show, setShow] = useState(false);
    const [item,setitem]=useState(bookDetailsdata)
    const [serialnumber,setserailnumber]=useState("")
 
    //const [filteredbooks,setFilteredBooks] = useState();
  
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    const editnav=()=>{
        setShow(true)
        //setitem(bookDetailsdata)
      }

    const fromHandler = (e) => {
        e.preventDefault();
        dispatch(editbook(item))
    }


    const serialgenerate= (e)=>{
        e.preventDefault()
        let data={
            book_id:bookDetailsdata.id,
            quantity:serialnumber
          }
        dispatch(generateserial(data)).then((result)=>
        {
          console.log(result.meta.requestStatus)
          
          if(result.meta.requestStatus==='fulfilled'){
            dispatch(bookserail(bookDetailsdata.id))
          }
        })
    }

    /*<div className='buttonsdetails' >
    <Button variant="primary" onClick={editnav} style={{margin:"10px"}}> تعديل  الكتاب</Button>
</div>*/

  return (
    <>





    <Modal show={show} onHide={handleClose}>
      
    <Modal.Header closeButton>
      <Modal.Title> تعديل الكتاب </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={fromHandler}>
        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label >   تعديل مستوى  الكتاب</Form.Label>
          <Form.Control className='modalPlaceholder'
            type="text"
            placeholder=" مستوي  الكتاب"
            autoFocus
            value={item.level}
            onChange={(e) => setitem({ ...item, level: e.target.value })}
          />
        </Form.Group>


        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label >   تعديل عنوان الكتاب</Form.Label>
          <Form.Control className='modalPlaceholder'
            type="text"
            placeholder="  عنوان الكتاب"
            autoFocus
            value={item.title}
            onChange={(e) => setitem({ ...item, title: e.target.value })}

          />
        </Form.Group>


        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label >   تعديل وصف الكتاب</Form.Label>
        <Form.Control className='modalPlaceholder'
          type="text"
          placeholder="  وصف الكتاب"
          autoFocus
          value={item.description}
          onChange={(e) => setitem({ ...item, description: e.target.value })}
        />
      </Form.Group>

      <Modal.Footer >
      <Button variant="secondary" onClick={handleClose}>
        الغاء
      </Button>
      <Button  type='submit' variant="primary" onClick={handleClose} >
        حفظ
      </Button>
    </Modal.Footer>
      </Form>
    </Modal.Body>
  
  </Modal>








    {loading?<Loading></Loading>:
    <div className='projects' style={{borderRadius:"10px",backgroundColor:"white",padding:"20px",margin:"20px"}}>
        <div className='detailsBook' style={{display:"flex" ,justifyContent:'space-between'}}>
        
        
            <div className='imageDetails' style={{borderColor:"red",marginBottom:"15px",maxWidth:"500px" }} >
                <img className='imageBookDetails' style={{height:"auto",borderRadius:"40px" ,  maxWidth:"100% "}} src={bookDetailsdata.cover_image} alt='p'></img>
            </div>


        
            <div style={{textAlign:"end" }}>
                <h1 style={{marginBottom:"50px"}}> {bookDetailsdata.title}</h1>

                <div style={{display:"flex",justifyContent:"end"}}>
                    <p> {bookDetailsdata.description}</p>
                    <p style={{fontWeight:"bold",fontSize:"18px"}}>: وصف الكتاب </p>
                </div>
               
                <div style={{display:"flex",justifyContent:"end"}}>
                    <p >{bookDetailsdata.level} </p>
                    <p style={{fontWeight:"bold",fontSize:"18px"}}> : مستوي الكتاب </p>
                </div>

                <p>
                    <Link to={bookDetailsdata.video} target="_blank" rel="noopener noreferrer" style={{paddingBottom:"100px"}}>رابط الفيديو</Link>
                </p>

                <p>
                    <Link to={bookDetailsdata.pdf} target="_blank" rel="noopener noreferrer" style={{paddingBottom:"100px"}}>رابط الكتاب</Link>
                </p>
            
            

                <form onSubmit={serialgenerate} >
                    <input type='text' placeholder='عدد النسخ' style={{margin:"10px",borderRadius:"6px"}} onChange={(e)=>setserailnumber(e.target.value)}></input>
                    <Button variant="success" type='submit' >   اضافه عدد النسخ</Button>
                </form>

            </div>    

           

     



        </div>

      





        <div>
        <div className="projects  " style={{borderRadius:"10px" ,backgroundColor:"white" }}>
        <div>
          <h2  style={{marginTop:"0px",marginBottom:"20px",textAlign:"end"}}> النسخ</h2>
        </div>
        <div className="responsive-table">
          <table  style={{fontSize:"15px"}}>
            <thead>
              <tr>
                <td>الكود</td>
                <td>الترتيب</td>
              </tr>
            </thead>
    
            <tbody>
                 {data}
            </tbody>
    
          </table>
        </div>
        </div>
      </div>








    </div>
}
</>
  );
}

export default BookDetails;
