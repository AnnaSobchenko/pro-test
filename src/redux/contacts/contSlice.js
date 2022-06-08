import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./contOperations";


const contatcsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        },
        extraReducers: { 
            [getContacts.fulfilled]: (state, { payload }) => ({
                ...state,
                items: payload,
            }),
        }
    })

    export default contatcsSlice.reducer;