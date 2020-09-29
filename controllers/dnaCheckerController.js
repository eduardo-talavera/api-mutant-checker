const mongoose = require("mongoose");
const Adns = mongoose.model("Adns");

const matrixConstruct = require("../helpers/matrixConstruct");
const mutantCheck = require("../helpers/mutantCheck");

exports.checkDna = async (req, res, next) => {
  let dna = req.body.dna;
  let isInvalid = 0,
    stringNotComplete = 0;

  const regExp = /[^ATGC]/;

  dna.filter((string) => {
    if (regExp.test(string) === true) {
      isInvalid++;
    }
    if (string.length < 6) {
      stringNotComplete++;
    }
  });

  if (isInvalid > 0) {
    if (stringNotComplete > 0) {
      res.json({
        mensaje:
          "La secuencia genetica solo puede contener los valores: ATGC y la matriz esta incompleta",
      });
    } else {
      res.json({
        mensaje: "La secuencia genetica solo puede contener los valores: ATGC",
      });
    }
  } else if (stringNotComplete > 0) {
    res.json({ mensaje: "La Matriz esta incompleta" });
  } else {
    try {
      const dnaVerify = new Adns();
      // Almacenar el registro
      dnaVerify.dna = req.body.dna.toString();

      matrixCheck = new mutantCheck(matrixConstruct);

      if (matrixCheck.hasMutation(dna)) {
        dnaVerify.hasMutation = true;
        res.status(200).json({ mensaje: "Tiene Mutación" });
      } else {
        dnaVerify.hasMutation = false;
        res.status(403).json({ mensaje: "No Tiene Mutación" });
      }
      await dnaVerify.save();
    } catch (error) {
      // Si hay un error console.log y next
      console.log(`{este es el error:  ${error} }`);
      res.send(error);
      next();
    }
  }
};

// Muestra las estadisticas de los dnas verificados

exports.mostrarEstadisticas = async (req, res, next) => {
  try {
    const mutantes = await Adns.find({ hasMutation: true });
    const noMutantes = await Adns.find({ hasMutation: false });

    res.json({
      count_mutations: mutantes.length,
      count_no_mutation: noMutantes.length,
      ratio: mutantes.length / noMutantes.length,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
