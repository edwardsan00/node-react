const ModelUser = require('../models/User')

const usersController = {
	getUsers: async (req, res) => {
		try {
			const result = await ModelUser.find()
			res.json(result)
		} catch (e) {
			res.json({ message: 'Error obteniendo usuarios' })
		}
	},
	getUser: async (req, res) => {
		try {
			const { id } = req.params
			const result = ModelUser.findById(id)
			res.json(result)
			return
		} catch (e) {
			res.json({ message: 'Error obteniendo usuario' })
		}
	},
	createUser: async (req, res) => {
		try {
			const { username, name } = req.body
			const newUser = new ModelUser({
				username,
				name
			})
			await newUser.save()
			res.json({ message: 'Guardado' })
		} catch (e) {
			res.json({ message: 'Error al crear usuario' })
		}
	},
	updateUser: async (req, res) => {
		try {
			const { id } = req.params
			await ModelUser.findOneAndUpdate(id, req.body)
			res.json({ message: 'Usuario Actualizado' })
		} catch (e) {
			res.json({ message: 'Error al update' })
		}
	},
	deleteUser: async (req, res) => {
		try {
			const { id } = req.params
			await ModelUser.findOneAndRemove(id)
			res.json({ message: 'Usuario elminado' })
		} catch (e) {
			res.json({ message: 'Error al eliminar' })
		}
	}
}

module.exports = usersController
