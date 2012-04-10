/*
	app.js for Index page
		-Add documentation
			Apr 6 -- Akio
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'GUI',
    appFolder: 'gui/index',

    controllers: [
        'homepage',
        'Login'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {

            layout: {
                type: 'border',
                padding: 5
            },
            defaults: {
                border: false
            },
            items: [
                {
					/* Logo space */
                    region: 'north',
					html: '<img src="image/cemlogo.jpg" alt="cemlogo" height=84>',
					height: 84
                },
                {
					/* Main Panel */
                    xtype: 'homepage',
                    region: 'center',
                    border: false
                },
				{
					/* Login Form */
					region: 'east',
					border: false,
					items: [{
					  xtype: 'loginform',
					  region: 'north'
					}]
				}
            ]
        });
    }
});