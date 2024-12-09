import axios from "axios";
import { refreshAccessToken } from "./Refershtoken";
const remote={
    address:import.meta.env.VITE_API_BASE_URL
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
        return postRequest("news/create/",data);
    },
    getlistdata:()=>{

        return getRequest("news/?ordering");
    },
    postadsSeperate:(data)=>{
        return postRequest("createadsseperate/",data);
    },
    getAllNews: () => {
        return getRequest("news/?ordering=-date_created&offset=0&limit=8");
      },
      
    getNewsById:(id)=>{
        return getRequest("news/"+id+"/");
    },
    getNewsByType: (type) => {
        return getRequest(`news/?typeofnews=${type}&offset=0&limit=6&ordering/`);
      },
    getSelectedNews:(type,page)=>{
        return getRequest(`news/?typeofnews=${type}&offset=${(page - 1) * 10}&limit=3&ordering/`);
    },
    getHomeAds: () => {
        return getRequest("getCreatedAds/?ordering&offset=0&limit=2");
      },
  
      

}

export default RemoteServices