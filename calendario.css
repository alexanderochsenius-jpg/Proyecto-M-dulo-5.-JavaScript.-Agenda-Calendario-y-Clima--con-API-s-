// ------------------------------------------------------------
// 1. ESTADO Y VARIABLES GLOBALES
// ------------------------------------------------------------
let fechaActual = new Date(); // mes y año actuales
let mesActual = fechaActual.getMonth();
let anioActual = fechaActual.getFullYear();

// Día seleccionado (formato "YYYY-MM-DD")
let diaSeleccionado = null;

// Feriados de Chile (mock, pero puedes reemplazar con llamada a API)
// Aquí tienes algunos feriados fijos de ejemplo para 2026.
const FERIADOS_MOCK = {
    '2026-01-01': 'Año Nuevo',
    '2026-04-03': 'Viernes Santo',
    '2026-04-04': 'Sábado Santo',
    '2026-05-01': 'Día del Trabajo',
    '2026-05-21': 'Día de las Glorias Navales',
    '2026-06-29': 'San Pedro y San Pablo',
    '2026-07-16': 'Día de la Virgen del Carmen',
    '2026-08-15': 'Asunción de la Virgen',
    '2026-09-18': 'Independencia Nacional',
    '2026-09-19': 'Día de las Glorias del Ejército',
    '2026-10-12': 'Encuentro de Dos Mundos',
    '2026-10-31': 'Día de las Iglesias Evangélicas',
    '2026-11-01': 'Día de Todos los Santos',
    '2026-12-08': 'Inmaculada Concepción',
    '2026-12-25': 'Navidad'
};

// ------------------------------------------------------------
// 2. REFERENCIAS AL DOM
// ------------------------------------------------------------
const calendarioBody = document.getElementById('calendarioBody');
const monthYear = document.getElementById('monthYear');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const fechaSeleccionada = document.getElementById('fechaSeleccionada');
const listaActividades = document.getElementById('listaActividades');
const nuevaActividadInput = document.getElementById('nuevaActividad');
const agregarBtn = document.getElementById('agregarBtn');
const eliminarDiaBtn = document.getElementById('eliminarDiaBtn');

// ------------------------------------------------------------
// 3. FUNCIONES DE AGENDA (localStorage)
// ------------------------------------------------------------
function getAgenda() {
    const data = localStorage.getItem('miAgenda');
    return data ? JSON.parse(data) : {};
}

function guardarAgenda(agenda) {
    localStorage.setItem('miAgenda', JSON.stringify(agenda));
}

function obtenerActividades(fecha) {
    const agenda = getAgenda();
    return agenda[fecha] || [];
}

function agregarActividad(fecha, texto) {
    if (!texto.trim()) return false;
    const agenda = getAgenda();
    if (!agenda[fecha]) agenda[fecha] = [];
    agenda[fecha].push(texto.trim());
    guardarAgenda(agenda);
    return true;
}

function eliminarActividad(fecha, indice) {
    const agenda = getAgenda();
    if (agenda[fecha]) {
        agenda[fecha].splice(indice, 1);
        if (agenda[fecha].length === 0) delete agenda[fecha];
        guardarAgenda(agenda);
        return true;
    }
    return false;
}

function eliminarTodasActividades(fecha) {
    const agenda = getAgenda();
    if (agenda[fecha]) {
        delete agenda[fecha];
        guardarAgenda(agenda);
        return true;
    }
    return false;
}

// ------------------------------------------------------------
// 4. FUNCIONES PARA OBTENER FERIADOS (mock o API)
// ------------------------------------------------------------
// Puedes reemplazar FERIADOS_MOCK con una llamada real a feriados.io
// Ejemplo de llamada real (descomentar y configurar):
/*
async function cargarFeriadosDesdeAPI(anio) {
    const API_KEY = 'TU_CLAVE'; // Reemplaza con tu clave
    const url = `https://api.feriados.io/v1/CL/holidays/${anio}`;
    try {
        const response = await fetch(url, {
            headers: { "Authorization": `Bearer ${API_KEY}` }
        });
        if (!response.ok) throw new Error('Error al obtener feriados');
        const data = await response.json();
        // Convertir array a objeto fecha -> nombre
        const feriados = {};
        data.data.forEach(f => { feriados[f.date] = f.name; });
        return feriados;
    } catch (error) {
        console.error('Error con API de feriados:', error);
        return {}; // Fallback a mock
    }
}
*/

