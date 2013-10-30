module.exports=function (app) {
  app.get('/', function(req, res){
      res.send('Hello World');
    });
   
  app.get('/account',
    ensureLoggedIn('/login'),
    function(req, res) {
      res.send('Hello ' + req.user.username);
    });
   
  app.get('/login',
    function(req, res) {
      res.send('<html><body><a href="/auth/twitter">Sign in with Twitter</a></body></html>');
    });
    
  app.get('/logout',
    function(req, res) {
      req.logout();
      res.redirect('/');
    });
};