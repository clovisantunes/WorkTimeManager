import prismaClient from "../../prisma/prismaClient";

class CheckWorkedHoursTodayService {
  async execute(userId: string) {
    const currentDate = new Date();

    const timeEntriesToday = await prismaClient.timeBank.findMany({
      where: {
        userId: userId,
        timestamp: {
          gte: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            0,
            0,
            0
          ),
          lt: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + 1,
            0,
            0,
            0
          ),
        },
      },
      orderBy: {
        timestamp: "asc",
      },
    });

    console.log("timeEntriesToday:", timeEntriesToday);

    let workedHoursToday = 0;

    for (let i = 0; i < timeEntriesToday.length; i += 2) {
      const entry1 = timeEntriesToday[i];
      const entry2 = timeEntriesToday[i + 1];

      if (entry1 && entry2) {
        const diffHours =
          (new Date(entry2.timestamp).getTime() -
            new Date(entry1.timestamp).getTime()) /
          (1000 * 60 * 60);
        console.log("diffHours:", diffHours);
        workedHoursToday += diffHours;
      }
    }

    console.log("workedHoursToday:", userId, workedHoursToday);

    const extraHoursThreshold = 8.75; 
    const extraHours = Math.max(0, workedHoursToday - extraHoursThreshold);

    if (extraHours > 0) {
      const workedHoursFormatted = extraHoursThreshold.toFixed(2);
      const extraHoursFormatted = extraHours.toFixed(2);
      console.log("workedHoursFormatted:", workedHoursFormatted);
      console.log("extraHoursFormatted:", extraHoursFormatted);
      return {
        workedHours: workedHoursFormatted,
        extra: extraHoursFormatted,
      };
    }

    const workedHoursFormatted = workedHoursToday.toFixed(2);
    console.log("workedHoursFormatted:", workedHoursFormatted);
    return workedHoursFormatted;
  }
}

export { CheckWorkedHoursTodayService };
