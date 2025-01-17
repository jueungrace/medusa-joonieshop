"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
var class_validator_1 = require("class-validator");
var errors_1 = require("./errors");
/**
 * Used to validate user email.
 * @param {string} email - email to validate
 * @return {string} the validated email
 */
function validateEmail(email) {
    var validatedEmail = (0, class_validator_1.isEmail)(email);
    if (!validatedEmail) {
        throw new errors_1.MedusaError(errors_1.MedusaError.Types.INVALID_DATA, "The email is not valid");
    }
    return email.toLowerCase();
}
exports.validateEmail = validateEmail;
//# sourceMappingURL=is-email.js.map