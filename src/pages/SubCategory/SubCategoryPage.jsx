import React, { useEffect } from 'react';
import SubCategory from "../../components/SubCategory/SubCategory"
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubcatigories } from '../../state/BooksSlice';

const SubCategoryPage = () => {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchSubcatigories())
  },[dispatch])

  const {catigoryid,subcatigory,loading} = useSelector((state)=>state.Books)

  return (
    <div>
      <SubCategory subcatigory={subcatigory} catigoryid={catigoryid} loading={loading}></SubCategory>
    </div>
  );
}

export default SubCategoryPage;
