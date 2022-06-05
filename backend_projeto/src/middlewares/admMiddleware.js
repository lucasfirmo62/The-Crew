import jwt from 'jsonwebtoken';
import { API_SECRET } from '../config/constants.js'

const admMiddleware = (req, res, next) => {
    try{
        const { authorization } = req.headers;
        
        if(!authorization) return res.sendStatus(401);

        let tokenAcesso = authorization.replace("Bearer ", "").trim();

        const data = jwt.verify(tokenAcesso, API_SECRET);
        
        const { authProfessor } = data;
        
        if(!authProfessor.admin) return res.sendStatus(401);
        
        req.professorId = authProfessor.id;

        return next();
    }
    catch{
        return res.sendStatus(401);
    }
}

export default admMiddleware;