import {getContact} from "../../utils/fetchApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContacts =  createAsyncThunk('get/contacts',async (_,thunkApi)=> {
    try {
       const result = await getContact()
      return result.data
       
    } catch (error) {
        thunkApi.rejectWithValue(error.message)  
    }
  })