export async function obtenerDatos() {
    const r = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=-34.6131516&lon=-58.3772316&%20exclude=hourly,daily&units=metric&lang=es&appid=eb3dd48864e3ddccba5d986077679eee")
    if (!r.ok) {
        throw new Error('API Error');
    }

    return r.json();
};



export default obtenerDatos