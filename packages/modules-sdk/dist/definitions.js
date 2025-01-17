"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODULE_DEFINITIONS = exports.ModulesDefinition = exports.Modules = void 0;
const types_1 = require("@medusajs/types");
var Modules;
(function (Modules) {
    Modules["EVENT_BUS"] = "eventBus";
    Modules["STOCK_LOCATION"] = "stockLocationService";
    Modules["INVENTORY"] = "inventoryService";
    Modules["CACHE"] = "cacheService";
})(Modules = exports.Modules || (exports.Modules = {}));
exports.ModulesDefinition = {
    [Modules.EVENT_BUS]: {
        key: Modules.EVENT_BUS,
        registrationName: "eventBusModuleService",
        defaultPackage: "@medusajs/event-bus-local",
        label: "EventBusModuleService",
        canOverride: true,
        isRequired: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [Modules.STOCK_LOCATION]: {
        key: Modules.STOCK_LOCATION,
        registrationName: "stockLocationService",
        defaultPackage: false,
        label: "StockLocationService",
        isRequired: false,
        canOverride: true,
        dependencies: ["eventBusService"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [Modules.INVENTORY]: {
        key: Modules.INVENTORY,
        registrationName: "inventoryService",
        defaultPackage: false,
        label: "InventoryService",
        isRequired: false,
        canOverride: true,
        dependencies: ["eventBusService"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [Modules.CACHE]: {
        key: Modules.CACHE,
        registrationName: "cacheService",
        defaultPackage: "@medusajs/cache-inmemory",
        label: "CacheService",
        isRequired: true,
        canOverride: true,
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
};
exports.MODULE_DEFINITIONS = Object.values(exports.ModulesDefinition);
exports.default = exports.MODULE_DEFINITIONS;
//# sourceMappingURL=definitions.js.map