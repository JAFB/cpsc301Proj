
Ext.define('GUI.store.Discussions', {
    extend: 'Ext.data.Store',
<<<<<<< HEAD

    autoLoad: true,

    proxy: {
        type: 'rest',
        url: '/discussion',
        model: 'GUI.model.Discussions',
=======
    autoLoad: true,
    fields: ['_id', 'title', 'topic', 'body', 'comments', 'author', 'date_created', 'date_modified'],
    sorters: ['topic', 'title'],
    groupField: 'topic',

    proxy: {
        type: 'rest',
        url : '/discussion',
        model : 'GUI.model.Discussions',
>>>>>>> JAFB-master
        reader: {
            type: 'json',
            root: 'data',

            successProperty: 'success'
        }
<<<<<<< HEAD
    },
    sorters: [{
        property: 'text',
        direction: 'ASC'
    }]
=======
    }
>>>>>>> JAFB-master
});