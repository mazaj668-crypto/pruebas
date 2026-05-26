function validarDatos(body) {
  const { nombre, descripcion } = body;

  if (!nombre || nombre.trim() === '') {
    return {
      valido: false,
      error: 'El campo nombre es requerido'
    };
  }

  if (!descripcion || descripcion.trim() === '') {
    return {
      valido: false,
      error: 'El campo descripcion es requerido'
    };
  }

  return { valido: true };
}

function prepararItem(body) {
  return {
    nombre: body.nombre.trim(),
    descripcion: body.descripcion.trim().toLowerCase()
  };
}

module.exports = {
  validarDatos,
  prepararItem
};