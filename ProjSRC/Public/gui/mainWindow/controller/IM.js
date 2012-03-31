/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 26/03/12
 * Time: 3:43 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.controller.IM', {
    extend: 'Ext.app.Controller',

    views: [
        'im.IM_Tab_Panel'
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