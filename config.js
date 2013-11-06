module.exports = {
	development: {
		fb: {
			appID: '664427443591467',
			appSecret: '65825375357f34984f1da9f0460f5728',
			url: 'http://localhost:5000/'
		},
		dbUrl: 'mongodb://user:password@alex.mongohq.com:10023/snippetshare'
	},
	production: {
		fb: {
			appID: '248733805247979',
			appSecret: 'dad8bbf0fa888c4998fab641730b9b75',
			url: 'http://localhost.com/'
		},
		dbUrl: 'mongodb://user:password@alex.mongohq.com:10023/snippetshare'
	}
}