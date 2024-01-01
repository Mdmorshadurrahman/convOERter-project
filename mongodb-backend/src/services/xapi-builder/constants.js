const DEFAULT_ACTOR_MBOX = "mailto:convoerter@elearn.rwth-aachen.de";

const UI_ACTION_CONSTANTS = {
  OER_CONVERSION_PROCESS_STARTED: "oerConversionProcessStarted",
  OER_CONVERSION_PROCESS_FINISHED: "oerConversionProcessFinished",

  FIRST_STEPS_DIALOG_STARTED: "firstStepsDialogStarted",
  FIRST_STEPS_DIALOG_FINISHED: "firstStepsDialogFinished",

  FILE_IMPORTED: "fileImported",
  USERNAME_ENTERED: "usernameEntered",
  TARGET_LICENSE_SELECTED: "targetLicenseSelected",
  LEGAL_DISCLAIMER_ENTERED: "legalDisclaimerEntered",

  IMAGE_SELECTED: "imageSelected",
  IMAGE_EDITED: "imageEdited",
  IMAGE_REPLACED: "imageReplaced",

  EXTERNAL_IMAGE_AUTO_QUERIED: "externalImageAutoQueried",
  EXTERNAL_IMAGE_SEARCHED: "externalImageSearched",
  EXTERNAL_IMAGE_FETCHED: "externalImageFetched",

  REPLACED_IMAGE_UNDID: "replacedImageUndid",
  
  FEEDBACK_SUBMITTED: "feedbackSubmitted",
};

module.exports = {
  DEFAULT_ACTOR_MBOX,
  UI_ACTION_CONSTANTS
};
