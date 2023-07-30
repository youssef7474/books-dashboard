import React, { useEffect } from 'react';
import Widget from "../../components/Widget/Widget"

import "./HomePage.css"
import { useDispatch } from 'react-redux';
import {fetchBooks,fetchCategories,fetchSubcatigories} from "../../state/BooksSlice"
const HomePage = () => {

  const dispatch = useDispatch()



  useEffect(()=>{
    dispatch(fetchBooks())
    dispatch(fetchCategories())
    dispatch(fetchSubcatigories())
  })

  return (
    <div className='container'>
      

    <div className='widgets'>
      <Widget type="Books"></Widget>
      <Widget type="categories"></Widget>
      <Widget type="subcategory"></Widget>
    </div>

   


    </div>
  );
}

export default HomePage;
