/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let list = document.createElement('ul');

  for (let i = 0; i < friends.length; i++) {
    let card = document.createElement('li');
    card.textContent = friends[i].firstName + ' ' + friends[i].lastName;
    list.appendChild(card);
  }

  return list;
}

