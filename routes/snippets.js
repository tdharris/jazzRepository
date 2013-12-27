var Types = require('hapi').types;

module.exports = [
    { method: 'GET', path: '/snippets', config: { handler: getSnippets, validate: { query: { name: Types.String() } } } },
    { method: 'GET', path: '/snippets/{id}', config: { handler: getSnippet } },
    { method: 'POST', path: '/snippets', config: { handler: addSnippet, payload: 'parse', validate: { payload: { name: Types.String().required().min(3) } } } }
];

function getSnippets(request) {

    if (request.query.name) {
        request.reply(findSnippets(request.query.name));
    }
    else {
        request.reply(snippets);
    }
}

function findSnippets(name) {

    return snippets.filter(function(product) {
        return product.name.toLowerCase() === name.toLowerCase();
    });
}

function getSnippet(request) {

    var product = snippets.filter(function(p) {
        return p.id === parseInt(request.params.id);
    }).pop();

    request.reply(product);
}

function addSnippet(request) {

    var product = {
        id: snippets[snippets.length - 1].id + 1,
        name: request.payload.name
    };

    snippets.push(product);

    request.reply(product).code(201).header('Location', '/snippets/' + product.id);
}

var snippets = [{
        id: 1,
        artist: 'Kenny Garrett',
        tags: ['ii-V']
    },
    {
        id: 2,
        artist: 'Miles Davis',
        tags: ['blues']
    },
    {
        id: 3,
        artist: 'Joe Henderson',
        tags: ['sus']
    },
    {
        id: 4,
        artist: 'Sonny Rollins',
        tags: ['ii-V']
    },
    {
        id: 5,
        artist: 'Kenny Garrett',
        tags: ['ii-V']
    },
    {
        id: 6,
        artist: 'Kenny Garrett',
        tags: ['ii-V']
    }
];