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
        topic: null,
        content: null,
        date_created: null,
        date_modified: null,
        author: null,
    }
}

