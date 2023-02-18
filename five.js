document.getElementById('fivebtnFinal').addEventListener('click', function(){
    const fiveButonName = document.getElementById('fivePentagon').innerText;
    const fiveClassOne = document.getElementById('fiveData').innerText;
    const fivecaltw = document.getElementById('fiveDataTwo').innerText;
    const fiveTotal = parseInt(fivecaltw) * parseInt (fiveClassOne);
    const fiveFInalResult = 0.5 * fiveTotal;
    tableDisplayData(fiveButonName, fiveClassOne,fivecaltw, fiveFInalResult)
    });
    function tableDisplayData(fiveButonName, fiveClassOne,fivecaltw, fiveFInalResult){
        const tabledata = document.getElementById('tableMain');
        const tableCreate = document.createElement('tr');
        tableCreate.innerHTML = `
        <td> ${3} </td>
        <td> ${fiveButonName} </td>
        <td> ${fiveClassOne} </td>
        <td> ${ fivecaltw} </td>
        <td> ${fiveFInalResult} </td>
        `;
        tabledata.appendChild(tableCreate);
    }