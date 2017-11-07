let form = document.querySelector('form');
let input = document.querySelector('input');
let submitBtn = document.querySelector('button');
let results = document.querySelector('.results');

let childCount = 0;
let url;

form.addEventListener('submit', requestJSON);

function requestJSON(e) {
  url = input.value;
  input.value = '';
  childCount = 0;
  e.preventDefault();

  fetch(url + '$children')
  .then(response => response.json())
  .then(function(json) {
    countChildren(json);
    displayResults();
  })
  .catch(err => displayResults(err));
}

function countChildren(json) {
  if(json.subpages !== undefined) {
    childCount += json.subpages.length;
    json.subpages.forEach(function(sp) {
      countChildren(sp);
    });
  }
}

function displayResults(err) {
  let listItem = document.createElement('li')

  if(err) {
    listItem.textContent = err;
  } else {
    listItem.textContent = 'Descendant count for ' + url + ': ' + childCount;
  }

  results.appendChild(listItem);
}
