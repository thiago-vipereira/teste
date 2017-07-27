const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const clinicSchema = new Schema({
	name: String,
	address: String,
	zip: String,
	city: String,
	state: String,
	users: [{
	    type: Schema.Types.ObjectId,
	    ref: 'user'
	}],
	patients: [{
	    type: Schema.Types.ObjectId,
	    ref: 'patient'
	}],
	active: Boolean,
	logo_url: String,
	document_header: String,
	document_footer:String
});

const Clinic = mongoose.model('clinic', clinicSchema);
module.exports = Clinic;