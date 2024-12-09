import Axios from "axios";

export const refreshAccessToken = async () => {
    const remote={
        address:import.meta.env.VITE_API_BASE_URL
    }
    try {
        let url = `${remote.address}token/refresh-token/`
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