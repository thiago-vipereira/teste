const AnamneseController = require('./controllers/anamnese_controller');
const AnamneseModelController = require('./controllers/anamneseModel_controller');
const AnswerController = require('./controllers/answer_controller');
const AppointmentController = require('./controllers/appointment_controller');
const ClinicController = require('./controllers/clinic_controller');
const ClinicalNoteController = require('./controllers/clinicalNote_controller');
const CreditCardController = require('./controllers/creditCard_controller');
const DentistController = require('./controllers/dentist_controller');
const DocumentModelController = require('./controllers/documentModel_controller');
const EndodonticsTreatmentController = require('./controllers/endodonticsTreatment_controller');
const EstimateController = require('./controllers/estimate_controller');
const ExpenseController = require('./controllers/expense_controller');
const FileController = require('./controllers/file_controller');
const FolderController = require('./controllers/folder_controller');
const GroupProcedureController = require('./controllers/groupProcedure_controller');
const InstallmentController = require('./controllers/installment_controller');
const MaterialController = require('./controllers/material_controller');
const MsgSentController = require('./controllers/msgSent_controller');
const OdontogramController = require('./controllers/odontogram_controller');
const PatientController = require('./controllers/patient_controller');
const PeriodonticsSessionController = require('./controllers/periodonticsSession_controller');
const PrescriptionController = require('./controllers/prescription_controller');
const ProcedureController = require('./controllers/procedure_controller');
const ProcedureModelController = require('./controllers/procedureModel_controller');
const ProceduresListController = require('./controllers/proceduresList_controller');
const ProstheticController = require('./controllers/prosthetic_controller');
const QuestionController = require('./controllers/question_controller');
const ReminderController = require('./controllers/reminder_controller');
const RoleController = require('./controllers/role_controller');
const TreatmentController = require('./controllers/treatment_controller');
const UserController = require('./controllers/user_controller');
const VendorController = require('./controllers/vendor_controller');

