import { Router, Request, Response } from 'express';
import { CreateUserController } from './Controllers/UserController/CreateUserController';
import { DetailUserController } from './Controllers/UserController/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { AuthUserController } from './Controllers/UserController/AuthUserController';
import { AddTimeController } from './Controllers/TimeController/AddTimeController';
import { DetailUserTimeController } from './Controllers/TimeController/DetailUserTimeController';
import { CheckWorkedHoursTodayController } from './Controllers/TimeController/WorkedHoursController';
const router = Router();

router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.post('/time', isAuthenticated, new AddTimeController().handle)
router.get('/timeDetails', isAuthenticated, new DetailUserTimeController().handle)
router.get('/worked', isAuthenticated, new CheckWorkedHoursTodayController().handle)


export { router };