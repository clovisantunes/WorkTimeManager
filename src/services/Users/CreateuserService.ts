import { userExists } from "../../Hooks/userExists";
import prismaClient from "../../prisma/prismaClient";
import { hash } from "bcryptjs";

interface userAdminRequest{
    name: string;
    email: string;
    password: string;
    contact: string;
    local: string;
    admin: boolean;
}
class CreateUserService{
    async execute({name, email, password, contact, local, admin}: userAdminRequest){
        const exists = await userExists(email);

        if (exists) {
          throw new Error("User already exists");
        }
    
        const passwordHash = await hash(password, 8)
        const userAdmin = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
                contact: contact,
                local: local,
                admin: admin
            },
            select:{
                id:true,
                name:true,
                email:true,
                admin: true
            }
        })
        return userAdmin;
    }
}
export { CreateUserService }