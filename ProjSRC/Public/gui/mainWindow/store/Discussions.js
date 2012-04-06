/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 28/03/12
 * Time: 9:07 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.store.Discussions', {
    extend: 'Ext.data.TreeStore',
<<<<<<< HEAD

    root: {
        text: 'Topics',
=======
    /*
    autoLoad: true,
    autosync: true,

    proxy: {
        type: 'rest',
        url: '/discussions',
        model: 'GUI.model.Discussions',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
    */

    root: {
>>>>>>> 1ae5376eeece8b337328e1a26296df2acbf3b5e8
        expanded: true,
        children: [
            {
                text: 'Resident Duties',
                expanded: false,
                children: [
                    {
                        text: 'End of day procedure',
                        leaf: true
                    },
                    {
                        text: 'Responsibilities',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Dental',
                expanded: false,
                children: [
                    {
                        text: 'Oral surgery',
                        leaf: true
                    }
                ]
            }
        ]
    },
    folderSort: true,
    sorters: [{
        property: 'text',
        direction: 'ASC'
    }]
});