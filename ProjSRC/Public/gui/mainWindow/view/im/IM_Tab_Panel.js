/*
	IM view definitions
 */
Ext.define('GUI.view.im.IM_Tab_Panel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.impanel',
	/* Layout */
    width: 280,
    activeTab: 0,
    title: 'Instant Messaging',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {	/* Recent Panel */
                    xtype: 'panel',
                    title: 'Recent',
                    items: [
                        {	/* Message receiver form */
                            xtype: 'form',
                            height: '95%',
                            title: 'Recent messages',
							dockedItems : [
								{
									xtype: 'textareafield',
									width: '100%',
									id: 'mssgForm',
									readOnly: true,
									height: '99%'
									
								}
							]
							
                        },
						{	/* Message sender form */
							xtype: 'toolbar',
							height: '5%',
							items: [
								{
									xtype: 'textfield',
									id: 'mssgField',
									width: 230,
									enterIsSpecial: true, //enter key to trigger event
									emptyText: 'Enter Message'
								},'->',
								{
									text: 'Send',
									action: 'send'
								}
							]
						}  
                    ]
                },
                {	/* Last day message panel */
                    xtype: 'panel',
                    title: 'Last day',
					name: 'lastdaypanel',

                    items: [
                        {
                            xtype: 'form',
                            height: '100%',
                            title: 'Messages from the last day',
							dockedItems : [
								{	/* message field */
									xtype: 'textareafield',
									width: '100%',
									id: 'mssgFormLastDay',
									readOnly: true,
									height: '100%'
								}
							]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});