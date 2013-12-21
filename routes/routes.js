module.exports = [
    { method: 'GET', path: '/', config: { handler: getHome }},
];

function getHome(res) {
	res.reply('Hello Mr. Anderson!');
};