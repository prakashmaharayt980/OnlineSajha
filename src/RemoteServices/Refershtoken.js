import Axios from "axios";

export const refreshAccessToken = async () => {
    try {
        let url = `http://127.0.0.1:5173/api/token/refresh-token/`
        const refreshToken = localStorage.getItem('refresh');
        const res = await Axios.post(url, { refresh: refreshToken });
        localStorage.setItem('token',res.data.access);
        localStorage.setItem('refresh',res.data.refresh);
        window.location.reload();
    } catch (e) {
        window.location.href = "/";
        localStorage.clear();
    }

}