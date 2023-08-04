import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

import api from "../../api/api";
import { login as loginAPI, logout as logoutAPI, signup as signupAPI } from "../../api/authAPIs";

const initialState = {
	user: {
		id: null,
		name: null,
		email: null,
		role: null,
	},
	status: 'idle',
	error: null,
};

export const loginAsync = createAsyncThunk(
	'auth/login',
	async (payload) => {
		try {
			const response = await loginAPI(payload);
			const { accessToken, message } = response.data;

			api.defaults.headers.common.Authorization = `Bearer ${accessToken}`; // set the access token in the api module
			localStorage.setItem("accessToken", accessToken); // set the access token in the local storage

			const user = jwtDecode(accessToken); // decode the access token to get the user data

			return { message, accessToken, user };
		}
		catch (error) {
			return Promise.reject(error);
		}
	}
);

export const signupAsync = createAsyncThunk(
	'auth/signup',
	async (payload) => {
		try {
			const response = await signupAPI(payload);
			const { user, message } = response.data;

			return { user, message };
		}
		catch (error) {
			return Promise.reject(error);
		}
	}
);


const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			logoutAPI();
			localStorage.removeItem("accessToken");
			api.defaults.headers.common.Authorization = null;
			state.user = initialState.user;
		},
		setError: (state, action) => {
			state.error = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			// loginAsync reducers
			.addCase(loginAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(loginAsync.fulfilled, (state, action) => {
				state.status = 'idle';
				state.user = action.payload.user;
			})
			.addCase(loginAsync.rejected, (state, action) => {
				state.status = 'idle';
				state.error = action.error.message;
			})
	}
});


export const selectUser = (state) => state.auth.user;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;

export const { logout, setError } = authSlice.actions;
export default authSlice.reducer;