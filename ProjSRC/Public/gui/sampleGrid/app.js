Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});

Ext.application({
    name: 'GUI',
    appFolder: 'gui/sampleGrid',
    controllers: [
        'Users'
    ],

    launch: function() {
    /*    Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    html: 'My app',
                    xtype: 'userlist'

                }

            ]
        });*/

        Ext.QuickTips.init();

        var cmp1 = Ext.create('GUI.view.Schedule.schedule', {
            renderTo: Ext.getBody()
        });
	/*	
		var cmp2 = Ext.create('GUI.view.Login.login', {
            renderTo: Ext.getBody()
        });
		*/
        cmp1.show();
		//cmp2.show();
    }});



/*Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});

Ext.application({
    name: 'GUI',
    appFolder: 'gui/sampleGrid',
    controllers: [
        'Users'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'userlist'


                }
            ]
        });
    }
});*/