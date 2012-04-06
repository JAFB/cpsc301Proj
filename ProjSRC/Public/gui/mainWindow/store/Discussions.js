
Ext.define('GUI.store.Discussions', {
    extend: 'Ext.data.Store',

    autoLoad: true,

    proxy: {
        type: 'rest',
        url: '/discussion',
        model: 'GUI.model.Discussions',
        reader: {
            type: 'json',
            root: 'data',

            successProperty: 'success'
        }
    },
    sorters: [{
        property: 'text',
        direction: 'ASC'
    }]
});