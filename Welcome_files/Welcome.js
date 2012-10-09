// Created by iWeb 3.0.1 local-build-20100112

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWEmptyStroke(),stroke_0:new IWPhotoFrame([IWCreateImage('Welcome_files/Portfolio_Frame_01.png'),IWCreateImage('Welcome_files/Portfolio_Frame_02.png'),IWCreateImage('Welcome_files/Portfolio_Frame_03.png'),IWCreateImage('Welcome_files/Portfolio_Frame_06.png'),IWCreateImage('Welcome_files/Portfolio_Frame_09.png'),IWCreateImage('Welcome_files/Portfolio_Frame_08.png'),IWCreateImage('Welcome_files/Portfolio_Frame_07.png'),IWCreateImage('Welcome_files/Portfolio_Frame_04.png')],null,2,0.234211,0.000000,20.000000,10.000000,20.000000,22.000000,31.000000,19.000000,31.000000,407.000000,320.000000,407.000000,320.000000,null,null,null,0.100000),shadow_1:new IWShadow({blurRadius:0,offset:new IWPoint(2.3250,3.2549),color:'#000000',opacity:0.103448}),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#00219a',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
