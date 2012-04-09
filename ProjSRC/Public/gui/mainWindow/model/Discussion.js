
Ext.define('GUI.model.Discussion', {
    extend: 'Ext.data.Model',

    fields: ['_id', 'title', 'topic', 'body', 'comments', 'author', 'date_created', 'date_modified']
});
