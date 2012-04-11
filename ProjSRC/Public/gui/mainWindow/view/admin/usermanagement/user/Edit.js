/*
	View for User editor
 */
Ext.define('GUI.view.admin.usermanagement.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',
	id: 'useredit',
	/* Layout */
    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function(){//List of Items
        this.items = [
            {	/* Textfields */
                xtype: 'form',
				defaultType:  'textfield',
                items: [
                    {
                        name: 'name',
                        fieldLabel: 'Name',
						allowBlank: false,
						enforceMaxLength: true,
                        emptyText: 'User name',
						maxLength: 50
                    },
                    {
                        name: 'email',
                        fieldLabel: 'Email',
						allowBlank: false,
						enforceMaxLength: true,
                        emptyText: 'Email address',
						maxLength: 50
                    },
                    {
                        name: 'password',
                        fieldLabel: 'Password',
						inputType: 'password',
						id: 'passwordField',
						allowBlank: false,
						enforceMaxLength: true,
						maxLength: 50
                    },
					{//check box
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
                        autoScroll: true,
						enforceMaxLength: true,
                        resizable: true,
                        emptyText: 'Brief User Description ',
						maxLength: 500
                    }

                ],
				/* Buttons */
				buttons: [
					{
						text: 'Save',
						formBind: true,
						action: 'save',
                        tooltip: 'Click me - Save Changes'
					},
					{
						text: 'Cancel',
						scope: this,
						handler: this.close,
						action: 'cancel',
                        tooltip: 'Click me - Cancel Changes!'
					}
				]

            }
        ];
        this.callParent(arguments);
    }
});
