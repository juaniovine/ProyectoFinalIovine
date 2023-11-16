import React, {useState} from 'react'
import './styles.css'


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
    <form className='form-page' onSubmit={handleSubmit}>
      <label className='form-name'>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label className='form-lastname'>
        Apellido:
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </label>
      <label className='form-email'>
        E-mail:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <input className='submit-button' type="submit" value="Enviar" />
    </form>
  );
}
