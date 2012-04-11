/*
	View for comment form
 */

Ext.define('GUI.view.discussions.CommentForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.commentform',
    id: 'commentform',
    title: 'Add comment',
	/* Layout */
    layout: 'fit',
    autoShow: true,
    closable: false,
	store: 'Discussions',
    width: 400,

    initComponent: function() {//List of Items
        this.items = [
            {
                xtype: 'form',
                items : [
                    {	/* Textfield for comment */
                        xtype: 'textareafield',
                        name: 'body',
                        id: 'comment_body',
                        itemId: 'comment_body',
                        anchor: '100%',
                        allowBlank: false,
                        maxLength: 400,
                        height: 100
                    }
                ]
            }
        ];
		/* Buttons */
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