exports.user = function (){
    return {
        id: null,
        name: null,
        password: null,
        email: null,
		admin: null,
        description: null
    }
};

exports.memo = function(){
    return {
        title: null,
        content: null,
        date_created: null,
        date_modified: null,
        author: null
    }
};

exports.discussion = function(){
    return {
        title: null,
        topic: null,
        body: null,
        thread: [{
            thread_id: null,
            body: null,
            comments: [{
                comment_id: null,
                body: null,
                self_regulating: null
            }]
        }],
        comments: null,
        author: null,
        date_created: null,
        date_modified: null
    }
};


