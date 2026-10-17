# AGENTS.md

Guía para agentes de programación en este repositorio. Todo lo listado fue verificado leyendo archivos; lo inferido está marcado como *(inferido)*. Los comandos **no fueron ejecutados** al redactar esta guía.

## Resumen

Portfolio personal de Francisco Orozco (frakoDev): SPA de una sola página, sin backend propio. Stack: React 18 + Vite 4 (`@vitejs/plugin-react-swc`), JavaScript con JSX (sin TypeScript), CSS plano por componente. Dependencias de runtime: `react`, `react-dom`, `react-simple-typewriter`, `sweetalert2`, `@formspree/react`. El despliegue parece ser Vercel (`og:url` en [index.html](index.html) apunta a `frako-dev.vercel.app`) *(inferido, no hay config de despliegue en el repo)*.

## Comandos

Se ejecutan desde la raíz del repo. Gestor: npm (existe `package-lock.json`).

| Tarea | Comando |
|---|---|
| Instalar | `npm install` |
| Desarrollo | `npm run dev` |
| Desarrollo accesible en red local | `npm run host` |
| Lint | `npm run lint` (ESLint 8, `--max-warnings 0`: cualquier warning falla) |
| Build | `npm run build` (salida en `dist/`, ignorado por git) |
| Previsualizar build | `npm run preview` |

No hay script de pruebas, ni typecheck, ni formateador (Prettier) configurados.

## Mapa del repositorio

- [src/main.jsx](src/main.jsx): punto de entrada; monta `<App />` en `StrictMode` e importa `index.css`.
- [src/App.jsx](src/App.jsx): compone las secciones en orden: `Header`, `FloatingNav`, `Home`, `Resume`, `Portfolio`, `Contact`, `Footer`. Maneja el tema (`dark` por defecto) escribiendo `document.documentElement.dataset.theme`.
- `src/components/<Seccion>/`: cada sección tiene su `.jsx` y su `.css` (`Head`, `Hero`, `Resume`, `Portfolio`, `Contact`, `Blog`, `Features`, `Testimonial`, y `Footer.jsx` suelto).
- Contenido en archivos de datos, separado de la presentación: [Portfolio_data.js](src/components/Portfolio/Portfolio_data.js), [ResumeApi.js](src/components/Resume/ResumeApi.js), y `*Api.jsx` en Blog, Features y Testimonial.
- [src/logic/iconSwitch.jsx](src/logic/iconSwitch.jsx): `switch` que mapea el nombre de una tecnología (string de `technologies`) a un componente SVG de [src/assets/icons/](src/assets/icons/).
- [src/index.css](src/index.css) y [src/App.css](src/App.css): estilos globales y tokens de tema.
- [public/](public/): estáticos (p. ej. `CV-Francisco.pdf`).
- `.agents/skills/`, `.claude/`, `.specify/`: tooling de agentes (skills, Spec Kit). No forman parte de la app; `.claude/` y `.specify/` están sin versionar. [skills-lock.json](skills-lock.json) fija las skills instaladas.

## Convenciones (observadas)

- Componentes funcionales como `const X = () => {}` con `export default`, archivos `.jsx` en PascalCase.
- Props sin PropTypes: los archivos que reciben props usan `/* eslint-disable react/prop-types */` al inicio (ver [Portfolio/Card.jsx](src/components/Portfolio/Card.jsx)). Sigue ese patrón en lugar de añadir `prop-types`.
- Estilos: un `.css` por sección importado desde su componente, con clases globales (no CSS Modules) y variables CSS de tema (`var(--accent)`). El tema claro/oscuro se controla con `data-theme` en `<html>`.
- Comillas dobles y punto y coma en el código reciente; el estilo no está forzado por ninguna herramienta.
- Nombres con errores ortográficos que son parte del contrato interno (`proyectUrl`, `Portfolio_data`): no los renombres sin pedido explícito.
- El contenido visible del sitio está en inglés; los comentarios del código están mezclados (inglés/español).

## Dónde agregar cambios

