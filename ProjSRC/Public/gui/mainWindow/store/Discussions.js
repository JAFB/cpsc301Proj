
Ext.define('GUI.store.Discussions', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    //fields: ['_id', 'title', 'topic', 'body', 'comments', 'author', 'date_created', 'date_modified'],
    groupField: 'topic',

    proxy: {
        type: 'rest',
        url : '/discussion',
        model : 'GUI.model.Discussion',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        simpleSortMode: true
    },

    sorters: [
        {
            property: 'date_modified',
            direction: 'DESC'
        }
    ]
});