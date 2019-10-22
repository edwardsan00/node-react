const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true
		},
		name: {
			type: String,
			required: false,
			unique: false,
			trim: true
		}
	},
	{
		timestamps: true
	}
)

module.exports = model('User', UserSchema)
