/*
	Instant Message Store definition
 */
/* Store for recent message */
Ext.define('GUI.store.IM', {
    extend: 'Ext.data.Store',
    fields: ['time','mssgForm'],
    proxy: {
        type: 'rest',
		url : '/mes?timeSlot=recent',
		model : 'GUI.model.IM',
        reader: {
            type: 'json',
			root: 'data',
			successProperty: 'success'
        }
    }
});
/* Store for last day message */
Ext.define('GUI.store.IMLastDay', {
    extend: 'Ext.data.Store',
    fields: ['time','mssgForm'],
    proxy: {
        type: 'rest',
		url : '/mes?timeSlot=lastday',
		model : 'GUI.model.IM',
        reader: {
            type: 'json',
			root: 'data',
			successProperty: 'success'
        }
    }
});