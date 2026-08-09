// ------------------------------------------------------------
// 1. DATOS DE REGIONES Y COMUNAS DE CHILE (completo)
// ------------------------------------------------------------
const dataChile = [
    { region: "Arica y Parinacota", comunas: ["Arica", "Camarones", "Putre", "General Lagos"] },
    { region: "Tarapacá", comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"] },
    { region: "Antofagasta", comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"] },
    { region: "Atacama", comunas: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"] },
    { region: "Coquimbo", comunas: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"] },
    { region: "Valparaíso", comunas: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"] },
    { region: "Región Metropolitana de Santiago", comunas: ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"] },
    { region: "Libertador General Bernardo O'Higgins", comunas: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchigüe", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"] },
    { region: "Maule", comunas: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"] },
    { region: "Ñuble", comunas: ["Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "San Carlos", "Ñiquén", "San Fabián", "San Nicolás", "Coihueco", "Pinto", "El Carmen", "Pemuco", "Yungay", "Quillón", "San Ignacio"] },
    { region: "Biobío", comunas: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"] },
    { region: "La Araucanía", comunas: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"] },
    { region: "Los Ríos", comunas: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"] },
    { region: "Los Lagos", comunas: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"] },
    { region: "Aysén del General Carlos Ibáñez del Campo", comunas: ["Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Chile Chico", "Río Ibáñez"] },
    { region: "Magallanes y de la Antártica Chilena", comunas: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"] }
];

// ------------------------------------------------------------
// 2. REFERENCIAS A ELEMENTOS DEL DOM
// ------------------------------------------------------------
const regionSelect = document.getElementById('regionSelect');
const communeSelect = document.getElementById('communeSelect');
const periodSelect = document.getElementById('periodSelect');
const weatherForm = document.getElementById('weatherForm');
const weatherResult = document.getElementById('weatherResult');
const mapLink = document.getElementById('mapLink');
const backButton = document.getElementById('backButton');

// ------------------------------------------------------------
// 3. CARGAR REGIONES EN EL SELECT
// ------------------------------------------------------------
dataChile.forEach(item => {
    const opt = document.createElement('option');
    opt.value = item.region;
    opt.textContent = item.region;
    regionSelect.appendChild(opt);
});

// ------------------------------------------------------------
// 4. AL CAMBIAR REGIÓN → CARGAR COMUNAS
// ------------------------------------------------------------
regionSelect.addEventListener('change', () => {
    communeSelect.innerHTML = '<option value="">Selecciona una Comuna</option>';
    communeSelect.disabled = true;
    mapLink.style.display = 'none';

    const regionSeleccionada = regionSelect.value;
    if (!regionSeleccionada) return;

    const encontrada = dataChile.find(item => item.region === regionSeleccionada);
    if (encontrada) {
        encontrada.comunas.forEach(commune => {
            const opt = document.createElement('option');
            opt.value = commune;
            opt.textContent = commune;
            communeSelect.appendChild(opt);
        });
        communeSelect.disabled = false;
    }
});

// ------------------------------------------------------------
// 4.1 BOTÓN "VOLVER AL MENÚ PRINCIPAL"
// ------------------------------------------------------------
backButton.addEventListener('click', () => {
    // Restablecer los selects a su estado inicial
    regionSelect.value = '';
    communeSelect.innerHTML = '<option value="">Primero selecciona una región</option>';
    communeSelect.disabled = true;
    periodSelect.value = 'today';

    // Restablecer el resultado y ocultar botón/enlace
    weatherResult.innerHTML = 'Selecciona una ubicación para ver el clima.';
    mapLink.style.display = 'none';
    backButton.style.display = 'none';
});

// ------------------------------------------------------------
// 5. CONFIGURACIÓN DE OPENWEATHERMAP
// ------------------------------------------------------------
const API_KEY = 'dd575c812a922ca0a68c911b70e996eb'; // <-- Tu clave de OpenWeatherMap
const GEO_URL = 'https://api.openweathermap.org/geo/1.0/direct';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// ------------------------------------------------------------
// 6. MANEJAR ENVÍO DEL FORMULARIO (GEOCODIFICAR + CONSULTAR CLIMA)
// ------------------------------------------------------------
weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const commune = communeSelect.value;
    const period = periodSelect.value; // 'today' o 'week'

    if (!commune) {
        weatherResult.innerHTML = `<p class="error">⚠️ Por favor, selecciona una comuna.</p>`;
        mapLink.style.display = 'none';
        return;
    }

    weatherResult.innerHTML = `<p class="loading">⏳ Consultando clima en ${commune}...</p>`;
    mapLink.style.display = 'none';
    backButton.style.display = 'none';

    try {
        // --- Paso 1: Geocodificar la comuna para obtener lat/lon ---
        // Se usa la Geocoding API en lugar de buscar directamente por nombre,
        // ya que muchas comunas chilenas pequeñas no están indexadas por
        // nombre en el endpoint de clima directo.
        const geoUrl = `${GEO_URL}?q=${encodeURIComponent(commune)},CL&limit=1&appid=${API_KEY}`;
        const geoResponse = await fetch(geoUrl);

        if (!geoResponse.ok) {
            if (geoResponse.status === 401) {
                throw new Error('Clave API inválida o aún no activada. Espera unos minutos y vuelve a intentar.');
            }
            throw new Error(`Error ${geoResponse.status} al geocodificar: ${geoResponse.statusText}`);
        }

        const geoData = await geoResponse.json();

        if (!geoData || geoData.length === 0) {
            throw new Error(`No se encontraron coordenadas para "${commune}". Prueba con otra comuna cercana.`);
        }

        const { lat, lon, name } = geoData[0];
        const latFixed = lat.toFixed(4);
        const lonFixed = lon.toFixed(4);

        // --- Paso 2: Consultar el clima según el periodo elegido ---
        if (period === 'today') {
            await mostrarClimaHoy(lat, lon, name || commune);
        } else {
            await mostrarClimaSemana(lat, lon, name || commune);
        }

        // --- Paso 3: Enlace a un mapa usando lat/lon como dirección de referencia ---
        mapLink.href = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=13/${lat}/${lon}`;
        mapLink.textContent = `📍 Ver ${name || commune} en el mapa (${latFixed}, ${lonFixed})`;
        mapLink.style.display = 'inline-block';
        backButton.style.display = 'inline-block';

    } catch (error) {
        weatherResult.innerHTML = `<p class="error">❌ ${error.message}</p>`;
        mapLink.style.display = 'none';
        backButton.style.display = 'inline-block';
    }
});

// ------------------------------------------------------------
// 7. CLIMA DE HOY (clima actual puntual)
// ------------------------------------------------------------
async function mostrarClimaHoy(lat, lon, nombreComuna) {
    const weatherUrl = `${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
    const response = await fetch(weatherUrl);

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error('Clave API inválida o aún no activada. Espera unos minutos y vuelve a intentar.');
        }
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    const temp = data.main.temp.toFixed(1);
    const feelsLike = data.main.feels_like.toFixed(1);
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const latFixed = lat.toFixed(4);
    const lonFixed = lon.toFixed(4);

    weatherResult.innerHTML = `
        <h3>🌦️ Clima hoy en ${nombreComuna}</h3>
        <div style="display: flex; align-items: center; gap: 1rem;">
            <img src="${iconUrl}" alt="${description}" style="width: 70px; height: 70px;">
            <div>
                <p><strong>Temperatura:</strong> ${temp}°C</p>
                <p><strong>Sensación térmica:</strong> ${feelsLike}°C</p>
                <p><strong>Humedad:</strong> ${humidity}%</p>
                <p><strong>Descripción:</strong> ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
            </div>
        </div>
        <p style="margin-top:10px; font-size:12px; color:#555;">
            📍 Coordenadas de referencia: ${latFixed}, ${lonFixed}
        </p>
    `;
}

// ------------------------------------------------------------
// 8. CLIMA DE LA SEMANA (pronóstico agrupado por día, 5 días - plan gratuito)
// ------------------------------------------------------------
async function mostrarClimaSemana(lat, lon, nombreComuna) {
    const forecastUrl = `${FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
    const response = await fetch(forecastUrl);

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error('Clave API inválida o aún no activada. Espera unos minutos y vuelve a intentar.');
        }
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // El endpoint gratuito entrega pronóstico cada 3 horas hasta 5 días.
    // Agrupamos esos bloques por día calendario para armar un resumen diario.
    const dias = {};

    data.list.forEach(bloque => {
        const fecha = bloque.dt_txt.split(' ')[0]; // "YYYY-MM-DD"

        if (!dias[fecha]) {
            dias[fecha] = {
                temps: [],
                humedades: [],
                vientos: [],
                probPrecip: [],
                huboLluvia: false,
                huboNieve: false,
                lluviaMM: 0,
                nieveMM: 0,
                descripciones: {},
                iconos: {}
            };
        }

        const dia = dias[fecha];

        dia.temps.push(bloque.main.temp);
        dia.humedades.push(bloque.main.humidity);
        dia.vientos.push(bloque.wind.speed); // m/s
        dia.probPrecip.push(bloque.pop || 0); // 0 a 1

        if (bloque.rain && bloque.rain['3h']) {
            dia.huboLluvia = true;
            dia.lluviaMM += bloque.rain['3h'];
        }
        if (bloque.snow && bloque.snow['3h']) {
            dia.huboNieve = true;
            dia.nieveMM += bloque.snow['3h'];
        }

        const desc = bloque.weather[0].description;
        dia.descripciones[desc] = (dia.descripciones[desc] || 0) + 1;

        const icon = bloque.weather[0].icon;
        dia.iconos[icon] = (dia.iconos[icon] || 0) + 1;
    });

    const fechasOrdenadas = Object.keys(dias).sort();

    const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'short' };

    let filasHtml = '';

    fechasOrdenadas.forEach(fecha => {
        const info = dias[fecha];

        const min = Math.min(...info.temps).toFixed(1);
        const max = Math.max(...info.temps).toFixed(1);

        const humedadProm = Math.round(
            info.humedades.reduce((a, b) => a + b, 0) / info.humedades.length
        );

        // Viento promedio del día, convertido de m/s a km/h
        const vientoPromKmh = Math.round(
            (info.vientos.reduce((a, b) => a + b, 0) / info.vientos.length) * 3.6
        );

        // Probabilidad de precipitación: se usa el valor más alto del día,
        // ya que representa el momento de mayor riesgo.
        const probMaxima = Math.round(Math.max(...info.probPrecip) * 100);

        let tipoPrecipitacion = 'Sin precipitación esperada';
        if (info.huboNieve) tipoPrecipitacion = '❄️ Nieve';
        else if (info.huboLluvia) tipoPrecipitacion = '🌧️ Agua lluvia';
        else if (probMaxima > 0) tipoPrecipitacion = '🌦️ Posible precipitación';

        // Cantidad esperada de lluvia (mm acumulados en el día) con
        // categoría de intensidad según escala meteorológica estándar.
        let lluviaTexto = '';
        if (info.huboLluvia) {
            const mm = info.lluviaMM.toFixed(1);
            let categoria = 'llovizna ligera';
            if (info.lluviaMM > 7.6) categoria = 'lluvia intensa';
            else if (info.lluviaMM > 2.5) categoria = 'lluvia moderada';
            lluviaTexto = `<p style="margin:2px 0;"><strong>Lluvia esperada:</strong> ${mm} mm (${categoria})</p>`;
        }

        // Cantidad esperada de nieve, convertida de mm a cm, con
        // categoría de intensidad aproximada.
        let nieveTexto = '';
        if (info.huboNieve) {
            const cm = (info.nieveMM / 10).toFixed(1);
            let categoria = 'nieve ligera';
            if (info.nieveMM / 10 > 5) categoria = 'nieve intensa';
            else if (info.nieveMM / 10 > 1) categoria = 'nieve moderada';
            nieveTexto = `<p style="margin:2px 0;"><strong>Nieve esperada:</strong> ${cm} cm (${categoria})</p>`;
        }

        // Descripción e ícono más frecuentes del día
        const descPrincipal = Object.entries(info.descripciones).sort((a, b) => b[1] - a[1])[0][0];
        const iconPrincipal = Object.entries(info.iconos).sort((a, b) => b[1] - a[1])[0][0];
        const iconUrl = `https://openweathermap.org/img/wn/${iconPrincipal}.png`;

        // dt_txt viene en formato "YYYY-MM-DD", se agrega hora para evitar
        // desfases de zona horaria al construir el objeto Date.
        const fechaLegible = new Date(`${fecha}T12:00:00`)
            .toLocaleDateString('es-CL', opcionesFecha);

        filasHtml += `
            <div style="border-bottom:1px solid #ddd; padding:8px 0;">
                <div style="display:flex; align-items:center; justify-content:space-between;">
                    <span style="text-transform:capitalize; font-weight:bold;">${fechaLegible}</span>
                    <img src="${iconUrl}" alt="${descPrincipal}" style="width:36px; height:36px;">
                    <span>${min}°C / ${max}°C</span>
                </div>
                <div style="font-size:12px; color:#555; margin-top:4px; text-align:left;">
                    <p style="margin:2px 0;"><strong>Clima:</strong> ${descPrincipal.charAt(0).toUpperCase() + descPrincipal.slice(1)}</p>
                    <p style="margin:2px 0;"><strong>Humedad:</strong> ${humedadProm}%</p>
                    <p style="margin:2px 0;"><strong>Viento:</strong> ${vientoPromKmh} km/h</p>
                    <p style="margin:2px 0;"><strong>Prob. de precipitación:</strong> ${probMaxima}% — ${tipoPrecipitacion}</p>
                    ${lluviaTexto}
                    ${nieveTexto}
                </div>
            </div>
        `;
    });

    weatherResult.innerHTML = `
        <h3>📅 Clima de la semana en ${nombreComuna}</h3>
        <p style="font-size:12px; color:#777; margin-top:-4px;">
            (Pronóstico disponible: próximos ${fechasOrdenadas.length} días, según plan gratuito de OpenWeather)
        </p>
        ${filasHtml}
        <p style="margin-top:10px; font-size:12px; color:#555;">
            📍 Coordenadas de referencia: ${lat.toFixed(4)}, ${lon.toFixed(4)}
        </p>
    `;
}
