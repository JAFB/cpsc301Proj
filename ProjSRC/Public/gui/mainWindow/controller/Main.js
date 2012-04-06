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
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
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
>>>>>>> 1ae5376eeece8b337328e1a26296df2acbf3b5e8
    }
});