// Created by iWeb 3.0.2 local-build-20110322

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_0:new IWPhotoFrame([IWCreateImage('Forms_files/Portfolio_Frame_01.png'),IWCreateImage('Forms_files/Portfolio_Frame_02.png'),IWCreateImage('Forms_files/Portfolio_Frame_03.png'),IWCreateImage('Forms_files/Portfolio_Frame_06.png'),IWCreateImage('Forms_files/Portfolio_Frame_09.png'),IWCreateImage('Forms_files/Portfolio_Frame_08.png'),IWCreateImage('Forms_files/Portfolio_Frame_07.png'),IWCreateImage('Forms_files/Portfolio_Frame_04.png')],null,2,0.328947,0.000000,20.000000,10.000000,20.000000,22.000000,31.000000,19.000000,31.000000,407.000000,320.000000,407.000000,320.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Forms_files/FormsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
