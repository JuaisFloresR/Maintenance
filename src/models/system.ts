import mongoose, {Schema,model,models} from "mongoose";

const systemSchema = new Schema({
    name: {
        type: String,
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
    asso_unit:{
        type: mongoose.Types.ObjectId
    }
    
},
{
    timestamps: true
});

// unitSchema.methods.setImgUrl = function setImgUrl(){

// }
const System = models.System || model('System', systemSchema)

export default System