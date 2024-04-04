import {Schema,model,models} from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Este campo es obligatorio'],
        match: [ /.+\@.+\..+/, 'Por favor ingrese un correo valido']
    },
    password: {
        type: String,
        required: [true, 'Este campo es obligatorio'],
        select: false

    },
    idNumber: {
        type: Number,
        required: [true,"Este campo es obligatorio"],

    },
    fullname: {
        type: String,
        required: [true, "Este campo es obligatorio"],
        minLength: [3, "El nombre completo debe tener 3 caracteres minimo"],
        maxLength: [20, "El nombre completo debe tener 20 caracteres maximo"],
        match: [ /[A-Za-z]{2-254}/, 'Ingrese solamente letras'],


    }
});
const User = models.User || model('User', userSchema)

export default User