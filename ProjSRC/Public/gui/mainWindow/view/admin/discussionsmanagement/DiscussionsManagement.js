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
                dataIndex: 'title',
                flex: 1
            },
            {
                header: 'Author',
                dataIndex: 'author',
                flex: 1
            },
            {
                header: 'Date Created',
                dataIndex: 'date_created',
                flex: 1
            },
            {
                header: 'Date Modified',
                dataIndex: 'date_modified',
                flex: 1
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