import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchServices } from "./api/api";
import { Service } from "./types/serviceTypes";

interface ServicesState {
  data: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchServicesAsync = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const response = await fetchServices();
    return response;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServicesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServicesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchServicesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch services";
      });
  },
});

export default servicesSlice.reducer;
