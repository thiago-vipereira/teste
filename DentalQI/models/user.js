const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String,
	email: String,
	address: String,
	city: String,
	state: String,
	role: {
	    type: Schema.Types.ObjectId,
	    ref: 'role'
	},
	telephones: [{
		name: String,
		value: String
	}],
	clinics: [{
	    type: Schema.Types.ObjectId,
	    ref: 'clinic'
	}],
	permissions: [{
		name: String,
		actions: [{
			read: Boolean,
			write: Boolean
		}]
	}],
	zip: String,
	password: String,
	salt: String,
	active: Boolean,
	gender: String,
	last_login: Date,
	locked: Boolean,
	birthday: Date
});

const User = mongoose.model('user', userSchema);
module.exports = User;