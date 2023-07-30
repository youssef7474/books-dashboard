import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



import HomeLayOut from "./pages/HomeLayOut/HomeLayOut.jsx"
import HomePage from './pages/HomePage/HomePage';
import BooksCategories from './pages/BooksCategories/BooksCategories.jsx';
import SubCategoryPage from './pages/SubCategory/SubCategoryPage.jsx';
import SubCatBooksPage from './pages/AllbooksSubcat/SubCatBooksPage';
import BookDetailspage from './pages/BookDetails/BookDetailspage';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import LoginPage from './pages/Loginpage/LoginPage';

import { Provider } from 'react-redux';
import store from './state/Index';
import RequiredAuth from './pages/RequiredAuth/RequiredAuth';
import BooksWithoutCtigo from './pages/BooksWithNoCtigo/BooksWithoutCtigo';
import AddBook from './pages/AddNewBook/AddBook';
import Allteacherspage from './pages/AllTeacherspage/Allteacherspage';


const router=createBrowserRouter([



  {
    path:"/",element:<LoginPage></LoginPage>
  }



  ,
  {
    path:"/admin",element:<HomeLayOut></HomeLayOut>,
    errorElement:<ErrorPage></ErrorPage>
    ,
    children:[
      {
        index:true,element:
        <RequiredAuth>
          <HomePage></HomePage>
        </RequiredAuth>

      }
      ,
      {
        path:"/admin/home",element:
        <RequiredAuth>
          <HomePage></HomePage>
        </RequiredAuth>

      }
      ,
      {
        path:"/admin/categories",element:
        <RequiredAuth>
          <BooksCategories></BooksCategories>
        </RequiredAuth>

      }    
      ,
      {
        path:"/admin/catigory/subcategories",element:
        <RequiredAuth>
          <SubCategoryPage></SubCategoryPage>
        </RequiredAuth>

      }  
      ,
      {
        path:"/admin/catigory/subcategories/books",element:
        <RequiredAuth>
          <SubCatBooksPage></SubCatBooksPage>
        </RequiredAuth>

      } 
      ,
      {
        path:"/admin/catigory/subcategories/book/:id",element:
        <RequiredAuth>
        <BookDetailspage></BookDetailspage>
        </RequiredAuth>

      } 
      ,
      {
        path:"/admin/categories/AddBook",element:
        <RequiredAuth>
          <AddBook></AddBook>
        </RequiredAuth>

      }
        ,
      {
        path:"/admin/categories/booksWithoutcatigo",element:
        <RequiredAuth>
          <BooksWithoutCtigo></BooksWithoutCtigo>
        </RequiredAuth>

      }
      ,
      {
        path:"/admin/Allteacherspage",element:
        <RequiredAuth>
          <Allteacherspage></Allteacherspage>
        </RequiredAuth>

      }
      
        
    ]
    

  }
])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

