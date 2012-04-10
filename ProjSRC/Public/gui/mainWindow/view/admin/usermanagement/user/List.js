/*
	View for user list
 */
Ext.define('GUI.view.admin.usermanagement.user.List', {
    extend: 'Ext.grid.Panel',
    alias:  'widget.userlist',
    title: 'Calgary Emergency Medicine - User Manager',
    store: 'Users',
    id: 'userlist',
	/* Layout */
    anchor: '100%',
    collapsible: true,
    collapseDirection: 'top',
    initComponent: function() {//List of Items
        this.columns = [// definitions for columns
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1},
			{
				xtype: 'booleancolumn', 
				text: 'Admin',
				trueText: 'Yes',
				falseText: 'No', 
				dataIndex: 'admin'
			},
            {header: 'Desc', dataIndex: 'description', flex: 1}
        ];
        this.dockedItems = [{
			/* Add and remove user buttons */
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                align: 'stretchmax',
                type: 'hbox'
            },
            items: [
                {
                    xtype:  'button',
                    text:   'Add New User',
                    action: 'addnewuser'
                },
                {
                    xtype:  'button',
                    text:   'Remove User',
                    action: 'removeuser'
                }
            ]
        }];

		this.callParent(arguments);
	}
});