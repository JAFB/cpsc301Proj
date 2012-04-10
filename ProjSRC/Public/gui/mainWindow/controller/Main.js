/*
	Main Panel Controller
 */

Ext.define('GUI.controller.Main', {
    extend: 'Ext.app.Controller',

    views: ['mainpanel.MainPanel'],

    init: function() { 
		this.control({//List of Actions
            'panel button[action=logout]':{
				click: this.logout
			},
			'panel[name=memopanel]':{
				activate: this.loadMemo
			}
        });
	},
	
	logout: function(){
		/* Send logout request */
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
    },
	/* Load memo list */
	loadMemo: function(){
		Ext.getStore('Memoview').load();
	}
});