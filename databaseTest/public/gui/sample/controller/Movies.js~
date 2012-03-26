Ext.define("GeekFlicks.controller.Movies", {
    extend: 'Ext.app.Controller',

    models: ['Movie'],
    stores: ['Movies'],
    views:  ['Movies'],

    init: function () {
        this.control({
            'movieseditor': {
                render: this.onEditorRender
            }
        });
    },

    onEditorRender: function () {
        console.log("movies editor was rendered");
    }
});