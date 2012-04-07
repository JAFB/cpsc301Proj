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
<<<<<<< HEAD
        topic: null,
        body: null,
=======
        thread: [{
            thread_id: null,
            body: null,
            comments: [{
                comment_id: null,
                body: null,
                self_regulating: null
            }]
        }],
>>>>>>> 5ffaaceb8a59e160381f13720946236531b816e3
        comments: null,
        author: null,
        date_created: null,
        date_modified: null
    }
};
<<<<<<< HEAD
=======


>>>>>>> 5ffaaceb8a59e160381f13720946236531b816e3
