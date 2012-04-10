/*
	View for discussion panel
 */
Ext.define('GUI.view.discussions.DiscussionsViewPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.discussionsviewpanel',
    id: 'discussionsviewpanel',
	
	/* Layout */
    width: '60%',
    activeTab: 0,

<<<<<<< HEAD
    initComponent: function() {
=======
    initComponent: function() {//List of Items
        Ext.applyIf(this, {
            items: [
                {
                    xtype: 'panel',
                    title: 'Latest Discussions',
                    items: [
                        {	/* Discussion List */
                            xtype: 'gridpanel',
                            store: 'Discussions',
>>>>>>> 72498a2afbd24baf6bdc0903aed4627007028b50

        this.items = [
            {
                xtype: 'panel',
                title: 'Latest Discussions',
                items: [
                    {
                        xtype: 'gridpanel',
                        store: 'Discussions',
                        columns: [
                            {
                                header: 'Title',
                                flex: 1,
                                dataIndex: 'title'
                            },
                            {
                                header: 'Date Created',
                                flex: 1,
                                dataIndex: 'date_created'
                            }
                        ]
                    }
                ]
            }
        ]

        this.callParent(arguments);
    }
})