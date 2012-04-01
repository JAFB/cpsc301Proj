/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 23/03/12
 * Time: 6:37 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.controller.Main', {
    extend: 'Ext.app.Controller',

    views: [
        'mainpanel.MainPanel'
    ],

<<<<<<< HEAD
    init: function() { }
=======
    init: function() { 
		this.control({
            'panel button[action=logout]':{
				click: this.logout
			}
        });
	},
	
	logout: function(){
		//console.log("Logged out");
		Ext.Ajax.request({
			url: '/logout',
			success: function (){
				var redirect = '/'; 
				window.location = redirect;
			},
			failure: function (){
				Ext.MessageBox.alert('Error', "Failed to log out");
			}
		});
    }
>>>>>>> f0b551760e93e4c824561c9ed2f322a9330594da
});