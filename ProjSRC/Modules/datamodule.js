exports.user = function (){
    return {
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
        comments: [],
        author: null,
        date_created: null,
        date_modified: null
    }
};
