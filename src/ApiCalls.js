import axios from 'axios';
import { API_URL } from './url'


export const postblog=async(data)=>{
    console.log(data)
    const res=await axios.post(API_URL + "/blogs/addBlog", data)
    console.log('====================================');
    console.log(res);
    console.log('====================================');
}