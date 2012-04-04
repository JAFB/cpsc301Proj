Ext.define('GUI.store.Memos', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autosync: true,
    fields: ['_id', 'title', 'content', 'date_created', 'date_modified','author'],
    proxy: {
        type: 'rest',
        url : '/memos',
        model : 'GUI.model.Memo',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});