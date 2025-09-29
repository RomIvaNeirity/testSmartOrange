// 🔸 Генерація HTML для однієї картки
export function createCardHTML(obj) {
  return `
    <div class="complex-card">
      <h3>${obj.name}</h3>
      <p>Тип: ${obj.type}</p>
      <p>${obj.location || ''}</p>
    </div>
  `;
}


export function renderCards({ container, data, type, startIndex, count = 3 }) {
  
}
