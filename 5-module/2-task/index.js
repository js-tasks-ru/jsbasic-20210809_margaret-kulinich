function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  
  function handleTextToggling() {
    const elemText = document.getElementById('text');
  
    elemText.hidden = !elemText.hidden;
  }
  
  button.addEventListener('click', handleTextToggling);
}
