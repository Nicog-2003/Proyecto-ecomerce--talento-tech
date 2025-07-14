DESCRIPCION DEL PROYECTO
game Word es una app dedicada a vender videojuegos

Estructura del ecomerce:
1- Incio:
. Presenta un texto de bienvenida a la tienda.
. Contiene un carrousel con los ultimos 4 productos de la tienda.

2- Productos:
. Contiene todos los productos que podes encontran en la tienda.
. Tiene un buscador para encontrar un producto en especifico.

3- Detalles del producto:
Al seleccionar un producto como "usuario":
. Tiene la descripcion del producto, el nombre del producto seleccionado, la imagen del producto, y el precio.
. Tiene un boton "+" para agregar mas cantidades del producto.
. Tiene un boton "-" para restar las cantidades  del producto.
. Tiene un boton para agregar al carrito.

Al seleccionar un producto como "Admin":
. Tiene un boton que te permite  editar el producto seleccionado.
. Tiene un boton que te  permite eliminar el producto seleccionado.
. Podes editar el nombre, precio, descripcion y la URL de la imagen.
. Tiene un boton que actualiza el producto editado.
4- Carrito:
. Tiene un boton para borrar todos los productos.
. El producto seleccionadeo aparece  en el carrito: con  la cantidad , descipcion, precio y el total.
Tambien tiene un boton para eliminar  el producto.
5- Nosotros:
. Solamente tiene  breve una presentacion sobre el ecomerce.

6- Contacto
. Tiene un formulario  para contactarse (no funsional) para contactarse.

7- Login
 Tiene dos formularios, uno para  logearse y el otro para registrarse, en ambos te pide que pongas el gmail y la contraseña.
 . Si  te logeas como usuario, podes acceder al ecomerce de forma normal seleccionando los productos y  anadiendolos al carrito.
 . Si te logeas como admin,  al acceder al ecomerce  podes,  crear productos nuevos, eliminar productos  , y  editar todos los productos.
 . Al inciar sesion, en la seccion de login  hay un boton para cerrar sesion.

8- Agregar productos
. Tiene un formulario que solo es visible si accedes como "admin", en el que podes crear un producto nuevo.
. Podes añadir le el nombre, la URL de la imagen, precio, y la descripcion.
. Tiene un boton  para añadir  a la seccion de productos, el producto creado.


Tecnologias usadas: 
React con javascript.
vite.
jsx(JavaScript XML)
SweetAlert para los iconos de logeo y agregado al carrito
boostrap para darle estilo a la app.
rutas protegidas para el logeo y registro de usuario
Moockapi para la cantidad de los productos.