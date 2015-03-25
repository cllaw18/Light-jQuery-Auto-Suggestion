# Light-jQuery-Auto-Suggestion
Light jQuery Auto Suggestion is a light and basic jquery autocomplete plugin which supporting Internet Explorer7 and the midified size is 1.65kb only (minfied).

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
    array( "key"=>"aaa", "value"=>'aaa is a aaa'),
    array( "key"=>"ccc", "value"=>'ccc is a aaa'),
```
`aaa` is the auto-suggestion keyword to be matched, `aaa is a aaa` is the description of the keyword `aaa`.

- Method 2) 
If you don't use any back-end technique for your project, you can simply edit values in `suggestlist.json` to make suggestion (and keep the default url value of `sugDataUrl` in las.js)
```
[{"key":"aaa",
  "value":"aaa is a aaa"},
 {"key":"ccc",
  "value":"ccc is a aaa"}]
```
`aaa` is the auto-suggestion keyword to be matched, `aaa is a aaa` is the description of the keyword `aaa`.

##Configuration (optional)
These javascript value was placed at the begining of las.js, the configuration is optional.

 value name  | demo default value   | Description                                               
-------------|----------------------|-------------------------------------------
 sugDataUrl  | lascomplete_list.json | URL to get Json suggestList's data, you can use lascomplete_list.php or suggestlist.json provided at demo folder                      
 searchId    | las_search_panel     | Search Panel Wrapper Id Name which including search box.  
 searchBoxId | las_textbox          | Search Input Name Id name                                 
 sugMenuId   | las_suggestbox       | Suggest Menu Id name                                      
 sugMenuW    | 600px                | Width of Search input box and Suggest menu                
 sugItemH    | 25                   | Line-Height of suggested items, in pixal
 dispNum     | 6                    | Display suggested item Number, for example, value is 6 means display 6 items
 jsonKey1    | key                  | Json keyword field index name                             
 jsonKey2    | value            | Json description field index name                         


##Updates
**25-Mar-2015 : v1.1**
- Add a scroll bar if too many record displayed at suggestion menu.
- Add and renew 21 json data with programming language name and description for demo purpose.
- Better appearance, add style padding on search box and suggestion menu.
- Add js value sugItemH and disNum for configuration.
- Changed default json key name as "key", description key name to "value".

**09-Mar-2015 : v1.0**
- Light-jquery-auto-suggestion released

===
##Reference Site
Offical Site:<br />
http://tool.soyosolution.com/light-jquery-auto-suggestion/<br />
PlainText Demo site:<br />
http://tool.soyosolution.com/light-jquery-auto-suggestion/demo.html<br />
