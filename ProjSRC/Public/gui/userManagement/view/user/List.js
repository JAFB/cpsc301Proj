
Ext.define('GUI.view.user.List', {
    extend: 'Ext.grid.Panel',
    alias:  'widget.userlist',
    title: 'Calgary Emergency Medicine - User Management',
    store: 'Users',
    id: 'userlist',
    xtype: 'gridpanel',
    initComponent: function() {
        this.columns = [
            {header: 'ID', dataIndex: 'id', flex: 1},
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1},
            {header: 'Password', dataIndex: 'password', flex: 1},
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