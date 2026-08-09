# 📘 README – Agenda Interactiva: Clima y Calendario de Chile

Bienvenido a la documentación completa del proyecto **"Agenda Interactiva"**, una aplicación web que integra dos herramientas útiles:

- 🌤️ **Clima Chile**: consulta el clima actual y pronóstico de 5 días para cualquier comuna de Chile, usando la API de OpenWeatherMap.
- 📅 **Calendario y Agenda**: calendario mensual con marcación de feriados chilenos (mock + preparado para API real) y gestión de actividades diarias guardadas en el navegador (localStorage).

Además, un **menú principal** (`main.html`) permite navegar entre ambas herramientas.

---

## 🗂️ Estructura de archivos

📘 README – Agenda Interactiva: Clima y Calendario de Chile

Copia todo el contenido de este bloque y pégalo en tu archivo README.md:

---

```markdown
# 📘 README – Agenda Interactiva: Clima y Calendario de Chile

Bienvenido a la documentación completa del proyecto **"Agenda Interactiva"**, una aplicación web que integra dos herramientas útiles:

- 🌤️ **Clima Chile**: consulta el clima actual y pronóstico de 5 días para cualquier comuna de Chile, usando la API de OpenWeatherMap.
- 📅 **Calendario y Agenda**: calendario mensual con marcación de feriados chilenos (mock + preparado para API real) y gestión de actividades diarias guardadas en el navegador (localStorage).

Además, un **menú principal** (`main.html`) permite navegar entre ambas herramientas.

---

## 🗂️ Estructura de archivos

```

/
├── main.html          # Página de inicio / menú principal
├── index.html         # Aplicación de clima (punto de entrada)
├── style.css          # Estilos compartidos para el clima
├── script.js          # Lógica completa del clima (API, geocoding, formulario)
├── calendario.html    # Calendario y agenda
├── calendario.css     # Estilos específicos del calendario
├── calendario.js      # Lógica del calendario (feriados, agenda, localStorage)
└── README.md          # Este archivo de documentación

```

---

## 🔧 Funcionalidad de cada archivo

### 1. `main.html` – Menú principal
- **Propósito**: punto de entrada del sitio. Muestra un título "Agenda Interactiva" y dos botones que enlazan a las herramientas.
- **Características**:
  - Fondo común con overlay oscuro.
  - Botones con efecto hover y foco.
  - Firma del desarrollador.
- **Navegación**: los botones usan `<a href="...">` para redirigir a `index.html` y `calendario.html`.

### 2. `index.html` – Clima Chile
- **Propósito**: permite seleccionar región, comuna y periodo (hoy / semana) para obtener el pronóstico.
- **Elementos**:
  - Formulario con tres `select` y un botón `submit`.
  - Área `#weatherResult` para mostrar resultados dinámicos.
  - Botón `#backButton` (oculto inicialmente) que limpia los resultados y reinicia el formulario.
  - Enlace `#mapLink` (oculto) que se muestra al obtener coordenadas, redirige a OpenStreetMap.
  - Enlace "Volver al menú principal" visible siempre.
- **Integración**: usa `script.js` para la lógica.

### 3. `style.css` – Estilos del clima
- **Propósito**: dar estilo a `index.html`.
- **Principales clases**:
  - `.container`: caja centrada con fondo celeste.
  - `.overlay`: capa oscura sobre el fondo.
  - `.gp-header`, `.gp-logo`, `.climate-legend`, `.gp-link`: para el bloque de Greenpeace.
  - `.back-link`: enlace de navegación.
  - Estilos para formulario, botones, resultados y estados (error, loading).

### 4. `script.js` – Lógica del clima
- **Datos**: `dataChile` contiene todas las regiones y comunas de Chile.
- **Funcionalidades**:
  - Carga dinámica de regiones en `#regionSelect`.
  - Al cambiar región, carga sus comunas en `#communeSelect`.
  - Al enviar el formulario:
    1. Geocodifica la comuna usando la API de OpenWeatherMap (Geocoding).
    2. Obtiene coordenadas (lat, lon).
    3. Llama a `mostrarClimaHoy()` o `mostrarClimaSemana()` según el periodo.
    4. Muestra un enlace al mapa con las coordenadas.
  - **Clima de hoy**: muestra temperatura, sensación, humedad, descripción e ícono.
  - **Clima de semana**: agrupa el pronóstico cada 3 horas por día, calcula mín/máx, humedad promedio, viento, probabilidad de precipitación y cantidad de lluvia/nieve.
- **Manejo de errores**: captura errores de API (clave inválida, sin coordenadas, etc.) y los muestra en `#weatherResult`.

