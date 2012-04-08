/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 07/04/12
 * Time: 2:52 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.view.discussions.CommentForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.commentform',

    title: 'Add comment',
    layout: 'fit',
    autoShow: true,
    closable: false,
    width: 400,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items : [
                    {
                        xtype: 'textareafield',
                        name: 'body',
                        id: 'comment_body',
                        anchor: '100%',
                        height: 100
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Submit',
                action: 'submitcomment'
            },
            {
                text: 'Cancel',
                action: 'closewindow'
            }
        ];

        this.callParent(arguments);
    }
});