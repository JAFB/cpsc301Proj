/*
	View for post new thread window
 */

Ext.define('GUI.view.discussions.PostThreadWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.postthreadwindow',
    id: 'postthreadwindow',
    title: 'New Discussion Thread',
	/* Layout */
    layout: 'fit',
    autoShow: true,
    closable: false,
    width: 600,

    initComponent: function() {// List of Items
        this.items = [
            {
                xtype: 'form',
                items : [
                    {	/* Textfield for title */
                        xtype: 'textfield',
                        name: 'title',
                        id: 'post_thread_title',
                        fieldLabel: 'Title',
                        enforceLength: true,
                        allowBlank: false,
                        maxLength: 100,
                        anchor: '100%'
                    },
                    {	/* Text field for topic */
                        xtype: 'textfield',
                        name: 'topic',
                        id: 'post_thread_topic',
                        fieldLabel: 'Topic',
                        enforceLength: true,
                        allowBlank: false,
                        maxLength: 100,
                        anchor: '100%'
                    },
                    {	/* Text field for body */
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
		/* Buttons */
        this.buttons = [
            {
                text: 'Submit',
                action: 'submitthread',
                tooltip: 'Click me - Submit Discussion Thread'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close,
                tooltip: 'Click me - Cancel Discussion Thread'
            }
        ];

        this.callParent(arguments);
    }
});