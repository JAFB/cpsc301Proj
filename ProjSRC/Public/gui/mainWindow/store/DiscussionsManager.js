Ext.define('GUI.store.DiscussionsManager', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    fields: ['_id', 'title', 'topic', 'body', 'comments', 'author', 'date_created', 'date_modified'],
    proxy: {
        type: 'rest',
        url : '/discussion',
        model : 'GUI.model.Discussion',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});