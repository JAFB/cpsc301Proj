/*
	View for Main panel
 */

var homeHTML =  "Welcome <b>" + username + "</b>!<br><br>"+
				"Select menu on the top." +
				'<img src="images/hospital.jpg" height="315" width="550" alt="Picture" align="right"/>';
				
 /* Common panels definition */
var panels = [
	{
		xtype: 'panel',
		bodyPadding: 10,
		title: 'Home',
		html: homeHTML
	},{
		xtype: 'panel',
        title: 'Discussions',
        layout: {type: 'border'},
        defaults: {split: true},
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
		name: 'memopanel',
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
	}/*,{
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
	}*/
];
/* view definition starts here */
Ext.define('GUI.view.mainpanel.MainPanel', {
    extend: 'Ext.tab.Panel',
	alias: 'widget.mainpanel',
	/* Layout */
    minheight: 300,
    activeTab: 0,

    initComponent: function() {//List of Items
        var me = this;

		if(admin==true){//Administrator have additional panel, admin
			Ext.applyIf(me, {
				items: [
					panels   
					,{
						xtype: 'panel',
						title: 'Admin',
						name: 'adminpanel',
                        layout:{type: 'accordion'},
                        tabTip: 'Administrator Section',
                        items:[
                            {xtype: 'userlist'},
                            {xtype: 'memoeditor'},
                            {xtype: 'discussionsmanagement'}
                        ]
					}
				]
			});
		}else{// for normal users
			Ext.applyIf(me, {
				items: [panels]
			});
		}
		
        me.callParent(arguments);
    }
});