import mongoose, {Schema,model,models} from "mongoose";

const equipmentSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Este campo es obligatorio'],
        minLength: [3, "El nombre completo debe tener 3 caracteres minimo"],
    },
    code: {
        type: String,
        unique: true,
        required: [true, 'Este campo es obligatorio'], 
    },
    description: {
        type: String,
        required: [true, 'Este campo es obligatorio'],

    },
    number: {
        type: Number,
        required: [true,"Este campo es obligatorio"],

    },
    status: {
        type: Boolean,
        required: [true, "Este campo es obligatorio"],
    },
    imgString:{
        type: String
    },
    ubication:{
        type: String
    },
    asso_subsystem:{
        type: mongoose.Types.ObjectId,
        required: [true, "Este campo es obligatorio"]
    }
},
{
    timestamps: true
});

// unitSchema.methods.setImgUrl = function setImgUrl(){

// }
const Equipment = models.Equipment || model('Equipment', equipmentSchema)

export default Equipment