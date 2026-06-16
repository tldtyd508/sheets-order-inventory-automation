const orders = [];
const inventory = [
  { sku: "FL-100", stock: 50, incoming: 20, safety: 40 },
  { sku: "FL-200", stock: 12, incoming: 10, safety: 30 },
  { sku: "FL-300", stock: 80, incoming: 0, safety: 25 }
];

function totalOrdered(sku) {
  return orders.filter((order) => order.sku === sku).reduce((sum, order) => sum + order.quantity, 0);
}

function render() {
  document.querySelector("#orders").innerHTML = orders.map((order, index) => `
    <div class="row">${order.sku} · ${order.customer} · ${order.quantity}개 <button data-index="${index}">판매 완료</button></div>
  `).join("") || "<p>등록된 수주가 없습니다.</p>";

  document.querySelector("#inventory").innerHTML = inventory.map((item) => `
    <div class="row">${item.sku} · 현재 ${item.stock} · 입고예정 ${item.incoming} · 안전재고 ${item.safety}</div>
  `).join("");

  document.querySelector("#shortage").innerHTML = inventory
    .filter((item) => item.stock + item.incoming - totalOrdered(item.sku) < item.safety)
    .map((item) => `<div class="row warning">${item.sku} 부족 예상</div>`)
    .join("") || "<p>부족 품목이 없습니다.</p>";
}

document.querySelector("#order-form").addEventListener("submit", (event) => {
  event.preventDefault();
  orders.push({
    sku: document.querySelector("#sku").value,
    customer: document.querySelector("#customer").value,
    quantity: Number(document.querySelector("#quantity").value)
  });
  event.target.reset();
  render();
});

document.querySelector("#orders").addEventListener("click", (event) => {
  if (!event.target.dataset.index) return;
  const [order] = orders.splice(Number(event.target.dataset.index), 1);
  const target = inventory.find((item) => item.sku === order.sku);
  if (target) target.stock -= order.quantity;
  render();
});

render();

