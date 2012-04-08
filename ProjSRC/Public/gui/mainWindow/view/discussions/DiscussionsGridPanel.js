/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 07/04/12
 * Time: 1:09 AM
 * To change this template use File | Settings | File Templates.
 */

var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
    groupHeaderTpl: '{name} ({rows.length} Discussion{[values.rows.length > 1 ? "s" : ""]})'
});

Ext.define('GUI.view.discussions.DiscussionsGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.discussionsgridpanel',

    title: 'Topics',
    id: 'duscussionsgridpanel',
    store: 'Discussions',
    features: [groupingFeature],

    columns: [
        {
            header: '',
            flex: 1,
            dataIndex: 'title'
        }
    ],
    fbar: ['->', {
        text:'New Discussion Thread',
        action: 'newthread'
    }]
})