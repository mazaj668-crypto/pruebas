const ItemData = require('../data/itemData');
const ItemService = require('../services/itemService');

function listar(req, res) {
  try {
    const { nombre } = req.query;

    let items = ItemData.getAll();

    if (nombre && nombre.trim() !== '') {
      const busqueda = nombre.trim().toLowerCase();

      items = items.filter(item =>
        item.nombre.toLowerCase().includes(busqueda)
      );
    }

    res.status(200).json({
      ok: true,
      total: items.length,
      items
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error.message
    });
  }
}

function obtenerPorId(req, res) {
  const id = parseInt(req.params.id);

  const item = ItemData.getById(id);

  if (!item) {
    return res.status(404).json({
      ok: false,
      error: 'Item no encontrado'
    });
  }

  res.status(200).json({
    ok: true,
    item
  });
}

function crear(req, res) {
  const { valido, error } = ItemService.validarDatos(req.body);

  if (!valido) {
    return res.status(400).json({
      ok: false,
      error
    });
  }

  const datosSeguros = ItemService.prepararItem(req.body);

  const nuevo = ItemData.crear(datosSeguros);

  res.status(201).json({
    ok: true,
    item: nuevo
  });
}

function actualizar(req, res) {
  const id = parseInt(req.params.id);

  const { valido, error } = ItemService.validarDatos(req.body);

  if (!valido) {
    return res.status(400).json({
      ok: false,
      error
    });
  }

  const datosSeguros = ItemService.prepararItem(req.body);

  const actualizado = ItemData.actualizar(id, datosSeguros);

  if (!actualizado) {
    return res.status(404).json({
      ok: false,
      error: 'Item no encontrado'
    });
  }

  res.status(200).json({
    ok: true,
    item: actualizado
  });
}

function eliminar(req, res) {
  const id = parseInt(req.params.id);

  const eliminado = ItemData.eliminar(id);

  if (!eliminado) {
    return res.status(404).json({
      ok: false,
      error: 'Item no encontrado'
    });
  }

  res.status(200).json({
    ok: true,
    item: eliminado
  });
}

module.exports = {
  listar,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};