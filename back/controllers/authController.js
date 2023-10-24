const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/config'); 
const { verifyToken } = require('./middleware/auth');

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

const logout = (req, res) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, 'tu_secreto_secreto', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido' });
    }
    res.status(200).json({ message: 'Cierre de sesión exitoso' });
  });
};


module.exports = {
  login,
  logout
};
