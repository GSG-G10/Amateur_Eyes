const requst = require('supertest');
test('Route / should return status 200 ', (done) => {
  requst(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
        if(err) return done(err);
        done();
    });
    
})
