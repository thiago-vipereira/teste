const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const dentistSchema = new Schema({
	clinic_id: {
	    type: Schema.Types.ObjectId,
	    ref: 'clinic'
	},
	user_id: {
	    type: Schema.Types.ObjectId,
	    ref: 'user'
	},
	schedule: {
	    sun: [String],
	    mon: [String],
	    tue: [String],
	    wed: [String],
	    thu: [String],
	    fri: [String],
	    sat: [String],
	},
	vacation: [Date],
	dm_code: String,
	name: String,
	address: String,
	city: String,
	state: String,
	zip: String,
	cpf: String,
	civil_id: String,
	cro: String,
	commission: Number,
	email: String,
	telephones: [{
		name: String,
		value: String
	}],
	birthday: Date,
	speciality: String
});

const Dentist = mongoose.model('dentist', dentistSchema);
module.exports = Dentist;