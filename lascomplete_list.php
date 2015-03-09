<?php
/*!
* Light-jQuery-Auto-Suggestion v1.0
* https://github.com/soyosolution/Light-jQuery-Auto-Suggestion
* http://tool.soyosolution.com/light-jquery-auto-suggestion/
*
* Includes jQuery Library
* http://www.jquery.com/
*
* Copyright 2015 Soyo Solution Company. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2015-03-09
*/

header('Content-Type: application/json');
$autocomplete = array(
                    array( "key_text"=>"aaa", "desc_text"=>'aaa is a aaa'),
                    array( "key_text"=>"ccc", "desc_text"=>'ccc is a aaa'),
                    array( "key_text"=>"abc", "desc_text"=>'aaa is a aaa'),
                    array( "key_text"=>"cdf", "desc_text"=>'ccc is a aaa'),
                    array( "key_text"=>"aee", "desc_text"=>'aaa is a aaa'),
                    array( "key_text"=>"Java", "desc_text"=>'ccc is a aaa'),
                    array( "key_text"=>"JavaScript", "desc_text"=>'aaa is a aaa'),
                    array( "key_text"=>"C", "desc_text"=>'ccc is a aaa'),
                    array( "key_text"=>"php", "desc_text"=>'aaa is a aaa'),
                    array( "key_text"=>"E", "desc_text"=>'ccc is a aaa'),
                    array( "key_text"=>"haha", "desc_text"=>'aaa is a aaa'),
                    array( "key_text"=>"aba", "desc_text"=>'ccc is a aaa')                    
                );
echo json_encode($autocomplete);
?>
