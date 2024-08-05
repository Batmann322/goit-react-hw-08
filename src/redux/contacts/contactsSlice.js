import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default contactsSlice.reducer;
