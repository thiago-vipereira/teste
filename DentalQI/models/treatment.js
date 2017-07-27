const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const treatmentSchema = new Schema({
	patient_id: {
	    type: Schema.Types.ObjectId,
	    ref: 'clinic'
	},
	procedures: [{
	    type: Schema.Types.ObjectId,
	    ref: 'procedure'
	}],
	estimates: [{
	    type: Schema.Types.ObjectId,
	    ref: 'estimate'
	}],
	active: Boolean
});

const Treatment = mongoose.model('treatment', treatmentSchema);
module.exports = Treatment;