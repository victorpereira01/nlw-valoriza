import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "3ad565f65a7acdc90a43ef35f42618d9") as IPayload;
        
        request.user_id = sub;
        
        return next();
    } catch (error) {
        return response.status(401).end();
    }

}