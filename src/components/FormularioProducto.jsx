import React, { useState } from 'react';
import { dispararSweetBasico } from '../assets/SwetAlert';
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { useProductosContext } from '../contexts/ProductosContext';

function FormularioProducto({}) {
  const {agregarProducto} = useProductosContext();
  const {admin} = useAuthContext();

  const [producto, setProducto] = useState({
    name: '',
    price: '',
    description: '',
    imagen: ""
  });

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return("El nombre es obligatorio.")
    }
    if (!producto.price || producto.price <= 0) {
      return("El precio debe ser mayor a 0.")
    }
    console.log(producto.description.trim())
    if (!producto.description.trim() || producto.description.length < 10) {
      return("La descripción debe tener al menos 10 caracteres.")
    }
    if(!producto.imagen.trim()){
      return("La url de la imgaen no debe estar vacía")
    }
    else{
      return true
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const validarForm = validarFormulario()
    if (validarForm == true) {
      agregarProducto(producto).then((data) => {
        setProducto({ name: '', price: '', description: '', imagen: ""});
      }).catch((error) => {
        dispararSweetBasico("Hubo un problema al agregar el producto", error, "error", "Cerrar")
      })
    } else{
      dispararSweetBasico("Error en la carga de producto", validarForm, "error", "Cerrar")
    }
  }

  if(!admin){
    return(
      <Navigate to="/login" replace/>
    )
  }

  return ( 
   <div className='d-flex flex-column  justify-content-center  align-items-center'>
     <form onSubmit={handleSubmit2} className="p-4 border rounded shadow w-0">
      <h2>Agregar Producto</h2>
      <div >
        <label className="form-label" >Nombre:</label>
        <input
          type="text" name="name" value={producto.name} onChange={handleChange} required className="form-control"/>
      </div>
      <div> 
        <label className="form-label" >URL de la Imagen</label>
        <input
          type="text" name="imagen" value={producto.imagen} onChange={handleChange} required className="form-control" />
      </div>
      <div>
        <label className="form-label">Precio:</label>
        <input type="number" name="price" value={producto.price} onChange={handleChange} required
          min="0" className="form-control" />
      </div>
       <div>
        <label className="form-label">Descripción:</label>
        <textarea
          name="description"
          value={producto.description}
          onChange={handleChange}
          required
          className="form-control" 
        />
      </div>
      <button type="submit" className="btn btn-dark ">Agregar Producto</button>
    </form>
   </div>
  );
}

export default FormularioProducto;
  