// service/CalculateWorkedHoursService.ts
import prismaClient from "../prisma/prismaClient";

class CalculateWorkedHoursService {
    async execute(userId: string, date: Date) {
        const timeEntries = await prismaClient.timeBank.findMany({
            where: {
                userId: userId,
                timestamp: {
                    gte: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
                    lt: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0, 0, 0)
                }
            },
            select: {
                timestamp: true
            },
            orderBy: {
                timestamp: 'asc'
            }
        });
        if (timeEntries.length >= 4) {
            const workedHours = timeEntries.reduce((totalHours, entry, index, array) => {
                if (index > 0) {
                    const diffHours = (entry.timestamp.getTime() - array[index - 1].timestamp.getTime()) / (1000 * 60 * 60);
                    return totalHours + diffHours;
                }
                return totalHours;
            }, 0);

            return workedHours;
        }

        return 0;
    }
}

export { CalculateWorkedHoursService };
