import { NextFunction, Request, Response } from "express";
import { verify, Secret } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Receber token
    const authToken = req.headers.authorization;

    const secret: Secret = 'secret';

    if (!authToken) {
        return res.status(401).end();  // sem return aqui
    }

    const [, token] = authToken.split(" ");

    try {
        // Validar token
        const { sub } = verify(
            token,
            secret
        ) as Payload;
        
        req.userId = sub;

        return next();
    } catch (err) {
        console.error('Erro ao validar token:', err);
        return res.status(401).json({ error: 'Token inválido' });  // Retornar JSON com erro ao invés de apenas encerrar a resposta
    }
}
