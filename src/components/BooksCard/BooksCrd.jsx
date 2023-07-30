import React, { useEffect }  from 'react';
import BookCardCompo from '../BookCardcomp/BookCardCompo';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addbook, fetchBooks, filterbooks } from '../../state/BooksSlice';
import Loading from '../Loadingcompo/Loading';
//import { filterbooks } from '../../state/BooksSlice';
//import {fetchBooks} from "../../state/BooksSlice"

const BooksCrd = ({subcatigoryid,books,loading}) => {

  
  const dispatch=useDispatch();
  
  //const filteredBooks = [];

  /*books.forEach((book) => {
    book.categories.forEach((cat) => {
      if (cat.id === subcatigoryid) {
        filteredBooks.push(book);
      }
    });
  });*/

  useEffect(()=>{
  
    let fiterbooks={
      data:books,
      subcatigoryid:subcatigoryid
    }
    dispatch(filterbooks(fiterbooks))
  },[subcatigoryid, dispatch, books])

  const {filteredBooks,catigoryid} = useSelector((state)=>state.Books)

 /*useEffect(()=>{
    let fiterdata={
      data:books,
      subcatid:subcatigoryid
    }
    dispatch(filterbooks(fiterdata))
  },[subcatigoryid, dispatch, books])*/



  

    
  const [show, setShow] = useState(false);
  //const [filteredbooks,setFilteredBooks] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  /*useEffect(()=>{
    dispatch(fetchBooks())
  },[dispatch])*/

 // const {subcatigoryid,books} = useSelector((state)=>state.Books)

  /*const filteredbooks =books.filter((el)=>{
    return(
      el.book_header_id===parseInt(subcatigoryid)
    )
  })*/

  /*books.forEach(book => {
    book.categories.forEach(cat => cat.id ===subcatigoryid && console.log(book))
  });*/




/*useEffect(()=>{
 console.log(filteredBooks) 
})*/


  //console.log(filteredbooks)

   const data=filteredBooks.map((el)=>{
     return(
      <BookCardCompo el={el} subcatigoryid={subcatigoryid} books={books} filteredBooks={filteredBooks}></BookCardCompo>
     )
   })



   /*

     const fromHandler = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", name);
    formData.append("level", level);
    formData.append("book_header_id", catigoryid);
    formData.append("cover", coverImg); // use the file object instead of the data URL
    dispatch(addsubcatigory(formData)).then((result)=>{
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
  };*/


  //const [image,setimage]=(null)
  //const [pdf,setpdf]=(null)
  const [level,setlevel]=useState("")
  const [Title,settitle]=useState("")
  const [description,setdescription]=useState("")
  const [link,setlink]=useState("")
  const [cover, setCover] = useState("");
  const [coverImg, setCoverImg] = useState(null); // new state variable to store the selected file object
  const [coverUrl,setCoverUrl]=useState(null);
  const [Pdf, setPdf] = useState("");
  const [PdfFile, setPdfFile] = useState(null); // new state variable to store the selected file object
  const [PdfUrl,setPdfUrl]=useState(null);
  const [vedioFile,setVideoFile]=useState()
  const [vediourl,setVideoUrl]=useState(null)
  const [img1, setimg1] = useState("");
  const [imgcover1, setimgcover1] = useState(null); // new state variable to store the selected file object
  const [img1Url,setimgurl1]=useState(null);

  const fromHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", Title);
    formData.append("description", description);
    formData.append("level", level);
    formData.append("cover_image", coverImg);

    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    formData.append("pdf", PdfFile);
    formData.append('video', vedioFile);
    formData.append("category_id", subcatigoryid);
    formData.append("book_header_id", catigoryid);


   
    dispatch(addbook(formData)).then((result)=>{
      if(result.meta.requestStatus==='fulfilled')
      {
        dispatch(fetchBooks())


        let fiterbooks={
          data:books,
          subcatigoryid:subcatigoryid
        }
        dispatch(filterbooks(fiterbooks))

      }
    });
  }






  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setCover(reader.result);
      setCoverImg(file); // save the selected file object in state
      setCoverUrl(URL.createObjectURL(file));
      //console.log(coverUrl)
    };

    reader.readAsDataURL(file);
  };

  

  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;

    // Convert the FileList into an array of File objects
    const imagesArray = Array.from(files);

    // Save the selected images in the state
    setImages(imagesArray);
  };


  const handleimg2 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setCover(reader.result);
      setCoverImg(file); // save the selected file object in state
      setCoverUrl(URL.createObjectURL(file));
      //console.log(coverUrl)
    };

    reader.readAsDataURL(file);
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      setPdf(reader.result);
      setPdfFile(file); // save the selected file object in state
      setPdfUrl(URL.createObjectURL(file));
    };
  
    reader.readAsDataURL(file);
  };




  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      setVideoFile(file); // save the selected file object in state
      setVideoUrl(URL.createObjectURL(file));
    };
  
    reader.readAsDataURL(file);
  };


  return (
    <div>
  <Modal show={show} onHide={handleClose}>
      
    <Modal.Header closeButton>
      <Modal.Title> اضافه كتاب جديد</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={fromHandler}>
        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label >   اضف مستوى  الكتاب</Form.Label>
          <Form.Control className='modalPlaceholder'
            type="text"
            placeholder=" مستوي  الكتاب"
            autoFocus
            onChange={(e)=>setlevel(e.target.value)}
          />
        </Form.Group>


        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label >   اضف عنوان الكتاب</Form.Label>
          <Form.Control className='modalPlaceholder'
            type="text"
            placeholder="  عنوان الكتاب"
            autoFocus
            onChange={(e)=>settitle(e.target.value)}
          />
        </Form.Group>


        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label >   اضف وصف الكتاب</Form.Label>
        <Form.Control className='modalPlaceholder'
          type="text"
          placeholder="  وصف الكتاب"
          autoFocus
          onChange={(e)=>setdescription(e.target.value)}
        />
      </Form.Group>


        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label >   اضف صوره الكتاب </Form.Label>
          <input className='modalPlaceholder'
          type="file"
          autoFocus
          onChange={handleCoverChange}
        />
        </Form.Group>

        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label >    اضف صوره الكتاب الثانيه </Form.Label>
        <input className='modalPlaceholder'
        type="file"
        autoFocus
        onChange={handleImageUpload}
      />
      </Form.Group>


        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label >   اضف  الكتاب </Form.Label>
        <input className='modalPlaceholder'
        type="file"
        autoFocus
        onChange={handlePdfChange}
      />
      </Form.Group>


      <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label >   اضف  الفيديو </Form.Label>
      <input className='modalPlaceholder'
        type="file"
        autoFocus
        onChange={handleVideoChange}
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

    <div className='projects ' style={{borderRadius:"10px",backgroundColor:"white",padding:"20px",margin:"20px"}}>
    <div className='subcatSmall' style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <button  className="bg-green  btn-shape-my" style={{color:"white",border:"none",margin:"5px"}} onClick={handleShow} >اضافه  كتاب جديده</button>

    <h2  style={{marginTop:"0px",marginBottom:"20px"}} > كل الكتب في الفئه </h2>
    </div>

      <div className='subcatcontanier' style={{display:"flex" ,gap:"30px",flexWrap:"wrap",flexBasis:"250px"}}>



    {data}
      


      </div>

    </div>
  
  }
    </div>
  );
}

export default BooksCrd;
