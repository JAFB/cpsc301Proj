Ext.define('GUI.store.Memos', {
    extend: 'Ext.data.Store',
    autoLoad: true,
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