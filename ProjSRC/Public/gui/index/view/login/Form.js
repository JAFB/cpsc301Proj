/*
	Login Module View
 */

Ext.define('GUI.view.login.Form' ,{
    extend: 'Ext.form.FormPanel',
    alias : 'widget.loginform',
 
	/* Layouts */
    frame: true,
    title: 'User Login',
    bodyPadding: '5px 5px 0',
    width: 300,
    height: 120,
	/* Text field settings */
    fieldDefaults: {
        labelWidth: 100,
        msgTarget: 'side',
        autoFitErrors: false
    },
    defaults: {
        width: 250,
        inputType: 'password',
		allowBlank: false
    },
    defaultType: 'textfield',
    
    initComponent: function() {//List of Items
        this.buttons = [
            {//Button
                name: 'loginButton',
                text: 'Login',
                action: 'login',
                formBind: true
            }
        ];
        
        this.items = [
            {//Text field
                fieldLabel: 'UserID',
                name: 'userid',
                id: 'userid',
                inputType: 'text',
                emptyText: 'Enter email address',
                enableKeyEvents: true
            },
            {
                fieldLabel: 'Password',
                name: 'password',
                id: 'pwd',
                emptyText: 'Enter password',
                enableKeyEvents: true
            }
        ];
        
        this.callParent(arguments);
    }
});