import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useProductosContext } from "../contexts/ProductosContext";
import { useAuthContext } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";

function FormularioEdicion({ }) {
  const {admin} = useAuthContext();
  const {obtenerProducto, productoEncontrado, editarProducto} = useProductosContext();
  const { id } = useParams();
  const [producto, setProducto] = useState(productoEncontrado);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  if(!admin){
    return(
      <Navigate to="/login" replace/>
    )
  }

  useEffect(() => {
    obtenerProducto(id).then(() => {
      //setProducto(productoEncontrado)
      setCargando(false);
    }).catch((error) => {
      if(error == "Producto no encontrado"){
        setError("Producto no encontrado")
      }
      if(error == "Hubo un error al obtener el producto."){
        setError("Hubo un error al obtener el producto.");
      }
      setCargando(false);
    })
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validarForm = validarFormulario()
    if(validarForm == true){
      editarProducto(producto).then((prod) => {
        toast.success("Producto editado correctamente!");
      }).catch((error) => {
        toast.error('Hubo un problema al actualizar el producto. ' + error.message);
       
      })
    }else{
      dispararSweetBasico("Error en la carga de producto", validarForm, "error", "Cerrar")
    }

  };

  return (
   <div className='d-flex flex-column  justify-content-center  align-items-center min-vh-100'>
     <form onSubmit={handleSubmit} className="p-4 border rounded shadow ">
      <h2>Editar Producto</h2>
      <div>
        <label  className="form-label" >Nombre:</label>
        <input
          type="text" 
          name="name"
          value={producto.name || ''}
          onChange={handleChange}
          required 
          className="form-control" 
        />
      </div>
      <div>
        <label className="form-label">URL de la Imagen</label>
        <input
          type="text" name="imagen" value={producto.imagen} onChange={handleChange} required className="form-control" />
      </div>
      <div > 
        <label className="form-label">Precio:</label>
        <input
          type="number"
          name="price"
          value={producto.price || ''}
          onChange={handleChange}
          required
          min="0"
          className="form-control" 
        />
      </div>
      <div >
        <label className="form-label">Descripción:</label>
        <textarea
          name="description"
          value={producto.description || ''}
          onChange={handleChange}
          required
          className="form-control" 
        />
      </div>
      <button type="submit" className="btn btn-dark w-10" >Actualizar Producto</button>
      <ToastContainer/>
    </form>
   </div>
  );
}

export default FormularioEdicion