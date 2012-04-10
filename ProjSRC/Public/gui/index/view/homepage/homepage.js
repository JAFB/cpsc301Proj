/*
	Homepage Module View
 */
 
 /* HTML for the page */
var Homehtml = '<h2>Welcome to the website of the Calgary Emergency Medicine residency program!</h2><br>'+
			   '<p>Here you will find useful information including schedules, an archive of rounds presentations, journal club articles, and podcasts of some of our rounds.</p>'+
			   '<p>Please login using the form on the right.</p>'
			   
Ext.define('GUI.view.homepage.homepage', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.homepage',

    minheight: 300,
    activeTab: 0,

    initComponent: function() {//List of Items
        var me = this;

        Ext.applyIf(me, {
			height: '100%',
            items: [
				{//Home Tab
					xtype: 'panel',
					title: 'Home',
					html: Homehtml,
					bodyPadding : 10
				},
                {//Policies Tab
					xtype: 'panel',
					title: 'Policies'
                }
            ]
        });

        me.callParent(arguments);
    }
});