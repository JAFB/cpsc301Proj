Ext.define('GUI.view.memoview.MemoviewPanel',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.memoviewpanel',
    width: 200,
    autoScroll: true,

    title: 'Memo Title',
    initComponent: function() {
        Ext.applyIf(this, {
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
        return this.view.getSelectionModel().getSelection()[0] || null;
    },

    onSelectChange: function(){
        var selected = this.getSelectedItem();
        var displaypanel = Ext.getCmp('memodisplaypanel');
        var memopanel = null;
        if (selected == null) {
            return
        } else {
            var memopanel = Ext.getCmp(selected.get('_id').toString().trim());
            if (memopanel == null){
                var panel = Ext.create('Ext.panel.Panel',{
                    title: selected.data.title,
                    closable: true,
                    border: true,
                    autoScroll: true,
                    id: selected.get('_id').toString().trim(),
                    html: this.contentRender(selected),
                    cls: 'feed-grid'

                });
                displaypanel.add(panel);
                displaypanel.setActiveTab(panel);
            } else {
                displaypanel.setActiveTab(memopanel);
            }
        }
    },
    
    contentRender: function(record){
        var renderedStr = '<div class="topic"><h5> title: {0} </h5>' +
            '<div><p>{1}</p></div> <div><span class="author">author: {2} </span></div> </div>';
        return Ext.String.format(renderedStr,record.get('title'), record.get('content'), record.get('author'));
    }
})