module.exports = (app) => {

	app.post('/api/anamnese', AnamneseController.create);
	app.put('/api/anamnese/:id', AnamneseController.edit);
	app.delete('/api/anamnese/:id', AnamneseController.delete);
	app.get('/api/anamnese', AnamneseController.index);

	app.post('/api/anamnese_model', AnamneseModelController.create);
	app.put('/api/anamnese_model/:id', AnamneseModelController.edit);
	app.delete('/api/anamnese_model/:id', AnamneseModelController.delete);
	app.get('/api/anamnese_model', AnamneseModelController.index);

	app.post('/api/answer', AnswerController.create);
	app.put('/api/answer/:id', AnswerController.edit);
	app.delete('/api/answer/:id', AnswerController.delete);
	app.get('/api/answer', AnswerController.index);

	app.post('/api/appointment', AppointmentController.create);
	app.put('/api/appointment/:id', AppointmentController.edit);
	app.delete('/api/appointment/:id', AppointmentController.delete);
	app.get('/api/appointment', AppointmentController.index);

	app.post('/api/clinic', ClinicController.create);
	app.put('/api/clinic/:id', ClinicController.edit);
	app.delete('/api/clinic/:id', ClinicController.delete);
	app.get('/api/clinic', ClinicController.index);

	app.post('/api/clinical_note', ClinicalNoteController.create);
	app.put('/api/clinical_note/:id', ClinicalNoteController.edit);
	app.delete('/api/clinical_note/:id', ClinicalNoteController.delete);
	app.get('/api/clinical_note', ClinicalNoteController.index);

	app.post('/api/credit_card', CreditCardController.create);
	app.put('/api/credit_card/:id', CreditCardController.edit);
	app.delete('/api/credit_card/:id', CreditCardController.delete);
	app.get('/api/credit_card', CreditCardController.index);

	app.post('/api/dentist', DentistController.create);
	app.put('/api/dentist/:id', DentistController.edit);
	app.delete('/api/dentist/:id', DentistController.delete);
	app.get('/api/dentist', DentistController.index);

	app.post('/api/document_model', DocumentModelController.create);
	app.put('/api/document_model/:id', DocumentModelController.edit);
	app.delete('/api/document_model/:id', DocumentModelController.delete);
	app.get('/api/document_model', DocumentModelController.index);

	app.post('/api/endodontics_treatment', EndodonticsTreatmentController.create);
	app.put('/api/endodontics_treatment/:id', EndodonticsTreatmentController.edit);
	app.delete('/api/endodontics_treatment/:id', EndodonticsTreatmentController.delete);
	app.get('/api/endodontics_treatment', EndodonticsTreatmentController.index);

	app.post('/api/estimate', EstimateController.create);
	app.put('/api/estimate/:id', EstimateController.edit);
	app.delete('/api/estimate/:id', EstimateController.delete);
	app.get('/api/estimate', EstimateController.index);

	app.post('/api/expense', ExpenseController.create);
	app.put('/api/expense/:id', ExpenseController.edit);
	app.delete('/api/expense/:id', ExpenseController.delete);
	app.get('/api/expense', ExpenseController.index);

	app.post('/api/file', FileController.create);
	app.put('/api/file/:id', FileController.edit);
	app.delete('/api/file/:id', FileController.delete);
	app.get('/api/file', FileController.index);

	app.post('/api/folder', FolderController.create);
	app.put('/api/folder/:id', FolderController.edit);
	app.delete('/api/folder/:id', FolderController.delete);
	app.get('/api/folder', FolderController.index);

	app.post('/api/group_procedure', GroupProcedureController.create);
	app.put('/api/group_procedure/:id', GroupProcedureController.edit);
	app.delete('/api/group_procedure/:id', GroupProcedureController.delete);
	app.get('/api/group_procedure', GroupProcedureController.index);

	app.post('/api/installment', InstallmentController.create);
	app.put('/api/installment/:id', InstallmentController.edit);
	app.delete('/api/installment/:id', InstallmentController.delete);
	app.get('/api/installment', InstallmentController.index);

	app.post('/api/material', MaterialController.create);
	app.put('/api/material/:id', MaterialController.edit);
	app.delete('/api/material/:id', MaterialController.delete);
	app.get('/api/material', MaterialController.index);

	app.post('/api/msg_sent', MsgSentController.create);
	app.put('/api/msg_sent/:id', MsgSentController.edit);
	app.delete('/api/msg_sent/:id', MsgSentController.delete);
	app.get('/api/msg_sent', MsgSentController.index);

	app.post('/api/odontogram', OdontogramController.create);
	app.put('/api/odontogram/:id', OdontogramController.edit);
	app.delete('/api/odontogram/:id', OdontogramController.delete);
	app.get('/api/odontogram', OdontogramController.index);

	app.post('/api/patient', PatientController.create);
	app.put('/api/patient/:id', PatientController.edit);
	app.delete('/api/patient/:id', PatientController.delete);
	app.get('/api/patient', PatientController.index);

	app.post('/api/periodontics_session', PeriodonticsSessionController.create);
	app.put('/api/periodontics_session/:id', PeriodonticsSessionController.edit);
	app.delete('/api/periodontics_session/:id', PeriodonticsSessionController.delete);
	app.get('/api/periodontics_session', PeriodonticsSessionController.index);

	app.post('/api/prescription', PrescriptionController.create);
	app.put('/api/prescription/:id', PrescriptionController.edit);
	app.delete('/api/prescription/:id', PrescriptionController.delete);
	app.get('/api/prescription', PrescriptionController.index);

	app.post('/api/procedure', ProcedureController.create);
	app.put('/api/procedure/:id', ProcedureController.edit);
	app.delete('/api/procedure/:id', ProcedureController.delete);
	app.get('/api/procedure', ProcedureController.index);

	app.post('/api/pprocedure_model', ProcedureModelController.create);
	app.put('/api/pprocedure_model/:id', ProcedureModelController.edit);
	app.delete('/api/pprocedure_model/:id', ProcedureModelController.delete);
	app.get('/api/pprocedure_model', ProcedureModelController.index);

	app.post('/api/procedures_list', ProceduresListController.create);
	app.put('/api/procedures_list/:id', ProceduresListController.edit);
	app.delete('/api/procedures_list/:id', ProceduresListController.delete);
	app.get('/api/procedures_list', ProceduresListController.index);

	app.post('/api/prosthetic', ProstheticController.create);
	app.put('/api/prosthetic/:id', ProstheticController.edit);
	app.delete('/api/prosthetic/:id', ProstheticController.delete);
	app.get('/api/prosthetic', ProstheticController.index);

	app.post('/api/question', QuestionController.create);
	app.put('/api/question/:id', QuestionController.edit);
	app.delete('/api/question/:id', QuestionController.delete);
	app.get('/api/question', QuestionController.index);

	app.post('/api/reminder', ReminderController.create);
	app.put('/api/reminder/:id', ReminderController.edit);
	app.delete('/api/reminder/:id', ReminderController.delete);
	app.get('/api/reminder', ReminderController.index);

	app.post('/api/role', RoleController.create);
	app.put('/api/role/:id', RoleController.edit);
	app.delete('/api/role/:id', RoleController.delete);
	app.get('/api/role', RoleController.index);

	app.post('/api/treatment', TreatmentController.create);
	app.put('/api/treatment/:id', TreatmentController.edit);
	app.delete('/api/treatment/:id', TreatmentController.delete);
	app.get('/api/treatment', TreatmentController.index);

	app.post('/api/user', UserController.create);
	app.put('/api/user/:id', UserController.edit);
	app.delete('/api/user/:id', UserController.delete);
	app.get('/api/user', UserController.index);

	app.post('/api/vendor', VendorController.create);
	app.put('/api/vendor/:id', VendorController.edit);
	app.delete('/api/vendor/:id', VendorController.delete);
	app.get('/api/vendor', VendorController.index);

};