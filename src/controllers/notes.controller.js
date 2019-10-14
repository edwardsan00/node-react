const notesController = {
	getNotes: (req, res) => {
		res.json({ notes: [] })
	},
	getNote: (req, res) => {
		res.json({ message: `get ${req.params.id}` })
	},
	createNote: (req, res) => {
		res.json({ message: `post ${req.params.id}` })
	},
	updateNote: (req, res) => {
		res.json({ message: `put ${req.params.id}` })
	},
	deleteNote: (req, res) => {
		res.json({ message: `delete ${req.params.id}` })
	}
}

module.exports = notesController
