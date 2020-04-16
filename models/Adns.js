const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const adnsSchema = new mongoose.Schema({
    dna: String,
    hasMutation: {
        type: Boolean,
        required: true,
    },
});

adnsSchema.post('save', function(error, doc, next){
    if(error.name === 'MongoError' && error.code === 11000 ) {
        next('El dna ingresado ya ha sido registrado');
    } else {
        next(error);
    }
});

module.exports = mongoose.model('Adns', adnsSchema);