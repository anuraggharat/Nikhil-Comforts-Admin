import axios from 'axios';
import { API_URL } from './url'


export const postblog=async(data)=>{
    console.log(data)
    try {
    const res=await axios.post(API_URL + "/blogs/addBlog", data)
    return res.data;
    } catch (error) {
        console.log(error)
        return null
    }
}
export const postproject=async(data)=>{
    console.log(data)
    try {
        const res=await axios.post(API_URL + "/projects/addProject", data)
        console.log(res)
        return res.data
    } catch (error) {
        return null
    }
}