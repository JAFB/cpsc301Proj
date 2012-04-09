Ext.define('GUI.controller.DiscussionsManager', {
    extend: 'Ext.app.Controller',
    stores: [
        'DiscussionsManager'
    ],
    models: [
        'Discussion'
    ],
    views: [
        'admin.discussionsmanagement.DiscussionsManagement'
    ],

    init: function() {
        this.control({
            'discussionsmanagement button[action="removediscussion"]': {
                click: this.removeDiscussion
            }
        });
    },

    removeDiscussion: function() {
        var selectedRec = Ext.getCmp('discussionsmanagement').getSelectionModel().getSelection()[0];
        var discussionStore = this.getStore('DiscussionsManager');
        var rec = discussionStore.getAt(selectedRec['index']);

        console.log(rec);
        discussionStore.remove(rec);
        discussionStore.sync();
        //selectedRec.commit();

        //console.log(discussionStore);
    }
})