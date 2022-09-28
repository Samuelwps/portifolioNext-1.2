import create from "zustand"

export const useStore = create(set => ({
  call:false,
  setCall:v=>set(state =>({call:v})),

  name:"",
  setName:v=>set( state=>({name:v})),

  email:"",
  setEmail:v=>set( state=>({email:v})),

  message:"",
  setMessage:v=>set( state =>({message:v}))
}))
