/*
	User Management Module Controller
 */
Ext.define('GUI.controller.Users',{
    extend: 'Ext.app.Controller',

    stores: ['Users'],
    models: ['User'],
    views: [
        'admin.usermanagement.user.List',
        'admin.usermanagement.user.Edit'
    ],

    init: function(){
        this.control({//List of Actions
            'panel userlist' : {
                itemdblclick: this.editUser
            },
            'panel userlist toolbar button[action="addnewuser"]' : {
                click: this.addNewUser
            },
            'panel userlist toolbar button[action="removeuser"]' : {
                click: this.removeUser
            },
            'useredit button[action="save"]' : {
                click: this.updateUser
            }
        });
    },

	/* Modify user profile */
    updateUser: function(button){
        var userStore = this.getStore("Users");
        var win = button.up('window');
        var form = win.down('form');
        var record = form.getRecord();
        var values = form.getValues();
		
		/* Validation check */
		if(record.data.email == values.email){
			record.set(values);
            console.log(record);
			userStore.save();
			win.close();
		}else{
			if(userStore.findExact('email',values.email) == -1){
				record.set(values);
				userStore.save();
				win.close();
			}else{
				Ext.MessageBox.alert('Error', "Invalid Data: Duplicate Email");
			}
		}
	
    },

	/* Open user profile editor */
    editUser: function(grid, record) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
		if(Ext.getCmp("passwordField").getValue() !=""){
			Ext.getCmp("passwordField").setValue("passwordisnotmodified");
		}
    },

	/* Add new user and open editor */
    addNewUser: function(){
        var userStore = this.getStore("Users");
        var newuser = Ext.create('GUI.model.User', {name: 'new user name'});
        userStore.add(newuser);
		var view = Ext.widget('useredit');
        view.down('form').loadRecord(newuser);
    },
	/* Remove selected user */
    removeUser: function(){
        var selectedRec = Ext.getCmp('userlist').getSelectionModel().getSelection();
        var userStore = this.getStore('Users');
		if(useremail == selectedRec[0].data.email){
			Ext.MessageBox.alert('Error', "Invalid Request: You cannot remove yourself");
		}else{
			userStore.remove(selectedRec);
			userStore.save();
		}
    }
});