menu_list_array = ["Supreme Cheese Pizza","Chicken BBQ  Pizza", "Chicken Supreme Pizza","Veg Margherita Pizza", "Hawiian BBQ Pizza"];

function getmenu(){
    var htmldata;
    menu_list_array.sort();
    htmldata="";
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    document.getElementById("display_menu").innerHTML = htmldata;
}

function getmenu2(){
    var htmldata;
    menu_list_array.sort();
    htmldata="";
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
            document.getElementById("display_addedmenu").innerHTML = htmldata;
    }
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
            document.getElementById("display").innerHTML = htmldata;
    }
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
    document.getElementById
}
