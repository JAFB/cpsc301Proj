
Ext.define('GUI.controller.Users',{
    extend: 'Ext.app.Controller',

    store: ['Users'],

    models: ['User'],

    views: [
        'user.List',
        'user.Edit'
    ],

    users: [
        'Users'
    ],

    init: function(){
        this.control({
            'viewport > userlist' : {
                //render: this.onPanelRendered
                itemdblclick: this.editUser
            },
            'useredit button[action=save]' : {
                click: this.updateUser
            }
        });
    },

    updateUser: function(button){
        console.log("save button pressed!!!")
        var win = button.up('window');
        var form = win.down('form');
        var record = form.getRecord();
        var values = form.getValues();

        record.set(values);
        win.close();

    },

    editUser: function(grid, record) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    },

    onPanelRendered: function(){
        console.log('The panel was rendered');
    }
});