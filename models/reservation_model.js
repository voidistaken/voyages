import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  datedebut: { type: Date},
  datefin: { type: Date},
  nombrePersonnes: { type: Number},
  prixTotal: { type: Number },
  destination: {
    type: mongoose.Types.ObjectId,
    ref: 'destination_model'
  },
  voyageur: {
    type: mongoose.Types.ObjectId,
    ref: 'voyageur_model'
  },
});



const ReservationModel = mongoose.model('Reservation', reservationSchema);
export default ReservationModel;
