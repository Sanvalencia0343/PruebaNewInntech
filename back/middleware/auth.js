const jwt = require('jsonwebtoken');

const verifyTokenMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado' });
  }

  try {
    const decoded = jwt.verify(token, 'tu_secreto');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = verifyTokenMiddleware;
