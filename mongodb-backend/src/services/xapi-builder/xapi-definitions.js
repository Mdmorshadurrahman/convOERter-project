class XAPI_VERBS {
  static get STARTED() {
    return {
      id: "https://xapi.elearn./definitions/convOERter/verbs/started",
      display: {
        "en-US": "started",
        "de-DE": "startete"
      }
    }
  };
  static get FINISHED() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/verbs/finished",
      display: {
        "en-US": "finished",
        "de-DE": "schloss ab"
      }
    }
  };
  static get IMPORTED() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/verbs/imported",
      display: {
        "en-US": "imported",
        "de-DE": "importiert"
      }
    }
  };
  static get ENTERED() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/verbs/entered",
      display: {
        "en-US": "entered",
        "de-DE": "gab ein"
      }
    }
  };
  static get SELECTED() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/verbs/selected",
      display: {
        "en-US": "selected",
        "de-DE": "wählte aus"
      }
    }
  };
  static get EDITED() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/verbs/edited",
      display: {
        "en-US": "edited",
        "de-DE": "bearbeitet"
      }
    }
  };
  static get REPLACED() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/verbs/replaced",
      display: {
        "en-US": "replaced",
        "de-DE": "ersetzte"
      }
    }
  };
  static get UNDID() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/verbs/undid",
      display: {
        "en-US": "undid",
        "de-DE": "umgedreht"
      }
    }
  };
  static get AUTO_QUERIED() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/verbs/autoQueried",
      display: {
        "en-US": "autoQueried",
        "de-DE": "automatisch abgefragt"
      }
    }
  };
  static get SEARCHED() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/verbs/searched",
      display: {
        "en-US": "searched",
        "de-DE": "suchte"
      }
    }
  };
  static get FETCHED() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/verbs/fetched",
      display: {
        "en-US": "fetched",
        "de-DE": "abgerufen"
      }
    }
  };
  static get SUBMITTED() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/verbs/submitted",
      display: {
        "en-US": "submitted",
        "de-DE": "eingereicht"
      }
    }
  };
};

class XAPI_OBJECTS {
  static get OER_CONVERSION_PROCESS() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/activities/oerConversionProcess",
      definition: {
        name: {
          "en-US": "oerConversionProcess",
          "de-DE": "oerUmstellungsprozess",
        },
      }
    }
  };
  static get FIRST_STEPS_DIALOG() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/activities/firstStepsDialog",
      definition: {
        name: {
          "en-US": "firstStepsDialog",
          "de-DE": "ersteSchritteDialog",
        },
      }
    }
  };
  static get FILE() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/activities/file",
      definition: {
        name: {
          "en-US": "file",
          "de-DE": "Datei",
        },
      },
    }
  };
  static get USERNAME() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/activities/username",
      definition: {
        name: {
          "en-US": "username",
          "de-DE": "Benutzername",
        },
      },
    }
  };
  static get TARGET_LICENSE() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/activities/targetLicense",
      definition: {
        name: {
          "en-US": "targetLicense",
          "de-DE": "Ziellizenz",
        },
      },
    }
  };
  static get LEGAL_DISCLAIMER() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/activities/legalDisclaimer",
      definition: {
        name: {
          "en-US": "legalDisclaimer",
          "de-DE": "Rechtlicher Haftungsausschluss",
        },
      },
    }
  };
  static get IMAGE() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/activities/image",
      definition: {
        name: {
          "en-US": "image",
          "de-DE": "Bild",
        },
      },
    }
  };
  static get REPLACED_IMAGE() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/activities/replacedImage",
      definition: {
        name: {
          "en-US": "replacedImage",
          "de-DE": "ersetztes Bild",
        },
      },
    }
  };
  static get EXTERNAL_IMAGE() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/activities/externalImage",
      definition: {
        name: {
          "en-US": "externalImage",
          "de-DE": "externes Bild",
        },
      },
    }
  };
  static get FEEDBACK() {
    return {
      id: "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/activities/feedback",
      definition: {
        name: {
          "en-US": "feedback",
          "de-DE": "Rückmeldung",
        },
      },
    }
  };
};

class XAPI_EXTENSIONS {
  static TOOL_VERSION = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/context/toolVersion";
  static TOOL_LANGUAGE = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/context/toolLanguage";
  static BROWSER_NAME = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/context/browserName";
  static BROWSER_VERSION = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/context/browserVersion";
  static COUNTRY = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/context/country";

  static FAILED_TARGETED_APIS = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/result/failedTargetedApis";

  static FILE_TYPE = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/fileType";
  static NO_OF_IMAGES = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/noOfImages";
  static NO_OF_IMAGE_TYPES = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/noOfImageTypes";
  static USERNAME = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/username";
  static TARGET_LICENSE = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/targetLicense";

  static SOURCE_IMAGE = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/sourceImage";
  static REPLACEMENT_ACTION = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/replacementAction";

  static IS_CROPPED = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/isCropped";
  static IS_ROTATED = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/isRotated";

  static IS_AUTO_CLASSIFY_IMAGES = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/isAutoClassifyImages";
  static IS_AUTO_SEARCH_QUERY_CLICKED = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/isAutoSearchQueryClicked";
  static IS_AUTO_SEARCH_QUERY_SELECTED = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/isAutoSearchQueryOptionSelected";
  static SEARCH_QUERY = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/searchQuery";
  static TARGETED_APIS = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/targetedApis";
  static TARGETED_LICENSES = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/targetedLicenses";
  static CURRENT_PAGE = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/currentPage";

  static SOURCE_IMAGE_ROLE = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/sourceImageRole";
  static SOURCE_IMAGE_LICENSE = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/sourceImageLicense";
  static AUTHOR_NAME = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/authorName";
  static AUTHOR_SITE = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/authorSite";
  static AUTHOR_AFFILIATION = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/authorAffiliation";
  static WORK_TITLE = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/workTitle";
  static ORIGIN_URL = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/originURL";
  static ORIGIN_NAME = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/originName";
  static SCREENSHOT_DATE = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/screenshotDate";
  static SCREENSHOT_DESCRIPTION = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/screenshotDescription";
  static EXCLUDE_WITHOUT_MENTION = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/excludeWithoutMention";
  static DESCRIPTION = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/description";

  static FEEDBACK_WAS_HELPFUL = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/feedback_wasHelpful";
  static FEEDBACK_UI_IS_GOOD = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/feedback_uiIsGood";
  static FEEDBACK_I_WILL_USE_IT = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/feedback_iWillUseIt";
  static FEEDBACK_MAJOR_PROBLEMS = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/feedback_majorProblems";
  static FEEDBACK_SUGGESTIONS = "https://xapi.elearn.rwth-aachen.de/definitions/convOERter/extensions/activity/feedback_suggestions";
};

module.exports = {
  XAPI_VERBS,
  XAPI_OBJECTS,
  XAPI_EXTENSIONS
};
