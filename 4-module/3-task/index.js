function highlight(table) {
  let headTd = table.tHead.querySelectorAll('td');
  let bodyTr = table.querySelectorAll('tbody tr');

  const headTdArr = Array.from(headTd);
  const genderIndex = headTdArr.findIndex((td) => td.innerText === 'Gender');
  const ageIndex = headTdArr.findIndex((td) => td.innerText === 'Age');

  for(let i = 0; i < bodyTr.length; i++) {
    const targetTr = bodyTr[i];
    const dataAvailabeTd = targetTr.querySelector(`[data-available]`);
    const genderTd = targetTr.querySelector(`:nth-child(${genderIndex + 1})`);
    const ageTd = targetTr.querySelector(`:nth-child(${ageIndex + 1})`);
    
    if (!dataAvailabeTd) { 
      targetTr.setAttribute('hidden', '');
    } else if (dataAvailabeTd.dataset.available === 'true') {
      targetTr.classList.add('available');
    } else if (dataAvailabeTd.dataset.available === 'false') {
      targetTr.classList.add('unavailable');
    }

    const genderTdInnerText = genderTd.innerText;

    if (genderTdInnerText === 'm') {
      targetTr.classList.add('male');
    } else if (genderTdInnerText === 'f') {
      targetTr.classList.add('female');
    }

    if (Number(ageTd.innerText) < 18) {
      targetTr.style = "text-decoration: line-through";
    }
  }

}
