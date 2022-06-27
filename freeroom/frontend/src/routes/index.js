import React, { useContext } from 'react';

import { AuthContext } from '../contexts/auth';

import AppRoutes from './app_routes';
import AuthRoutes from './auth_routes';

const Routes = () => {
    const [user, setUser] = useContext(AuthContext);

    return user.auth ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;