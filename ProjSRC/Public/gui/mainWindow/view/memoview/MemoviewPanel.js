/*
	View for memo viewing panel
 */

Ext.define('GUI.view.memoview.MemoviewPanel',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.memoviewpanel',
	/* Layout */
    width: 200,
    autoScroll: true,
    title: 'Memo Title',
	
    initComponent: function() {//List of Items
        Ext.applyIf(this, {
            items: [
                this.memoTitleView()
            ]
        });
		
        this.addEvents(
            'memotitleselect'
        )
        this.callParent(arguments);
    },
	/* Definition for memo title view */
    memoTitleView: function(){
        var memoTitleView = this.view = Ext.create('Ext.view.View', {
            store: 'Memoview',
            selectedMemoTitle: null,
            selModel: {
                mode: 'SINGLE',

                listeners: {
                    scope: this,
                    selectionchange: this.onSelectChange
                }

            },

            listeners: {
                scope: this,
                viewReady: this.onViewReady,
				itemclick: this.checkTabs

            },
            trackOver: true,
            cls: 'feed-list',
            itemSelector: '.feed-list-item',
            overItemCls: 'feed-list-item-hover',
            tpl: '<tpl for="."><div class="feed-list-item">{title}</div></tpl>'
        });
        memoTitleView.on('render', function(){}, this);
        return this.view;
    },

    onViewReady: function(){
        this.view.getSelectionModel().select(this.view.store.first());
    },
    getSelectedItem: function(){
        return this.view.getSelectionModel().getSelection()[0] || null;
    },
	/* change displaying memo as a user changes selection */
    onSelectChange: function(){
        var selected = this.getSelectedItem();
        var displaypanel = Ext.getCmp('memodisplaypanel');
        var memopanel = null;


        if (selected == null) {
            return
        } else {
            var memopanel = Ext.getCmp(selected.get('_id').toString().trim());
            if (memopanel == null){
                var panel = Ext.create('Ext.panel.Panel',{
                    title: selected.data.title,
                    closable: true,
                    border: true,
                    autoScroll: true,
                    id: selected.get('_id').toString().trim(),
                    html: this.contentRender(selected),
                    cls: 'feed-grid'
                });
                displaypanel.add(panel);
                displaypanel.setActiveTab(panel);
            } else {
                displaypanel.setActiveTab(memopanel);
            }
        }
    },
    
    contentRender: function(record){
        var renderedStr = '<div class="topic"><h5> title: {0} </h5>' +
            '<div><br><p>{1}</p></br></div></div> <div><h5>Author: {2} ; '+
            'Date created: {3} </h5></div></div>';
        return Ext.String.format(renderedStr,record.get('title'), record.get('content'), record.get('author'), record.get('date_created'));
    },
	
	checkTabs: function()
	{
		var selectedItem = this.getSelectedItem();

        if (selectedItem == null) return; // if the selected item is null, do nothing

		var displaypanel = Ext.getCmp('memodisplaypanel');
		var currentTabid = displaypanel.getActiveTab().id;
		if (this.getSelectedItem().get('_id').toString().trim() != currentTabid){
			var memopanel = Ext.getCmp(this.getSelectedItem().get('_id').toString().trim());
			if(memopanel){
				displaypanel.setActiveTab(memopanel);
			}else{
				this.onSelectChange();
			}
		}	
	},

    onDestroy: function(){
        this.callParent(arguments);
    }
})