import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import cover from "../../assets/download.jpeg"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {deletesubCategory,detectsubcatid,editsubcatigory, fetchSubcatigories, filteredsubcat} from "../../state/BooksSlice.js"
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';




const SubcatCard = ({el,subcatigory,catigoryid}) => {
    const navigate=useNavigate()

    const dispatch = useDispatch();


    const [show, setShow] = useState(false);
    const [item,setitem]=useState({});


    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
  
    

    const allbooksnav=(id)=>{
      dispatch(detectsubcatid(id))
      navigate("/admin/catigory/subcategories/books")
    }


    const deletesubCategorytest=(id)=>{
      console.log(id)
      dispatch(deletesubCategory(id))
    }



    const editnav=(el)=>{
      setShow(true)
      setitem(el)
    }

    


    const saveEdit=()=>{
      setShow(false)


  
      console.log(item)


      /*let formData = new FormData();
      formData.append("name", item.name);
      formData.append("level", item.level);
      formData.append("book_header_id", item.book_header_id);
      formData.append("cover", item.cover); // use the file object instead of the data URL*/




       dispatch(editsubcatigory(item)).then((result)=>{
        if(result.meta.requestStatus==='fulfilled')
        {
          dispatch(fetchSubcatigories())
          let fiterdata={
            data:subcatigory,
            catigoryid:catigoryid
          }
          dispatch(filteredsubcat(fiterdata))
        }
      });


      
    }


    const [cover, setCover] = useState("");
    const [coverImg, setCoverImg] = useState(null); // new state variable to store the selected file object
    const [coverUrl,setCoverUrl]=useState(null);

    const handleCoverChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        setCover(reader.result);
        setCoverImg(file); // save the selected file object in state
        setCoverUrl(URL.createObjectURL(file));
        //console.log(coverUrl)
        console.log(coverImg)
      };
  
      reader.readAsDataURL(file);
    };
 


    /*<Form.Group style={{ display: "flex", alignItems: "end", flexDirection: "column" }} className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>تغير صوره الفئه الفرعيه</Form.Label>
    <input className='modalPlaceholder'
      type="file"
      placeholder="صوره الفئه الفرعيه"
      autoFocus
      onChange={handleCoverChange}
    />
  </Form.Group>*/


  return (
<>





<Modal show={show} onHide={handleClose}>
      
<Modal.Header closeButton>
  <Modal.Title>  تعديل فئه فرعيه </Modal.Title>
</Modal.Header>
<Modal.Body>
  <Form>
    <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label >   تعديل اسم الفئه الفرعية</Form.Label>
      <Form.Control
      className="modalPlaceholder"
      type="text"
      placeholder="اسم الفئة الفرعية"
      autoFocus
      value={item.name}
      onChange={(e) => setitem({ ...item, name: e.target.value })}
    />
    </Form.Group>


    <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label >   تعديل مستوي الفئه الفرعيه </Form.Label>
      <Form.Control
      className="modalPlaceholder"
      type="text"
      placeholder="مستوى الفئة الفرعية"
      autoFocus
      value={item.level}
      onChange={(e) => setitem({ ...item, level: e.target.value })}
    />
    </Form.Group>

   

    


<Modal.Footer >
  <Button variant="secondary" onClick={handleClose}>
    الغاء
  </Button>
  <Button  variant="primary" onClick={saveEdit}>
    حفظ
  </Button>
</Modal.Footer>
</Form>
</Modal.Body>
</Modal>








    <div>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.cover} />
    <Card.Body>
      <Card.Title style={{textAlign:"end"}}>{el.name}</Card.Title>
      <Card.Text style={{textAlign:"end"}}>
        {el.level}
      </Card.Text>
      
        <div style={{display:"flex", flexDirection:"column" ,gap:"10px"}}>
          <Button variant="danger" onClick={()=>deletesubCategorytest(el.id)}>مسح الفئه الفرعيه</Button>
          <Button variant="primary" onClick={()=>editnav(el)}> تعديل الفئه الفرعيه</Button>
          <Button variant="success" onClick={()=>allbooksnav(el.id)}>عرض الكتب</Button>
        </div>
        
        

    </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default SubcatCard;
