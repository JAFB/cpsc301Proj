Ext.application({
    name: 'GUI',
    appFolder: 'gui',
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
});