export function getTime(offset) {
    const diffGMTAndLocal = -(new Date().getTimezoneOffset() / 60);
    const userOffset =  offset - diffGMTAndLocal;

    return new Date( new Date().getTime() + (userOffset * 3600 * 1000))
}
