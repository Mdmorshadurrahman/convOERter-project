const express = require('express');
const multer = require('multer')
const upload = multer({ dest: 'file_uploads/' })
const fs = require('fs')
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId; // check whether valid id...

var { feedbackModel } = require('../models/feedbackModel');
const FILE_UPLOAD_DIR = 'file_uploads'
// Get ALL feedbacks from DB...---> :3000/feedbacks/
router.get('/', (req, res) => {
	if (req.isAuthenticated()) {
		feedbackModel.find((err, docs) => {
			if (!err) { res.send(docs); }
			else { console.log('Error in retrieving feedbacks are: '+err+ + JSON.stringify(err, undefined, 2)); }
		});
	} else {
		res.sendStatus(401);
	}
});

// get feedback with particular Id...
router.get('/:id', (req, res) => {
	if (req.isAuthenticated()) {
		if (!ObjectId.isValid(req.params.id))   //  check to see if mongoId is valid...
			return res.status(400).send(`No records with the given id: ${req.params.id}`)

		feedbackModel.findById(req.params.id, (err, doc) => {
			if (!err) { res.send(doc); }
			else { console.log('Error in retrieving feedback: ' + JSON.stringify(err, undefined, 2)); }
		})
	} else {
		res.sendStatus(401);
	}
});

// Delete specific feedback
router.delete('/:id', (req, res) => {
	if (req.isAuthenticated()) {
		if (!ObjectId.isValid(req.params.id))   //  check to see if mongoId is valid...
			return res.status(400).send(`No records with the given id: ${req.params.id}`)

		feedbackModel.findByIdAndDelete(req.params.id, (err, doc) => {
			if (!err) {
				res.send(doc);
				doc.uploaded_files.forEach((file) => {
					const filename = file.filename;
					fs.unlink(`${FILE_UPLOAD_DIR}/${filename}`, ((err) => { if (err) console.log(`Failed to delete file: ${filename}\n${err}`) }))
				})
			}
			else { console.log('Error in deleting feedback: ' + JSON.stringify(err, undefined, 2)); res.sendStatus(500); }
		})
	} else {
		res.sendStatus(401);
	}
});

// download a specific file from a set feedback
router.get('/:id/:filename', (req, res) => {
	if (req.isAuthenticated()) {
		if (!ObjectId.isValid(req.params.id))   //  check to see if mongoId is valid...
			return res.status(400).send(`No records with the given id: ${req.params.id}`)
		feedbackModel.findById(req.params.id, (err, doc) => {
			let foundFile = doc.uploaded_files.find((file) => {
				if (file.filename) {
					filename = file.filename;
					return file.filename === req.params.filename
				} else { return false; }
			});
			if (foundFile == undefined) {
				res.status(404).send("Error: Filename mismatch!");
			} else {
				res.download(`${FILE_UPLOAD_DIR}/${foundFile.filename}`, foundFile.originalname)
			}
			if (err) { console.log('Error in retrieving feedback: ' + JSON.stringify(err, undefined, 2)); }
		})
	} else {
		res.sendStatus(401);
	}
});


// Posts NEW data from feedback form (Angular form) to DB...
router.post('/', upload.any(), (req, res) => {
	//req.files contains uploaded files, if there exist any
	let files = null;
	if (req.files) {
		files = req.files.map((file) => { return { filename: file.filename, originalname: file.originalname, mimetype: file.mimetype, size: file.size } })
	}
	var feed = new feedbackModel({
		wasHelpful: req.body.wasHelpful,
		uiIsGood: req.body.uiIsGood,
		iWillUseIt: req.body.iWillUseIt,
		majorProblems: req.body.majorProblems,
		suggestions: req.body.suggestions,
		time: Date.now(),
		uploaded_files: files
	});
	feed.save((err, doc) => {
		if (!err) { res.send(doc); }
		else {
			console.log('Error in Feedback save: '
				+ JSON.stringify(err, undefined, 2));
		}
	});
});

module.exports = router;