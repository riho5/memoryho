//textの色を変更する
function changetxtColor(idname,opt="on"){
    //var obj = document.getElementById(idname);
    //文字をwhiteに変更する
    if (opt == "on"){
        document.getElementById(idname).style.color = '#ffffff';
    } else{
        document.getElementById(idname).style.color = '#000000';
    }
}

//textの色を変更する
function changebackColor(name,opt="on"){
    //var obj = document.getElementById(idname);
    //文字をwhiteに変更する
    if (opt == "on"){
        document.getElementsById(name).style.backgroundColor = rgba(80, 200, 160, 0.45);
    } else{
        document.getElementsById(name).style.backgroundColor = rgba(80, 200, 160, 0.75);
    }
}
