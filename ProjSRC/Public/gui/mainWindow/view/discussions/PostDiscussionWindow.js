
Ext.define('GUI.view.discussions.PostDiscussionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.postthreadwindow',

    title: 'Start New Thread',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {

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