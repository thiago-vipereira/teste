const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const procedureModelSchema = new Schema({
	code: String,
	description: String,
	group: String,
	target_type: String,
	price: Number
});

const ProcedureModel = mongoose.model('procedureModel', procedureModelSchema);
module.exports = ProcedureModel;