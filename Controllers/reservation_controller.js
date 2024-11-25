import ReservationModel  from '../models/reservation_model.js';
import destinationmodel from '../models/destination_model.js';
export async function GetAllreservation(req,res){
    const reservations=await ReservationModel.find();
    res.json(reservations);
}
export async function GetreservationById(req,res){
    const reservations=await ReservationModel.findById(req.params.id);
    res.json(reservations);

}
export async function CreateReservation(req, res) {
    try {
      const reservation = req.body;
  
      const destination = await destinationmodel.findById(reservation.destination);
  

      const durationInNights = Math.ceil(
        Math.abs(new Date(reservation.datefin) - new Date(reservation.datedebut)) / (1000 * 60 * 60 * 24)
      );
  
      reservation.prixTotal = destination.prixParNuit * durationInNights * reservation.nombrePersonnes;
  
      const createdReservation = await ReservationModel.create(reservation);
      res.status(201).json(createdReservation);
    } catch (error) {
      console.error("Error creating reservation:", error.message);
      res.status(500).json({ message: 'Error creating reservation', error: error.message });
    }
  }
  
export async function Deletereservation(req,res){
    const reservations=await ReservationModel.findByIdAndDelete(req.params.id);
    res.json(reservations);

}
export async function UpdateReservation(req, res) {
    try {
      const reservationData = req.body;
  
      const reservation = await ReservationModel.findById(req.params.id);
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
  
      const destination = await DestinationModel.findById(reservationData.destination || reservation.destination);
      if (!destination) {
        return res.status(404).json({ message: 'Destination not found' });
      }
  
      const durationInNights = Math.ceil(
        Math.abs(new Date(reservationData.datefin) - new Date(reservationData.datedebut)) / (1000 * 60 * 60 * 24)
      );
  
      reservationData.prixTotal = destination.prixParNuit * durationInNights * reservationData.nombrePersonnes;
  
      const updatedReservation = await ReservationModel.findByIdAndUpdate(req.params.id, reservationData, { new: true });
      res.json(updatedReservation);
    } catch (error) {
      console.error("Error updating reservation:", error.message);
      res.status(500).json({ message: 'Error updating reservation', error: error.message });
    }
  }