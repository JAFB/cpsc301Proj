Ext.define('GUI.view.discussions.DiscussionsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.discussionspanel',

    title: 'Discussions',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'tabpanel',
                    height: '100%',
                    width: 200,
                    activeTab: 0,
                    dock: 'left',
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Topics',
                            items: [
                                {
                                    xtype: 'treepanel',
                                    store: 'Discussions',
                                    height: '90%',
                                    width: 200,
                                    title: 'Topics',
                                    viewConfig: {

                                    }
                                },
                                {
                                    xtype: 'button',
                                    text: 'Start New Thread',
                                    action: 'newthread'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Questions',
                            items: [
                                {
                                    xtype: 'treepanel',
                                    height: '100%',
                                    width: 200,
                                    title: 'Questions',
                                    viewConfig: {

                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
			items:
			[{
				xtype: 'tabpanel',
				items:[{ xtype: 'panel', title: 'topic#1' }]
			},
			{
				//xtype: 'discussionsthread'
				xtype: 'container',
				height: '100%',
				width: '100%',
				layout: 'vbox',
				autoscroll: 'true',
				
				items: 
				[
					{
						xtype: 'label',
						text: 'Title of thread'
					},{
						xtype: 'label',
						text: 'Author: '
					},{
						xtype: 'label',
						text: 'Discussion goes here'
					},
					{
						xtype: 'panel',
						title: 'Comments',
						height: 100
					},
					{
						xtype: 'panel',
						title: 'Comment#1',
						html: 'where is the stethoscope?'
					},{
						xtype: 'panel',
						title: 'Comment#2',
						html: 'in the bathtub'
					}
				]
			}]
		});

        me.callParent(arguments);
    }
});