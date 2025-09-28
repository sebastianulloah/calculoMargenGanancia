document.getElementById('marginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const ventaConIVA = parseFloat(document.getElementById('venta').value);
  const costoProducto = parseFloat(document.getElementById('costo').value);
  const descuentoPersonalizado = parseFloat(document.getElementById('descuentoPersonalizado').value) || 0;

  const ventaSinIVA = ventaConIVA / 1.19;
  const margenPrecio = ventaSinIVA - costoProducto;
  const margenSobrePrecio = (margenPrecio / ventaSinIVA) * 100;

  const venta5 = ventaConIVA * 0.95;
  const venta10 = ventaConIVA * 0.90;
  const ventaPersonalizado = ventaConIVA * (1 - descuentoPersonalizado / 100);

  const margen5 = ((venta5 / 1.19 - costoProducto) / (venta5 / 1.19)) * 100;
  const margen10 = ((venta10 / 1.19 - costoProducto) / (venta10 / 1.19)) * 100;
  const margenPersonalizado = ((ventaPersonalizado / 1.19 - costoProducto) / (ventaPersonalizado / 1.19)) * 100;

  document.getElementById('resultados').innerHTML = `
    <p><strong>Venta sin IVA:</strong> $${ventaSinIVA.toFixed(2)}</p>
    <p><strong>Costo del Producto:</strong> $${costoProducto.toFixed(2)}</p>
    <p><strong>Margen en precio:</strong> $${margenPrecio.toFixed(2)}</p>
    <p><strong>Margen de ganancia (sobre precio sin IVA):</strong> ${margenSobrePrecio.toFixed(2)}%</p>
    <hr />
    <p><strong>Margen con 5% de descuento:</strong> ${margen5.toFixed(2)}%</p>
    <p><strong>Margen con 10% de descuento:</strong> ${margen10.toFixed(2)}%</p>
    <p><strong>Margen con ${descuentoPersonalizado}% de descuento:</strong> ${margenPersonalizado.toFixed(2)}%</p>
  `;
});
