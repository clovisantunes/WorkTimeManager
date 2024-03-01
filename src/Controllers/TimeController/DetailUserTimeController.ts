import {Request, Response } from 'express';
import { DetailUserTimeService } from '../../services/TimeBank/DetailUserTimeService';


class DetailUserTimeController{
    async handle (req: Request, res: Response){
     const detailsUserTimeService = new DetailUserTimeService();
        const  id = req.userId;
        
        const times = await detailsUserTimeService.execute(id);

        return res.json(times);
    }
}

export { DetailUserTimeController }