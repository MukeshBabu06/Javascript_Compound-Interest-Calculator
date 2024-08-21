function calcint(){
    const Principle=parseFloat(document.getElementById('Principle').value);
    const Interest=parseFloat(document.getElementById('Interest').value);
    const Years=parseFloat(document.getElementById('Years').value);

    const Compint= Principle*(1+Interest/100)**Years
    const totalint= Compint-Principle

    document.getElementById('firstamount').innerText=`₹ ${Principle.toFixed(0)}`;
    document.getElementById('TotInt').innerText=`₹ ${totalint.toFixed(0)}`;
    document.getElementById('TotAmt').innerText=`₹ ${Compint.toFixed(0)}`;
}