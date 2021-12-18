import React from "react";

export default function App() {
  const [mensajes, setMensajes] = React.useState([
    "Mensaje 1",
    "Mensaje 2",
    "Mensaje 3"
  ]); //la array mensajes tiene 3 mensajes

  return (
    <div>
      {mensajes.length > 0 && ( // si el tamaño de mensajes el mayor que 0 mostrar que tenes 3 mens sin leer
        <h1>Tienes {mensajes.length} mensajes sin leer</h1> // muestra la cantidad de mensajes a leer
      )}
    </div>
  );
}
