
Ext.define('GUI.model.Discussion', {
    extend: 'Ext.data.Model',
	// Define data field for discussion
	idProperty: '_id',
    fields: ['_id', 'title', 'topic', 'body', 'comments', 'author', 'date_created', 'date_modified']
});
