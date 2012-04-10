/*
	Objects for each kind of records
	Function name must be the same as collection name.
 */

 /* User Record */
exports.user = function (){
    return {
        name: null,
        password: null,
        email: null,
		admin: null,
        description: null
    }
};
/* Memo Record */
exports.memo = function(){
    return {
        title: null,
        content: null,
        date_created: null,
        date_modified: null,
        author: null
    }
};
/* Discussion Record*/
exports.discussion = function(){
    return {
        title: null,
        topic: null,
        body: null,
        comments: null,
        author: null,
        date_created: null,
        date_modified: null
    }
};
