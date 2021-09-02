function hideSelf() {
  const button = document.querySelector(".hide-self-button");
   function handleClick(eventObj) {
    eventObj.target.hidden = true;
  };

  button.addEventListener('click', handleClick);
}
