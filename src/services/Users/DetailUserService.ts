import prismaClient from "../../prisma/prismaClient";

class DetailUserservice{
    async execute(userId: string){
        const user = await prismaClient.user.findMany({
            where:{
                id: userId
            }, 
            select:{
                id: true,
                name: true,
                email: true,
                contact: true,
                local: true,
                admin: true,
            }
        })
        return user;
    }
}

export { DetailUserservice }