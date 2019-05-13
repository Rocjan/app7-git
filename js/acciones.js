// JavaScript Document

$(document).ready(function(e){
	document .addEventListener ("deviceready",function(){
	
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
		//app1
		
		$('#beep').tap(function(){
			navigator.notification.beep(1);
		});//tap beep
		
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(1000);
		});//tap vibrar
		//app2
		
		$('#izquierda').on("swipeleft",function(){
			navigator .notification. alert("Deslizó a la izquierda",function(){"Aplicacion ","Aceptar"});//alert
		});//izquierda
		
		$('#derecha').on("swiperight",function(){
			navigator .notification. confirm("¿Qué quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(1000);
					break;
				}//switch
			},"Aplicacion ","Beep,Vibrar,Cancelar");//confirm
			
		});//derecha
		//app3
		
	},false);//ready device
});//document