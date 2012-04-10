/*
	View for discussion management module
 */

Ext.define('GUI.view.admin.discussionsmanagement.DiscussionsManagement', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.discussionsmanagement',
    id: 'discussionsmanagement',
    title: 'Calgary Emergency Medicine - Discussions Manager',
    store: 'DiscussionsManager',

    initComponent: function() {//List of Items
        this.columns = [
            {
                header: 'Title',
                flex: 1,
                dataIndex: 'title'
            },
            {
                header: 'Author',
                flex: 1,
                dataIndex: 'author'
            },
            {
                header: 'Date Created',
                flex: 1,
                dataIndex: 'date_created'
            },
            {
                header: 'Date Modified',
                flex: 1,
                dataIndex: 'date_modified'
            }
        ];

        this.dockedItems = [{
			/* Remove button */
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                align: 'stretchmax',
                type: 'hbox'
            },
            items: [
                {
                    xtype:  'button',
                    text:   'Remove Discussion',
                    action: 'removediscussion'
                }
            ]
        }];

        this.callParent(arguments);
    }
});