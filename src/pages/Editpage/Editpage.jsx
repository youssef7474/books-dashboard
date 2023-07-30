import React from 'react';

const Editpage = () => {
  return (
    <div className="login-page page">
    <div className="contanier">
      <h1 className="title" style={{color:"black"}}>
        edit catigory
      </h1>
      <form  >
        <input style={{marginTop:"100px"}} type="text" placeholder="My Email" id="email"></input>
        <input type="submit" value="Login" ></input>
      </form>
    </div>
  </div>
  );
}

export default Editpage;
