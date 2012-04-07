
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
                        name: 'name',
                        fieldLabel: 'Name',
						allowBlank: false
                    },
                    {
                        name: 'email',
                        fieldLabel: 'Email',
						allowBlank: false
                    },
                    {
                        name: 'password',
                        fieldLabel: 'Password',
						inputType: 'password',
						id: 'passwordField',
						allowBlank: false
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
                        name: 'description',
                        fieldLabel: 'User Description',
                        autoScroll: true
                    }

                ],
				buttons: [
					{
						text: 'Save',
						formBind: true,
						action: 'save'
					},
					{
						text: 'Cancel',
						scope: this,
						handler: this.close
					}
				]

            }
        ];
        this.callParent(arguments);
    }
});
