document.getElementById('fourButonFinal').addEventListener('click', function(){
const fourButonName = document.getElementById('fourRhombus').innerText;
const fourClassOne = document.getElementById('fourData').innerText;
const fourcaltw = document.getElementById('fourDataTwo').innerText;
const fourTotal = parseInt(fourcaltw) * parseInt (fourClassOne);
const fourFInalResult = 0.5 * fourTotal;
tableDisplayData(fourButonName, fourClassOne,fourcaltw, fourFInalResult)
});
function tableDisplayData(fourButonName, fourClassOne,fourcaltw, fourFInalResult){
    const tabledata = document.getElementById('tableMain');
    const tableCreate = document.createElement('tr');
    tableCreate.innerHTML = `
    <td> ${2} </td>
    <td> ${fourButonName} </td>
    <td> ${fourClassOne} </td>
    <td> ${fourcaltw} </td>
    <td> ${fourFInalResult} </td>
    `;
    tabledata.appendChild(tableCreate);
}