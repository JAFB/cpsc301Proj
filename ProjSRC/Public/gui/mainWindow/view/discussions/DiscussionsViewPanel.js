/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 07/04/12
 * Time: 1:17 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.view.discussions.DiscussionsViewPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.discussionsviewpanel',

    id: 'discussionsviewpanel',

    activeTab: 0,

    initComponent: function() {
        Ext.applyIf(this, {
            items: [
                {
                    xtype: 'panel',
                    title: 'Latest Discussions',
                    items: [
                        {
                            xtype: 'gridpanel',
                            store: 'Discussions',

                            columns: [
                                {
                                    header: 'Title',
                                    flex: 1,
                                    dataIndex: 'title'
                                },
                                {
                                    header: 'Date Created',
                                    flex: 1,
                                    dataIndex: 'date_created'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        this.callParent(arguments);
    }
})