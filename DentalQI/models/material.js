const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const materialSchema = new Schema({
	name: String,
	quantity: Number,
	min: Number,
	max: Number,
	vendor_id: {
	    type: Schema.Types.ObjectId,
	    ref: 'clinic'
	},
	clinic_id: {
	    type: Schema.Types.ObjectId,
	    ref: 'clinic'
	}
});

const Material = mongoose.model('material', materialSchema);
module.exports = Material;