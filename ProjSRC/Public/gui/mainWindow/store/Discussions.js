/*
	store definition for discussions
 */
Ext.define('GUI.store.Discussions', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    sorters: [
        {
            property: 'date_created',
            direction: 'DESC'
        }
    ],
    groupField: 'topic',
	/* Data Address */
    proxy: {
        type: 'rest',
        url : '/discussion',
        model : 'GUI.model.Discussion',

        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
        //simpleSortMode: true
    }
});