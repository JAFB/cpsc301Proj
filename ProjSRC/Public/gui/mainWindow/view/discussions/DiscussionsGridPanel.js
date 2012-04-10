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
    /*
    selModel: {
        selType: 'rowmodel',
        mode: 'SINGLE'
<<<<<<< HEAD
    },*/
    initComponent: function(){
=======
    },
	width: '40%',
	
    initComponent: function(){//List of Items
>>>>>>> 72498a2afbd24baf6bdc0903aed4627007028b50

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