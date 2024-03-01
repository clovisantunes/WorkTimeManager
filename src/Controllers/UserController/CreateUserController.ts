import { Request, Response } from "express";
import { CreateUserService } from "../../services/Users/CreateuserService";

class CreateUserController{
    async handle(req: Request, res: Response){
        const {name, email, password, contact, local, admin} = req.body

        const createUserService= new CreateUserService()

        const user = await createUserService.execute({
            name,
            email,
            password,
            contact,
            local,
            admin
        });
        return res.json(user)
    }
}

export { CreateUserController };