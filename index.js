document.getElementById('third-ekram').addEventListener('click', function(){
    const thirdElementEkram = document.getElementById('thiredTitleName').innerText;
    const thirdCalculone = document.getElementById('thirdCalculateOne').innerText;
    const thirdcalcutwo = document.getElementById('thirdCalculatetwo').innerText;
    const totalThird = parseInt(thirdcalcutwo) * parseInt(thirdCalculone);
    tableDisplayData(thirdElementEkram, thirdCalculone,thirdcalcutwo, totalThird)
});
function tableDisplayData(thirdElementEkram, thirdCalculone,thirdcalcutwo, totalThird){
    const tabledata = document.getElementById('tableMain');
    const tableCreate = document.createElement('tr');
    tableCreate.innerHTML = `
    <td> ${1} </td>
    <td> ${thirdElementEkram} </td>
    <td> ${thirdCalculone} </td>
    <td> ${thirdcalcutwo} </td>
    <td> ${totalThird} </td>
    `;
    tabledata.appendChild(tableCreate);
}