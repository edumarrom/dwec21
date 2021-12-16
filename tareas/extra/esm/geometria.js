/**
 * Módulo de Geometría para usar como práctica
 */

/**
 * Constante que devuelve el doble de PI
 */
export const doblePI = 2 * Math.PI,

export function areaCirculo(radio) {
    return Math.PI * (Math.pow(radio, 2));
}

export function perimetroCirculo(radio) {
    return doblePI * radio;
}
