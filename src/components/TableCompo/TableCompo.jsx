import React, { useState } from 'react';
import "./TableCompo.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCategory, detectcatigoryid, editcatigory, fetchCategories } from '../../state/BooksSlice';

const TableCompo = ({el,idx}) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [title, settitle] = useState("");
  
    const handleClose = () => setShow(false);



    
  const navigate=useNavigate()

  const subcatnav=(id)=>{
    dispatch(detectcatigoryid(id))
    navigate("/admin/catigory/subcategories")
  }

  const testDelete=(id)=>{
    dispatch(deleteCategory(id))
  }


  
  const formHandler=(e)=>{
    e.preventDefault();
  }

  
  
  const editnav=(el)=>{
    setShow(true)
    settitle(el)


  }



  const saveEdit=()=>{




    dispatch(editcatigory(title)).then((result)=>{
      if(result.meta.requestStatus==='fulfilled')
      {
        dispatch(fetchCategories())
        setShow(false)

      }
    })



  }

  const handleChange = (e) => {
    const newTitle = e.target.value;
    settitle(prevState => ({...prevState, title: newTitle}));
  };





  return (
    <div>




    
  <Modal show={show} onHide={handleClose}>
      
  <Modal.Header closeButton>
    <Modal.Title>تعديل فئه </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form onSubmit={formHandler}>
      <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label > اضف اسم الفئه</Form.Label>
        <Form.Control className='modalPlaceholder'
          type="text"
          placeholder=" اسم الفئه"
          autoFocus
          value={title.title}
          onChange={(e)=>{
            handleChange(e)
          }}
        />
      </Form.Group>
     
      <Modal.Footer >
      <Button variant="secondary" onClick={handleClose}>
        الغاء
      </Button>
      <Button type='submit' variant="primary" onClick={saveEdit}>
        حفظ
      </Button>
    </Modal.Footer>
    </Form>
  </Modal.Body>
 
</Modal>




      

    <tr key={el.idx}>
    <td  >
      <button onClick={()=>testDelete(el.id)}  class="bg-red  btn-shape-my" style={{color:"white",border:"none",margin:"5px"}} >مسح الفئه</button>
    </td>

    <td  > 
      <button onClick={()=>editnav(el)}  class="bg-blue  btn-shape-my" style={{ color:"white",border:"none" ,marginLeft:"auto"}} >تعديل الفئه</button>
    </td>

    <td >
      <button onClick={()=>subcatnav(el.id)}  class="bg-green btn-shape-my" style={{color:"white",border:"none",margin:"5px"}} >عرض الفئات الفرعية  </button>
    </td>

    <td >{el.title}</td>
    
    <td >{++idx}</td>
          
</tr>





    </div>
  );
}

export default TableCompo;
