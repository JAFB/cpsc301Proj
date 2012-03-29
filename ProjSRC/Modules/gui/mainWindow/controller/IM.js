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
            'impanel button[action=send]': {
                click: this.sendMssg
            }
        });
    },

    sendMssg: function() {
        var mssg = Ext.getCmp('mssgField').getValue();
        Ext.getCmp('mssgField').setValue('');

        console.log(mssg);
    }
});