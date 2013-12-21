module.exports = {
	dev: {
		ip: '0.0.0.0',
		port: 3000,
		dbUrl: '',
		auth: {
			fb: {
				appID: '248733805247979',
				appSecret: 'dad8bbf0fa888c4998fab641730b9b75',
				url: 'http://localhost.com/'
			},
			google: {
				appID: '',
				appSecret: '',
				url: 'http://localhost.com/'
			}
		}
	},
	production: {
		ip: '0.0.0.0',
		port: 80,
		dbUrl: '',
		auth: {
			fb: {
				appID: '',
				appSecret: '',
				url: 'http://jazzRepository.com/'
			},
			google: {
				appID: '',
				appSecret: '',
				url: 'http://jazzRepository.com/'
			}
		}
	}
	// app.use(lessMiddleware({
	// 	src: __dirname + '/public',
	// 	compress: true
	// }));
}