const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
	clinic_id: {
	    type: Schema.Types.ObjectId,
	    ref: 'clinic'
	},
	name: String,
	telephones: [{
		name: String,
		value: String
	}],
	email: String,
	address: String,
	state: String,
	city: String,
	zip: String,
	registry: Number,
	birthday: Date,
	age: Number,
	gender: String,
	martial: String,
	profession: String,
	civil_id: String,
	cpf: String,
	company: String,
	father: String,
	mother: String,
	father_profession: String,
	mother_profession: String,
	insurance: String,
	insurance_number: Number,
	sponsor: String,
	sponsor_insurance_number: Number,
	sponsor_cpf: Number,
	indication: String,
	first_appointment: Date,
	treatment_time: String,
	picture: String,
	status: String,
	active: Boolean,
	extra: [String]
});

const Patient = mongoose.model('patient', patientSchema);
module.exports = Patient;