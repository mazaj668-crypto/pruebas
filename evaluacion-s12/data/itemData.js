let items = [
  {
    id: 1,
    nombre: 'Pan',
    descripcion: 'Pan integral'
  }
];

function getAll() {
  return items;
}

function getById(id) {
  return items.find(item => item.id === id);
}

function crear(data) {
  const nuevo = {
    id: items.length + 1,
    ...data
  };

  items.push(nuevo);
  return nuevo;
}

function actualizar(id, data) {
  const index = items.findIndex(item => item.id === id);

  if (index === -1) return null;

  items[index] = {
    ...items[index],
    ...data
  };

  return items[index];
}

function eliminar(id) {
  const index = items.findIndex(item => item.id === id);

  if (index === -1) return null;

  const eliminado = items[index];
  items.splice(index, 1);

  return eliminado;
}

module.exports = {
  getAll,
  getById,
  crear,
  actualizar,
  eliminar
};