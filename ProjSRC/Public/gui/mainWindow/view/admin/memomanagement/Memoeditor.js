Ext.define("GUI.view.admin.memomanagement.Memoeditor",{
    extend: "Ext.form.Panel",
    alias: "widget.memoeditor",
    id: 'memoeditor',
    store: 'Memos',
    title: "Calgary Emergency Medicine - Memo Editor",
    bodyStyle: 'padding:5px 5px 0',
    collapsible: true,

    collapseDirection: 'top',

    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },

    initComponent: function(){
        Ext.apply(this, {

            items: [
                {
                    xtype: 'container',
                    columnWidth: 0.5,
                    layout: 'anchor',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Memo Title',
                            id: 'memotopic',
                            labelAlign: 'top',
                            anchor: '96%',
                            inputType: 'text',
                            emptyText: 'Enter new topic here'
                        }
                    ]
                },
                {
                    xtype: 'htmleditor',
                    id: 'memobodyedit',
                    height: 400,
                    anchor: '100%',
                    autoScroll: true,
                    resizable: true
					//setDisabled: 
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    layout: {
                        align: 'stretchmax',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype:  'button',
                            text:   'Post Memo',
                            action: 'postmemo',
                            tooltip: 'Click Me to Post Memo'
                        }
                    ]
                }

            ]

        })

        this.callParent(arguments);
    }

})