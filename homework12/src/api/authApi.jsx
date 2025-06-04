import { api } from "../config/properties";
import axios from 'axios';

export const LogInUser = (username,password) =>{
    const header = {
        'Content-Type': 'application/json',
        'Accept':'application/json,text/plain,*/*'
    }

    const data = {username:username,password:password}

    return axios.post(`${api.localRoute}/login`,{headers:header,body:data})
            .then(res=>Promise.resolve(res))
            .catch(err=>Promise.reject(err))
}