/*
	Login Module Controller
 */
Ext.define('GUI.controller.Login',{
    extend: 'Ext.app.Controller',

    views: ['login.Form'],
	/* Create Reference */
	refs: [
        {
           ref: 'loginForm',
           selector: 'form'
        },
        {
           ref: 'loginButton',
           selector: 'loginform button[action=login]'
        }

    ],

    init: function(){
        this.control({/* Event handlers */
			'loginform button[action=login]': {
				click: this.login   			//mouse click event
            },

            'loginform textfield': {
                keypress: this.login_keypress 	// keypress Event
            }

        });
    },

    login_keypress: function(e, t){
        if(t.getKey() === 13){ // ENTER key is pressed
            this.login();
        }
    },

    login: function(){
        this.getLoginForm().form.submit({//Submit data to server
            waitMsg:'Loging in...',
            url: 'login',
            method: 'POST',

            success: this.loginSuccess,

            failure: this.loginFailure
        });
    },

    loginSuccess: function(form,action) {//Action for success
        console.log("Success");
        var redirect = '/main';
        window.location = redirect;
    },

    loginFailure: function(form,action){//Action for failure
        Ext.MessageBox.alert('Error', "Invalid username/password");
    }
});