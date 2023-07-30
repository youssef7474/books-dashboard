import React from 'react';
import "./AddBook.css"

const AddBookCompo = () => {
  return (
    <div>
      
    <form class="form">
    <p class="title" style={{textAlign:"end"}}>اضف كتاب جديد </p>
  
    <label>
      <input required="" placeholder="" type="text" class="input"></input>
      <span>اسم الكتاب</span>
    </label>  
            
    <label>
        <input required="" placeholder="" type="text" class="input"></input>
        <span>وصف الكتاب</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="text" class="input"></input>
        <span>مستوي الكتاب</span>
    </label>
   

    <label>
      <input className='modalPlaceholder'
      type="file"
      autoFocus
      />
      <span>اضف صوره الكتاب</span>
    </label>

    <label>
      <input className='modalPlaceholder'
      type="file"
      autoFocus
      />
      <span>اضف صوره ثانيه للكتاب</span>
    </label>

    <label>
      <input className='modalPlaceholder'
      type="file"
      autoFocus
      />
      <span>اضف للكتاب</span>
    </label>

    <label>
      <input className='modalPlaceholder'
      type="file"
      autoFocus
      />
      <span>اضف الفيديو</span>
    </label>

      <h1 style={{textAlign:"end"}}>اختار الفئه</h1>

    <label class="container">
      <input type="checkbox" ></input>
      <span style={{marginLeft:"10px"}}>readers </span>
    </label>

    <label class="container">
      <input type="checkbox" ></input>
      <span style={{marginLeft:"10px"}}>readers </span>
    </label>

    <label class="container">
      <input type="checkbox" ></input>
      <span style={{marginLeft:"10px"}}>readers </span>
    </label>

    <label class="container">
      <input type="checkbox" ></input>
      <span style={{marginLeft:"10px"}}>readers </span>
    </label>

    <h1 style={{textAlign:"end"}}>اختار الفئه الفرعيه</h1>

    <label class="container">
      <input type="checkbox" ></input>
      <span style={{marginLeft:"10px"}}>readers </span>
    </label>

    <label class="container">
      <input type="checkbox" ></input>
      <span style={{marginLeft:"10px"}}>readers </span>
    </label>

    <label class="container">
      <input type="checkbox" ></input>
      <span style={{marginLeft:"10px"}}>readers </span>
    </label>

    <label class="container">
      <input type="checkbox" ></input>
      <span style={{marginLeft:"10px"}}>readers </span>
    </label>

    <button class="submit">Submit</button>
</form>


    

    </div>
  );
}

export default AddBookCompo;
