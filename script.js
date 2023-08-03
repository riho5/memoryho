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

