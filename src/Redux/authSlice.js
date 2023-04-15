import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    msg: "",
    user: "",
    token: "",
    loding: false,
    error: "",
    profile: [],
}
{/* signup User */}
export const signupUser=createAsyncThunk("signupUser", async (body)=>{
    const res= await fetch('/api/signup',{
        method: "POST",
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    return await res.json();
})
{/* Loginuser */}
export const loginUser=createAsyncThunk("loginUser", async (body)=>{
    const res= await fetch('/api/login',{
        method: "POST",
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    return await res.json();
})
{/* Profile */}
export const profilePage=createAsyncThunk("ProfilePage", async (body)=>{
    const res= await fetch('/api/profile',{
        method: "POST",
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    return await res.json();
})

 const authSlice=createSlice({
    name: "Signup",
    initialState,
    reducers: {
     addToken: (state, action)=>{
        state.token= localStorage.getItem('token');
     },
     addUser: (state, action)=>{
        state.user= localStorage.getItem('user');
     },
     logout: (state, action)=>{
        state.token=null;
        localStorage.clear();
     }
    },
    extraReducers:{

    //login
    [loginUser.pending]: (state, action)=>{
        state.loding=true
    },

    [loginUser.fulfilled]: (state,{payload: {error,msg,token,user}})=>{
        state.loding=false;
        if(error){
            state.error=error
        }else{
            state.msg=msg;
            state.token=token;
            state.user=user;
            localStorage.setItem('msg', msg);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
        }
        
    },

    [loginUser.rejected]: (state, action)=>{
        state.loding=true
    },


        //signup

        [signupUser.pending]: (state, action)=>{
            state.loding=true
        },

        [signupUser.fulfilled]: (state,{payload: {error,msg}})=>{
            state.loding=false;
            if(error){
                state.error=error;
            }else{
                state.msg=msg;
            }
        },

        [signupUser.rejected]: (state, action)=>{
            state.loding=true
        },

       // profilepage

        [profilePage.pending]: (state, action)=>{
            state.loding=true
        },
        [profilePage.fulfilled]: (state,{payload: {error,msg,token,user}})=>{
            state.loding=false;
            if(error){
                state.user=user;
                localStorage.setItem('user', JSON.stringify(user));
            }else{
            state.msg=msg;
            state.token=token;
            localStorage.setItem('msg', msg);
            localStorage.setItem('token', token);
            }
        },

        [profilePage.rejected]: (state, action)=>{
            state.loding=true
        },
    }
})

export const {addToken,addUser, logout}=authSlice.actions;

export default authSlice.reducer