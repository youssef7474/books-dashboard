import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
//import cover from "../../assets/download.jpeg"
import { useNavigate } from 'react-router-dom';
import { bookDetails, deleteBook } from '../../state/BooksSlice';

const BookCardCompo = ({el}) => {

  const navigate = useNavigate();
  const dispatch= useDispatch();

  //const filteredBooks = [];


  const testDelete=(id)=>{
    console.log(id)
    dispatch(deleteBook(id))
  }


    const allDetailsNav=(id)=>{
      dispatch(bookDetails(id))
      navigate("/admin/catigory/subcategories/book/:id")
    }

    //const elcatigory=(el.categories)




    /*const data2=elcatigory.map((item)=>{
      return console.log(item.name)
    })*/

  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.cover_image} />
    <Card.Body>
      <Card.Title style={{textAlign:"end"}}> {el.title}</Card.Title>
      <Card.Text style={{textAlign:"end"}}>
      {el.description}
      </Card.Text>

      <div style={{display:"flex", flexDirection:"column" ,gap:"10px"}}>
        <Button variant="success" onClick={()=>allDetailsNav(el.id)}> عرض تفصيل الكتاب</Button>
        <Button variant="danger" onClick={()=>testDelete(el.id)}>مسح الكتاب</Button>
      </div>

    </Card.Body>
    </Card>
    </div>
  );
}

export default BookCardCompo;
