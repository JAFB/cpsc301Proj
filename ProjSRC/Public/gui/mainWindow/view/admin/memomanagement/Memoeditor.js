/*
	View for memo management module
 */

Ext.define("GUI.view.admin.memomanagement.Memoeditor",{
    extend: "Ext.form.Panel",
    alias: "widget.memoeditor",
    id: 'memoeditor',
    store: 'Memos',
	
	/* Layout */
    title: "Calgary Emergency Medicine - Memo Editor",
    bodyStyle: 'padding:5px 5px 0',
    collapsible: true,
    collapseDirection: 'top',
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },

    initComponent: function(){//List of Items
        Ext.apply(this, {

            items: [
                {	/* Textfield for title */
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
                {	/* Text field for body */
                    xtype: 'htmleditor',
                    id: 'memobodyedit',
					height: 400,
                    minHeight: 200,
					minWidth: 200,
                    anchor: '100%',
                    autoScroll: true,
                    resizable: true,
					enableColors: false,
                    enableSourceEdit: false,
                    enableFormat: false,
                    enableLists: false

                }
            ],
            dockedItems: [
                {/* Submit(post) button */
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