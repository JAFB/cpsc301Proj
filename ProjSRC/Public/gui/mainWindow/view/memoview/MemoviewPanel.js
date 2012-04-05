Ext.define('GUI.view.memoview.MemoviewPanel',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.memoviewpanel',
    width: '30%',
    autoScroll: true,

    title: 'Memo Title',

    initComponent: function() {
        Ext.apply(this, {
            items: [
                this.memoTitleView()
            ]
        });
        this.memoTitleList();
        this.addEvents(
            'memotitleselect'
        )
        this.callParent(arguments);
    },

    memoTitleView: function(){
        var memoTitleView = this.view = Ext.create('Ext.view.View', {
            store: 'Memoview',
            selectedMemoTitle: null,
            selModel: {
                mode: 'SINGLE',
                listeners: {
                    scope: this,
                    selectionchange: this.onSelectChange
                }
            },

            listeners: {
                scope: this,
                //contextmenu: this.onContextMenu,
                viewReady: this.onViewReady
            },
            trackOver: true,
            cls: 'feed-list',
            itemSelector: '.feed-list-item',
            overItemCls: 'feed-list-item-hover',
            tpl: '<tpl for="."><div class="feed-list-item">{title}</div></tpl>'
        });
        memoTitleView.on('render', function(){}, this);
        return this.view;
    },

    memoTitleList: function(){
        this.titlelist = Ext.create('widget.menu', {
            items: [{
                scope: this,
                handler: this.onLoadClick,
                text: 'Load Memo'
            }],
            listeners: {
                hide: function(c){
                    c.activeMemoTitle = null;
                }
            }
        })
    },

    onViewReady: function(){
        this.view.getSelectionModel().select(this.view.store.first());
    },

    getSelectedItem: function(){
        return this.view.getSelectionModel().getSelection()[0] || false;
    },

    onSelectChange: function(){
        var selected = this.getSelectedItem();
        if (Ext.getCmp('memodisplaypanel').items.items['id'] != selected.data._id.toString()){
            var panel = Ext.create('Ext.panel.Panel',{
                title: selected.data.title,
                closable: true,
                id: selected.data._id.toString()
            });

            Ext.getCmp('memodisplaypanel').add(panel);
        }
        //console.log(Ext.getCmp('memodisplaypanel'))

        // the code for display or dynamic create tab panel
    }
})