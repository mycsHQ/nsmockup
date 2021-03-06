'use strict';

/**
 * Validate that a given XML document conforms to a given XML schema. XML Schema Definition (XSD) is the expected schema format.
 *
 * @param {document} xmlDocument xml to validate
 * @param {document} schemaDocument schema to enforce
 * @param {string} schemaFolderId if your schema utilizes <import> or <include> tags which refer to sub-schemas by file name (as opposed to URL),
 *                 provide the Internal Id of File Cabinet folder containing these sub-schemas as the schemaFolderId argument
 * @throws {nlobjError} error containsing validation failure message = (s) - limited to first 10
 *
 * @since 2014.1
 */
exports.nlapiValidateXML = (xmlDocument, schemaDocument, schemaFolderId) => {
    if (!xmlDocument) {
        throw nlapiCreateError('SSS_DOCUMENT_ARG_REQD');
    } else if (!schemaDocument) {
        throw nlapiCreateError('SSS_SCHEMA_ARG_REQD');
    } else {
        // FIXME validate XML generate by xmldom
        return true;
    }
};
