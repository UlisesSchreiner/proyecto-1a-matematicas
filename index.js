module.exports = {
  /**
   *
   * @param {*} n1 de la suma
   * @param {*} n2 de la suma
   * @returns number
   */
  suma: function (n1, n2) {
    return this.esNumero(n1, n2) ? n1 + n2 : this.mensajeError();
  },
  resta: function (n1, n2) {
    return this.esNumero(n1, n2) ? n1 - n2 : this.mensajeError();
  },
  multiplicacion: function (n1, n2) {
    return this.esNumero(n1, n2) ? n1 * n2 : this.mensajeError();
  },
  division: function (n1, n2) {
    return this.esNumero(n1, n2) ? n1 / n2 : this.mensajeError();
  },
  mensajeError: function () {
    console.log("Error numerico");
  },
  esNumero: function (n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      return false;
    }
    return true;
  },
};
