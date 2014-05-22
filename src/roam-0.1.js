//Author:szszss
//fuck...为什么有一种被挂城墙吊打羞辱play的赶脚...
var ROAM_CONST_SPEED = "normal";

$(function () {
    $('.roam-container').each(function(i){
        $(this).css("width", this.getAttribute("width"));
        $(this).css("height", this.getAttribute("height"));
        this.roamLock = 0;
        //$(this).css("height", this.getAttribute("height"));
    });
    $('.roam-block').each(function(i){
        var toggle = this.getAttribute("roam-toggle")=="true";
        if(toggle)
        {
            $(this).css("width", this.getAttribute("max-width"));
            $(this).css("opacity", "1.00");
        }
        else
        {
            $(this).css("width", this.getAttribute("min-width"));
            $(this).css("opacity", "0.50");
        }
        for(var j=0;j<this.children.length;j++)
        {
            var child = this.children[j];
            if(child.className == "roam-content" || child.className == "roam-title")
            {
                if(!toggle && child.className=="roam-content")
                    $(child).css("opacity","0.00");
                var v = child.getAttribute("position");
                if(v==null)
                    continue;
                $(child).css(v,"0px");
            }
        }
        this.onmouseover=roam_onMouseOver;
    });
})

function roam_onMouseOver(event) {
    //var obj = event.toElement;
    var obj = this;
    var parent = obj.parentElement;
    if(parent.roamLock>1) //Yes, it's ">1", not ">=1" or ">0".
        return;
    if(obj.getAttribute("roam-toggle")=="true")
        return;
    for(var i=0;i<parent.children.length;i++)
    {
        var button = parent.children[i];
        if(button.className != "roam-block")
            return;
        if(button==obj)
        {
            parent.roamLock++;
            $(button).animate({
                width:button.getAttribute("max-width"),
                opacity:"1.00"
            },ROAM_CONST_SPEED,roam_freeLock);
            roam_showChilden(button);
            button.setAttribute("roam-toggle","true");
            /*for(var j=0;j<button.children.length;j++)
            {
                var child = button.children[j];
                if(child.className == "roam-content")
                {
                    $(child).show("slide", { direction: "right" }, 500);
                }
            }*/
        }
        else
        {
            $(button).animate({
                width:button.getAttribute("min-width"),
                opacity:"0.50"
            },ROAM_CONST_SPEED);
            roam_hideChilden(button);
            button.setAttribute("roam-toggle","false");
            /*for(var j=0;j<button.children.length;j++)
            {
                var child = button.children[j];
                if(child.className == "roam-content")
                {
                    $(child).hide("slide", { direction: "left" }, 500);
                }
            }*/
        }
    }
}

function roam_freeLock() {
    this.parentElement.roamLock--;
    //roam_showChilden(this);
}

function roam_showChilden(button) {
    roam_showChildenDo(button,true);
}

function roam_hideChilden(button) {
    roam_showChildenDo(button,false);
}

function roam_showChildenDo(button,shouldShow) {
    for(var j=0;j<button.children.length;j++)
    {
        var child = button.children[j];
        if(child.className == "roam-content")
        {
            $(child).animate({ opacity: shouldShow==true?"1.00":"0.00" }, "fast");
        }
    }
}