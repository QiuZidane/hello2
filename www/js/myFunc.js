console.log("====  begin to call test.js ====")
var button1 = document.getElementById('button1');
if(button1) {
    button1.addEventListener('click',hello,false);
}
var button2 = document.getElementById('button2');
if(button2) {
    button2.addEventListener('click',getOsInfo_osVersion,false);
}
var button3 = document.getElementById('button3');
if(button3) {
    button3.addEventListener('click',getDeviceProperties,false);
}



 // ============ 下方是函数定义 ============
function hello(){
    myPlugin.sayHello("Hello CTP",
                      "This is sayHello().",
                      "OK",
                      function(param){ 
                                         alert('call back success!'+' \n'+'clickbutton='+param.buttonIndex+" \n"+param.para1+" "+param.para2);
                                         console.log(param.para0);
                        },
                      function(){ alert('call back error!');}
    );     
    // navigator.helloCordovaPlugin1.sayHello(....)   
}

function getOsInfo_osVersion(){
    myPlugin.getOsVersion(successAlert,errorAlert);
}
function successAlert(param) {    
    alert(param.osName+" "+param.osVersion);
}
function errorAlert(param) {    
    alert(param.errorCode);
}

function getDeviceProperties() {

   var model = 'Device Model : ' + device.model + '\n';
   var Cordova_version = 'Cordova version: ' + device.cordova + '\n';
   var Operating_system = 'Operating system: ' + device.platform + '\n';
   var Device_UUID = 'Device UUID: ' + device.uuid + '\n';
   var osVersion = 'Operating system version: ' + device.version + '\n';
   var deviceIsVirtual = 'device.isVirtual: ' + device.isVirtual + '\n';
   var deviceSerial = 'device.serial: ' + device.serial + '\n';

   var deviceProperties = model + Cordova_version + Operating_system + Device_UUID + osVersion + deviceIsVirtual + deviceSerial;
   alert(deviceProperties);   
}

// --------检测失败用---------
window.onerror = function(msg, url, line) {  
   var idx = url.lastIndexOf("/");  
   if(idx > -1) {  
    url = url.substring(idx+1);  
   }  
   alert("ERROR in " + url + " (line #" + line + "): " + msg);  
   return false;  
};





