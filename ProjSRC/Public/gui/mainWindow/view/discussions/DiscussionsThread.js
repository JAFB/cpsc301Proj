Ext.define('GUI.view.discussions.DiscussionsThread', {
    extend: 'Ext.container.Container',
    alias: 'widget.discussionsthread',

    title: 'Discussions Thread',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			xtype: 'button',
			text: 'hi'
        });

        me.callParent(arguments);
    }
});