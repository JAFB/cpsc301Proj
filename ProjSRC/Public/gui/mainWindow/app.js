

Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});

Ext.application({
    name: 'GUI',
	appFolder: 'gui/mainWindow',

    launch: function() {
        Ext.QuickTips.init();

        var cmp1 = Ext.create('GUI.view.mainpanel.MainPanel', {
            renderTo: Ext.getBody()
        });
        cmp1.show();
    }
});
