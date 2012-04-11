/*
	View for discussion grid panel
 */
/* Definition for grouping */
var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
    groupHeaderTpl: '{name} ({rows.length} Discussion{[values.rows.length > 1 ? "s" : ""]})'
});

Ext.define('GUI.view.discussions.DiscussionsGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.discussionsgridpanel',
	title: 'Topics',
    id: 'discussionsgridpanel',
    store: 'Discussions',
    features: [groupingFeature],
	width: '40%',
	
    initComponent: function(){//List of Items
        this.columns = [
            {	/* List of Discussion */
                header: '',
                flex: 1,
                dataIndex: 'title'
            }
        ];
        this.dockedItems =  [{
			/* Button for new thread */
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                align: 'stretchmax',
                type: 'hbox'
            },
            items: [
                {
                    xtype:  'button',
                    text:   'New Discussion Thread',
                    action: 'newthread'
                }
            ]
        }];
        this.callParent(arguments);
    }
})