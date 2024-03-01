// controllers/CheckWorkedHoursTodayController.ts
import { Request, Response } from 'express';
import { CheckWorkedHoursTodayService } from '../../services/TimeBank/WorkedHoursService';

class CheckWorkedHoursTodayController {
    async handle(req: Request, res: Response) {
        const userId = req.userId;

        const checkWorkedHoursTodayService = new CheckWorkedHoursTodayService();
        try {
            const workedHoursToday = await checkWorkedHoursTodayService.execute(userId);

            return res.json({ workedHoursToday });
        } catch (error) {
            console.error("Erro ao verificar horas trabalhadas hoje:", error);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}

export { CheckWorkedHoursTodayController };
