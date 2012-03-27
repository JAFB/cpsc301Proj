/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 26/03/12
 * Time: 3:38 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.view.IndexPanel', {
    extend: 'Ext.panel.Panel',

    height: 850,
    title: 'Calgary Emergency Medicine',

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'mainpanel',
                    region: 'center'
                },
                {
                    xtype: 'impanel',
                    region: 'east',
                    collapsible: true
                }
            ]
        });

        me.callParent(arguments);
    }
});