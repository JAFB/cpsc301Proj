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