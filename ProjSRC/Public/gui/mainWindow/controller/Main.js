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

    init: function() { 
		this.control({
            'panel button[action=logout]':{
				click: this.logout
			}
        });
	},
	
	logout: function(){
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
});