### 5. `calendario.html` – Calendario y agenda
- **Propósito**: mostrar un calendario mensual con navegación entre meses, marcar feriados (mock) y días con actividades, y permitir gestionar una agenda diaria.
- **Elementos**:
  - Navegación con botones `◀` y `▶`.
  - Tabla de calendario generada dinámicamente.
  - Leyenda de colores (feriado en rojo, actividad en verde).
  - Panel de actividades: muestra las actividades del día seleccionado, permite agregar nuevas (con botón o tecla Enter) y eliminar individualmente o todas.
- **Almacenamiento**: las actividades se guardan en `localStorage` con clave `'miAgenda'`.

### 6. `calendario.css` – Estilos del calendario
- **Propósito**: estilizar `calendario.html` manteniendo coherencia visual con el clima.
- **Clases destacadas**:
  - `.container`: más ancho (max-width: 600px) para la tabla.
  - `.nav-mes`, `.nav-btn`, `.mes-titulo`: navegación.
  - `.calendario-tabla` y celdas: colores para feriado, actividad, seleccionado y días de otro mes.
  - `.panel-actividades`: fondo blanco translúcido para la agenda.
  - Estilos responsivos para móviles.

### 7. `calendario.js` – Lógica del calendario
- **Estado**: `mesActual`, `anioActual`, `diaSeleccionado`.
- **Feriados**: objeto `FERIADOS_MOCK` con fechas fijas de 2026. Se incluye código comentado para conectar con la API `feriados.io` (solo requiere clave).
- **Funciones de agenda**:
  - `getAgenda()`, `guardarAgenda()`, `obtenerActividades()`, `agregarActividad()`, `eliminarActividad()`, `eliminarTodasActividades()`.
- **Renderizado**: `renderizarCalendario(anio, mes)` pinta la tabla, aplica clases según feriado/actividad/selección y asigna eventos click a las celdas.
- **Interacción**: al hacer clic en un día, se actualiza `diaSeleccionado`, se re-renderiza y se muestran las actividades en el panel.
- **Agregar/eliminar**: los botones y el input activan las funciones de agenda y refrescan la vista.
- **Navegación**: los botones `prevMonth` y `nextMonth` cambian el mes y reinician la selección.

---

## 🧩 Glosario de elementos frecuentes en el código

### Etiquetas HTML más usadas

| Etiqueta | Uso en el proyecto |
|----------|---------------------|
| `<div>` | Contenedores principales (`.container`, `.overlay`, `.back-link`, `.panel-actividades`, etc.) |
| `<form>` | Formulario de selección de clima (`#weatherForm`) |
| `<select>` | Desplegables para región, comuna y periodo |
| `<option>` | Opciones dentro de los `select` |
| `<button>` | Botones de envío, navegación (meses), agregar/eliminar actividades |
| `<input>` | Campo de texto para nueva actividad (`#nuevaActividad`) |
| `<table>` | Tabla del calendario |
| `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` | Estructura de la tabla de calendario |
| `<a>` | Enlaces a páginas externas (Greenpeace, mapa) e internas (`main.html`) |
| `<img>` | Logos (Greenpeace, etc.) e íconos del clima |
| `<ul>`, `<li>` | Lista de actividades |
| `<h1>`, `<h2>`, `<h3>` | Títulos y subtítulos |
| `<p>` | Párrafos de texto (leyendas, descripciones) |
| `<footer>` | Pie de página |
| `<script>` | Incluye archivos JavaScript |
| `<link>` | Enlaza hojas de estilo CSS |
| `<meta>` | Configuración de charset y viewport |

---

### Atributos HTML más frecuentes

| Atributo | Ejemplo de uso |
|----------|----------------|
| `id` | Identificador único para manipulación en JS: `id="weatherForm"` |
| `class` | Asignación de estilos CSS: `class="container"` |
| `href` | Destino de enlace: `<a href="main.html">` |
| `src` | Ruta de imagen: `<img src="logo.png">` |
| `alt` | Texto alternativo para imágenes: `alt="Logo"` |
| `type` | Tipo de botón o input: `type="submit"`, `type="text"` |
| `value` | Valor de opción o input: `<option value="today">` |
| `required` | Campo obligatorio en formulario: `<select required>` |
| `disabled` | Deshabilita un campo: `<select disabled>` |
| `style` | Estilos en línea (usado para mostrar/ocultar elementos dinámicamente) |
| `data-*` | Almacena datos personalizados: `data-fecha="2026-01-01"` |
| `target="_blank"` | Abrir enlace en nueva pestaña |
| `rel="noopener"` | Seguridad al abrir enlaces externos |

---

### Funciones y métodos JavaScript clave

