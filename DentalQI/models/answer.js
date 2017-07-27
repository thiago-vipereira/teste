const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
	date: Date,
	patient_id: {
	    type: Schema.Types.ObjectId,
	    ref: 'patient'
	},
	anamnese_id: {
	    type: Schema.Types.ObjectId,
	    ref: 'anamneseModel'
	},
	question: String,
	type: String,
	options: [String],
	alert: String,
	answers: [String],
});

const Answer = mongoose.model('answer', answerSchema);
module.exports = Answer;