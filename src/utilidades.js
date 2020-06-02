export function convertirFecha(fecha) {
    let fechaConvertida = new Date(fecha * 1000)
    let fechaADevolver = `${fechaConvertida.getDate()}/${fechaConvertida.getMonth() + 1}`
    return fechaADevolver
}