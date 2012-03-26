/**
 * The Grid of Movies
 */
Ext.define('GeekFlicks.view.Movies', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.movieseditor',
    selType: 'rowmodel',
    rowEditor: Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToEdit: 2
    }),
    store: 'Movies',

    initComponent: function () {
        this.columns = [
            {
                header: 'Title',
                dataIndex: 'title',
                editor: {
                    xtype: 'textfield',
                    allowBlank: true
                },
                flex: 1
            },
            {
                header: 'Year',
                dataIndex: 'year',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: true
                },
                flex: 1
            }
        ];
        this.plugins = [ this.rowEditor ];
        this.callParent(arguments);
    }
});