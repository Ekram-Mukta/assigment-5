document.getElementById('sixLast').addEventListener('click', function(){
    const sixButonName = document.getElementById('sixName').innerText;
    const sixClassOne = document.getElementById('sixData').innerText;
    const sixcaltw = document.getElementById('sixDataTwo').innerText;
    const sixTotal = 3.14 * parseInt(sixcaltw) * parseInt (sixClassOne);
    
    
    
    tableDisplayData(sixButonName, sixClassOne,sixcaltw, sixTotal)
    });
    function tableDisplayData(sixButonName, sixClassOne,sixcaltw, sixTotal){
        const tabledata = document.getElementById('tableMain');
        const tableCreate = document.createElement('tr');
        tableCreate.innerHTML = `
        <td> ${4} </td>
        <td> ${sixButonName} </td>
        <td> ${sixClassOne} </td>
        <td> ${ sixcaltw} </td>
        <td> ${sixTotal} </td>
        `;
        tabledata.appendChild(tableCreate);
    }