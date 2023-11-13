import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {api} from '../config'

const getPosts = createAsyncThunk('posts/getPosts', async (page) => {
  const res = axios
    .get(api(page.query,page.from,page.to))
    .then((d) => d.data);
  return res;
}
);

const initialState = {
  datas: {},
  loading: false,
  error: false,
};

const name = 'getBlogs';

const reducers = {};

const extraReducers = {
  [getPosts.pending]: (state) => {
    state.loading = true;
  },
  [getPosts.fulfilled]: (state, { payload }) => {
    state.loading = false;
    state.datas = payload;
  },
  [getPosts.rejected]: (state) => {
    state.error = true;
  },
}

const getBlogs = createSlice({ name, initialState, reducers, extraReducers });

const Blogs = getBlogs.reducer

export {getPosts,Blogs}