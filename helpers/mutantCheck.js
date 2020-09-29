class mutantCheck {
  constructor(constructionM) {
    this.constructionM = constructionM;

    // Devuelve los bloques donde se repiten las letras
    this.findMutantBlocks = function (matrix) {
      const expR = /([ATGC])\1{3,4}/;

      // busca horizontalmente
      let horizontal = matrix.filter((string) => {
        return expR.test(string);
      });

      // Busca verticalmente
      let vertical = this.constructionM.getVertical(matrix).filter((string) => {
        return expR.test(string);
      });

      // busca diagonalmente hacia la derecha
      let rightDiagonal = this.constructionM
        .getRightDiagonal(matrix)
        .filter((string) => {
          return expR.test(string);
        });

      // busca diagonalmente hacia la izquierda
      let leftDiagonal = this.constructionM
        .getLeftDiagonal(matrix)
        .filter((string) => {
          return expR.test(string);
        });

      // retornamos todos los test
      return horizontal
        .concat(vertical)
        .concat(rightDiagonal)
        .concat(leftDiagonal);
    };

    this.hasMutation = function (matrix) {
      let blocks = this.findMutantBlocks(matrix);

      // si hay mas de una repeticion retorna true
      return blocks.length > 1;
    };

    this.showMutantBlocks = function (matrix) {
      let blocks = this.findMutantBlocks(matrix);
      if (blocks.length > 1) return blocks;
      else return [];
    };
  }
}

module.exports = mutantCheck;
