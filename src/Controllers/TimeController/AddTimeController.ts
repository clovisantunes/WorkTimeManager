import { Request, Response } from "express";
import { AddTimeService } from "../../services/TimeBank/AddTimeService";

class AddTimeController {
    async handle(req: Request, res: Response) {
        const { userId, timestamp, eventType, description } = req.body;
        const addTimeService = new AddTimeService();

        try {
            const time = await addTimeService.execute({
                userId,
                timestamp,
                eventType,
                description
            });

            return res.json(time);
        } catch (error) {
            console.error("Erro ao adicionar tempo:", error);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}

export { AddTimeController };
