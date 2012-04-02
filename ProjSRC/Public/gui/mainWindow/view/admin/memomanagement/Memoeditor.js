Ext.define("GUI.view.admin.memomanagement.Memoeditor",{
    extend: "Ext.form.Panel",
    alias: "widget.memoeditor",
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
            layout: {
                type: "vbox",
                alias: "stretch"
            },
            dockedItems: [
                {
                    xtype: 'textfield',
                    fieldLable: 'Title:',
                    name: 'title'
                },
                {
                    xtype: 'htmleditor',
                    name: 'memoeditor',
                    fieldLable: 'Memo body',
                    height: 500,
                    anchor: '100%',
                    autoScroll: true,
                    id: 'memoeidibox'
                },
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
                            text:   'Save Memo',
                            action: 'savememo'
                        },
                        {
                            xtype:  'button',
                            text:   'Post Memo',
                            action: 'postmemo'
                        }
                    ]
                }

            ]
        })

        this.callParent(arguments);
    }

})