# Light-jQuery-Auto-Suggestion
Light jQuery Auto Suggestion is a light jquery plugin which supporting Internet Explorer7 and the midified size is only 1.43kb (minfied).

===
##Supported Browser
- Internet Explorer (Tested IE7, IE8, IE9)
- Google Chrome     (Tested Version 40.0.2214.115 m)
- Mozilla FireFox   (Tested v35.01)

##Files be included
The repositories in this project included the file shown below:
- lascomplete_list.php
- suggestlist.json
- index.html
- las.js
- las.min.js (minfied ver of las.js)

##How to use
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
3) Data Suggestion part
- Method 1) 
If you use php for your project, you can edit the value in `lascomplete_list.php` to make json format data, and change value of `sugDataUrl` in las.js, there is a part of the code:
```
    array( "key_text"=>"aaa", "desc_text"=>'aaa is a aaa'),
    array( "key_text"=>"ccc", "desc_text"=>'ccc is a aaa'),
```
`aaa` is the auto-suggestion keyword to be matched, `aaa is a aaa` is the description of the keyword `aaa`.

- Method 2) 
If you don't use any back-end technique for your project, you can simply edit values in `suggestlist.json` to make suggestion (and keep the default url value of `sugDataUrl` in las.js)
```
[{"key_text":"aaa",
  "desc_text":"aaa is a aaa"},
 {"key_text":"ccc",
  "desc_text":"ccc is a aaa"}]
```
`aaa` is the auto-suggestion keyword to be matched, `aaa is a aaa` is the description of the keyword `aaa`.

##Configuration (optional)
These javascript value was placed at the begining of las.js, the configuration is optional.

 value name  | demo default value   | Description                                               
-------------|----------------------|-------------------------------------------
 sugDataUrl  | lascomplete_list.php | URL to get Json suggestList's data, you can use lascomplete_list.php or suggestlist.json provided at demo folder                      
 searchId    | las_search_panel     | Search Panel Wrapper Id Name which including search box.  
 searchBoxId | las_textbox          | Search Input Name Id name                                 
 sugMenuId   | las_suggestbox       | Suggest Menu Id name                                      
 sugMenuW    | 600px                | Width of Search input box and Suggest menu                
 jsonKey1    | key_text             | Json keyword field index name                             
 jsonKey2    | desc_text            | Json description field index name                         


===
##Reference Site
Offical Site:<br />
http://tool.soyosolution.com/light-jquery-auto-suggestion/<br />
PlainText Demo site:<br />
http://tool.soyosolution.com/light-jquery-auto-suggestion/demo.html<br />
