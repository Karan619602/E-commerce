import { LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    FORGOT_PASSWORD_REQUEST,
     FORGOT_PASSWORD_SUCCESS,
     FORGOT_PASSWORD_FAIL ,
     RESET_PASSWORD_REQUEST,
RESET_PASSWORD_SUCCESS,
RESET_PASSWORD_FAIL} from "../constant/userconstants";

import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies=new Cookies();
//login
export const login=(email,password)=>async(dispatch)=>{
    console.log(email,password);
    try {
        dispatch({type:LOGIN_REQUEST})
        const config={
                 headers:{
                     'Content-Type':'application/json'
                 }
                    }
        const {data}= await axios.post('/api/v1/login',{email,password},config)
        console.log(data.token);
        //   cookies.set('token',data.token,[{ path: '/' },{
        //     expires: new Date(
        //         Date.now() + 7* 24 * 60 * 60* 1000
        //     ),
        //     httpOnly: true
        //   }])
        //   console.log("token",cookies.get('token')); 
        dispatch({type:LOGIN_SUCCESS,
                   payload:data.user})
        
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data.message
        })
    }
}

//register user
export const register=(name,email,password)=>async(dispatch)=>{
    console.log(name);
    console.log(password);
    console.log(email);
    try {
        dispatch({type:REGISTER_USER_REQUEST})
        const config={
                 headers:{
                     'Content-Type':'application/json'
                 }
                    }
        const {data}= await axios.post('/api/v1/register',{name,email,password},config)
        dispatch({type:REGISTER_USER_SUCCESS,
                   payload:data.user})
        
    } catch (error) {
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.response.data.message
        })
    }
}

//load user
export const loaduser=()=>async(dispatch)=>{
    try {
        dispatch({type:LOAD_USER_REQUEST})
       
        const {data}= await axios.get('/api/v1/me')
        dispatch({type:LOAD_USER_SUCCESS,
                   payload:data.user})
        
    } catch (error) {
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.response.data.message
        })
    }
}
//update profile
export const updateProfile=(userData)=>async(dispatch)=>{
    try {
        dispatch({type:UPDATE_PROFILE_REQUEST})
        const config={
                 headers:{
                     'Content-Type':'multipart/form-data'
                 }
                    }
        const {data}= await axios.put('/api/v1/me/update',userData,config)
        dispatch({type:UPDATE_PROFILE_SUCCESS,
                   payload:data.success})
        
    } catch (error) {
        dispatch({
            type:UPDATE_PROFILE_FAIL,
            payload:error.response.data.message
        })
    }
}

//logout user
export const logoutuser=()=>async(dispatch)=>{
    try {
        
       
        await axios.get('/api/v1/logout')
        dispatch({type:LOGOUT_SUCCESS
                   })
        
    } catch (error) {
        dispatch({
            type:LOGOUT_FAIL,
            payload:error.response.data.message
        })
    }
}
//forgot password
export const forgotPassword = (email) => async (dispatch) => {
    try {

        dispatch({ type: FORGOT_PASSWORD_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/password/forgot', email, config)

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}


//reset password
export const resetPassword = (token,passwords) => async (dispatch) => {
    try {

        dispatch({ type: RESET_PASSWORD_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/password/reset/${token}`, passwords, config)

        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}
export const clearerrors=()=>async (dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}