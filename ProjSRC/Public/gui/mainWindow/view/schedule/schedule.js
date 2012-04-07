
Ext.define('GUI.view.schedule.schedule', {
    extend: 'Ext.container.Container',
    alias: 'widget.schedule',

    height: 870,
    width: 1171,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    height: 132,
                    width: 1255,
                    layout: {
                        type: 'border'
                    },
                    items: 
						[{
                            xtype: 'label',
                            text: 'Calendar',
                            region: 'center',
							//layout: 'border'
                        }]
                },
                {
                    xtype: 'container',
                    height: 730,
                    width: 1255,
                    layout: {
                        type: 'column'
                    },
                    items: [
                        {
                            xtype: 'container',
                            height: 100,
                            width: 1255,
							layout: 'column',
                            items: [
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Current Date'
                                },
								{
									xtype: 'buttongroup',
									columns: 4,
								//	title: 'Display:',
									minWidth: 400,
									region: 'east',
									items: [{
										text: 'Day',
										scale: 'large',
										rowspan: 3, iconCls: 'add',
										iconAlign: 'top',
										cls: 'x-btn-as-arrow'
									},{
										text: 'Week',
										scale: 'large',
										rowspan: 3, iconCls: 'add',
										iconAlign: 'top',
										cls: 'x-btn-as-arrow'
									},{
										text: 'Month',
										scale: 'large',
										rowspan: 3, iconCls: 'add',
										iconAlign: 'top',
										cls: 'x-btn-as-arrow'
									},{
										text: 'Year',
										scale: 'large',
										rowspan: 3, iconCls: 'add',
										iconAlign: 'top',
										cls: 'x-btn-as-arrow'
								}]
						}
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 598,
                            width: '9%',
                            activeItem: 0,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            items: [
								{
									xtype: 'panel',
									title: 'Time',
									bodypadding: 10
								},
                                {
                                    xtype: 'label',
                                    height: 100,
                                    width: 46,
                                    text: '9:00 AM                      '
                                },
                                {
                                    xtype: 'label',
                                    height: 100,
                                    width: 53,
                                    text: '10:00 AM'
                                },
                                {
                                    xtype: 'label',
                                    text: '11:00 AM',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 603,
                            width: '13%',
                            items: [
								{
                                    xtype: 'panel',
                                    bodyPadding: 10,
                                    title: 'Monday'
                                },
                                {
                                    xtype: 'form',
                                    height: 138,
                                    bodyPadding: 10,
                                    title: 'Event #1'
                                },
                                {
                                    xtype: 'form',
                                    height: 267,
                                    bodyPadding: 10,
                                    title: 'Event #6'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 589,
                            width: '13%',
                            items: [
								{
                                    xtype: 'panel',
                                    bodyPadding: 10,
                                    title: 'Tuesday'
                                },
                                {
                                    xtype: 'form',
                                    height: 256,
                                    bodyPadding: 10,
                                    title: 'Event #2'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 591,
                            width: '13%',
                            items: [
								{
                                    xtype: 'panel',
                                    bodyPadding: 10,
                                    title: 'Wednesday'
                                },
                                {
                                    xtype: 'form',
                                    height: 105,
                                    bodyPadding: 10,
                                    title: 'Event #3'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 586,
                            width: '13%',
                            items: [
								{
                                    xtype: 'panel',
                                    bodyPadding: 10,
                                    title: 'Thursday'
                                },
                                {
                                    xtype: 'form',
                                    height: 149,
                                    bodyPadding: 10,
                                    title: 'Event #4'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 585,
                            width: '13%',
                            items: [
								{
                                    xtype: 'panel',
                                    bodyPadding: 10,
                                    title: 'Friday'
                                },
                                {
                                    xtype: 'form',
                                    height: 397,
                                    bodyPadding: 10,
                                    title: 'Event #5'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 585,
                            width: '13%',
                            items: [
								{
                                    xtype: 'panel',
                                    bodyPadding: 10,
                                    title: 'Saturday'
                                },
                                {
                                    xtype: 'form',
                                    height: 397,
                                    bodyPadding: 10,
                                    title: 'Event #5'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 585,
                            width: '13%',
                            items: [
								{
                                    xtype: 'panel',
                                    bodyPadding: 10,
                                    title: 'Sunday'
                                },
                                {
                                    xtype: 'form',
                                    height: 397,
                                    bodyPadding: 10,
                                    title: 'Event #5'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});

/*Ext.define('GUI.view.Schedule.schedule', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.schedule',

    height: 600,
    //title: 'Calendar',

    initComponent: function() {
        var me = this;
		var p = new Ext.Panel({
			title: 'Calendar',
			width: 700,
			height:200,
			renderTo: document.body,
			html: 'Events',
			
			tools: [{	//tbar
				xtype: 'buttongroup',
				columns: 4,
				title: 'Display:',
				minWidth: 400,
				items: [{
					text: 'Day',
					scale: 'large',
					rowspan: 3, iconCls: 'add',
					iconAlign: 'top',
					cls: 'x-btn-as-arrow'
				},{
					text: 'Week',
					scale: 'large',
					rowspan: 3, iconCls: 'add',
					iconAlign: 'top',
					cls: 'x-btn-as-arrow'
				},{
					text: 'Month',
					scale: 'large',
					rowspan: 3, iconCls: 'add',
					iconAlign: 'top',
					cls: 'x-btn-as-arrow'
				},{
					text: 'Year',
					scale: 'large',
					rowspan: 3, iconCls: 'add',
					iconAlign: 'top',
					cls: 'x-btn-as-arrow'
				}]
			}]
		});

		var events = new Ext.Panel({
			title: 'Events',
			width: 700,
			height: 200,
			renderTo: document.body,
			    items: [{
        xtype: 'datepicker',
        minDate: new Date(),
        handler: function(picker, date) {
            // do something with the selected date
        }
    }]

		})
		
        me.callParent(arguments);
    }
});*/