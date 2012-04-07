Ext.define('GUI.view.homepage.authorized', {
    extend: 'Ext.container.Container',
	alias: 'widget.authorized',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
		
		//	layout: 'border',
		//	padding: 5,
            items: [
                {
                    xtype: 'panel',
                    height: 21,
                    margin: 0,
                    width: 1293,
                    title: 'Emergency Medicine'
                },
                {
                    xtype: 'container',
                    height: 52,
                    width: 1163
                },
                /*{
                    xtype: 'tabpanel',
                    activeTab: 2,
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Home'
                        },
                        {
                            xtype: 'panel',
                            title: 'Policies'
                        },
                        {
                            xtype: 'panel',
                            title: 'Tab 3'
                        }
                    ]
                },*/
                {
                    xtype: 'container',
                    height: 720,
                    width: 1293,
                    layout: {
                        type: 'column'
                    },
                    items: [
                        {
                            xtype: 'container',
                            height: 745,
                            width: '75%',
							//layout: 'centre',
                            items: [
                                {
                                    xtype: 'container',
                                    height: 45,
                                    width: 172
                                },
                                {
                                    xtype: 'label',
                                    margin: 45,
                                    padding: 0,
                                    text: 'Welcome'
                                },
                                {
                                    xtype: 'container',
                                    height: 14,
                                    width: 264
                                },
                                {
                                    xtype: 'label',
                                    margin: 65,
                                    text: 'Calgary Emergency Medicine'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 756,
                            width: '25%',
                            activeItem: 0,
                            items: [
                                {
                                    xtype: 'container',
                                    height: 94,
                                    width: 193,
                                    items: [
                                        {
                                            xtype: 'label',
                                            margin: 110,
                                            padding: 0,
                                            text: 'Login'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'ID#'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 256,
                                    fieldLabel: 'Password#:'
                                },
                                {
                                    xtype: 'button',
                                    width: 150,
                                    text: 'Enter'
                                },
                                {
                                    xtype: 'container'
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