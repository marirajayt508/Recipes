import { configureStore } from '@reduxjs/toolkit';
import { Blogs } from './getBlogSlice';


const store = configureStore({
  reducer: {
    blogs: Blogs,
  },
});
export default store;