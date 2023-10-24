const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user || user.password !== password) {
      res.status(401).json({ message: 'Credenciales inválidas' });
    } else {
      const token = jwt.sign({ id: user.id }, 'tu_secreto_secreto', {
        expiresIn: '1h',
      });
      res.json({ token });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  login,
};
