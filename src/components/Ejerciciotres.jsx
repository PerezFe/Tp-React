import { useState } from "react";


const Ejerciciotres = (props) => {
    const [texto, setTexto] = useState("")

    const escribir = ()=>{
        console.log("desde el boton")
        setTexto("(from changed state)!")
    }

    return (

        <div>
           <h2>Hello {props.saludarAmigo} {texto}</h2>
           <button onClick={escribir}>Click Me</button>
        </div>
    );
};

export default Ejerciciotres;