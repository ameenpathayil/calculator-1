function calc(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var op =(document.getElementById('operater').value);


    if( op=== '+'){
        var input2 = document.getElementById('result').value =n1+n2;
    }
    if( op=== '-'){
        var input2 = document.getElementById('result').value =n1-n2;
    }
    if( op=== 'x'){
        var input2 = document.getElementById('result').value =n1*n2;
    }
    if( op=== '/'){
        var input2 = document.getElementById('result').value =n1/n2;
    }
}