
Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled: true,
        disableCaching: false
    });

    var movie_form = new Ext.FormPanel({
        url: 'movie-form-submit.php',
        renderTo: document.body,
        frame: true,
        title: 'Movie Information Form',
        width: 250,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Title',
            name: 'title'
        },{
            xtype: 'textfield',
            fieldLabel: 'Director',
            name: 'director'
        },{
            xtype: 'datefield',
            fieldLabel: 'Released',
            name: 'released'
        }]
    });
});
