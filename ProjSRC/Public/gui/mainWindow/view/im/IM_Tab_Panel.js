Ext.define('GUI.view.im.IM_Tab_Panel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.impanel',

    //height: 600,
    width: 280,

    activeTab: 0,

    title: 'Instant Messaging',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    title: 'Recent',
                    items: [
                        {
                            xtype: 'form',
                            height: '80%',
                            //width: 280,
                            bodyPadding: 10,
                            title: 'Recent messages'
                        },
                        {
                            xtype: 'container',
                            height: '20%',
                            items: [
                                {
                                    xtype: 'textareafield',
                                    id: 'mssgField',
                                    width: 280,
                                    fieldLabel: '',
                                    labelWidth: 0
                                    /*
                                    listeners:{
                                        scope: this,
                                        specialkey: function(f,e){
                                            if(e.getKey()==e.ENTER){
                                                // CHANGE LATER
                                                var mssg = Ext.getCmp('mssgField').getValue();
                                                Ext.getCmp('mssgField').setValue('');

                                                console.log(mssg);
                                            }
                                        }
                                    }
                                    */
                                },
                                {
                                    xtype: 'button',
                                    text: 'Send',
                                    action: 'send'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Last day',
                    items: [
                        {
                            xtype: 'form',
                            height: 600,
                            bodyPadding: 10,
                            title: 'Messages from the last day'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Last week',
                    items: [
                        {
                            xtype: 'form',
                            height: 600,
                            bodyPadding: 10,
                            title: 'Messages from the last week'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    width: 312,
                    title: 'Older',
                    items: [
                        {
                            xtype: 'form',
                            height: 600,
                            bodyPadding: 10,
                            title: 'Older messages'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});