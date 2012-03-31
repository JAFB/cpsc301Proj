/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 23/03/12
 * Time: 6:37 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.controller.Discussions', {
    extend: 'Ext.app.Controller',

<<<<<<< HEAD
    stores: [
        'Discussions'
    ],

    views: [
        'discussions.DiscussionsPanel',
        'discussions.PostThreadWindow'
=======
    views: [
        'discussions.DiscussionsPanel'
>>>>>>> 3573a1f7947ec52698929872d80c0e4512ef75a7
    ],

    init: function() {
        this.control({
<<<<<<< HEAD
            'discussionspanel button[action=newthread]': {
                click: this.showNewThreadWindow
=======
            'viewport > panel': {
                render: this.onPanelRendered
>>>>>>> 3573a1f7947ec52698929872d80c0e4512ef75a7
            }
        });
    },

<<<<<<< HEAD
    showNewThreadWindow: function () {
        var view = Ext.widget('postthreadwindow');
        view.down('postthreadwindow');

        var node = Ext.getCmp('discussionstree').getSelectionModel().getLastSelected();
        if (node == null)
            var path = '';
        else if (node.isLeaf())
            var path = node.parentNode.getPath('text');
        else
            var path = node.getPath('text')
        Ext.getCmp('post_thread_topic').setValue(path);
=======
    onPanelRendered: function() {
        console.log('The panel was rendered');
>>>>>>> 3573a1f7947ec52698929872d80c0e4512ef75a7
    }
});