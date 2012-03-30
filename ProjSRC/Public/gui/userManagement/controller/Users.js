
Ext.define('GUI.controller.Users',{
    extend: 'Ext.app.Controller',

    stores: ['Users'],
    models: ['User'],
    views: [
        'user.List',
        'user.Edit'
    ],

    init: function(){
        this.control({
            'viewport > userlist' : {

                itemdblclick: this.editUser
            },

            'userlist toolbar button[action="addnewuser"]' : {
                click: this.addNewUser
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
        userStore = this.getStore("Users");
        userStore.add({id: '', name: '', password: ' ', email: ' ', description: ' '});
    }
});