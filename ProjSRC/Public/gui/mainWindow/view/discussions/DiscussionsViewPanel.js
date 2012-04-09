
Ext.define('GUI.view.discussions.DiscussionsViewPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.discussionsviewpanel',

    id: 'discussionsviewpanel',
    width: '60%',
    activeTab: 0,

    initComponent: function() {
        Ext.applyIf(this, {
            items: [
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
        });

        this.callParent(arguments);
    }
})