
var winOpen = false;
var commentFormOpen = false;

Ext.define('GUI.controller.Discussions', {
    extend: 'Ext.app.Controller',

    models: [
        'Discussion'
    ],

    stores: [
        'Discussions'
    ],

    views: [
        'discussions.CommentForm',
        'discussions.DiscussionsGridPanel',
        'discussions.DiscussionsViewPanel',
        'discussions.PostThreadWindow'
    ],

    init: function() {
        this.control({
            'commentform button[action=submitcomment]': {
                click: this.addComment
            },

            'commentform button[action=closewindow]': {
                click: this.closeCommentForm
            },

            'discussionsgridpanel button[action=newthread]': {
                click: this.showNewThreadWindow
            },

            'discussionsviewpanel button[action=addcomment]': {
                click: this.showCommentForm
            },

            'postthreadwindow button[action=submitthread]': {

                click: this.submitThread
            },

            'panel discussionsgridpanel' : {
                itemdblclick: this.openDiscussion
            }
        });

        var runner = new Ext.util.TaskRunner();
        runner.start(this.refreshTask);
    },


    refreshTask: {
        run: function() {
            Ext.getStore('Discussions').load();
        },
        interval: 30000
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

    openDiscussion: function(grid, record) {
        var viewpanel = Ext.getCmp('discussionsviewpanel');

        var newpanel = Ext.create('Ext.panel.Panel', {
            title: record.get('title'),
            closable: true,
            autoScroll: true,
            html: this.bodyRender(record) + this.commentRender(record),
            fbar: ['->', {
                text:'Add comment',
                record: record,
                action: 'addcomment'
            }]
        });
        
        viewpanel.add(newpanel);
        viewpanel.setActiveTab(newpanel);
    },


    bodyRender: function(record){
        var renderedStr = '<br><div class="topic"><h5>{0}</h5>' +
            '<div><p>Author: {1}</p></div> <div><span class="author"><br>{2}</span></div> </div>';
        return Ext.String.format(renderedStr,record.get('title'), record.get('author'), record.get('body'));
    },


    commentRender: function(record){
        var str = '<br><br><hr/><br><b>Comments:</b><br><br>';
        
        var comments = record.get('comments');
        
        if (comments.length == 0)
            str += '<i>There are no comments to display.</i>';
        else {
            for (var i in comments)
               str += '<b>' + comments[i].author +
                   '</b> <i>(' + comments[i].date +
                   ')</i><br>' + comments[i].body + '<br><br>';
        }
        
        return str;
    },


    showCommentForm: function(button) {
        if (!commentFormOpen) { // if window not already open
            commentFormOpen = true;
            var view = Ext.widget('commentform');
            view.down('commentform');
            view.record = button.record;
        }
    },


    closeCommentForm: function(button) {
        button.up('commentform').close();
        commentFormOpen = false;
    },


    addComment: function(button) {
        var win = button.up('commentform');
        var store = this.getStore('Discussions');
        var discussion = win.record;
        var body = Ext.getCmp('comment_body').getValue();

        if (body == '')
            Ext.MessageBox.alert('Error', "Please enter a comment or press cancel.");

        else {
            var newComment = {
                author: username,
                body: body,
                date: new Date()
            };

            var newCommentsList = discussion.get('comments');
            newCommentsList.push(newComment);

            discussion.set('comments', newCommentsList);
            store.save();
            discussion.commit();

            console.log(discussion.get('comments'));

            win.close();
            commentFormOpen = false;
        }
    }
});