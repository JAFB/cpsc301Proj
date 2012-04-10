/*
	Discussion Module Controller
 */

Ext.define('GUI.controller.DiscussionsManager', {
    extend: 'Ext.app.Controller',
    stores: ['DiscussionsManager'],
    models: ['Discussion'],
    views: ['admin.discussionsmanagement.DiscussionsManagement'],

    init: function() {
        this.control({//List of actions
            'discussionsmanagement button[action=removediscussion]': {
                click: this.removeDiscussion
            }
        });
    },

    removeDiscussion: function() {
        var selectedRec = Ext.getCmp('discussionsmanagement').getSelectionModel().getSelection();
        var discussionStore = this.getStore('DiscussionsManager');
        discussionStore.remove(selectedRec);
        discussionStore.save();
    }
})