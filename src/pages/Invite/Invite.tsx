import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const Invite = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {   
        if (id) {
            Cookies.set('referralId', id);
        }
        navigate('/');
    }, [location, navigate]);

    return null;
};

export default Invite;