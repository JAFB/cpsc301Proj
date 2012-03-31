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
                                    id: 'discussionstree',
                                    store: 'Discussions',
                                    useArrows: true,
                                    rootVisible: false,
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
            ]
        });

        me.callParent(arguments);
    }
});