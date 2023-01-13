function result(){
    var input = parseInt(document.getElementById('inputunit').value);
    if(input < 100){
        var cost = document.getElementById('cost').innerHTML = input*9.5;
        var fc = document.getElementById('fc').innerHTML = input*0.45;
        var aqta = document.getElementById('aqta').innerHTML =parseFloat(input*7.74).toFixed(2); ;
        var gst = document.getElementById('gst').innerHTML = parseFloat(cost*0.18).toFixed(2);
        var totalbill = (cost + fc + parseInt(aqta) + parseInt(gst) + 15);
        document.getElementById('tb').innerHTML = totalbill;
    }
    else if(input >= 100 && input < 200){
        var cost = document.getElementById('cost').innerHTML = input*10.5;
        var fc = document.getElementById('fc').innerHTML = input*0.45;
        var aqta = document.getElementById('aqta').innerHTML =parseFloat(input*7.74).toFixed(2); ;
        var gst = document.getElementById('gst').innerHTML = parseFloat(cost*0.18).toFixed(2);
        var totalbill = (cost + fc + parseInt(aqta) + parseInt(gst) + 15);
        document.getElementById('tb').innerHTML = totalbill;
    }
    else if(input >= 200 && input < 400){
        var cost = document.getElementById('cost').innerHTML = input*12;
        var fc = document.getElementById('fc').innerHTML = input*0.45;
        var aqta = document.getElementById('aqta').innerHTML =parseFloat(input*7.74).toFixed(2); ;
        var gst = document.getElementById('gst').innerHTML = parseInt(cost*0.18).toFixed(2);
        var totalbill = (cost + fc + parseInt(aqta) + parseInt(gst) + 15);
        document.getElementById('tb').innerHTML = totalbill;
    }
    else{
        var cost = document.getElementById('cost').innerHTML = input*15;
        var fc = document.getElementById('fc').innerHTML = input*0.45;
        var aqta = document.getElementById('aqta').innerHTML =parseFloat(input*7.74).toFixed(2); ;
        var gst = document.getElementById('gst').innerHTML = parseInt(cost*0.18).toFixed(2);
        var totalbill = (cost + fc + parseInt(aqta) + parseInt(gst) + 15);
        document.getElementById('tb').innerHTML = totalbill;
    }
    document.getElementById('finalresult').innerHTML = `Your Total Bill Is ₹${totalbill}`;
    document.getElementById('finalresult').style.backgroundColor = 'blue';
}