# Light-jQuery-Auto-Suggestion
Light jQuery Auto Suggestion is a light jquery plugin which supporting Internet Explorer7 and the midified size is only 1.43kb.


##Supported Browser
- Internet Explorer 7
- Internet Explorer 8
- Internet Explorer 9
- Google Chrome Version 40.0.2214.115 m
- Mozilla FireFox v35.01

##How to use
lascomplete_list.php

1) JavaScript Part
Import jQuery and the Light-jQuery-Auto-Suggestion's javascript file.
```
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="las.js"></script>
```
2) HTML part
Add the code where you want display the search input box:
```
<div id="las_search_panel"><input id="las_textbox" type="text" /></div>
```



##Config

 value name  | demo default value   | Description                                               
--------------------------------------------------------------------------------------------------
 sugDataUrl  | lascomplete_list.php | URL to get Json suggestList's data, you can use lascomplete_list.php or suggestlist.json provided at demo folder                      
 searchId    | las_search_panel     | Search Panel Wrapper Id Name which including search box.  
 searchBoxId | las_textbox          | Search Input Name Id name                                 
 sugMenuId   | las_suggestbox       | Suggest Menu Id name                                      
 sugMenuW    | 600px                | Width of Search input box and Suggest menu                
 jsonKey1    | key_text             | Json keyword field index name                             
 jsonKey2    | desc_text            | Json description field index name                         
---------------------------------------------------------------------------------------------------

##Offical Site
http://tool.soyosolution.com/light-jquery-auto-suggestion/<br />
PlainText Demo site:<br />
http://tool.soyosolution.com/light-jquery-auto-suggestion/demo/<br />
