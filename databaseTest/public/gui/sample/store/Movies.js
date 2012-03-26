/**
 * The Movies store
 */
Ext.define('GeekFlicks.store.Movies', {
    extend: 'Ext.data.Store',

    autoLoad: true,
    autoSync: true,
    fields: ['_id', 'title', 'year'],

    proxy: {
        type: 'rest',
        url: '/movies',
        model: 'GeekFlicks.model.Movie',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});