- **Nuevo proyecto en el portfolio**: añadir un objeto a [Portfolio_data.js](src/components/Portfolio/Portfolio_data.js) con `category`, `title`, `technologies`, `image`, `description` (array de strings) y `proyectUrl`. Las imágenes existentes se referencian por URL absoluta de `raw.githubusercontent.com/frako23/frakoDev/main/...`, así que la imagen debe estar en `main` para verse en producción.
- **Nueva tecnología**: crear el SVG en `src/assets/icons/` y registrar el `case` en [iconSwitch.jsx](src/logic/iconSwitch.jsx). Verifica en el archivo qué devuelve el `default` para tecnologías sin icono.
- **Educación/experiencia**: [ResumeApi.js](src/components/Resume/ResumeApi.js) (campos `id`, `category`, `year`, `title`, `desc`, `rate`).
- **Estilos/tema**: la sección correspondiente en su `.css`; tokens globales en `index.css`. La intención de diseño está documentada en [REDESIGN.md](REDESIGN.md).

## Pruebas

No existen pruebas ni framework de pruebas. La validación disponible es `npm run lint` y `npm run build`; para cambios visuales, revisar con `npm run dev` en ambos temas y en ancho móvil (el historial de commits muestra ajustes frecuentes para móviles).

## Restricciones y zonas delicadas

- `Blog`, `Features` y `Testimonial` existen pero **no se montan** en `App.jsx`; confirma con el usuario antes de borrarlos o conectarlos.
- El formulario de [Contact.jsx](src/components/Contact/Contact.jsx) hoy hace `preventDefault()` y **no envía nada**, aunque `@formspree/react` y `sweetalert2` están en dependencias. No presentes el formulario como funcional ni lo conectes a un servicio externo sin autorización.
- Los iconos `fa-*` de Font Awesome se usan en JSX; no se encontró dónde se carga la librería (revisa [index.html](index.html) antes de tocarlos). El README lista como pendiente migrarlos a SVG.
- [index.html](index.html) contiene metadatos Open Graph/Twitter con URLs absolutas y el `<title>` actual tiene un formato inusual (`{frakoDev: "Software Developer"}`); no los cambies sin que se pida.
- No edites `dist/`, `node_modules/` ni `package-lock.json` a mano.

## Seguridad

- No se encontró archivo `.env` ni `.env.example`; no hay variables de entorno documentadas. No crees ni leas archivos `.env`; no incluyas claves (p. ej. IDs de Formspree) en el código ni en respuestas.
- Requieren autorización explícita: despliegues, `git push`, operaciones destructivas de git, y cualquier envío de datos a servicios externos.

## Flujo de trabajo

1. Lee los archivos relacionados (componente, su CSS y su archivo de datos) antes de editar.
2. Respeta las convenciones anteriores y limita el cambio al alcance pedido.
3. No revertir ni sobrescribir cambios ajenos o preexistentes; el árbol puede tener archivos sin versionar (`.claude/`, `.specify/`).
4. No añadas dependencias ni cambies contratos públicos (forma de los objetos de datos, ids de sección `#resume`, `#portfolio`, `#contact` usados por `FloatingNav`) sin autorización.
5. Valida con `npm run lint` y `npm run build`; informa qué ejecutaste, el resultado y qué no pudiste ejecutar.
6. Actualiza [README.md](README.md) o [REDESIGN.md](REDESIGN.md) si el cambio altera lo que describen.

## Documentación relacionada

- [README.md](README.md): bio del autor (en inglés) y lista de optimizaciones pendientes (iconos FA→SVG, fuente local, pastillas de tecnologías).
- [REDESIGN.md](REDESIGN.md): dirección visual, tipografías (`Fraunces`, `Inter Tight`, `IBM Plex Mono`) y sistema de color.
- [.specify/memory/constitution.md](.specify/memory/constitution.md) y las skills `speckit-*`: solo relevantes si el usuario pide trabajar con Spec Kit.

## Puntos pendientes de revisión humana

- No hay CI/CD en el repo (no existe `.github/`); el mecanismo de despliegue es solo una inferencia.
- Revisar si `.claude/` y `.specify/` deben versionarse o añadirse a `.gitignore`.
- Si el proyecto crece (pruebas, TypeScript), conviene ampliar esta guía; no hay áreas lo bastante distintas para justificar `AGENTS.md` en subdirectorios.
