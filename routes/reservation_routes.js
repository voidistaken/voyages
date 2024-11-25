import  express from 'express';
const router=express.Router();
import * as reservationcontroller from '../Controllers/reservation_controller.js';
router.get('/',reservationcontroller.GetAllreservation);
router.get('/:id',reservationcontroller.GetreservationById);
router.post('/',reservationcontroller.CreateReservation);
router.delete('/:id',reservationcontroller.Deletereservation);
router.patch('/:id',reservationcontroller.UpdateReservation);

export default router;
