/*
	Store definition for Users
		-Add documentation
 */
Ext.define('GUI.store.Users', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    fields: ['_id','name', 'password','email','admin','description'],
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