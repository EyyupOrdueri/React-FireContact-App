import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Toastify = (msg) => {
    toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        });
} 

export default Toastify;