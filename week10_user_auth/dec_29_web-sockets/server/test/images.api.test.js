const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const db = require('./db');
const app = require('../lib/app');

describe('images', () => {

    const request = chai.request(app);

    before(db.drop(connection));

    let authHeader = null;
    
    before(() => db.createUser(request)
        .then(token => {
            assert.isOk(token);
            authHeader = { Authorization: `Bearer ${token}` };
        })
    );

    let album = null;
    
    before(() => request
        .post('/api/albums')
        .set(authHeader)
        .send({ name: 'cute bunnies' })
        .then(({ body }) => {
            assert.ok(body._id);
            album = body;
        })
    );

    it('cannot /POST without album id', () => request
        .post('/api/images')
        .set(authHeader)
        .send({ title: 'title', url: 'url' })
        .then(
            () => { throw new Error('unexpected success response'); },
            res => assert.equal(res.status, 400)
        )
    );

    let image = { 
        title: 'the image',
        url: 'http:/images.com/123.png'
    };
    
    it('/POST image with album id', () => {
        image.album = album._id;
        return request
            .post('/api/images')
            .set(authHeader)
            .send(image)
            .then(({ body }) => {
                assert.isOk(body._id);
                for(const key of ['album', 'title', 'url']) {
                    assert.equal(body[key], image[key]);
                }
                image = body;
            });
    });

    it('/DELETE image', () => {
        const url = `/api/images/${image._id}`;
        return request.delete(url)
            .set(authHeader)
            .then(() => request.get(url).set(authHeader))
            .then(
                () => { throw new Error('unexpected success response'); },
                res => assert.equal(res.status, 404)
            );
    });
});