const requst = require('supertest');
const app = require('../server');
test('Route / should return status 200 ', (done) => {
  requst(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
        if(err) return done(err);
        done();
    });
    
})

// test profile route
test('Route /profile should return status 200 ', (done) => {
     requst(app)
    .get('/profile/ElhamFadel')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
        if(err) return done(err);
        done();
    }
  );
});

test('Route /prof or any route not exite should return status 404 ', (done) => {
     requst(app) 
    .get('/prof')
    .expect(404)
    .end((err, res) => {
        if(err) return done(err);
        done();
    }
  );
});

