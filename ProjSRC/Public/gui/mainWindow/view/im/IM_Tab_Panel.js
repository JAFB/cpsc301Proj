Ext.define('GUI.view.im.IM_Tab_Panel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.impanel',
	
    width: 280,
    activeTab: 0,
    title: 'Instant Messaging',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    title: 'Recent',
                    items: [
                        {
                            xtype: 'form',
                            height: '95%',
                            title: 'Recent messages',
							items : [
								{
									xtype: 'textareafield',
									width: 280,
									id: 'mssgForm',
									readOnly: true,
									height: '100%'
									
								}
							]
							
                        },
						{
							xtype: 'toolbar',
							height: '5%',
							items: [
								{
									xtype: 'textfield',
									id: 'mssgField',
									width: 230,
									enterIsSpecial: true,
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
                {
                    xtype: 'panel',
                    title: 'Last day',
					name: 'lastdaypanel',

                    items: [
                        {
                            xtype: 'form',
                            height: '100%',
                            title: 'Messages from the last day',
							items : [
								{
									xtype: 'textareafield',
									width: 280,
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