/*
	Store definition for Users
 */
Ext.define('GUI.store.Users', {
    extend: 'Ext.data.Store',
	/* Data Address */
    proxy: {
        type: 'rest',
		url : '/users',
		model : 'GUI.model.User',
        reader: {
            type: 'json',
			root: 'data',
			successProperty: 'success'
        }
    }
});