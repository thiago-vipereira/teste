const Clinic = require('../models/clinic');

module.exports = {

	create(req, res, next){
		const clinicProps = req.body;

		Clinic.create(clinicProps)
			.then(clinic => res.send(clinic))
			.catch(next);
	},
	edit(req, res, next){
		const clinicId = req.params.id;
		const clinicProps = req.body;

		Clinic.findByIdAndUpdate({_id: clinicId}, clinicProps)
		.then(() => Clinic.findById({Id: clinicId}))
		.then(clinic => res.send(clinic))
		.catch(next);
	},
	delete(req, res, next){
		const clinicId = req.params.id;

		Clinic.findByIdAndRemove({_id: clinicId})
		.then(clinic => res.status(204).send(driver))
		.catch(next);
	},
	index(req, res, next){
		const clinicId = req.params.id;

		Clinic.findByIdAndRemove({_id: clinicId})
		.then(clinic => res.status(204).send(driver))
		.catch(next);
	}
};