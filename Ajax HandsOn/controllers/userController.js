const userRepo = require('../repositories/userRepository');

exports.createUser = (req, res) => {
    const { name, contact } = req.body;
    userRepo.createUser(name, contact, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "User added successfully", id: result.insertId });
    });
};

exports.getAllUsers = (req, res) => {
    userRepo.getAllUsers((err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result);
    });
};

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const { name, contact } = req.body;

    userRepo.updateUser(id, name, contact, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "User not found" });

        res.json({ message: "User updated successfully" });
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;

    userRepo.deleteUser(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "User not found" });

        res.json({ message: "User deleted successfully" });
    });
};
