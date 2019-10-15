const NoteModel = require('../models/Note')

const notesController = {
	getNotes: async (req, res) => {
		try {
			const notes = await NoteModel.find()
			res.json(notes)
		} catch (e) {
			res.json({ message: 'error' })
		}
	},
	getNote: async (req, res) => {
		try {
			const { id } = req.params
			const note = await NoteModel.findById(id)
			res.json(note)
		} catch (e) {
			res.json({ message: 'Error en el _id' })
		}

		const note = await NoteModel.find()
		res.json(note)
	},
	createNote: async (req, res) => {
		try {
			const { title, content, author } = req.body
			const newNote = new NoteModel({
				title: title,
				content: content,
				author: author
			})
			await newNote.save()
			res.status(200).json({ message: 'success' })
		} catch (e) {
			res.status(500).json({ message: 'error' })
		}
	},
	updateNote: async (req, res) => {
		try {
			const { id } = req.params
			await NoteModel.findOneAndUpdate(id, req.body)
			res.json({
				message: 'Nota actualizada'
			})
		} catch (e) {
			res.json({ message: 'Error al actualizar' })
		}
	},
	deleteNote: async (req, res) => {
		try {
			const { id } = req.params
			await NoteModel.findByIdAndDelete(id)
			res.json({
				message: 'delete note'
			})
		} catch (e) {
			res.json({ message: 'Error en el _id' })
		}
	}
}

module.exports = notesController
