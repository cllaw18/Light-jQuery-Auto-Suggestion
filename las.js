/*!
* Light-jQuery-Auto-Suggestion v1.1
* https://github.com/soyosolution/Light-jQuery-Auto-Suggestion
* http://tool.soyosolution.com/light-jquery-auto-suggestion/
*
* Includes jQuery Library
* http://www.jquery.com/
*
* Copyright 2015 Soyo Solution. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Start Date       : 2015-03-09
* Last Updated Date: 2015-03-25
*/

//Make config
var sugDataUrl             = "suggestlist.json";     //URL to get Json suggestList's data, you can use lascomplete_list.php or suggestlist.json provided at demo folder
var searchId               = "las_search_panel";     //Search Panel Wrapper Id Name which including search box.
var searchBoxId            = "las_textbox";          //Search Input Name Id name
var sugMenuId              = "las_suggestbox";       //Suggest Menu Id name
var sugMenuW               = "550px";                //Width of Search input box and Suggest menu, 
var sugItemH               = "25";                   //Line-Height of suggested items
var dispNum                = "6";                    //Display suggested item Number, for example, value is 10 means display 10 items
var jsonKey1               = "key";                  //json Frame Key 1
var jsonKey2               = "value";                //json Frame Key 2


$( document ).ready(function() {
    //GetJsonData
    var soyoObject = sacGetJsonData();
    //Embuded css style
    jQuery('#'+searchId).css("position","relative");
    jQuery('#'+searchId).append('<ul id="'+sugMenuId+'" style="position:absolute; width:'+sugMenuW+';top:'+jQuery('#'+searchBoxId).outerHeight()+'px; left:0px; list-style-type:none; background:#fff; border:1px solid #ccc; margin:0;padding-left:10px;z-index:10; display:none; max-height:'+sugItemH*dispNum+'px; overflow:auto;"></ul>');   
    jQuery('#'+searchBoxId).css({"width":sugMenuW, "padding-left":"10px"});
    
    //============== Hide suggestion if click outside searchbox =============
    $(document).click(function(event) { 
        if(!$(event.target).closest('#'+sugMenuId).length) {
            if($('#'+sugMenuId).is(":visible")) {
                $('#'+sugMenuId).hide();
            }
        }        
    });
    //================ Do sth if user input text in searchBox =================
    $('#'+searchBoxId).bind('input propertychange', function() {           
        var UserInputVal = this.value;
        searchAndSuggest(soyoObject,this.value);
    });
    
    
});

//=================== Get Json Data From external file =================== 
function sacGetJsonData(){
    var soyoObject = $.parseJSON($.ajax({
        url     : sugDataUrl,
        dataType: "json", 
        async: false
    }).responseText);
    return soyoObject;
}//EOF sacGetJsonData()

//========================= Match Suggested Item ==========================
function searchAndSuggest(obj, keyword) {
    var resultArr = new Array();
    var itemCounter = 0;
    var tempStr = "";
    var objSize = obj.length;
    keyword = keyword.toLowerCase();    
    for (var i=0; i<objSize;i++) {
        var jsonVal = obj[i][jsonKey1].toLowerCase();
        var temp = jsonVal.search(keyword);
        if ( temp != -1) {
            resultArr.push(obj[itemCounter][jsonKey1]);
            var tempParams = '\''+obj[i][jsonKey1]+'\'';
            tempStr += '<li onclick="selectsug('+tempParams+')" style="line-height:'+sugItemH+'px;">'+obj[i][jsonKey1]+'    <span style="color:#aaa;padding-left:20px;">'+obj[i][jsonKey2]+"</span></li>";
            itemCounter++;
            jQuery('#'+sugMenuId).css("display","block");
        }
    }
    jQuery('#'+sugMenuId).html(tempStr);    
    return resultArr;
}//EOF searchAndSuggest()

//=============== Sync clicked suggested content to search box ============= 
function selectsug(selected_val){
    jQuery('#'+searchBoxId).val(selected_val);
    jQuery('#'+sugMenuId).css("display","none");
}//EOF selectsug()

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
