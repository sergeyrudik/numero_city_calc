function processInput() {
  const inputText = document.getElementById('inputField').value;
  const resultNumber = document.getElementById('resultNumber');
  const explanation = document.getElementById('explanation');
  const explanationText = document.getElementById('explanationText');
  const outputField = document.getElementById('outputField');
  const sum = calculateKversum(inputText);
  const explanationTextContent = suggestForSum(sum);

  resultNumber.textContent = sum;

  if (explanationTextContent !== '') {
    explanationText.textContent = explanationTextContent;
  } else {
    explanationText.textContent = 'Нет информации для данного числа.';
  }

  outputField.style.display = 'block';
}

function suggestForSum(sum) {
  let explanation = '';
  switch (sum) {
    case 1:
      explanation = 'Город для лидеров! Если вы не боитесь перемен, не видите препятствий на пути к цели, то смело переезжайте.';
      break;
    case 2: 
      explanation = 'Не любите скорость и гонку за успехом? Вам сюда! В этом городе сложно быть одному, но комфортно жить, объединяясь в компании.';
      break;
    case 3: 
      explanation = 'Город для творческих личностей, которые ценят оригинальность и спонтанность, верят в любовь и любят роскошь';
      break;
    case 4: 
      explanation = 'Здесь вас ждёт стабильность и комфорт. А головокружительной карьеры и огромных денег $ вряд ли получится заработать.';
      break;
    case 5: 
      explanation = 'Город взлетов и падений - никакой стабильности. То вы на высоте * , то в самом низу.';
      break;
    case 6: 
      explanation = 'Патриархальный город - здесь чтут семейные ценности и ценят хорошее образование.';
      break;
    case 7: 
      explanation = 'Город любителей одиночества и философии, увлечённых эзотерикой и духовными практиками.';
      break;
    case 8: 
      explanation = 'Тут цель всегда оправдывает средства, и к ней идут очень быстро. Инфраструктура комфортная, но всегда нужно держать ухо востро.';
      break;
    case 9: 
      explanation = 'Здесь легко стать богатым, даже если вы приезжий. Жизнь течёт размеренно, а местные отлично разбираются в ценностях бытия.';
      break;
    }

  return explanation;
};

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

function filterInput(input) {
  // Заменяем все спецсимволы и цифры на пустую строку
  input.value = input.value.replace(/[^\p{L}\s]/gu, '');
}
