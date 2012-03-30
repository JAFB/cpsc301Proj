
Ext.define('GUI.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function(){
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name:   'id',
                        fieldLabel: 'ID'
                    },
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'email',
                        fieldLabel: 'Email'
                    },
                    {
                        xtype: 'textfield',
                        name: 'password',
                        fieldLabel: 'Password'
                    },
                    {
                        xtype: 'textareafield',
                        grow: true,
                        name: 'description',
                        fieldLabel: 'User Description',
                        autoScroll: true
                    }

                ]

            }
        ];


        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
