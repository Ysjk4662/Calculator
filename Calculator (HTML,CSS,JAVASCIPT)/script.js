
function clearscreen()
{
    q = document.getElementById("result").value;
    document.getElementById("result").value = q.slice(0,-100);
    q = document.getElementById("dd").value;
    document.getElementById("dd").value = q.slice(0,-100);
}

function del()
{
    q = document.getElementById("result").value;
    document.getElementById("result").value = q.slice(0,-1);
}

function display(value)
{
document.getElementById("result").value += value;
}

function calculate() {

    var p = document.getElementById("result").value;
    var q = eval(p);
    var q = Math.round(q*100)/100;
    document.getElementById("dd").value = q;
}



