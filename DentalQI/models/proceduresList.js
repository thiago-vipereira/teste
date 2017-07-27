const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const proceduresListSchema = new Schema({
	name: String,
	clinic_id: {
	    type: Schema.Types.ObjectId,
	    ref: 'clinic'
	},
	procedures: [{
	    type: Schema.Types.ObjectId,
	    ref: 'procedure'
	}]
});

const ProceduresList = mongoose.model('proceduresList', proceduresListSchema);
module.exports = ProceduresList;