import { FC, ReactNode } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import api from '../api/ApiConections';

interface Props {
    children: ReactNode
}


const PrivateRouter: FC<Props> = ({ children }) => {
    const navigate = useNavigate()
    api.isAthenticated().catch(error => {
        localStorage.clear()
        navigate('/login')
    })
    const token: any = localStorage.getItem("token")
    return (
        <>{((token) ? children : <Navigate to='/login' />)}</>
    );
};

export default PrivateRouter;