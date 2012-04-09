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
    id: 'postthreadwindow',
    title: 'New Discussion Thread',
    layout: 'fit',
    autoShow: true,
    closable: false,
    width: 600,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items : [
                    {
                        xtype: 'textfield',
                        name: 'title',
                        id: 'post_thread_title',
                        fieldLabel: 'Title',
                        enforceLength: true,
                        allowBlank: false,
                        maxLength: 10,
                        anchor: '100%'
                    },
                    {
                        xtype: 'textfield',
                        name: 'topic',
                        id: 'post_thread_topic',
                        fieldLabel: 'Topic',
                        enforceLength: true,
                        allowBlank: false,
                        maxLength: 100,
                        anchor: '100%'
                    },
                    {
                        xtype: 'textareafield',
                        name: 'body',
                        id: 'post_thread_body',
                        fieldLabel: 'Body',
                        anchor: '100%',
                        enforceLength: true,
                        allowBlank: false,
                        maxLength: 400,
                        height: 200
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