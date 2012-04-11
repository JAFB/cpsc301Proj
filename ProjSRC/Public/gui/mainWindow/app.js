/*
	app.js for main page
		-Add documentation
 */

Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true
});

/* Create Global Session Data variables */
var username,admin, useremail;
var userNameStore = new Ext.data.Store({
    fields: ['username','admin'],  
    proxy: {
        type: 'ajax',
        method: 'GET',
        url: '/session',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
/* Load Global Session Data */
userNameStore.load({
    scope: this,
    callback: function(record,options,success){
        username = userNameStore.proxy.reader.jsonData.data.username;
        admin = userNameStore.proxy.reader.jsonData.data.admin;
        useremail = userNameStore.proxy.reader.jsonData.data.email;
    }
});
/* Main definition starts here */
Ext.application({
    name: 'GUI',
    appFolder: 'gui/mainWindow',

    controllers: [
        'Discussions',
        'DiscussionsManager',
        'IM',
        'Main',
        'Users',
        'Memos',
        'Memoviews'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {

            layout: {
                type: 'border',
                padding: 5
            },
            defaults: {
                split: true
            },
            items: [
				{	/* Logo and Logout tool bar */      
                    region: 'north',
					html: '<img src="images/cemlogo.jpg" alt="cemlogo" height=84>',
					height: 110,
					border: false,				
					dockedItems: [{
						dock: 'bottom',
						xtype: 'toolbar',
						items: ["Welcome ",username,'->',
						{
						    text: 'Log out',
						    action: 'logout',
                            tooltip: 'Click me - Log out '
						}
						]
					}]
                },
                {	/* Main Panel */
                    xtype: 'mainpanel',
                    region: 'center',
                    border: false
                },
                {	/* IM Panel */
                    xtype: 'impanel',
                    region: 'east',
                    collapsible: true
                }
            ]
        });
    }
});