
var winOpen = false;

Ext.define('GUI.controller.Discussions', {
    extend: 'Ext.app.Controller',

    models: [
        'Discussion'
    ],

    stores: [
        'Discussions'
    ],

    views: [
        'discussions.DiscussionsPanel',
        'discussions.PostThreadWindow'
    ],


    init: function() {
        this.control({
            'discussionspanel button[action=newthread]': {
                click: this.showNewThreadWindow
            },

            'discussionspanel gridpanel': {
                itemclick: this.displaytopic
            },

            'postthreadwindow toolbar button[action=submitthread]': {
                click: this.submitThread
            },

            'postthreadwindow button[action=closewindow]': {
                click: this.closeThreadWindow
            }
        });

        var runner = new Ext.util.TaskRunner();
        runner.start(this.refreshTask);
    },


    refreshTask: {
        run: function() {
            Ext.getStore('Memoview').load();

        },
        interval: 30000 // 1 minute
    },


    showNewThreadWindow: function() {
        if (!winOpen) { // if window not already open
            winOpen = true;
            var view = Ext.widget('postthreadwindow');
            view.down('postthreadwindow');
        }
    },


    closeThreadWindow: function(button) {
        button.up('postthreadwindow').close();
        winOpen = false;
    },


    submitThread: function(button) {
        console.log("button clicked");
        var win = button.up('postthreadwindow');
        var topic = Ext.getCmp('post_thread_topic').getValue().trim();
        var title = Ext.getCmp('post_thread_title').getValue().trim();
        var body = Ext.getCmp('post_thread_body').getValue().trim();

        if (topic == '')
            Ext.MessageBox.alert('Error', "Please enter a topic.");

        else {
            var newDiscussion = Ext.create('GUI.model.Discussion', {
                title: title,
                topic: topic,
                body: body,
                comments: [],
                author: username,
                date_created: new Date(),
                date_modified: new Date()
            });

            this.getStore('Discussions').add(newDiscussion);
            this.getStore('Discussions').save();
            newDiscussion.commit();

            win.close();
            winOpen = false;
        }
    },

    displaytopic: function(){
        // get discussionpanel object which is defined in 'view/discussion/DiscussionPanel.js'
        var discussionpanel = Ext.getCmp('discussionpanel');
        // get the selected item from gridpanel
        var selecteditem = discussionpanel.getComponent('discussiongridpanel').getSelectionModel().getSelection();
        this.createDispTab(selecteditem[0]);
        console.log(selecteditem[0]);

    },

    /*create a tab panel to display the selected item */
    /*
    precondition: discussion dataset object is created
    postcondition: tabpanel object will be created and activated
    params:
        discussionRec: it is unique id for creating tabpanel object.
     */
    createDispTab: function(discussionRec){
        var displayPanel = Ext.getCmp('discussionpanel').getComponent('discussiondisplayborad');
        var discussionTab = displayPanel.getComponent(discussionRec.get('_id'));
        if (discussionTab == null){
            var tabpanel = Ext.create('Ext.panel.Panel', {
                id: discussionRec.get('_id').toString().trim(),
                title: discussionRec.get('topic'),
                html: discussionRec.get('body')
            });
            displayPanel.add(tabpanel);
            displayPanel.setActiveTab(tabpanel);

        } else {
            displayPanel.setActiveTab(discussionTab);
        }
    }
});