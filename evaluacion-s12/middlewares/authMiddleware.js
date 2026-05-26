const API_KEY = 'eval-s12-2024';

function verificarApiKey(req, res, next) {
  const keyRecibida = req.headers['x-api-key'];

  if (!keyRecibida || keyRecibida !== API_KEY) {
    return res.status(401).json({
      ok: false,
      error: 'API key inválida o ausente'
    });
  }

  next();
}

module.exports = {
  verificarApiKey
};