const BASE_URL = "https://690e7fabbd0fefc30a049f85.mockapi.io/products";

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }

  const result = await res.json();
  return result;
};

export const getProduct = async (id) => {
  if (!id) throw new Error("Se requiere un id para obtener el producto");
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error("No se pudo obtener el producto");
  }

  const result = await res.json();
  return result;
};

export const getAllProducts = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("No se pudieron obtener los productos");
  }

  const result = await res.json();
  return result;
};