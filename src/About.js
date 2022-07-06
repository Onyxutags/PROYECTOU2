import React from "react";
import "./index.css"

const Mostrardatos = () => {

    return (
        <div>
            <div>
                <img className="perfiles" src="./Onyx.jpeg.webp" alt="perfil"></img>
            </div>
            <div>
            <h1>Onyx Ricardo Ríos Valencia </h1><br></br>
            <h5>Universidad Tecnológica de Aguascalientes Student </h5><br></br>

            <div class="hobbies">
        <table>
            <tr>
                <td> "Jugar Videojuegos" </td>
            </tr>
            <tr>
                <td> "Ver Series" </td>
            </tr>
            <tr>
                <td> "Hacer Quehacer" </td>
            </tr>
            <tr>
                <td> "Jugar Futbol" </td>
            </tr>
            <tr>
                <td> Ir al Trabajo" </td>
            </tr>
        </table>
    </div>
            </div>
        </div>
     );

};
export default Mostrardatos;