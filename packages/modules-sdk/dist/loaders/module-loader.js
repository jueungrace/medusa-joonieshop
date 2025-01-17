"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleLoader = exports.moduleHelper = void 0;
const types_1 = require("@medusajs/types");
const awilix_1 = require("awilix");
const os_1 = require("os");
const module_helper_1 = require("../module-helper");
const utils_1 = require("./utils");
exports.moduleHelper = new module_helper_1.ModulesHelper();
async function loadModule(container, resolution, logger) {
    const registrationName = resolution.definition.registrationName;
    const { scope, resources } = resolution.moduleDeclaration ?? {};
    if (scope === types_1.MODULE_SCOPE.EXTERNAL) {
        // TODO: implement external Resolvers
        // return loadExternalModule(...)
        throw new Error("External Modules are not supported yet.");
    }
    if (!scope || (scope === types_1.MODULE_SCOPE.INTERNAL && !resources)) {
        let message = `The module ${resolution.definition.label} has to define its scope (internal | external)`;
        if (scope === types_1.MODULE_SCOPE.INTERNAL && !resources) {
            message = `The module ${resolution.definition.label} is missing its resources config`;
        }
        container.register({
            [registrationName]: (0, awilix_1.asValue)(undefined),
        });
        return {
            error: new Error(message),
        };
    }
    if (!resolution.resolutionPath) {
        container.register({
            [registrationName]: (0, awilix_1.asValue)(undefined),
        });
        return;
    }
    return await (0, utils_1.loadInternalModule)(container, resolution, logger);
}
const moduleLoader = async ({ container, moduleResolutions, logger, }) => {
    for (const resolution of Object.values(moduleResolutions ?? {})) {
        const registrationResult = await loadModule(container, resolution, logger);
        if (registrationResult?.error) {
            const { error } = registrationResult;
            if (resolution.definition.isRequired) {
                logger?.error(`Could not resolve required module: ${resolution.definition.label}. Error: ${error.message}${os_1.EOL}`);
                throw error;
            }
            logger?.warn(`Could not resolve module: ${resolution.definition.label}. Error: ${error.message}${os_1.EOL}`);
        }
    }
    exports.moduleHelper.setModules(Object.entries(moduleResolutions).reduce((acc, [k, v]) => {
        if (v.resolutionPath) {
            acc[k] = v;
        }
        return acc;
    }, {}));
    container.register({
        modulesHelper: (0, awilix_1.asValue)(exports.moduleHelper),
    });
};
exports.moduleLoader = moduleLoader;
//# sourceMappingURL=module-loader.js.map