import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import {connectDB} from "@/libs/mongodb"
import User from '@/models/user'

export async function POST(request: Request){

    const {fullname,email,idNumber,password} = await request.json()
    console.log(fullname, email, password,idNumber)
    if(!password || password.length < 6) return NextResponse.json({
        message: 'La contraseña deberia tener al menos 6 caracteres'
    },{
        status:400
    })
    try {
        await connectDB()
        const userFound = await User.findOne({email,idNumber})
        if(userFound) return NextResponse.json({
            message: "El correo ya existe"
        }, {
            status: 400
        })
    
        // Crear un nuevo usuario en caso de que no existe el correo o cedula
        const hashedPassword = await bcrypt.hash(password,12)
        const user = new User({
            email: email,
            fullname: fullname,
            password: hashedPassword,
            idNumber: idNumber
        })
    
        const savedUser = await user.save()
    
        console.log(savedUser)
    
    
        return NextResponse.json(savedUser)
        
    } catch (error) {
        console.log(error)

        return NextResponse.error()
        
    }
   

}