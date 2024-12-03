import axios from "axios";
import { refreshAccessToken } from "./Refershtoken";
const remote={
    address:" http://127.0.0.1:5173/api/",
}

function postRequest(api,data){
    let token = localStorage.getItem("token");
    const apiUrl=remote.address+api;
    let promise=new Promise((resolve,reject)=>{
        axios.post(apiUrl,data,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response)=>{
            resolve(response.data);
        })
        .catch((error)=>{

       if (error.response.status === 401 && error.response.data.code === 'token_not_valid') {
                    refreshAccessToken()
                }
                var errorMessage = error.response.data.Message || error.response.data || error.response;
                reject(errorMessage);
        })
    });
    return promise;
}
function getRequest(api){
  
    const apiUrl=remote.address+api;
    let promise=new Promise((resolve,reject)=>{
        axios.get(apiUrl)
        .then((response)=>{
            resolve(response.data);
        })
        .catch((error)=>{

       if (error.response.status === 401 && error.response.data.code === 'token_not_valid') {
                    refreshAccessToken()
                }
                var errorMessage = error.response.data.Message || error.response.data || error.response;
                reject(errorMessage);
        })
    });
    return promise;
}

var RemoteServices={
    sendLogin:(data)=>{
        console.log(data);
        return postRequest("token/",data);
    },
    postNews:(data)=>{
        return postRequest("postnews/",data);
    },
    getlistdata:()=>{

        return getRequest("getnews/");
    }

}

export default RemoteServices