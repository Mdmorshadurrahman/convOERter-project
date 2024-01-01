const { UI_ACTION_CONSTANTS, DEFAULT_ACTOR_MBOX } = require("./constants");
const { XAPI_VERBS, XAPI_OBJECTS, XAPI_EXTENSIONS } = require("./xapi-definitions");

module.exports = class XAPILogBuilderService {

  static build(id, timestamp, sessionId, action, context = null) {

    const xAPIStatement = {
      id: id,
      timestamp: timestamp,
      actor: {
        name: sessionId, // use uuid to detect sessions
        mbox: DEFAULT_ACTOR_MBOX,
      },
      verb: undefined,
      object: undefined
    };

    switch (action.name) {
      case UI_ACTION_CONSTANTS.OER_CONVERSION_PROCESS_STARTED: {
        xAPIStatement.verb = XAPI_VERBS.STARTED;
        xAPIStatement.object = XAPI_OBJECTS.OER_CONVERSION_PROCESS;
        if (context) {
          xAPIStatement.context = {
            extensions: {
              [XAPI_EXTENSIONS.TOOL_VERSION]: context.toolVersion,
              [XAPI_EXTENSIONS.TOOL_LANGUAGE]: context.toolLanguage,
              [XAPI_EXTENSIONS.BROWSER_NAME]: context.browserName,
              [XAPI_EXTENSIONS.BROWSER_VERSION]: context.browserVersion,
              [XAPI_EXTENSIONS.COUNTRY]: context.country,
            },
          };
        } else {
          return null;
        }
        break;
      }
      case UI_ACTION_CONSTANTS.OER_CONVERSION_PROCESS_FINISHED: {
        xAPIStatement.verb = XAPI_VERBS.FINISHED;
        xAPIStatement.object = XAPI_OBJECTS.OER_CONVERSION_PROCESS;
        break;
      }
      case UI_ACTION_CONSTANTS.FIRST_STEPS_DIALOG_STARTED: {
        xAPIStatement.verb = XAPI_VERBS.STARTED;
        xAPIStatement.object = XAPI_OBJECTS.FIRST_STEPS_DIALOG;
        break;
      }
      case UI_ACTION_CONSTANTS.FIRST_STEPS_DIALOG_FINISHED: {
        xAPIStatement.verb = XAPI_VERBS.FINISHED;
        xAPIStatement.object = XAPI_OBJECTS.FIRST_STEPS_DIALOG;
        break;
      }
      case UI_ACTION_CONSTANTS.FILE_IMPORTED: {
        xAPIStatement.verb = XAPI_VERBS.IMPORTED;
        xAPIStatement.object = XAPI_OBJECTS.FILE;
        break;
      }
      case UI_ACTION_CONSTANTS.USERNAME_ENTERED: {
        xAPIStatement.verb = XAPI_VERBS.ENTERED;
        xAPIStatement.object = XAPI_OBJECTS.USERNAME;
        break;
      }
      case UI_ACTION_CONSTANTS.TARGET_LICENSE_SELECTED: {
        xAPIStatement.verb = XAPI_VERBS.SELECTED;
        xAPIStatement.object = XAPI_OBJECTS.TARGET_LICENSE;
        break;
      }
      case UI_ACTION_CONSTANTS.LEGAL_DISCLAIMER_ENTERED: {
        xAPIStatement.verb = XAPI_VERBS.ENTERED;
        xAPIStatement.object = XAPI_OBJECTS.LEGAL_DISCLAIMER;
        break;
      }
      case UI_ACTION_CONSTANTS.IMAGE_SELECTED: {
        xAPIStatement.verb = XAPI_VERBS.SELECTED;
        xAPIStatement.object = XAPI_OBJECTS.IMAGE;
        break;
      }
      case UI_ACTION_CONSTANTS.IMAGE_EDITED: {
        xAPIStatement.verb = XAPI_VERBS.EDITED;
        xAPIStatement.object = XAPI_OBJECTS.IMAGE;
        break;
      }
      case UI_ACTION_CONSTANTS.IMAGE_REPLACED: {
        xAPIStatement.verb = XAPI_VERBS.REPLACED;
        xAPIStatement.object = XAPI_OBJECTS.IMAGE;
        break;
      }
      case UI_ACTION_CONSTANTS.REPLACED_IMAGE_UNDID: {
        xAPIStatement.verb = XAPI_VERBS.UNDID;
        xAPIStatement.object = XAPI_OBJECTS.REPLACED_IMAGE;
        break;
      }
      case UI_ACTION_CONSTANTS.EXTERNAL_IMAGE_AUTO_QUERIED: {
        xAPIStatement.verb = XAPI_VERBS.AUTO_QUERIED;
        xAPIStatement.object = XAPI_OBJECTS.EXTERNAL_IMAGE;
        break;
      }
      case UI_ACTION_CONSTANTS.EXTERNAL_IMAGE_SEARCHED: {
        xAPIStatement.verb = XAPI_VERBS.SEARCHED;
        xAPIStatement.object = XAPI_OBJECTS.EXTERNAL_IMAGE;
        break;
      }
      case UI_ACTION_CONSTANTS.EXTERNAL_IMAGE_FETCHED: {
        xAPIStatement.verb = XAPI_VERBS.FETCHED;
        xAPIStatement.object = XAPI_OBJECTS.EXTERNAL_IMAGE;
        break;
      }
      case UI_ACTION_CONSTANTS.FEEDBACK_SUBMITTED: {
        xAPIStatement.verb = XAPI_VERBS.SUBMITTED;
        xAPIStatement.object = XAPI_OBJECTS.FEEDBACK;
        break;
      }
      default:
        return null;
        break;
    }

    // extend model with extensions
    if (action.metadata) {
        xAPIStatement.object.definition.extensions = {};
        if ("fileType" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.FILE_TYPE] = action.metadata.fileType;
        }
        if ("noOfImages" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.NO_OF_IMAGES] = action.metadata.noOfImages;
        }
        if ("noOfImageTypes" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.NO_OF_IMAGE_TYPES] = action.metadata.noOfImageTypes;
        }
        if ("targetLicense" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.TARGET_LICENSE] = action.metadata.targetLicense;
        }
        if ("sourceImage" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.SOURCE_IMAGE] = action.metadata.sourceImage;
        }
        if ("replacementAction" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.REPLACEMENT_ACTION] = action.metadata.replacementAction;
        }
        if ("isCropped" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.IS_CROPPED] = action.metadata.isCropped;
        }
        if ("isRotated" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.IS_ROTATED] = action.metadata.isRotated;
        }
        if ("isAutoClassifyImages" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.IS_AUTO_CLASSIFY_IMAGES] = action.metadata.isAutoClassifyImages;
        }
        if ("isAutoSearchQueryClicked" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.IS_AUTO_SEARCH_QUERY_CLICKED] = action.metadata.isAutoSearchQueryClicked;
        }
        if ("isAutoSearchQueryOptionSelected" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.IS_AUTO_SEARCH_QUERY_SELECTED] = action.metadata.isAutoSearchQueryOptionSelected;
        }
        if ("searchQuery" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.SEARCH_QUERY] = action.metadata.searchQuery;
        }
        if ("targetedApis" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.TARGETED_APIS] = action.metadata.targetedApis;
        }
        if ("targetedLicenses" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.TARGETED_LICENSES] = action.metadata.targetedLicenses;
        }
        if ("currentPage" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.CURRENT_PAGE] = action.metadata.currentPage;
        }
        if ("sourceImageRole" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.SOURCE_IMAGE_ROLE] = action.metadata.sourceImageRole;
        }
        if ("sourceImageLicense" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.SOURCE_IMAGE_LICENSE] = action.metadata.sourceImageLicense;
        }
        if ("authorName" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.AUTHOR_NAME] = action.metadata.authorName;
        }
        if ("authorSite" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.AUTHOR_SITE] = action.metadata.authorSite;
        }
        if ("authorAffiliation" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.AUTHOR_AFFILIATION] = action.metadata.authorAffiliation;
        }
        if ("workTitle" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.WORK_TITLE] = action.metadata.workTitle;
        }
        if ("originURL" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.ORIGIN_URL] = action.metadata.originURL;
        }
        if ("originName" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.ORIGIN_NAME] = action.metadata.originName;
        }
        if ("screenshotDate" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.SCREENSHOT_DATE] = action.metadata.screenshotDate;
        }
        if ("screenshotDescription" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.SCREENSHOT_DESCRIPTION] = action.metadata.screenshotDescription;
        }
        if ("excludeWithoutMention" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.EXCLUDE_WITHOUT_MENTION] = action.metadata.excludeWithoutMention;
        }
        if ("description" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.DESCRIPTION] = action.metadata.description;
        }

        if ("feedback_wasHelpful" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.FEEDBACK_WAS_HELPFUL] = action.metadata.feedback_wasHelpful;
        }
        if ("feedback_uiIsGood" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.FEEDBACK_UI_IS_GOOD] = action.metadata.feedback_uiIsGood;
        }
        if ("feedback_iWillUseIt" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.FEEDBACK_I_WILL_USE_IT] = action.metadata.feedback_iWillUseIt;
        }
        if ("feedback_majorProblems" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.FEEDBACK_MAJOR_PROBLEMS] = action.metadata.feedback_majorProblems;
        }
        if ("feedback_suggestions" in action.metadata) {
          xAPIStatement.object.definition.extensions[XAPI_EXTENSIONS.FEEDBACK_SUGGESTIONS] = action.metadata.feedback_suggestions;
        }
    }

    // extend model with result
    if (action.result && "success" in action.result) {
      xAPIStatement.result = {
        success: action.result.success,
        extensions: {},
      };

      if ("failedTargetedApis" in action.result) {
        xAPIStatement.result.extensions[XAPI_EXTENSIONS.FAILED_TARGETED_APIS] = action.result.failedTargetedApis;
      }
    }

    return xAPIStatement;
  }
};
