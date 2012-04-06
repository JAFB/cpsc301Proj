
Ext.define('GUI.view.admin.usermanagement.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function(){
        this.items = [
            {
                xtype: 'form',
				defaultType:  'textfield',
                items: [
                    {
						xtype: 'numberfield',
                        name:   'id',
                        fieldLabel: 'ID',
						minValue: 0,
						decimalPrecision: 0
						
                    },
                    {
                        name: 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        name: 'email',
                        fieldLabel: 'Email'
                    },
                    {
                        name: 'password',
                        fieldLabel: 'Password',
						inputType: 'password'
                    },
					{
						xtype: 'checkbox',
						boxLabel: 'Make Administrator',
						name: 'admin',
						inputValue: true,
						uncheckedValue: false
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
