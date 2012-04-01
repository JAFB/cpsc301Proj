/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 29/03/12
 * Time: 11:41 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.view.discussions.PostThreadWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.postthreadwindow',

    title: 'Start New Thread',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items : [
                    {
                        xtype: 'textfield',
                        name: 'title',
                        id: 'post_thread_title',
                        fieldLabel: 'Title'
                    },
                    {
                        xtype: 'textfield',
                        name: 'topic',
                        id: 'post_thread_topic',
                        fieldLabel: 'Topic'
                    },
                    {
                        xtype: 'textfield',
                        name: 'body',
                        id: 'post_thread_body',
                        fieldLabel: 'Body'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Submit',
                action: 'submitthread'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});