/*
	Memo Viwer Controller
 */

Ext.define('GUI.controller.Memoviews',{
    extend: 'Ext.app.Controller',
    stores: ['Memoview'],
    models: ['Memo'],
    views: [
        'memoview.MemoviewPanel',
        'memoview.MemoviewList'
    ],

    init: function(){
        this.control({
			// for future iteraion
        });
        var runner = new Ext.util.TaskRunner();
        runner.start(this.refreshTask);
    },
	/* Auto refresh */
    refreshTask: {
        run: function() {
            Ext.getStore('Memoview').load();

        },
        interval: 60000 // 1 minute
    }

});

