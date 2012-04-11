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
			},
			'panel[name=adminpanel]':{
				activate: this.loadAdmin
			},
			'panel[name=discussionpanel]':{
				activate: this.loadDiscussion
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
	},
	
	loadAdmin: function(){
		Ext.getStore('Users').load();
	},
	loadDiscussion: function(){
		Ext.getStore('Discussions').load();
	}
});