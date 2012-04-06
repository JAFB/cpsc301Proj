Ext.define('GUI.view.discussions.DiscussionsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.discussionspanel',
    title: 'Discussions',
    store: 'Discussions',
    initComponent: function() {
        this.items = [

        ],
        this.callParent(arguments);
    }
});