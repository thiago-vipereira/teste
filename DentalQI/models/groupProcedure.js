const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const groupProcedureSchema = new Schema({
	description: String
});

const GroupProcedure = mongoose.model('groupProcedure', groupProcedureSchema);
module.exports = GroupProcedure;