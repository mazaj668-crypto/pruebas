# API Items

## Instalación

```bash
npm install
```

## Ejecutar

```bash
npm run dev
```

## Endpoints

| Método | Ruta | Auth |
|---|---|---|
| GET | /items | No |
| GET | /items?nombre= | No |
| GET | /items/:id | No |
| POST | /items | 🔒 API Key |
| PUT | /items/:id | 🔒 API Key |
| DELETE | /items/:id | 🔒 API Key |

## Seguridad

### API Key

Header requerido:

```txt
x-api-key: eval-s12-2024
```

### HTTPS

HTTPS protege la comunicación entre cliente y servidor mediante cifrado TLS/SSL.

Evita que terceros puedan leer o modificar información sensible.

Es obligatorio en producción para proteger credenciales y datos privados.
