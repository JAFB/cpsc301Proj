/*
	Discussion Module Controller
 */
Ext.define('GUI.controller.Discussions', {
    extend: 'Ext.app.Controller',

	/* Include other part of discussion */
    models: ['Discussion'],

    stores: ['Discussions'],

    views: [
        'discussions.CommentForm',
        'discussions.DiscussionsGridPanel',
        'discussions.DiscussionsViewPanel',
        'discussions.PostThreadWindow'
    ],

    init: function() {//List of action
        //this.getStore('Discussions').addListener('load', this.refreshTab, this);
        this.control({
            'commentform button[action=submitcomment]': {
                click: this.addComment
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
                itemclick: this.openDiscussion
            }
            
        });
		
        var runner = new Ext.util.TaskRunner();
        runner.start(this.refreshTask);
    },
	/* Auto Refresh */
    refreshTask: {
        run: function() {
            Ext.getStore('Discussions').load();
        },
        interval: 30000
    },
	/* Open Editor */
    showNewThreadWindow: function() {
		if(Ext.getCmp('postthreadwindow')) return;
        var view = Ext.widget('postthreadwindow');
        view.down('postthreadwindow');
    },
	/* Validate New post */
    validatePostThreadsInputs: function(){
        // if validator's rules are violated, then function validate() will return false.
        var topicField = Ext.getCmp('post_thread_topic');
        var titleField = Ext.getCmp('post_thread_title');
        var body = Ext.getCmp('post_thread_body');
        return (topicField.validate() && titleField.validate() && body.validate());
    },
	/* Validate new comment */
    validateCommentsInputs: function(){
        var commentBodyField = Ext.getCmp('comment_body');
        return (commentBodyField.validate());
    },
	/* Create new thread */
    submitThread: function(button) {
        var win = button.up('postthreadwindow');
        var topic = Ext.getCmp('post_thread_topic').getValue().trim();
        var title = Ext.getCmp('post_thread_title').getValue().trim();
        var body = Ext.getCmp('post_thread_body').getValue().trim();

        // validate all inputs, the validator could be implemented within the component.
        if (this.validatePostThreadsInputs() == false){
            Ext.MessageBox.alert('Error', "Please enter the required field or your inputs are too long to handle");
        } else {
            var newDiscussion = Ext.create('GUI.model.Discussion', {
                title: title,
                topic: topic,
                body: body,
                comments: [],
                author: username,
                date_created: new Date(),
                date_modified: new Date()
            });
			/* Send to database */
            this.getStore('Discussions').add(newDiscussion);
            this.getStore('Discussions').save();
            newDiscussion.commit();
            win.close();
        }
    },
	/* Open new tab */
    newdiscussionTab: function(store, record){
        var newpanel = Ext.create('Ext.panel.Panel', {
            title: record.get('title'),
            id: record.get('_id').toString().trim(),
            closable: true,
            autoScroll: true,
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                layout: {
                    align: 'stretchmax',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype:  'button',
                        text:   'Add Comment',
                        record: record,
                        action: 'addcomment'
                    }
                ]
            }]
        });
        return newpanel;
    },
	/* Open contents of discussion */
    openDiscussion: function(grid, record) {
        var viewpanel = Ext.getCmp('discussionsviewpanel');
        var tabcomponentID = record.get('_id').toString().trim();
        var newpanel =  viewpanel.getComponent(tabcomponentID);

        if(viewpanel.getComponent(tabcomponentID) != null){ // check if the tabpanel is created, close it
            newpanel.close();
        }
        newpanel = this.newdiscussionTab(this.getStore('Discussions') ,record);
        newpanel['html'] = this.bodyRender(record) + this.commentRender(record);
        viewpanel.add(newpanel);

        viewpanel.setActiveTab(newpanel);
        this.discussionRec = record;

    },

	/* Render the body of discussion for a new tab */
    bodyRender: function(record){
        var renderedStr = '<br><div class="topic"><h5>{0}</h5>' +
            '<div><p>Author: {1}</p></div> <div><span class="author"><br>{2}</span></div> </div>';
        return Ext.String.format(renderedStr,record.get('title'), record.get('author'), record.get('body'));
    },

	/* Render comments */
    commentRender: function(record){
        var str = '<br><br><hr/><br><b>Comments:</b><br><br>';
        var comments = record.get('comments');
        
        if (comments.length == 0)/* No comment yet*/
            str += '<i>There are no comments to display.</i>';
        else {
            for (var i in comments)
               str += '<b>' + "Author: " + comments[i].author +
                   '</b> <i>(' + comments[i].date_created +
                   ')</i><br>' + comments[i].body + '<br><br>';
        }
        
        return str;
    },
	/* Open comment form */
    showCommentForm: function(button) {
        var view = Ext.widget('commentform');
        view.down('commentform');
        view.record = button.record;
    },
	/* Send a comment */
    addComment: function(button) {
        var win = button.up('commentform');
        var store = this.getStore('Discussions');
        var discussion = win.record;
		var viewpanel = Ext.getCmp('discussionsviewpanel');
        var tabcomponentID = discussion.get('_id').toString().trim();

        if (!this.validateCommentsInputs())
            Ext.MessageBox.alert('Error', "Please enter the required field or your inputs are too long to handle");
        else {
            var body = Ext.getCmp('comment_body').getValue().trim();
            var newComment = {
                body: body,
                author: username,
                date_created: new Date()
            };

			/* Send a new comment to database */
            discussion.get('comments').push(newComment);
            discussion.set('date_modified', new Date());
            store.save();
            discussion.commit();
            win.close();
			
			viewpanel.remove(tabcomponentID);
			this.openDiscussion(null,discussion);
        }

    }
    /*
    refreshTab: function() {
        if (this.discussionRec){
            this.openDiscussion(null, this.discussionRec);
        }
    }
    */
})