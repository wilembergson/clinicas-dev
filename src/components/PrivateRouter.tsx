import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/ApiConections';
import { erroMessage } from '../utils/toasts';

interface Props {
    children: ReactNode
}


const PrivateRouter: FC<Props> = ({ children }) => {
    const navigate = useNavigate()
    const token: any = localStorage.getItem("token")
    useEffect(() => {
        api.isAthenticated(token)
        .catch(error => {
            localStorage.clear()
            navigate('/login')
            if(error.response.data.error === 'session expired.'){
                erroMessage(error.response.data.error)
            }
        })
    })
    return (
        <>{((token) ? children : <></>)}</>
    );
};

export default PrivateRouter;