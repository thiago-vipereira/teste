const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
	question: String,
	type: String,
	options: [String],
	alert:[String]
});

const Question = mongoose.model('question', questionSchema);
module.exports = Question;