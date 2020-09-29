let matrixConstruct = {
  getRightDiagonal: (m) => {
    let i,
      x,
      y,
      d,
      o = [];

    // Obtenemos todas las diagonales de la parte superior
    for (i = 0; i < m.length; i++) {
      d = [];
      for (y = i, x = 0; y >= 0; y--, x++) {
        d.push(m[y][x]);
      }
      o.push(d);
    }

    // Obtenemos todas las diagonales la parte inferior
    for (i = 1; i < m[0].length; i++) {
      d = [];
      for (y = m.length - 1, x = i; x < m[0].length; y--, x++) {
        d.push(m[y][x]);
      }
      o.push(d);
    }
    return o.map((array) => {
      return array.join("");
    });
  },
  getLeftDiagonal: (m) => {
    // hacemos una copia de la matriz inversa
    let reverse = matrixConstruct.reverseMatrix(m);
    return matrixConstruct.getRightDiagonal(reverse);
  },
  // metodo para obtener todas las verticales
  getVertical: (m) => {
    let i,
      x,
      y,
      v,
      o = [];

    for (i = 0; i < m[0].length; i++) {
      v = [];
      for (y = 0, x = i; y < m.length; y++) {
        v.push(m[y][x]);
      }
      o.push(v);
    }
    return o.map((array) => {
      return array.join("");
    });
  },
  // metodo que revierte la matriz
  reverseString: (string) => {
    return string.split("").reverse().join("");
  },
  // metodo que mapea la matriz y revierte cada string del array
  reverseMatrix: (m) => {
    return m.map((string) => {
      return matrixConstruct.reverseString(string);
    });
  },
};

module.exports = matrixConstruct;
