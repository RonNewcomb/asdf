"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KindLabel = exports.KINDS = void 0;
exports.KINDS = {
    reservedWordAs: 128,
    string: 152,
    number: 148,
    boolean: 134,
    questionTokenMeaningOrUndefined: 57,
    object: 180,
    array: 185,
    default: 88,
    export: 93,
    endOfFileToken: 1,
    interfaceDeclaration: 261,
    function: 259,
    importStatement: 269,
    expressionOrFunctionCall: 241,
    jsxElement1: 283,
    whitespace: 11,
    typeUnion: 261,
    typeIntersection: 190,
    adhocInterface: 184,
    any: 131,
    unknown: 157,
    functionBody: 238,
    plainText: 11,
    initializer: 291,
    property: 288,
    jsxAttribute: 289,
    jsxElement2: 284,
    jsxArgument: 281,
    returnExpression: 250,
    jsxExpression: 214,
    destructuredObject: 203,
    name: 79,
};
exports.KindLabel = Object.keys(exports.KINDS).reduce((retval, key) => {
    retval[exports.KINDS[key]] = key;
    return retval;
}, []);