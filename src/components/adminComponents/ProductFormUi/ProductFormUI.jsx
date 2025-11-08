export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
  // props para eliminar
  deleteId,
  onDeleteChange,
  onDelete,
  deleting,
}) => {
  return (
    <section>
      {/* Contenedor para layout: eliminar a la izquierda, formulario a la derecha */}
      <div className="product-admin-wrapper">
        <form
          className="product-delete"
          onSubmit={onDelete}
        >
          <h3>Eliminar producto por ID</h3>
          <div>
            <input
              type="text"
              name="deleteId"
              value={deleteId}
              onChange={(e) => onDeleteChange(e.target.value)}
            />
            {errors?.delete && <p className="error">{errors.delete}</p>}
          </div>
          <button className="btn danger" type="submit" disabled={deleting}>
            {deleting ? "Eliminando..." : "Eliminar"}
          </button>
        </form>

        <form className="product-form" onSubmit={onSubmit}>
          <h2>Agregar producto</h2>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={onChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label>Precio:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={onChange}
              required
            />
            {errors.price && <p className="error">{errors.price}</p>}
          </div>
          <div>
            <label>Categoria</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={onChange}
              required
            />
            {errors.category && <p className="error">{errors.category}</p>}
          </div>
          <div>
            <label>Descripcion:</label>
            <textarea
              name="description"
              value={product.description}
              onChange={onChange}
              required
            ></textarea>
            {errors.description && <p className="error">{errors.description}</p>}
          </div>
          <div>
            <label>Imagen:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
            />
            {errors.file && <p className="error">{errors.file}</p>}
          </div>
          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </form>
      </div>
    </section>
  );
};