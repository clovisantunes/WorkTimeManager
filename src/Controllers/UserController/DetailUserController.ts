import { Request, Response } from "express";
import { DetailUserservice } from "../../services/Users/DetailUserService";


class DetailUserController{
    async handle( req: Request, res: Response){


        const detailUserService = new DetailUserservice();
       const id = req.userId;

      

       const user = await detailUserService.execute(id);


       return res.json(user);
    }
}


export { DetailUserController }