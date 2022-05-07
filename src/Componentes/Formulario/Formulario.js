import React, { useState, Fragment} from "react";

const Formulario = () => {

    const [nombre, setNombre]= useState({nombre: ""});
    const [apellido, setApellido]= useState({apellido: ""});
    const [email, setEmail]= useState({email:""});
    const [password, setPassword]=useState({password:""});
    const [confirm, setConfirm]=useState({confirm:""});
    const [hizoSubmit, setHizoSubmit]= useState(false);




    const crearUsuario =(e)=>{
        e.preventDefault();
        console.log("Nombre:"+nombre+"Apellido:"+apellido+"Email:"+email+"Passwrod:"+password+"Confirm Password:"+confirm);
    
        setNombre("");
        setApellido("");
        setEmail("");
        setPassword("");
        setConfirm("");
        setHizoSubmit(true);
    }

    const mensaje = () => {
        if(hizoSubmit){
            return "!Gracias por sus datos! Bienvenido"
        } else {
            return "Favor de llenar sus datos"
        }
    }

    return (
        <Fragment>
        <form onSubmit={crearUsuario}>
            <h2>Crear Usuario</h2>
            <div className="form-group">
                <label>Nombre</label>
                <input className="form-control" onChange={(e)=>setNombre({[e.target.name]: e.target.value})}  name="nombre" />
            </div>
            <div className="form-group">
                <label>Apellido</label>
                <input className="form-control" onChange={(e)=>setApellido({[e.target.name]: e.target.value})} name="apellido" />
            </div>
            <div className="form-group">
                <label>E-mail</label>
                <input className="form-control" onChange={(e)=>setEmail({[e.target.name]: e.target.value})} name="email" />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input className="form-control" onChange={(e)=>setPassword({[e.target.name]: e.target.value})} name="password"  type="password"/>
            </div>
            <div className="form-group">
                <label>Confirmar contraseña</label>
                <input className="form-control" onChange={(e)=>setConfirm({[e.target.name]: e.target.value})} name ="confirm"  type="password"/>
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario"/>
            {mensaje()}
        </form>
        <h2>Resultados:</h2>
            <p>Nombre:{nombre.nombre}</p>
            <p>Apellido:{apellido.apellido}</p>
            <p>E-mail:{email.email}</p>
            <p>Password:{password.password}</p>
            <p>Confirm Password:{confirm.confirm}</p>
        </Fragment>
    );

}

export default Formulario;