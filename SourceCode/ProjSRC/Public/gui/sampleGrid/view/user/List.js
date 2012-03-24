
Ext.define('GUI.view.user.List', {
    extend: 'Ext.grid.Panel',
    alias:  'widget.userlist',
    store:  'Users',
    title: 'Calgary Emergency Department - User management',


    initComponent: function() {
        this.store = {
            fields: ['name', 'email'],
            data: [
                {name: 'Ed', email: 'ed@gmail.com'},
                {name: 'Tommy', email: 'tommy@gmail.com'}
            ]
        };

        this.columns = [
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);

    }
});