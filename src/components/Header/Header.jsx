import React from 'react';
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, NavLink} from "react-router-dom"

//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';

import {BiBookBookmark,BiLogOut,BiCategory} from "react-icons/bi"
import {AiFillHome} from "react-icons/ai"

/*<DropdownButton variant="success" style={{minWidth:"160px"}} id="dropdown-basic-button" title="categories" >
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>*/



const Header = () => {
  return (



    <>
    {[false, ].map((expand) => (
      <Navbar key={expand} bg="success" expand={expand} className="mb-3">
        <Container fluid>
        <NavLink>
       
        </NavLink>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              
              <BiBookBookmark style={{color:"green" ,fontSize:"50px"}}></BiBookBookmark>
                  
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
        


                
                <Nav.Link >
                  <Link to={"home"} style={{textDecoration:"none",color:"black",fontSize:"20px" }}>
                      <div style={{display:"flex",alignItems:"",justifyContent:"end"}}>
                      <p>القائمة الرئيسية</p>
                        <AiFillHome style={{fontSize:"30px", marginLeft:"5px",color:"green"}}></AiFillHome>
                      </div>
                    
                  </Link>
                </Nav.Link>

                <Nav.Link >
                  <Link to={"categories"} style={{textDecoration:"none",color:"black",fontSize:"20px"}}>
                    <div style={{display:"flex",alignItems:"",justifyContent:"end"}}>
                      <p>كل الفئات</p>
                      <BiCategory style={{fontSize:"30px", marginLeft:"5px",color:"green"}}></BiCategory>
                    </div>
                
                  </Link>
                </Nav.Link>
               
                <Nav.Link style={{textDecoration:"none",color:"black",fontSize:"20px"}}>
                    <div style={{display:"flex",alignItems:"",justifyContent:"end"}}>
                      <p> تسجيل الخروج</p>
                      <BiLogOut style={{fontSize:"30px", marginLeft:"5px",color:"green"}}></BiLogOut>
                    </div>
                    
                </Nav.Link>



                      
                <Nav.Link >



           





                </Nav.Link>




              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      ))}
      </>




  );
}

export default Header;
