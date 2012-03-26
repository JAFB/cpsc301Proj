Ext.define('GUI.view.discussions.DiscussionsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.discussionspanel',

    height: 600,
    title: 'Discussions',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'tabpanel',
                    height: 543,
                    width: 145,
                    activeTab: 0,
                    dock: 'left',
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Topics',
                            items: [
                                {
                                    xtype: 'treepanel',
                                    height: 548,
                                    width: 146,
                                    title: 'Topics',
                                    viewConfig: {

                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Questions',
                            items: [
                                {
                                    xtype: 'treepanel',
                                    height: 549,
                                    width: 144,
                                    title: 'Questions',
                                    viewConfig: {

                                    }
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