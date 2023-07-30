import React, { useEffect } from 'react';
import BooksCrd from '../../components/BooksCard/BooksCrd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../state/BooksSlice';

const SubCatBooksPage = () => {
const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchBooks())
  },[dispatch])


  const {subcatigoryid,books,loading} = useSelector((state)=>state.Books)



  return (
    <div>
      <BooksCrd subcatigoryid={subcatigoryid} books={books} loading={loading} ></BooksCrd>
    </div>
  );
}

export default SubCatBooksPage;