// Por ahora usamos el mock
function obtenerFeriados(anio) {
    // Filtrar solo los feriados del año solicitado
    const resultado = {};
    Object.keys(FERIADOS_MOCK).forEach(fecha => {
        if (fecha.startsWith(String(anio))) {
            resultado[fecha] = FERIADOS_MOCK[fecha];
        }
    });
    return resultado;
}

// ------------------------------------------------------------
// 5. RENDERIZAR CALENDARIO
// ------------------------------------------------------------
function renderizarCalendario(anio, mes) {
    const feriados = obtenerFeriados(anio);
    const agenda = getAgenda();

    // Actualizar título
    const nombresMeses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    monthYear.textContent = `${nombresMeses[mes]} ${anio}`;

    // Obtener primer día del mes y cantidad de días
    const primerDia = new Date(anio, mes, 1);
    const ultimoDia = new Date(anio, mes + 1, 0);
    const numDias = ultimoDia.getDate();

    // Día de la semana del primer día (0 = domingo, 1 = lunes...)
    let diaSemanaInicio = primerDia.getDay();
    // Ajustamos para que la semana empiece en lunes (en JS domingo = 0)
    diaSemanaInicio = (diaSemanaInicio === 0) ? 6 : diaSemanaInicio - 1;

    // Construir el HTML de la tabla
    let html = '';
    let dia = 1;

    // Primera fila
    for (let i = 0; i < 6; i++) { // máximo 6 filas
        html += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < diaSemanaInicio) {
                // Días del mes anterior
                const diaMesAnt = new Date(anio, mes, 0).getDate() - (diaSemanaInicio - j - 1);
                html += `<td class="otro-mes">${diaMesAnt}</td>`;
            } else if (dia > numDias) {
                // Días del mes siguiente
                const diaSig = dia - numDias;
                html += `<td class="otro-mes">${diaSig}</td>`;
                dia++;
            } else {
                // Día del mes actual
                const fechaStr = `${anio}-${String(mes+1).padStart(2,'0')}-${String(dia).padStart(2,'0')}`;
                const esFeriado = feriados.hasOwnProperty(fechaStr);
                const tieneActividad = agenda.hasOwnProperty(fechaStr) && agenda[fechaStr].length > 0;
                const esSeleccionado = (fechaStr === diaSeleccionado);

                let clase = '';
                if (esFeriado) clase += ' feriado';
                if (tieneActividad) clase += ' actividad';
                if (esSeleccionado) clase += ' seleccionado';

                // Título emergente con nombre del feriado
                let titulo = '';
                if (esFeriado) titulo = `Feriado: ${feriados[fechaStr]}`;

                html += `<td class="${clase}" data-fecha="${fechaStr}" title="${titulo}">${dia}</td>`;
                dia++;
            }
        }
        html += '</tr>';
        if (dia > numDias + 7) break;
    }

    calendarioBody.innerHTML = html;

    // Asignar evento click a cada celda
    document.querySelectorAll('.calendario-tabla td:not(.otro-mes)').forEach(td => {
        td.addEventListener('click', function() {
            const fecha = this.dataset.fecha;
            if (fecha) {
                diaSeleccionado = fecha;
                renderizarCalendario(anio, mes); // re-render para marcar selección
                mostrarActividades(fecha);
            }
        });
    });
}

