const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const getQuotes = (obj, arr) => {
  let objKeys = Object.keys(obj);
  let person = obj.person;
  let quotesArr = [];
  if (objKeys.length !== 0) {
    quotesArr = arr.filter(element => element.person === person);
    return quotesArr;
  } else {
    return {
      quotes: arr
    }
  }
}

const addQuotes = (obj, arr) => {
  let newQuote = obj;
  if (newQuote.quote && newQuote.person) {
    arr.push(newQuote);
    return {
      quote: newQuote
    }
  } else {
    return '';
  }
}

const updateData = (id, arr, newQuote) => {
  let validId = findElementIndex(id, arr);

  if (validId !== -1 && newQuote.quote && newQuote.person) {
    arr[validId].quote = newQuote.quote;
    arr[validId].person = newQuote.person;
    return arr[validId];
  }
}

const findElementIndex = (id, arr) => {
  let findIndex = arr.findIndex(element => element.id === Number(id));
  return findIndex;
}

const removeElement = (id, arr) => {
  let foundElement = findElementIndex(id, arr);

  if (foundElement !== -1) {
    arr.splice(foundElement, 1);
    return true;
  }
}

const presentData = (data) => {
  return {
    quote: data
  }
}

module.exports = {
  getRandomElement: getRandomElement,
  getQuotes: getQuotes,
  addQuotes: addQuotes,
  updateData: updateData,
  removeElement: removeElement
};
