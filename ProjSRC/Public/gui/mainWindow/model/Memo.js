Ext.define('GUI.model.Memo', {
    extend: 'Ext.data.Model',
    // Define memo data structure
    fields: ['_id', 'title', 'content', 'date_created', 'date_modified','author']
});