const { response } = require('express');

const getUser = (req, res = response) => {

    const query = req.query;

    res.json({
        msg:'GET API - controller',
        query
    });
};

const postUser = (req, res) => {
    const body = req.body;

    res.json({
        msg:'POST API - controller',
        body
    });
};

const putUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg:'PUT API - controller',
        id
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg:'DELETE API - controller',
        id
    });
}

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
};