// ------------------------------------------------------------
// 6. MOSTRAR ACTIVIDADES DE UN DÍA
// ------------------------------------------------------------
function mostrarActividades(fecha) {
    const actividades = obtenerActividades(fecha);
    const fechaObj = new Date(fecha + 'T00:00:00');
    const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const fechaLegible = fechaObj.toLocaleDateString('es-CL', opciones);
    fechaSeleccionada.textContent = `📅 ${fechaLegible}`;

    // Ver si es feriado
    const feriados = obtenerFeriados(anioActual);
    if (feriados[fecha]) {
        fechaSeleccionada.textContent += ` (Feriado: ${feriados[fecha]})`;
    }

    listaActividades.innerHTML = '';
    if (actividades.length === 0) {
        listaActividades.innerHTML = '<li>No hay actividades para este día.</li>';
    } else {
        actividades.forEach((act, idx) => {
            const li = document.createElement('li');
            li.textContent = act;
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = '✕';
            btnEliminar.className = 'eliminar-actividad';
            btnEliminar.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm(`¿Eliminar "${act}"?`)) {
                    eliminarActividad(fecha, idx);
                    mostrarActividades(fecha);
                    renderizarCalendario(anioActual, mesActual); // actualizar colores
                }
            });
            li.appendChild(btnEliminar);
            listaActividades.appendChild(li);
        });
    }

    // Guardar fecha seleccionada para agregar actividades
    diaSeleccionado = fecha;
}

// ------------------------------------------------------------
// 7. AGREGAR ACTIVIDAD
// ------------------------------------------------------------
agregarBtn.addEventListener('click', () => {
    const texto = nuevaActividadInput.value.trim();
    if (!diaSeleccionado) {
        alert('Primero selecciona un día en el calendario.');
        return;
    }
    if (!texto) {
        alert('Escribe una actividad.');
        return;
    }
    if (agregarActividad(diaSeleccionado, texto)) {
        nuevaActividadInput.value = '';
        mostrarActividades(diaSeleccionado);
        renderizarCalendario(anioActual, mesActual); // actualizar colores
    }
});

// Permitir agregar con Enter
nuevaActividadInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarBtn.click();
    }
});

// ------------------------------------------------------------
// 8. ELIMINAR TODAS LAS ACTIVIDADES DEL DÍA
// ------------------------------------------------------------
eliminarDiaBtn.addEventListener('click', () => {
    if (!diaSeleccionado) {
        alert('Selecciona un día primero.');
        return;
    }
    if (confirm(`¿Eliminar todas las actividades del ${diaSeleccionado}?`)) {
        if (eliminarTodasActividades(diaSeleccionado)) {
            mostrarActividades(diaSeleccionado);
            renderizarCalendario(anioActual, mesActual);
        }
    }
});

// ------------------------------------------------------------
// 9. NAVEGACIÓN ENTRE MESES
// ------------------------------------------------------------
prevMonthBtn.addEventListener('click', () => {
    mesActual--;
    if (mesActual < 0) {
        mesActual = 11;
        anioActual--;
    }
    diaSeleccionado = null;
    renderizarCalendario(anioActual, mesActual);
    // Limpiar panel de actividades
    fechaSeleccionada.textContent = 'Selecciona un día';
    listaActividades.innerHTML = '<li>No hay actividades para este día.</li>';
});

nextMonthBtn.addEventListener('click', () => {
    mesActual++;
    if (mesActual > 11) {
        mesActual = 0;
        anioActual++;
    }
    diaSeleccionado = null;
    renderizarCalendario(anioActual, mesActual);
    fechaSeleccionada.textContent = 'Selecciona un día';
    listaActividades.innerHTML = '<li>No hay actividades para este día.</li>';
});

// ------------------------------------------------------------
// 10. INICIALIZAR
// ------------------------------------------------------------
renderizarCalendario(anioActual, mesActual);

// Si quieres cargar feriados desde API al inicio, descomenta:
// (async () => {
//     const feriadosAPI = await cargarFeriadosDesdeAPI(anioActual);
//     Object.assign(FERIADOS_MOCK, feriadosAPI);
//     renderizarCalendario(anioActual, mesActual);
// })();