import { createSlice } from "@reduxjs/toolkit";
import contactsData from "../../contactsData.json"

const defaultContacts = contactsData;

const initialState = {
     items: defaultContacts,    
};

const contactsSlice = createSlice ({
    name: "contacts",
    initialState,
    reducers: {
        deleteContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        addContact: (state, action) => {
            state.items.push(action.payload)
        }
    },
});

export const contactsReducer = contactsSlice.reducer;
export const {deleteContact, addContact} = contactsSlice.actions
