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


        });

        var runner = new Ext.util.TaskRunner();
        runner.start(this.refreshTask);
    },

    refreshTask: {
        run: function() {
            Ext.getStore('Memoview').load();

        },
        interval: 60000 // 2 sconds
    }

});

