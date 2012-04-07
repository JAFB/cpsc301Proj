/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 23/03/12
 * Time: 6:37 PM
 * To change this template use File | Settings | File Templates.
 */

var winOpen = false;

Ext.define('GUI.controller.Discussions', {
    extend: 'Ext.app.Controller',

    models: [
        'Discussions'
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

            'postthreadwindow button[action=submitthread]': {
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
        var win = button.up('postthreadwindow');
        var topic = Ext.getCmp('post_thread_topic').getValue();
        var title = Ext.getCmp('post_thread_title').getValue();
        var body = Ext.getCmp('post_thread_body').getValue();

        if (topic == '')
            Ext.MessageBox.alert('Error', "Please enter a topic.");

        else {
            var newDiscussion = Ext.create('GUI.model.Discussions', {
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
    }
});