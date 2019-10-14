const usersController = {
	getUsers: (req, res) => {
		res.json({ notes: [] })
	},
	getUser: (req, res) => {
		res.json({ message: `get ${req.params.id}` })
	},
	createUser: (req, res) => {
		res.json({ message: `post ${req.params.id}` })
	},
	updateUser: (req, res) => {
		res.json({ message: `put ${req.params.id}` })
	},
	deleteUser: (req, res) => {
		res.json({ message: `delete ${req.params.id}` })
	}
}

module.exports = usersController
