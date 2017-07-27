const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const documentModelSchema = new Schema({
	clinic_id: {
	    type: Schema.Types.ObjectId,
	    ref: 'clinic'
	},
	name: String,
	html: String,
	document_header: String,
	document_footer: String,
	type: String
});

const DocumentModel = mongoose.model('documentModel', documentModelSchema);
module.exports = DocumentModel;