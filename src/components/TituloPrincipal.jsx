
//componente funcional

// import React from 'react'; // no es necesario el import en la ultima version//

const TituloPrincipal = (props) => {
    return (
        <>
        <h1>Trabajo Práctico de React {props.signo}</h1>
        <hr/>
        </>
    );
};

export default TituloPrincipal;