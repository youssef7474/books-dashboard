import { configureStore } from "@reduxjs/toolkit";
import Books from "./BooksSlice"
const store =configureStore({
    reducer:{Books}
})

export default store