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
                        allowBlank: false,
                        maxLength: 400,
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
                scope: this,
                handler: this.close // to use handler to close the form self
            }
        ];

        this.callParent(arguments);
    }
});