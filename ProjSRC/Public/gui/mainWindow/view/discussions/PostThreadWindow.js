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
<<<<<<< HEAD
	//align : 'stretch',
						
=======
>>>>>>> 1ae5376eeece8b337328e1a26296df2acbf3b5e8

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
<<<<<<< HEAD
                        xtype: 'triggerfield',
                        id: 'post_thread_topic',
                        fieldLabel: 'Topic',
                        store: 'Discussions'
                    },/*
=======
                        xtype: 'textfield',
                        name: 'topic',
                        id: 'post_thread_topic',
                        fieldLabel: 'Topic'
                    },
>>>>>>> 1ae5376eeece8b337328e1a26296df2acbf3b5e8
                    {
                        xtype: 'textfield',
                        name: 'body',
                        id: 'post_thread_body',
                        fieldLabel: 'Body'
<<<<<<< HEAD
                    }*/
					{
						xtype      : 'textarea',
                        id		   : 'post_thread_body',
						fieldLabel : 'Body',
						name       : 'myTextArea',
						anchor     : '100%',
						height	   : 200
					}
=======
                    }
>>>>>>> 1ae5376eeece8b337328e1a26296df2acbf3b5e8
                ]
            }
        ];

        this.buttons = [
            {
<<<<<<< HEAD
                text: 'Save',
                action: 'save'
=======
                text: 'Submit',
                action: 'submitthread'
>>>>>>> 1ae5376eeece8b337328e1a26296df2acbf3b5e8
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