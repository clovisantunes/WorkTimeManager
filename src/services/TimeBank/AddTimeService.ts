import prismaClient from "../../prisma/prismaClient";

interface timeBankRequest{
    userId: string;
    timestamp: string;
    eventType: string;
    description?: string;
}

class AddTimeService{
    async execute({ userId, eventType, timestamp, description}: timeBankRequest){
        const newTimeBankEntry = await prismaClient.timeBank.create({
            data: {
                userId,
                eventType,
                timestamp,
                description,
            },
        });
        return newTimeBankEntry;
    }
}
export { AddTimeService }