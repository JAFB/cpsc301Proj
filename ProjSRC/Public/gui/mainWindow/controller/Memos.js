Ext.define('GUI.controller.Memos', {
    extend: Ext.app.Controller,
    views: [
        'admin.memomanagement.Memoeditor'
    ],
    models: [
        'Memo'
    ],
    stores: [
        'Memos'
    ],
    init: function(){
        this.control({
            'form toolbar button[action=postmemo]': {
                click: this.create_post_memo
            }
        })
    },

    create_post_memo: function(){
        /*
            to validate Memo body and Memo title
         */
        if(Ext.getCmp('memotopic').getValue().trim().length == 0
           || Ext.getCmp('memobodyedit').getValue().trim().length == 0){

            Ext.MessageBox.alert('Error', "Memo must have title and body !!!");

        } else {
            var date = new Date();
            var newMemoRec = Ext.create('GUI.model.Memo', {
                title: Ext.getCmp('memotopic').getValue(),
                content: Ext.getCmp('memobodyedit').getValue(),
                date_created: date,
                date_modified: date,
                author: useremail
            });
            var memoStore = this.getStore('Memos');
            memoStore.add(newMemoRec);
            console.log(newMemoRec);
            memoStore.save();

            newMemoRec.commit(); // commit the new record into local store object.

            Ext.getCmp('memotopic').setValue('');
            Ext.getCmp('memobodyedit').setValue('');
        }
    }
})