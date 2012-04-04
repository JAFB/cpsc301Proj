Ext.define('GUI.model.Memo', {
    extend: 'Ext.data.Model',
    // Define the user data set structure include fields and type of a fields
    fields: ['_id', 'title', 'content', 'date_created', 'date_modified','author']
});