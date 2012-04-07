var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
    groupHeaderTpl: '{name} ({rows.length} Discussion{[values.rows.length > 1 ? "s" : ""]})'
});

Ext.define('GUI.view.discussions.DiscussionsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.discussionspanel',

    title: 'Discussions',

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
                    height: 800,	

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
                    collapsible: true,
                    height: 100,
                    width: 225,

                    title: 'Topics',
                    id: 'topicspanel',
                    //iconCls: 'icon-grid',
                    store: 'Discussions',
                    features: [groupingFeature],

                    columns: [
                        {
                            header: '',
                            flex: 1,
                            dataIndex: 'title'
                        }
                    ],
                    fbar: ['->', {
                        text:'New Discussion Thread',
                        action: 'newthread'
                    }]
                }
            ]
        });

        this.callParent(arguments);
    }
});