import { Modal } from 'bootstrap';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-router-dom';

const Editcompo = () => {


    const [show, setShow] = useState(false);

  
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);


  return (
    <div>
      









    <Modal show={show} onHide={handleClose}>
      
    <Modal.Header closeButton>
      <Modal.Title>تعديل فئه </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form >
        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label > اضف اسم الفئه</Form.Label>
          <Form.Control className='modalPlaceholder'
            type="text"
            placeholder=" اسم الفئه"
            autoFocus
          />
        </Form.Group>
       
        <Modal.Footer >
        <Button variant="secondary" onClick={handleClose}>
          الغاء
        </Button>
        <Button type='submit' variant="primary"  onClick={handleClose} >
          حفظ
        </Button>
      </Modal.Footer>
      </Form>
    </Modal.Body>
   
  </Modal>










    </div>
  );
}

export default Editcompo;
