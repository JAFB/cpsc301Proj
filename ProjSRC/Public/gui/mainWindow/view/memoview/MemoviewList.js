

Ext.define('GUI.view.memoview.MemoviewList',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.memoviewlist',
    id: 'memodisplaypanel',
    width: '70%',
    autoScroll: true,
    initComponent: function(){
        this.items = [
            {
                xtype: 'panel',
                title: 'Memo List',
                items: [
                    {
                        xtype: 'gridpanel',
                        layout: 'fit',
                        cls: 'feed-grid',
                        store: 'Memoview',
                        columns: [
                            {
                                id: 'memotitle',
                                text: 'Title',
                                dataIndex: 'title',
                                flex: 1,
                                sortable: false,
                                renderer: this.memoTitleRender

                            },
                            {
                                text: 'Author',
                                dataIndex: 'author'
                            },
                            {
                                id: 'memocreated_date',
                                text: 'Created Date',
                                dataIndex: 'date_created',
                                align: 'center',
                                sortable: true
                            },
                            {
                                id: 'memomodified_date',
                                text: 'Modified Date',
                                dataIndex: 'date_modified',
                                align: 'center',
                                sortable: true
                            }

                        ]
                    }
                ]
            }

        ],
        this.callParent(arguments);
    },

    onViewRender: function(){
        this.keynav = Ext.create('Ext.util.KeyNav', this.items.getAt(0).el, {
            enter: this.onEnterKey,
            scope: this
        })
    },

    onDestroy: function(){
        Ext.destroy(me.keyNav);
        delete this.keyNav;
        this.callParent(arguments);
    },

    onLoad: function(){
        this.getSelectionModel.select(0);
    },

    memoTitleRender: function(value, p, record){
        var renderStr = '<div class="topic"><b>{0}</b></div>';
        return Ext.String.format(renderStr, value, record.get('author'));
    }



})