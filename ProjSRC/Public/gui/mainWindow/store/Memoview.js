/*
	store definition for Memo view
 */
Ext.define('GUI.store.Memoview', {
    extend: 'Ext.data.Store',
    autoLoad: true,
	/* Data Address */
    proxy: {
        type: 'rest',
        url : '/memos',
        model : 'GUI.model.Memo',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success',
            totalProperty: 'totalCount'
        },
        simpleSortMode: true
    },
    sorters: [{
        property: 'date_modified',
        direction: 'DESC'
    }]
});