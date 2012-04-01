Ext.define('GUI.controller.homepage', {
    extend: 'Ext.app.Controller',
	
    views: [
	'homepage.homepage'
    ],
	
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});