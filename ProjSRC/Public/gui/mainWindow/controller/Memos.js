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
        console.log(useremail + "postmemo button is clicked");
        var newmemoTopic = Ext.getCmp('memotopic').value;
        var newmemoBody = Ext.getCmp('memobodyedit').value;
        var newMemoRec = Ext.create('GUI.model.Memo', {
            title: newmemoTopic,
            content: newmemoBody,
            date_created: new Date(),
            date_modified: new Date(),
            author: useremail
        });
        var memoStore = this.getStore('Memos');


        memoStore.add(newMemoRec);
        memoStore.save();

        Ext.getCmp('memotopic').value = 'Enter New Topic';

        Ext.getCmp('memobodyedit').value = 'Enter New Body';

        console.log(memoStore['data']);

    }

})