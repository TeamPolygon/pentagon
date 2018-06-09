const mongoose = require('mongoose');
const {
	Schema
} = mongoose;

/*
 * This module sets the schema for User collection inside
 * our MongoDB.
 */

const user_schema = new Schema({
	user_id: String,
	name: String,
	service: String
});


/*
 * Notifying mongoose about our new schema. If it already exists,
 * mongoose will not duplicate it.
 */
mongoose.model('users', user_schema);