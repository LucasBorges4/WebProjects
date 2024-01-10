function add(){
    var a = 0, b = 0;
    a= form.display.value;
    b= a.charAt(a.length - 1);
    //alert(b);
    if(b == '+' || b == '-' || b == '*' || b == '/'){
        form.display.value = a.substring(0, a.length-1);
        form.display.value+='+';
    } else{
        form.display.value += '+';
    }
}

function sub(){
    var a = 0, b = 0;
    a= form.display.value;
    b= a.charAt(a.length - 1);
    //alert(b);
    if(b == '+' || b == '-' || b == '*' || b == '/'){
        form.display.value = a.substring(0, a.length-1);
        form.display.value+='-';
    } else{
        form.display.value += '-';
    }
}

function mult(){
    var a = 0, b = 0;
    a= form.display.value;
    b= a.charAt(a.length - 1);
    //alert(b);
    if(b == '+' || b == '-' || b == '*' || b == '/'){
        form.display.value = a.substring(0, a.length-1);
        form.display.value+='*';
    } else{
        form.display.value += '*';
    }
}

function div(){
    var a = 0, b = 0;
    a= form.display.value;
    b= a.charAt(a.length - 1);
    //alert(b);
    if(b == '+' || b == '-' || b == '*' || b == '/'){
        form.display.value = a.substring(0, a.length-1);
        form.display.value+='/';
    } else{
        form.display.value += '/';
    }
}