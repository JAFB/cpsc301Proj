Ext.define('GUI.model.User', {
    extend: 'Ext.data.Model',
    fields: [{
			name: '_id',
			type: 'string'
		}, {
			name: 'id',
			type: 'int'
		}, {
			name: 'name',
			type: 'string'
		}, {
			name: 'email',
			type: 'string'
		}]
});