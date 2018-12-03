function changeStyle(cssStyle) {
    var i, link_tag;
    
    /*alert("Switching to " + cssStyle);*/
    
    for (i = 0, link_tag = document.getElementsByTagName("link"); i < link_tag.length; i++) {
        if ((link_tag[i].rel.indexOf("stylesheet") != -1) && link_tag[i].title) {
            link_tag[i].disabled = true;
            if (link_tag[i].title == cssStyle) {
                link_tag[i].disabled = false;
            }
        }
    }
}

function accordionToggle(target) {
    var obj = document.getElementById(target);
    if (obj.style.maxHeight){
      obj.style.maxHeight = null;
    } else {
      obj.style.maxHeight = obj.scrollHeight + "px";
    } 
}