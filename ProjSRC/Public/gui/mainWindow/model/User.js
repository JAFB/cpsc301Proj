Ext.define('GUI.model.User', {
    extend: 'Ext.data.Model',
    // Define the user data set structure include fields and type of a fields
	idProperty: '_id',
    fields: ['_id', 'name', 'password', 'email', 'admin', 'description']
});