import React, { useEffect } from 'react';
import SubcatCard from '../SubcatCard/SubcatCard';
import "./SubCatCard.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {fetchSubcatigories,addsubcatigory,filteredsubcat} from "../../state/BooksSlice.js"
import Loading from "../../components/Loadingcompo/Loading"
import { useNavigate } from 'react-router-dom';


const SubCategory = ({loading,subcatigory,catigoryid}) => {

  const dispatch=useDispatch()
  //const {catigoryid,subcatigory,loading} = useSelector((state)=>state.Books)
 
  /*useEffect(()=>{
    dispatch(fetchSubcatigories())
  },[dispatch])*/

 
  
  useEffect(()=>{
    let fiterdata={
      data:subcatigory,
      catigoryid:catigoryid
    }
    dispatch(filteredsubcat(fiterdata))
  },[catigoryid, dispatch, subcatigory])

  const {filteredsubcatdata} = useSelector((state)=>state.Books)
  
  //const [name,setname]=useState("");
  //const [level,setlevel]=useState("");
  //const [coverimg, setCover] = useState(null); 

  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [cover, setCover] = useState("");
  const [coverImg, setCoverImg] = useState(null); // new state variable to store the selected file object
  const [coverUrl,setCoverUrl]=useState(null);

  /*const filteredcatigories =subcatigory.filter((el)=>{
    return(
      el.book_header_id===parseInt(catigoryid)
    )
  })*/




/*useEffect(()=>{
  dispatch(filteredsubcat(filteredcatigories))
},[dispatch,filteredcatigories])*/




    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const data=filteredsubcatdata.map((el)=>{
    return(
      <SubcatCard el={el} subcatigory={subcatigory} catigoryid={catigoryid} ></SubcatCard>
    )
  })

 

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
  };



  /*const fromHandler = (e) => {
    e.preventDefault();

    let itemAdd={
      name:name,
      level:level,
      cover:coverimg,
      book_header_id:catigoryid
    }
    console.log(itemAdd.cover)
    //console.log(coverimg);
    dispatch(addsubcatigory(itemAdd))
  }*/
  
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



  /*const handleCoverChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCover(reader.result);

    };
  }
  */
 /* <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label >   اضف صوره الفئه الفرعيه </Form.Label>
  <Form.Control className='modalPlaceholder'
    type="image"
    placeholder="صوره الفئه الفرعيه"
    autoFocus
  />
</Form.Group>*/
const navigate=useNavigate()
      
const navbookWithoutCtigo=()=>{
  navigate("/admin/categories/booksWithoutcatigo")
} 



  return (



    <>

    <Modal show={show} onHide={handleClose}>
      
    <Modal.Header closeButton>
      <Modal.Title>  اضافه فئه فرعيه جديده</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={fromHandler}>
        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label >   اضف اسم الفئه الفرعية</Form.Label>
          <Form.Control className='modalPlaceholder'
            type="text"
            placeholder=" اسم الفئه الفرعيه"
            autoFocus
            onChange={(e)=>setName(e.target.value)}
          />
        </Form.Group>


        <Form.Group style={{display:"flex" ,alignItems:"end",flexDirection:"column"}} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label >   اضف مستوي الفئه الفرعيه </Form.Label>
          <Form.Control className='modalPlaceholder'
            type="text"
            placeholder="مستوي الفئه الفرعيه"
            autoFocus
            onChange={(e)=>setLevel(e.target.value)}
          />
        </Form.Group>

       

        <Form.Group style={{ display: "flex", alignItems: "end", flexDirection: "column" }} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>اضف صوره الفئه الفرعيه</Form.Label>
        <input className='modalPlaceholder'
          type="file"
          placeholder="صوره الفئه الفرعيه"
          autoFocus
          onChange={handleCoverChange}
        />
      </Form.Group>


   
    <Modal.Footer >
      <Button variant="secondary" onClick={handleClose}>
        الغاء
      </Button>
      <Button type='submit' variant="primary" onClick={handleClose}>
        حفظ
      </Button>
    </Modal.Footer>
    </Form>
    </Modal.Body>
  </Modal>













 








  {loading?<Loading></Loading>:


    <div className='projects  ' style={{borderRadius:"10px",backgroundColor:"white",padding:"20px",margin:"20px"}}>
        <div className='subcatSmall' style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <button  className="bg-green  btn-shape-my" style={{color:"white",border:"none",margin:"5px"}} onClick={handleShow} >اضافه فئه فرعيه جديده</button>
            <h2  style={{marginTop:"0px",marginBottom:"20px"}}>كل الفئات الفرعيه</h2>
        </div>
        <div className='subcatcontanier' style={{display:"flex" ,gap:"30px",flexWrap:"wrap",flexBasis:"250px"}}>
          

        {data}

        </div>
    </div>
  }

    </>
  );
}

export default SubCategory;
