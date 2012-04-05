
Ext.define('GUI.controller.Users',{
    extend: 'Ext.app.Controller',

    stores: ['Users'],
    models: ['User'],
    views: [
        'admin.usermanagement.user.List',
        'admin.usermanagement.user.Edit'
    ],

    init: function(){
        this.control({
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

    updateUser: function(button){
        //console.log("save button pressed!!!");
        var userStore = this.getStore("Users");
        var win = button.up('window');
        var form = win.down('form');
        var record = form.getRecord();
        var values = form.getValues();
        record.set(values);
        win.close();
        userStore.save();
    },

    editUser: function(grid, record) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    },

    addNewUser: function(){
        var userStore = this.getStore("Users");
        var newuser = Ext.create('GUI.model.User', {id: 0 , name: 'new user name'});
        userStore.add(newuser);
    },

    removeUser: function(){
        var selectedRec = Ext.getCmp('userlist').getSelectionModel().getSelection();
        var userStore = this.getStore('Users');
        userStore.remove(selectedRec);
        userStore.save();
    }
});