| Función / Método | Descripción |
|------------------|-------------|
| `document.getElementById()` | Obtener elemento por ID. |
| `document.querySelectorAll()` | Obtener todos los elementos que coinciden con un selector CSS. |
| `addEventListener()` | Asignar eventos (click, change, submit, keypress). |
| `fetch()` | Realizar peticiones HTTP a APIs (OpenWeatherMap, geocoding). |
| `async/await` | Manejo de promesas para peticiones asíncronas. |
| `response.json()` | Convertir respuesta HTTP a objeto JS. |
| `localStorage.setItem()` / `getItem()` | Guardar y recuperar datos en el almacenamiento local del navegador. |
| `JSON.parse()` / `JSON.stringify()` | Convertir objetos a string y viceversa para localStorage. |
| `Array.forEach()` | Iterar sobre arreglos (regiones, comunas, actividades). |
| `Array.find()` | Buscar un elemento en un arreglo (región por nombre). |
| `Array.map()` | Transformar arreglos (no usado directamente pero presente en el código de ejemplo de API). |
| `Object.keys()` | Obtener las claves de un objeto (fechas del pronóstico). |
| `Math.min()` / `Math.max()` | Calcular mínimos y máximos de arrays de temperaturas, etc. |
| `toFixed()` | Redondear decimales (temperatura). |
| `new Date()` | Crear objetos de fecha para formatear fechas legibles. |
| `.toLocaleDateString()` | Formatear fecha según configuración regional (es-CL). |
| `.trim()` | Eliminar espacios en blanco al principio y final de un string. |
| `classList.add()` / `remove()` / `toggle()` | Manipular clases CSS en elementos. |
| `innerHTML` | Leer o modificar el contenido HTML de un elemento. |
| `textContent` | Leer o modificar el texto sin HTML de un elemento. |
| `appendChild()` | Agregar un nodo hijo a un elemento (ej. opciones en select). |
| `createElement()` | Crear un nuevo elemento DOM. |
| `preventDefault()` | Evitar el comportamiento por defecto de un evento (envío de formulario). |
| `alert()` / `confirm()` | Mostrar mensajes modales al usuario. |

---

## 🚀 Cómo usar la aplicación

1. Abre `main.html` en tu navegador.
2. Desde el menú, elige **Clima Chile** o **Calendario y Agenda**.
3. En el clima:
   - Selecciona una región y luego una comuna.
   - Elige "Clima de hoy" o "Clima de la semana" y pulsa "Consultar Clima".
   - Verás los resultados con íconos, temperaturas y otros datos.
   - Puedes hacer clic en el enlace al mapa para ver la ubicación en OpenStreetMap.
   - Usa "Volver al menú principal" para regresar.
4. En el calendario:
   - Navega entre meses con los botones ◀ y ▶.
   - Haz clic en cualquier día para ver las actividades de ese día.
   - Agrega actividades escribiendo en el campo y pulsando "Agregar" o Enter.
   - Elimina actividades individuales con el botón ✕ o todas con el botón "Eliminar todas".
   - Los feriados (mock) aparecen en rojo con el emoji 🎉.
   - Los días con actividades se marcan en verde.
   - Usa "Volver al menú principal" para regresar.

---

## 🔐 Claves de API y configuración

- **OpenWeatherMap**: la clave `API_KEY` está incluida en `script.js` (puedes reemplazarla con la tuya si es necesario).
- **Feriados**: el código tiene un objeto `FERIADOS_MOCK` con feriados de 2026. Para usar la API real `feriados.io`, descomenta las secciones en `calendario.js` y añade tu clave.

---

## 🛠️ Posibles mejoras futuras

- Conectar el calendario con la API real de feriados.
- Sincronizar la agenda con una base de datos en la nube.
- Añadir notificaciones o recordatorios.
- Integrar el clima en el calendario: mostrar el pronóstico del día seleccionado.
- Permitir exportar/importar la agenda en formato JSON.

---

## 👨‍💻 Autor

**Alexander Wolfgang Ochsenius Geis**  
Desarrollado con asistencia de IA (DeepSeek, Gemini, Claude) como parte del programa de formación SENCE – Curso Front End Trainee, bajo la guía del Profesor Francisco Totesaut.

---

## 📄 Licencia

Este proyecto es de uso educativo y libre. Puedes modificarlo y distribuirlo según tus necesidades.

---

¡Gracias por usar Agenda Interactiva! 🌦️📅
```

---

# Proyecto-M-dulo-5.-JavaScript.-Agenda-Calendario-y-Clima--con-API-s-
Proyecto para curso Front End Trainee - SENCE 2026 - Chile
