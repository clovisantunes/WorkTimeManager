import prismaClient from "../../prisma/prismaClient";

class DetailUserTimeService{
    async execute(userId: string){
        const times = await prismaClient.timeBank.findMany({
            where:{
                userId: userId
            },
            select:{
                userId: true,
                timestamp: true,
                eventType: true,
                description: true
            }
        })
        return times;
    }
}
export { DetailUserTimeService }