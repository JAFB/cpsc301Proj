Ext.define('GUI.model.User', {
    extend: 'Ext.data.Model',
    // Define the user data set structure include fields and type of a fields
    fields: ['_id', 'id', 'name', 'password', 'email', 'description']
    /*
    fields: [
        {
			name: '_id',
			type: 'string'
		},
        {
			name: 'id',
			type: 'int'
		},
        {
			name: 'name',
			type: 'string'
		},
        {
            name: 'password',
            type: 'string'
        },
        {
			name: 'email',
			type: 'string'
		},
        {
            name: 'description',
            type: 'string'
        }
    ]

    */
});