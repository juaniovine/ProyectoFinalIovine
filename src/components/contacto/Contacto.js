import React, {useState} from 'react'


export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        Apellido:
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
}
