const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status)
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  }
  
  xhr.send();
}

const result = document.querySelector('.result');


function displayResult(apiData) {
  let cards = '';
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards += cardBlock;
  })
  
  result.innerHTML = cards;
}

btn.addEventListener('click', () => {
  if (input.value === '') {
    alert('Введите число от 1 до 10');
    return;
  }
  useRequest(`https://picsum.photos/v2/list/?limit=${input.value}`, displayResult)
})
