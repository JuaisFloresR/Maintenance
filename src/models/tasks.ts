import {Schema,model,models} from "mongoose";

const taskSchema = new Schema({
    name:{
        type: String,
        required: [true, "Inserte el nombre de la tarea"]
    },
    description: {
        type: String,
        required: [true, 'Este campo es obligatorio'],

    },
    status: {
        type: Boolean,
        required: [true, "Este campo es obligatorio"],
    },
    priority:{
        type: String,
        required: [true, "Este campo es obligatorio"],

    },
    startdate: {
        type: Date,
        required: [true, "Por favor rellene la fecha"]
    },
    enddate: {
        type: Date,
        required: [true, "Por favor rellene la fecha"]
    }
    

},
{
    timestamps: true
});

// unitSchema.methods.setImgUrl = function setImgUrl(){

// }
const Task = models.User || model('Task', taskSchema)

export default Task