
var panels = [
	{
		xtype: 'panel',
		title: 'Home',
		html: '<img src="images/hospital.jpg" height="315" width="550" />'
	},{
		xtype: 'panel',
        title: 'Discussions',
        layout: {
            type: 'border'
        },
        defaults: {
            split: true
        },
        items: [
            {
                xtype: 'discussionsviewpanel',
                region: 'center'
            },
            {
                xtype: 'discussionsgridpanel',
                region: 'west',
                collapsible: true,
                title: 'Discussions'
            }
        ]
	},{
		xtype: 'panel',
		title: 'Memos',
        layout: {
            type: 'border'
        },
        defaults: {
            split: true
        },
        items: [
            {
                region: 'west',
                xtype: 'memoviewpanel',

                collapsible: true

            },
            {
                region: 'center',
                xtype: 'memoviewlist'

            }
        ]
	},{
		xtype: 'panel',
		title: 'Documents'
	},{
		xtype: 'panel',
		title: 'Policies'
	},{
		xtype: 'panel',
		title: 'Media'
	},{
		xtype: 'panel',
		title: 'Calendar'
	},{
		xtype: 'panel',
		title: 'Profile'
	}
];

Ext.define('GUI.view.mainpanel.MainPanel', {
    extend: 'Ext.tab.Panel',
	alias: 'widget.mainpanel',

    minheight: 300,

    activeTab: 0,

    initComponent: function() {
        var me = this;

		if(admin==true){
			Ext.applyIf(me, {
				items: [
					panels   
					,{
						xtype: 'panel',
						title: 'Admin',
                        layout:
                        {
                            type: 'accordion'
                        },
                        items:[
                            {
                                xtype: 'userlist'
                            },
                            {
                                xtype: 'memoeditor'
                            },
                            {
                                xtype: 'discussionsmanagement'
                            }


                        ]
					}
				]
			});
		}else{
			Ext.applyIf(me, {
				items: [panels]
			});
		}
		
        me.callParent(arguments);
    }
});