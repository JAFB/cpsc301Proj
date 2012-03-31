Ext.define('GUI.store.Users', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autosync: true,
    fields: ['_id', 'id','name', 'password','email', 'description'],
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