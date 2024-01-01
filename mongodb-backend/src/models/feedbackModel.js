const mongoose = require('mongoose');
const file_schema = new mongoose.Schema({ filename: String, originalname: String, mimetype: String, size: Number })
var feedbackModel = mongoose.model('feedback', {
	wasHelpful: { type: Number },
	uiIsGood: { type: Number },
	iWillUseIt: { type: Boolean },
	majorProblems: { type: Boolean },
	suggestions: { type: String },
	time: {type: Number},
	uploaded_files: [{type: file_schema}]
});

module.exports =  { feedbackModel };