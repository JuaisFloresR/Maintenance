import {Schema,model,models} from "mongoose";

const unitSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Este campo es obligatorio'],
        minLength: [3, "El nombre completo debe tener 3 caracteres minimo"],
        maxLength: [35, "El nombre completo debe tener 20 caracteres maximo"],
        match: [ /[A-Za-z]{2-254}/, 'Ingrese solamente letras']
    },
    description: {
        type: String,
        required: [true, 'Este campo es obligatorio'],

    },
    status: {
        type: Boolean,
        required: [true, "Este campo es obligatorio"],
    },
    imgString:{
        type: String
    },
    serial:{
        type: Number
    },
    provider:{
        type: String
    },
    type:{
        type: String
    },
    model:{
        type: String
    },
    note:{
        type: String
    },
    ubication:{
        type: String
    },
},
{
    timestamps: true
});

// unitSchema.methods.setImgUrl = function setImgUrl(){

// }
const Unit = models.Unit || model('Unit', unitSchema)

export default Unit