/*
Bahamut animation app removes ads. This script is only compatible with surge 4.0
If reprinted, please indicate the source. My TG channel @NobyDa

Surge4.0 : [Script]
http-request https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/(v3\/token\.php|v1\/video\.php) script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js
http-response https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/(v3\/token\.php|v1\/video\.php) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js

MITM = api.gamer.com.tw
*/

var _0xa115=["\x34\x20\x35\x3D\x24\x76\x2E\x35\x3B\x32\x28\x24\x76\x2E\x6F\x29\x7B\x32\x28\x35\x2E\x70\x28\x27\x7A\x27\x29\x21\x3D\x2D\x31\x29\x7B\x34\x20\x57\x3D\x24\x76\x2E\x6F\x5B\x27\x44\x27\x5D\x3B\x34\x20\x53\x3D\x24\x76\x2E\x6F\x5B\x27\x43\x2D\x79\x27\x5D\x3B\x24\x6C\x2E\x50\x28\x57\x2C\x22\x42\x22\x29\x3B\x24\x6C\x2E\x50\x28\x53\x2C\x22\x41\x22\x29\x3B\x24\x33\x28\x7B\x7D\x29\x7D\x3B\x32\x28\x35\x2E\x70\x28\x27\x4D\x27\x29\x21\x3D\x2D\x31\x29\x7B\x34\x20\x4C\x3D\x2F\x6D\x3D\x28\x5C\x64\x2B\x29\x2F\x3B\x34\x20\x6D\x3D\x4C\x2E\x31\x30\x28\x35\x29\x5B\x31\x5D\x3B\x34\x20\x73\x3D\x7B\x35\x3A\x27\x4A\x3A\x2F\x2F\x49\x2E\x48\x2E\x47\x2E\x56\x2F\x45\x2F\x51\x2F\x4E\x2F\x4F\x2E\x52\x3F\x75\x3D\x31\x32\x26\x46\x3D\x30\x26\x6D\x3D\x27\x2B\x6D\x2C\x6F\x3A\x7B\x22\x44\x22\x3A\x24\x6C\x2E\x77\x28\x22\x42\x22\x29\x2C\x22\x43\x2D\x79\x22\x3A\x24\x6C\x2E\x77\x28\x22\x41\x22\x29\x2C\x7D\x7D\x3B\x24\x6A\x2E\x6B\x28\x73\x2C\x36\x28\x67\x2C\x68\x2C\x69\x29\x7B\x32\x28\x67\x29\x7B\x38\x2E\x39\x28\x67\x29\x3B\x24\x33\x28\x29\x7D\x37\x7B\x32\x28\x68\x2E\x74\x3D\x3D\x71\x29\x7B\x24\x6A\x2E\x6B\x28\x73\x2C\x36\x28\x64\x2C\x65\x2C\x66\x29\x7B\x32\x28\x64\x29\x7B\x38\x2E\x39\x28\x64\x29\x3B\x24\x33\x28\x29\x7D\x37\x7B\x32\x28\x65\x2E\x74\x3D\x3D\x71\x29\x7B\x24\x6A\x2E\x6B\x28\x73\x2C\x36\x28\x61\x2C\x62\x2C\x63\x29\x7B\x32\x28\x61\x29\x7B\x38\x2E\x39\x28\x61\x29\x3B\x24\x33\x28\x29\x7D\x37\x7B\x54\x28\x36\x28\x29\x7B\x24\x33\x28\x7B\x7D\x29\x7D\x2C\x59\x29\x7D\x7D\x29\x7D\x7D\x7D\x29\x7D\x7D\x7D\x29\x7D\x7D\x37\x7B\x34\x20\x78\x3D\x24\x58\x2E\x78\x3B\x34\x20\x6E\x3D\x55\x2E\x5A\x28\x78\x29\x3B\x32\x28\x35\x2E\x70\x28\x27\x7A\x27\x29\x21\x3D\x2D\x31\x29\x7B\x34\x20\x4B\x3D\x6E\x5B\x27\x7A\x27\x5D\x5B\x27\x31\x31\x27\x5D\x3B\x34\x20\x72\x3D\x7B\x35\x3A\x27\x4A\x3A\x2F\x2F\x49\x2E\x48\x2E\x47\x2E\x56\x2F\x45\x2F\x51\x2F\x4E\x2F\x4F\x2E\x52\x3F\x75\x3D\x26\x46\x3D\x30\x26\x6D\x3D\x27\x2B\x4B\x2C\x6F\x3A\x7B\x22\x44\x22\x3A\x24\x6C\x2E\x77\x28\x22\x42\x22\x29\x2C\x22\x43\x2D\x79\x22\x3A\x24\x6C\x2E\x77\x28\x22\x41\x22\x29\x2C\x7D\x7D\x3B\x24\x6A\x2E\x6B\x28\x72\x2C\x36\x28\x67\x2C\x68\x2C\x69\x29\x7B\x32\x28\x67\x29\x7B\x38\x2E\x39\x28\x67\x29\x3B\x24\x33\x28\x29\x7D\x37\x7B\x32\x28\x68\x2E\x74\x3D\x3D\x71\x29\x7B\x24\x6A\x2E\x6B\x28\x72\x2C\x36\x28\x64\x2C\x65\x2C\x66\x29\x7B\x32\x28\x64\x29\x7B\x38\x2E\x39\x28\x64\x29\x3B\x24\x33\x28\x29\x7D\x37\x7B\x32\x28\x65\x2E\x74\x3D\x3D\x71\x29\x7B\x24\x6A\x2E\x6B\x28\x72\x2C\x36\x28\x61\x2C\x62\x2C\x63\x29\x7B\x32\x28\x61\x29\x7B\x38\x2E\x39\x28\x61\x29\x3B\x24\x33\x28\x29\x7D\x37\x7B\x54\x28\x36\x28\x29\x7B\x24\x33\x28\x7B\x7D\x29\x7D\x2C\x31\x33\x29\x7D\x7D\x29\x7D\x7D\x7D\x29\x7D\x7D\x7D\x29\x7D\x3B\x32\x28\x35\x2E\x70\x28\x27\x4D\x27\x29\x21\x3D\x2D\x31\x29\x7B\x6E\x5B\x27\x75\x27\x5D\x5B\x27\x31\x34\x27\x5D\x3D\x5B\x5D\x3B\x6E\x5B\x27\x75\x27\x5D\x5B\x27\x31\x35\x27\x5D\x3D\x5B\x5D\x3B\x24\x33\x28\x7B\x78\x3A\x55\x2E\x31\x36\x28\x6E\x29\x7D\x29\x7D\x7D\x3B","\x7C","\x73\x70\x6C\x69\x74","\x7C\x7C\x69\x66\x7C\x64\x6F\x6E\x65\x7C\x76\x61\x72\x7C\x75\x72\x6C\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x65\x6C\x73\x65\x7C\x63\x6F\x6E\x73\x6F\x6C\x65\x7C\x6C\x6F\x67\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x68\x74\x74\x70\x43\x6C\x69\x65\x6E\x74\x7C\x67\x65\x74\x7C\x70\x65\x72\x73\x69\x73\x74\x65\x6E\x74\x53\x74\x6F\x72\x65\x7C\x73\x6E\x7C\x6F\x62\x6A\x7C\x68\x65\x61\x64\x65\x72\x73\x7C\x69\x6E\x64\x65\x78\x4F\x66\x7C\x32\x30\x30\x7C\x53\x74\x61\x72\x74\x41\x64\x7C\x45\x6E\x64\x41\x64\x7C\x73\x74\x61\x74\x75\x73\x7C\x61\x64\x7C\x72\x65\x71\x75\x65\x73\x74\x7C\x72\x65\x61\x64\x7C\x62\x6F\x64\x79\x7C\x41\x67\x65\x6E\x74\x7C\x76\x69\x64\x65\x6F\x7C\x55\x41\x44\x48\x46\x7C\x43\x6F\x6F\x6B\x69\x65\x44\x48\x46\x7C\x55\x73\x65\x72\x7C\x43\x6F\x6F\x6B\x69\x65\x7C\x6D\x6F\x62\x69\x6C\x65\x5F\x61\x70\x70\x7C\x73\x63\x68\x65\x64\x75\x6C\x65\x7C\x63\x6F\x6D\x7C\x67\x61\x6D\x65\x72\x7C\x61\x70\x69\x7C\x68\x74\x74\x70\x73\x7C\x73\x6E\x6E\x7C\x72\x65\x53\x6E\x7C\x74\x6F\x6B\x65\x6E\x7C\x76\x31\x7C\x73\x74\x61\x74\x5F\x61\x64\x7C\x77\x72\x69\x74\x65\x7C\x61\x6E\x69\x6D\x65\x7C\x70\x68\x70\x7C\x55\x73\x65\x72\x41\x67\x65\x6E\x74\x7C\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74\x7C\x4A\x53\x4F\x4E\x7C\x74\x77\x7C\x68\x65\x61\x64\x65\x72\x7C\x72\x65\x73\x70\x6F\x6E\x73\x65\x7C\x31\x30\x30\x30\x7C\x70\x61\x72\x73\x65\x7C\x65\x78\x65\x63\x7C\x76\x69\x64\x65\x6F\x5F\x73\x6E\x7C\x65\x6E\x64\x7C\x35\x30\x30\x7C\x6D\x69\x6E\x6F\x72\x7C\x6D\x61\x6A\x6F\x72\x7C\x73\x74\x72\x69\x6E\x67\x69\x66\x79","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(_0x9520x1,_0x9520x2,_0x9520x3,_0x9520x4,_0x9520x5,_0x9520x6){_0x9520x5= function(_0x9520x3){return (_0x9520x3< _0x9520x2?_0xa115[4]:_0x9520x5(parseInt(_0x9520x3/ _0x9520x2)))+ ((_0x9520x3= _0x9520x3% _0x9520x2)> 35?String[_0xa115[5]](_0x9520x3+ 29):_0x9520x3.toString(36))};if(!_0xa115[4][_0xa115[6]](/^/,String)){while(_0x9520x3--){_0x9520x6[_0x9520x5(_0x9520x3)]= _0x9520x4[_0x9520x3]|| _0x9520x5(_0x9520x3)};_0x9520x4= [function(_0x9520x5){return _0x9520x6[_0x9520x5]}];_0x9520x5= function(){return _0xa115[7]};_0x9520x3= 1};while(_0x9520x3--){if(_0x9520x4[_0x9520x3]){_0x9520x1= _0x9520x1[_0xa115[6]]( new RegExp(_0xa115[8]+ _0x9520x5(_0x9520x3)+ _0xa115[8],_0xa115[9]),_0x9520x4[_0x9520x3])}};return _0x9520x1}(_0xa115[0],62,69,_0xa115[3][_0xa115[2]](_0xa115[1]),0,{}))