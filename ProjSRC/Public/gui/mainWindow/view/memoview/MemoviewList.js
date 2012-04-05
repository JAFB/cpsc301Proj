

Ext.define('GUI.view.memoview.MemoviewList',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.memoviewlist',
    id: 'memodisplaypanel',
    width: '70%',
    initComponent: function(){
        this.items = [
            {
                xtype: 'panel',
                title: 'Memo List',
                items: [
                    {
                        xtype: 'gridpanel',
                        id: 'memopage',
                        layout: 'fit',
                        store: 'Memoview',
                        columns: [
                            {
                                id: 'memotitle',
                                text: 'Title',
                                dataIndex: 'title',
                                flex: 1,
                                sortable: false
                            },
                            {
                                id: 'memocontent',
                                text: 'Content',
                                dataIndex: 'content',
                                flex: 1
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
        ];
        this.callParent(arguments);
    }
})