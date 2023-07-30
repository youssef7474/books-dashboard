import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    user:null,
    logedin:false,
    categories:[],
    loading:false,
    error:null,
    catigoryid:null,
    subcatigory:[],
    filteredsubcatdata:[],
    books:[],
    filteredBooks:[],
    subcatigoryid:null,
    bookDetailsdata:[]
}

export const loginUser=createAsyncThunk(
  'Books/loginUser',
  async(userdata,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try {
      console.log(userdata)
      const config={
        headers:{
          "Content-Type": "application/json",
        }
      }
    
      const request=await axios.post("https://ocean-books.up.railway.app/api/admin/login",
      userdata,config
      )
      const res= await request.data.data;
      console.log("token from login")
      console.log(res.token)
      localStorage.setItem('userToken',JSON.stringify(res.token))
      return res
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
) 

//logout

export const logoutfunction = createAsyncThunk(
  'Books/logoutfunction',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('userToken')
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
); 


//catigories

//fetch catigories
export const fetchCategories = createAsyncThunk(
  'Books/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {


      const token= JSON.parse(localStorage.getItem('userToken')) 

      //const token = "2|aAEUqFIwi0tTo7UDyMz3uaSLuxp9FOfFMbOxGlEd"


      //const token = '2|aAEUqFIwi0tTo7UDyMz3uaSLuxp9FOfFMbOxGlEd';

      // in login=> token will get it from login in
   //localStorage.setItem('token',JSON.stringify(token))

  //  in logout => remove token from localStorage
  //localStorage.removeItem('token')

  // when you want to get the token in any process
  //const token = JSON.parse(localStorage.getItem('token'))

      const response = await axios.get('https://ocean-books.up.railway.app/api/book-headers', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
); 



//delete catigory


export const deleteCategory = createAsyncThunk(
    'Books/deleteCategory',
    async (id, { rejectWithValue }) => {

      try {

        const token= JSON.parse(localStorage.getItem('userToken')) 
        const response = await axios.post(`https://ocean-books.up.railway.app/api/book-header-delete/${id}`,{}, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

      
        console.log(response)
        return id

      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );




//edit catigory


  export const editcatigory = createAsyncThunk(
    "posts/editcatigory",
    async (item, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      console.log("redux")
      console.log(item)
      console.log("redux")
      try {
        const token= JSON.parse(localStorage.getItem('userToken')) 
        const response = await axios.put(`https://ocean-books.up.railway.app/api/book-headers/${item.id}`,{
          title: item.title,
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        return(response.data.data)
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );



//insert catigory
export const insertCategory=createAsyncThunk("Books/insertCategory",
async(item,thunkAPI)=>{

    const {rejectWithValue} = thunkAPI;

    try {
        
        const res =await fetch (`https://ocean-books.up.railway.app/admin/api/book-headers`,
        {
            method:"POST",
            body:JSON.stringify(item),
            headers:{"content-type": "application/json;charset=UTF-8"}
        })
        const data=await res.json()
        return data
    }  catch (error) {
        
        return rejectWithValue(error.message)
    }
})





//Subcatigories

//fetch Subcatigoriesid
export const detectcatigoryid=createAsyncThunk("Books/detectcatigoryid",
async(id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI


    try {

        return(id)
    } catch (error) {
        
        return rejectWithValue(error.message)
    }
})


export const fetchSubcatigories = createAsyncThunk(
    'Books/fetchSubcatigories',
    async (_, { rejectWithValue }) => {
      try {
        const token= JSON.parse(localStorage.getItem('userToken')) 

        const response = await axios.get('https://ocean-books.up.railway.app/api/categories', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response.data.data)
        return response.data.data;

      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const filteredsubcat = createAsyncThunk(
    'Books/filteredsubcat',
    async (data, { rejectWithValue }) => {
      try {
        const filteredcatigories =data.data.filter((el)=>{
          return(
            el.book_header_id===parseInt(data.catigoryid)
          )
        })
       return filteredcatigories
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );



  export const deletesubCategory = createAsyncThunk(
    'Books/deletesubCategory',
    async (id, { rejectWithValue }) => {

      try {

        const token= JSON.parse(localStorage.getItem('userToken')) 
        const response = await axios.delete(`https://ocean-books.up.railway.app/api/categories/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

      
        console.log(response)
        return id

      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );




  //add subcatigory 
   

  /*export const addsubcatigory = createAsyncThunk(
    "posts/addsubcatigory",
    async (itemAdd, thunkAPI) => {
      console.log(itemAdd)
      const { rejectWithValue } = thunkAPI;
      try {
        const token= JSON.parse(localStorage.getItem('userToken')) 
        const response = await axios.post(`https://ocean-books.up.railway.app/api/categories`,{
          name:itemAdd.name,
          level:itemAdd.level,
          cover:itemAdd.cover,
          book_header_id:itemAdd.book_header_id 
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response)
        return(response)
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
*/


export const addsubcatigory = createAsyncThunk(
  "posts/addsubcatigory",
  async (itemAdd, thunkAPI) => {
    console.log(itemAdd);
    const { rejectWithValue } = thunkAPI;
    try {
      const token = JSON.parse(localStorage.getItem("userToken"));
      const response = await axios.post(
        `https://ocean-books.up.railway.app/api/categories`,
        itemAdd,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("hi")
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);





export const editsubcatigory = createAsyncThunk(
  "posts/editsubcatigory",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log("redux")
    //console.log(item)
    console.log("redux")
    try {
     const token= JSON.parse(localStorage.getItem('userToken')) 
      const response = await axios.put(`https://ocean-books.up.railway.app/api/categories/${item.id}?_method=PUT`,{
        name: item.name,
        level:item.level,
        book_header_id:item.book_header_id,
      }, {
        headers: {
          //'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        }
      });
      console.log(response)
      return(response.data.data)
      //console.log(item)
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


//books


//fetch books

export const detectsubcatid=createAsyncThunk("Books/detectsubcatid",
async(id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI


    try {
      
        return(id)
    } catch (error) {
        
        return rejectWithValue(error.message)
    }
})



export const fetchBooks = createAsyncThunk(
  'Books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const token= JSON.parse(localStorage.getItem('userToken')) 

      const response = await axios.get('https://ocean-books.up.railway.app/api/books', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data.data)
      return response.data.data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const filterbooks = createAsyncThunk(
  'Books/filterbooks',
  async (data, { rejectWithValue }) => {
    try {
      console.log("hi filter books")
      console.log(data)

      const filteredBooks = [];

      data.data.forEach((book) => {
        book.categories.forEach((cat) => {
          if (cat.id === data.subcatigoryid) {
            filteredBooks.push(book);
            //console.log(book)
          }
        });
      });


      //console.log(filteredBooks)
      return filteredBooks

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addbook = createAsyncThunk(
  "posts/addbook",
  async (itemAdd, thunkAPI) => {
    console.log(itemAdd)
    const { rejectWithValue } = thunkAPI;
    try {
      const token = JSON.parse(localStorage.getItem("userToken"));
      const response = await axios.post(
        `https://ocean-books.up.railway.app/api/books`,
        itemAdd,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("hi")
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'Books/deleteBook',
  async (id, { rejectWithValue }) => {

    try {

      const token= JSON.parse(localStorage.getItem('userToken')) 
      const response = await axios.delete(`https://ocean-books.up.railway.app/api/books/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

    
      console.log(response)
      return id

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const bookDetails = createAsyncThunk(
  'Books/bookDetails',
  async (id, { rejectWithValue }) => {
    try {
      const token= JSON.parse(localStorage.getItem('userToken')) 

      const response = await axios.get(`https://ocean-books.up.railway.app/api/books/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data.data)
      return response.data.data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const editbook = createAsyncThunk(
  "posts/editbook",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log("redux")
    console.log(item)
    console.log("redux")
    try {
     const token= JSON.parse(localStorage.getItem('userToken')) 
      const response = await axios.put(`https://ocean-books.up.railway.app/api/books/1?_method=PUT`,{
        description:item.description,
        level:item.level,
        title:item.title,
        cover_image:item.cover_image
      }, {
        headers: {
          //'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        }
      });
      console.log(response)
      return(response.data.data)
      //console.log(item)
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const generateserial = createAsyncThunk(
  "posts/generateserial",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log("redux")
    console.log(item)
    console.log("redux")
    try {
     const token= JSON.parse(localStorage.getItem('userToken')) 
      const response = await axios.post(`https://ocean-books.up.railway.app/api/generate-serial`,{
        book_id:item.book_id,
        quantity:item.quantity
      }, {
        headers: {
          //'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        }
      });
      console.log(response)
      console.log(response.data)
      //return(response.data.data)
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const allserials = createAsyncThunk(
  'Books/allserials',
  async (_, { rejectWithValue }) => {
    try {
      const token= JSON.parse(localStorage.getItem('userToken')) 

      const response = await axios.get('https://ocean-books.up.railway.app/api/generated', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data.data)
      return response.data.data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const filtercode = createAsyncThunk(
  'Books/filtercode',
  async (data, { rejectWithValue }) => {
    try {
      console.log("hi filter books")
      console.log(data)

      let filteredcode = [];

      filteredcode =data.data.filter((el)=>{
        return(
          el.Book_id===parseInt(data.bookid)
        )
      })
      /*const filteredBooks = [];

      data.data.forEach((book) => {
        book.categories.forEach((cat) => {
          if (cat.id === data.subcatigoryid) {
            filteredBooks.push(book);
            //console.log(book)
          }
        });
      });*/


      console.log(filteredcode)
      return filteredcode

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const bookserail = createAsyncThunk(
  'Books/bookserail',
  async (id, { rejectWithValue }) => {
    try {
      const token= JSON.parse(localStorage.getItem('userToken')) 

      const response = await axios.post('https://ocean-books.up.railway.app/api/get-generated-specific',
      { book_id: id }, 
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log("spacific book serial")
      console.log(response)
      return response.data.data.serial_codes;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const BooksSlice= createSlice({
    name:"Books",
    initialState,
    reducers:{},
    extraReducers:{


      [loginUser.pending]:(state)=>{
        state.loading=true;
        state.user=null;
        state.error=null
        state.logedin=false;
    }
    ,
    [loginUser.fulfilled]:(state,action)=>{
        state.loading=false;
        state.user=action.payload
        state.logedin=true;
        state.error=null
    }
    ,
    [loginUser.rejected]:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.logedin=false;

    }
    ,
    
    [logoutfunction.pending]:(state)=>{
      state.loading=true;

  }
  ,
  [logoutfunction.fulfilled]:(state,action)=>{
      state.loading=false;
      state.logedin=false;
      state.error=null
  }
  ,
  [logoutfunction.rejected]:(state,action)=>{
      state.loading=false;
      state.error=action.payload;
      state.logedin=false;

  }
    ,

        //fetchcategories

        [fetchCategories.pending]:(state)=>{
            state.loading=true;
            state.error=null
        }
        ,
        [fetchCategories.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log(action.payload)
            state.categories=action.payload
        }
        ,
        [fetchCategories.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            console.log(state.error)
        }
        ,

        //delete category

        [deleteCategory.pending]:(state)=>{
            state.loading=true;
            state.error=null
        }
        ,
        [deleteCategory.fulfilled]: (state, action) => {
            state.loading = false;

            state.categories = state.categories.filter((el) => el.id !== action.payload);
        }
        ,
        [deleteCategory.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            console.log(state.error)
        }
        ,

          //add new catigory

          [insertCategory.pending]:(state)=>{
            state.loading=true;
            state.error=null
        }
        ,
        [insertCategory.fulfilled]:(state,action)=>{
            state.loading=false;
            state.categories.puch(action.payload)
        }
        ,
        [insertCategory.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
        ,
        //edit category
        [editcatigory.pending]: (state) => {
            state.loading = true;
            state.error = null;
          },
          [editcatigory.fulfilled]: (state, action) => {
            state.loading = false;

          },
          [editcatigory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
        //featchSubcatigory

        [detectcatigoryid.pending]:(state)=>{
            state.loading=true;
            state.error=null
            state.catigoryid=null
        }
        ,
        [detectcatigoryid.fulfilled]:(state,action)=>{
            state.loading=false;
            state.catigoryid=action.payload
        }
        ,
        [detectcatigoryid.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
        ,
        
        [filteredsubcat.pending]:(state)=>{
          state.loading=true;
          state.error=null
      
      
      }
      ,
      [filteredsubcat.fulfilled]:(state,action)=>{
          state.loading=false;
          state.filteredsubcatdata=action.payload
      }
      ,
      [filteredsubcat.rejected]:(state,action)=>{
          state.loading=false;
          state.error=action.payload;
      }
      ,
        

        [fetchSubcatigories.pending]:(state)=>{
            state.loading=true;
            state.error=null
        }
        ,
        [fetchSubcatigories.fulfilled]:(state,action)=>{
            state.loading=false;
            state.subcatigory=action.payload
        }
        ,
        [fetchSubcatigories.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            console.log(state.error)
        }
        ,
        [addsubcatigory.pending]:(state)=>{
          state.loading=true;
          state.error=null
          console.log("loading...")
        }
        ,
        [addsubcatigory.fulfilled]:(state)=>{
          state.loading=false;
          state.error=null
          console.log("done")
        }
        ,
        [addsubcatigory.rejected]:(state,action)=>{
          state.loading=false;
          state.error=action.payload;
          console.log(state.error)
        }
        ,
        [deletesubCategory.pending]:(state)=>{
            state.loading=true;
            state.error=null
        }
        ,
        [deletesubCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.filteredsubcatdata = state.filteredsubcatdata.filter((el) => el.id !== action.payload);
        }
        ,
        [deletesubCategory.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            console.log(state.error)
        }
        ,
        [editsubcatigory.pending]: (state) => {
          state.loading = true;
          state.error = null;
        },
        [editsubcatigory.fulfilled]: (state, action) => {
          state.loading = false;

        },
        [editsubcatigory.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        //fetch books
        
      [fetchBooks.pending]:(state)=>{
        state.loading=true;
        state.error=null
      }
      ,
      [fetchBooks.fulfilled]:(state,action)=>{
          state.loading=false;

          state.books=action.payload

      }
      ,
      [fetchBooks.rejected]:(state,action)=>{
          state.loading=false;
          state.error=action.payload;

      }
      ,      
      [detectsubcatid.pending]:(state)=>{
          state.loading=true;
          state.error=null
      }
      ,
      [detectsubcatid.fulfilled]: (state, action) => {
          state.loading = false;
          state.subcatigoryid=action.payload
      }
      ,
      [detectsubcatid.rejected]:(state,action)=>{
          state.loading=false;
          state.error=action.payload;
      }
      ,
      
      [filterbooks.pending]:(state)=>{
        state.loading=true;
        state.error=null
      }
      ,
      [filterbooks.fulfilled]:(state,action)=>{
          state.loading=false;

          state.filteredBooks=action.payload
          //console.log("fulfilled")
          //console.log(state.filteredBooks)

      }
      ,
      [filterbooks.rejected]:(state,action)=>{
          state.loading=false;
          state.error=action.payload;

      }
      ,
      [addbook.pending]:(state)=>{
        state.loading=true;
        state.error=null
        console.log("loading...")
    }
    ,
    [addbook.fulfilled]: (state, action) => {
        state.loading = false;
    }
    ,
    [addbook.rejected]:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    }
    ,
    
    [deleteBook.pending]:(state)=>{
      state.loading=true;
      state.error=null
  }
  ,
  [deleteBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.filteredBooks = state.filteredBooks.filter((el) => el.id !== action.payload);

  }
  ,
  [deleteBook.rejected]:(state,action)=>{
      state.loading=false;
      state.error=action.payload;
      console.log(state.error)
  }
  ,
  
  [bookDetails.pending]:(state)=>{
    state.loading=true;
    state.error=null
  }
  ,
  [bookDetails.fulfilled]:(state,action)=>{
      state.loading=false;

      state.bookDetailsdata=action.payload

  }
  ,
  [bookDetails.rejected]:(state,action)=>{
      state.loading=false;
      state.error=action.payload;

  }
  ,
[allserials.pending]:(state)=>{
    state.loading=true;
    state.error=null
}
,
[allserials.fulfilled]:(state,action)=>{
    state.loading=false;
    state.allserialscode=action.payload
}
,
[allserials.rejected]:(state,action)=>{
    state.loading=false;
    state.error=action.payload;
    console.log(state.error)
}
,
[bookserail.pending]:(state)=>{
    state.loading=true;
    state.error=null
}
,
[bookserail.fulfilled]:(state,action)=>{
    state.loading=false;
    state.filteredcode=action.payload
}
,
[bookserail.rejected]:(state,action)=>{
    state.loading=false;
    state.error=action.payload;
    console.log(state.error)
}
,
[generateserial.pending]:(state)=>{
  state.loading=true;
  state.error=null
}
,
[generateserial.fulfilled]:(state,action)=>{
  state.loading=false;
}
,
[generateserial.rejected]:(state,action)=>{
  state.loading=false;
  state.error=action.payload;
  console.log(state.error)
}
  }
})


export default BooksSlice.reducer;