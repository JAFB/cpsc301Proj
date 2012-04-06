/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 30/03/12
 * Time: 7:38 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.model.Discussions', {
    extend: 'Ext.data.Model',
    fields: [
        '_id',
        'title',
        'topic',
        'body',
        'comments',
        'author',
        'date_created',
        'date_modified'
    ]
});

