var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
    groupHeaderTpl: 'Topic: {name} ({rows.length} {[values.rows.length > 1 ? "s" : ""]})'
});

Ext.define('GUI.view.discussions.DiscussionsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.discussionspanel',
    title: 'Discussions',
    id: 'discussionpanel',
    initComponent: function() {
        Ext.applyIf(this, {
			layout:'border',
			defaults: {
				split: true
			},
            items: [
                {
                    xtype: 'tabpanel',
                    region: 'center',
                    itemId: 'discussiondisplayborad',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Welcome'
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    region: 'west',
                    itemId: 'discussiongridpanel',
                    collapsible: true,
                    height: 100,
                    width: 225,
                    title: 'Topics',
                    id: 'topicspanel',
                    store: 'Discussions',
                    features: [groupingFeature],
                    columns: [
                        {
                            header: '',
                            flex: 1,
                            dataIndex: 'title'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            layout: {
                            align: 'stretchmax',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'New Discussion Thread',
                                    action: 'newthread'
                                }
                            ]
                        }
                    ]
                }

            ]
        });

        this.callParent(arguments);
    }

});