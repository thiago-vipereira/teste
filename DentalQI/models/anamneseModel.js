const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const anamneseModelSchema = new Schema({
	name: String,
	questions: [{
	    type: Schema.Types.ObjectId,
	    ref: 'question'
	}]
});

const AnamneseModel = mongoose.model('anamneseModel', anamneseModelSchema);
module.exports = AnamneseModel;