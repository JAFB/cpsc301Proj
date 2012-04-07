/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 28/03/12
 * Time: 9:07 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.store.Discussions', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    fields: ['_id', 'title', 'topic', 'body', 'comments', 'author', 'date_created', 'date_modified'],
    sorters: [
        {
            property: 'date_created',
            direction: 'DESC'
        }
    ],
    sorters: ['topic', 'title'],
    groupField: 'topic',

    proxy: {
        type: 'rest',
        url : '/discussion',
        model : 'GUI.model.Discussions',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});