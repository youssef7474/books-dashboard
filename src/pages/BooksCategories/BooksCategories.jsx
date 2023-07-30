import React, { useEffect } from 'react';
import TabelCat from "../../components/tableCategories/TabelCat"
import { useDispatch, useSelector, } from 'react-redux';
import {fetchCategories} from "../../state/BooksSlice.js"
const BooksCategories = () => {



  const dispatch = useDispatch();
  const {categories,loading,error} = useSelector((state)=>state.Books)


  useEffect(()=>{
    dispatch(fetchCategories())
  },[dispatch])
  
  return (
    <div>
      <TabelCat categories={categories} loading={loading} error={error} ></TabelCat>
    </div>
  );
}

export default BooksCategories;

