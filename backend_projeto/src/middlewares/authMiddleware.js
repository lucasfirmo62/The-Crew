import jwt from 'jsonwebtoken';
import { API_SECRET } from '../config/constants.js'

const authMiddleware = (req, res, next) => {
    try{
        const { authorization } = req.headers;
        
        if(!authorization) return res.sendStatus(401);

        let tokenAcesso = authorization.replace("Bearer ", "").trim();

        const data = jwt.verify(tokenAcesso, API_SECRET);

        const { authProfessor } = data;

        req.professorId = authProfessor.id;

        return next();
    }
    catch{
        return res.sendStatus(401);
    }
}

export default authMiddleware;