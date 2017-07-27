const Anamnese = require('../models/anamnese');

module.exports = {

	create(req, res, next){
		const anamneseProps = req.body;

		Anamnese.create(anamneseProps)
			.then(anamnese => res.send(anamnese))
			.catch(next);
	},
	edit(req, res, next){
		const anamneseId = req.params.id;
		const anamneseProps = req.body;

		Anamnese.findByIdAndUpdate({_id: anamneseId}, anamneseProps)
		.then(() => Anamnese.findById({Id: anamneseId}))
		.then(anamnese => res.send(anamnese))
		.catch(next);
	},
	delete(req, res, next){
		const anamneseId = req.params.id;

		Anamnese.findByIdAndRemove({_id: anamneseId})
		.then(anamnese => res.status(204).send(anamnese))
		.catch(next);
	},
	index(req, res, next){
		const anamneseId = req.params.id;

		Anamnese.findByIdAndRemove({_id: anamneseId})
		.then(anamnese => res.status(204).send(anamnese))
		.catch(next);
	}
};