function makeFriendsList(friends) {
  let list = document.createElement('ul');
  
  let liEl = friends
    .map(item => `<li>${item.firstName} ${item.lastName}</li>`)
    .join('\n');

  list.innerHTML = liEl;
  return list;
}
