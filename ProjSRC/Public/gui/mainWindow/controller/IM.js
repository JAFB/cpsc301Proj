 /*
	Instant Message controller
  */

Ext.define('GUI.controller.IM', {
    extend: 'Ext.app.Controller',

	stores: ['IM'],
    models: ['IM'],
    views: ['im.IM_Tab_Panel'],

	/* initial functions */
    init: function() {
        this.control({
			'impanel' : {
				render: this.onIMPanelRender
			},
            'impanel button[action=send]': {
                click: this.sendMssg
            },
			'impanel textfield': {
				specialkey: this.keyCheck
			},
			'impanel panel[name=lastdaypanel]':{
				activate: this.loadLastDayMssg
			}
        });
		/* auto refresh */
		var IMStore = this.getStore("IM");
		var interval = setInterval(function(){
				IMStore.load({
					callback: function(){
						Ext.getCmp('mssgForm').setValue(IMStore.proxy.reader.jsonData.data.mssgForm);
					}
				})
		},5000);//5 sec interval
    },
	
	onIMPanelRender: function() {
		this.loadMssg();
	},
	/* load recent messages */
	loadMssg: function() {
		var IMStore = this.getStore("IM")
		IMStore.load({
			callback: function(){
				Ext.getCmp('mssgForm').setValue(IMStore.proxy.reader.jsonData.data.mssgForm);
			}
		})
	},
	/* load messages on last day */
	loadLastDayMssg: function() {
		var IMStore = this.getStore("IMLastDay")
		IMStore.load({
			callback: function(){
				Ext.getCmp('mssgFormLastDay').setValue(IMStore.proxy.reader.jsonData.data.mssgForm);
			}
		})
	},
	/* set enter key as sending button */
	keyCheck: function(f, e) {
		if(e.getKey() == e.ENTER){ // ENTER key is pressed
			this.sendMssg();
		}
	},
	/* send message to server and refresh */
    sendMssg: function() {
		var IMStore = this.getStore("IM");
		IMStore.load({
			callback: function() {
				var mssg = Ext.getCmp('mssgField').getValue();
				var old = IMStore.proxy.reader.jsonData.data.mssgForm;
				var newMssg;
				if(mssg!=''){
					/* Send New Message */
					Ext.Ajax.request({
						url: '/mes',   
						method: "Post",
						jsonData: { mssgForm : username+' : '+mssg }
					});
					if(old==''){
						newMssg = username+ ' : ' +mssg
						Ext.getCmp('mssgForm').setValue(newMssg);
					}else{
						newMssg = old + '\n' + username+ ' : ' +mssg;
						Ext.getCmp('mssgForm').setValue(newMssg);
					}
				}

				/* Scroll to bottom */
				var mssgArea = Ext.getCmp('mssgForm').bodyEl.dom.childNodes[0].id;
				objDiv = document.getElementById(mssgArea);
				objDiv.scrollTop = objDiv.scrollHeight;
				
				Ext.getCmp('mssgField').reset();
			}
		});
    }
});