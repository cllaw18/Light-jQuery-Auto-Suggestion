<?php
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

header('Content-Type: application/json');
$autocomplete = array(
                    array( "key"=>"github", "value"=>'GitHub is a web-based Git repository hosting service'),
                    array( "key"=>"google", "value"=>'Google is an American multinational corporation'),
                    array( "key"=>"javaScript", "value"=>'JavaScript is the programming language of HTML and the Web'),
                    array( "key"=>"css", "value"=>'Cascading Style Sheets (CSS) is a mechanism for adding style to Web documents'),
                    array( "key"=>"c language", "value"=>'C is a general-purpose, imperative computer programming language'),
                    array( "key"=>"java", "value"=>'Java is a general-purpose computer programming language'),
                    array( "key"=>"c++", "value"=>'C++ is a general-purpose programming language'),
                    array( "key"=>"perl", "value"=>'The Perl languages borrow features from other programming languages'),
                    array( "key"=>"P#", "value"=>''),
                    array( "key"=>"ParaSail", "value"=>'ParaSail is programming language'),
                    array( "key"=>"PARI/GP", "value"=>''),
                    array( "key"=>"Pascal", "value"=>'Pascal - ISO 7185'),
                    array( "key"=>"Pawn", "value"=>''),
                    array( "key"=>"PCASTL", "value"=>''),
                    array( "key"=>"PCF", "value"=>''),
                    array( "key"=>"PEARL", "value"=>''),
                    array( "key"=>"php", "value"=>'PHP is a server-side scripting language designed for web development '),
                    array( "key"=>"PeopleCode", "value"=>''),
                    array( "key"=>"PDL", "value"=>''),
                    array( "key"=>"aaa", "value"=>'aaa is a aaa'),
                    array( "key"=>"ccc", "value"=>'ccc is a aaa'),                    
                    array( "key"=>"e language", "value"=>'E is an object-oriented programming language for secure distributed computing')                 
                );
echo json_encode($autocomplete);
?>
