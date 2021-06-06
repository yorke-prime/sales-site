import { Request, Response } from "express";

const create = (request: Request, response: Response): Response => {
    return response.send("OK OK OK");
};

export { create };
