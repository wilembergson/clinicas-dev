import { toast } from "react-toastify"

export const erroMessage = (msg:string) => toast.error(msg, {autoClose: 3000, position: toast.POSITION.TOP_CENTER})
export const sucessMessage = (msg:string) => toast.success(msg, {autoClose: 3000, position: toast.POSITION.TOP_CENTER})