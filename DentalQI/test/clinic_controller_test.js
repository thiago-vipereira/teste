const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

const Clinic = mongoose.model('clinic');

describe('clinic controller', () => {
	it('Post to /api/clinic creates a new clinic', done => {
		request(app)
			.post('/api/clinic')
			.send({name: 'Stringoi'})
			.end(() => {
				done();
			});
	});
});

it('Put to /api/clinic/id can update a record', done => {
    const clinic = new Clinic({ name: 'test@test.com', address: 'casa' });

    clinic.save().then(() => {
      request(app)
        .put(`/api/clinic/${clinic._id}`)
        .send({ address: 'rua' })
        .end(() => {
          Clinic.findOne({ _id: clinic._id })
            .then(clinic => {
              assert(clinic.address === 'rua');
              done();
            });
        });
    });
  });