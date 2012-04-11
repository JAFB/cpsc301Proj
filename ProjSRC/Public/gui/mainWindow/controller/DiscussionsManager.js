/*
	Discussion Module Controller
 */

Ext.define('GUI.controller.DiscussionsManager', {
    extend: 'Ext.app.Controller',
    stores: ['Discussions'],
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
        var selectedRec = Ext.getCmp('discussionsmanagement').getSelectionModel().getSelection()[0];
        var discussionStore = this.getStore('Discussions');
        discussionStore.remove(selectedRec);
        discussionStore.save();
		
		var viewpanel = Ext.getCmp('discussionsviewpanel');
		viewpanel.remove(selectedRec.get('_id').toString().trim());

        Ext.MessageBox.alert('Remove', "Discussion Record is removed !");
    }
})