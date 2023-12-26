function processInput() {
  const inputText = document.getElementById('inputField').value;
  const resultNumber = document.getElementById('resultNumber');

  // Вызываем функцию calculateKversum для получения результата
  const result = calculateKversum(inputText);

  // Помещаем результат в элемент resultNumber
  resultNumber.textContent = result;

  // Делаем элемент с результатом видимым
  const outputField = document.getElementById('outputField');
  outputField.style.display = 'block';
}

  // Функция для вычисления кверсуммы слова в заданной системе нумерологии
function calculateKversum(word) {
  const numerologyValuesCyrillic = {
      'А': 1, 'Б': 2, 'В': 3, 'Г': 4, 'Д': 5, 'Е': 6, 'Ё': 7, 'Ж': 2, 'З': 7, 
      'И': 1, 'Й': 2, 'К': 3, 'Л': 4, 'М': 5, 'Н': 6, 'О': 7, 'П': 8, 'Р': 2, 
      'С': 1, 'Т': 2, 'У': 3, 'Ф': 4, 'Х': 5, 'Ц': 3, 'Ч': 7, 'Ш': 2, 'Щ': 9, 
      'Ы': 2, 'Ь': 3, 'Э': 4, 'Ю': 5, 'Я': 6, 'Ъ': 1
  };

  const numerologyValuesLatin = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 1, K: 2, L: 3, M: 4,
    N: 5, O: 6, P: 7, Q: 8, R: 9, S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
  };

  let uppercaseWord = word.toUpperCase();
  let sum = 0;

  // Проверка для кириллицы
  for (let i = 0; i < uppercaseWord.length; i++) {
    const letter = uppercaseWord[i];
    if (numerologyValuesCyrillic.hasOwnProperty(letter)) {
      sum += numerologyValuesCyrillic[letter];
    }
  }

  // Проверка для латиницы
  for (let i = 0; i < uppercaseWord.length; i++) {
    const letter = uppercaseWord[i];
    if (numerologyValuesLatin.hasOwnProperty(letter)) {
      sum += numerologyValuesLatin[letter];
    }
  }
  
  // Доп расчет для двузначных чисел
  while (sum > 9) {
    let tempSum = 0;

    while (sum > 0) {
      tempSum += sum % 10;
      sum = Math.floor(sum / 10);
    }

    sum = tempSum;
  }

  return sum;
}
