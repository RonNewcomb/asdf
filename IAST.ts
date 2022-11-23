export const KINDS: Record<string, number> = {
  reservedWordAs: 128, // or all reserved words?
  string: 152,
  number: 148,
  boolean: 134,
  questionTokenMeaningOrUndefined: 57,
  object: 180, // look for typeName
  array: 185, // look for elementType
  default: 88,
  export: 93,
  endOfFileToken: 1,
  interfaceDeclaration: 261, // .name .modifiers .members
  function: 259, // .name .modifiers .parameters .body
  importStatement: 269,
  expressionOrFunctionCall: 241, // .expression
  jsxElement1: 283,
  whitespace: 11,
  typeUnion: 261, // x | y // look for .types array on this .type
  typeIntersection: 190, // x & y // look for .types array on this .type
  adhocInterface: 184, // ? look for .members on this .type
  any: 131,
  unknown: 157,
  functionBody: 238, //?
  plainText: 11,
  initializer: 291,
  property: 288,
  jsxAttribute: 289,
  jsxElement2: 284,
  jsxArgument: 281,
  returnExpression: 250, // expression...
  jsxExpression: 214,
  destructuredObject: 203,
  name: 79,
};

export const KindLabel = Object.keys(KINDS).reduce((retval, key) => {
  retval[KINDS[key]] = key;
  return retval;
}, [] as string[]);

export interface Common {
  // pos: number;
  // end: number;
  // flags: number;
  // modifierFlagsCache: number;
  // transformFlags: number;
  kind: number;
  ___?: string;
}

export interface IDestructuredArray {
  kind: 204;
}
export interface IVarDestructuredInto extends Common {
  kind: 205;
  name: IName;
}
export interface ASTTree {
  fileName: string;
  statements: IStatement[];
}

//export type IStatement = IStatement_Expression | IStatement_Other;

export interface IStatement extends Common {
  moduleSpecifier?: IModuleSpecifier;
  importClause?: IImportClause;
  name?: IName;
  modifiers?: IModifiers[];
  parameters?: IParameter[];
  body?: IBody;
}

// export interface IStatement_Expression extends Common {
//   kind: 241;
//   expression: IExpression;
// }

export type IBody = IBody210 | IBody238;

export interface IBody238 extends Common {
  kind: 238;
  multiline: boolean;
  statements: IImperativeStatement[];
}
export interface IBody210 extends Common {
  kind: 210;
  expression: IObjectMethodExpression208;
  arguments: IArgument[];
  statements?: IImperativeStatement[];
}

export type IImperativeStatement = IImperativeStatements240 | IImperativeStatements241 | IImperativeStatements250;

export interface IImperativeStatements241 extends Common {
  kind: 241;
  expression: IExpression;
}
export interface IImperativeStatements240 extends Common {
  kind: 240;
  declarationList: IDeclarationList;
  expression: IExpression;
}
export interface IImperativeStatements250 extends Common {
  kind: 250;
  expression: IExpression214;
}

export interface IDeclarationList extends Common {
  declarations: IDeclaration257[];
}
export interface IDeclaration257 extends Common {
  kind: 257;
  name: IName & {
    elements?: IName[];
  };
  initializer: IInitializer;
}
export interface IModuleSpecifier extends Common {
  text: string;
  hasExtendedUnicodeEscape: boolean;
}
export interface IImportClause extends Common {
  isTypeOnly: boolean;
  name?: IName;
}
export interface IModifiers extends Common {}
export interface IName79 extends Common {
  kind: 79;
  escapedText: string;
  originalKeywordKind?: number;
}
export interface IName extends Common {
  //kind: 79;
  escapedText: string;
  originalKeywordKind?: number;
}
export interface IType extends Common {
  members?: IMember[];
  typeName?: ITypeName;
  elementType?: IArrayElementType;
  types?: IType[];
}
export interface IQuestionToken extends Common {}
export interface IMember extends Common {
  name: IName;
  type: IType;
  questionToken?: IQuestionToken; // means the literal ? which means |undefined  just like it's used on this very line
  types?: IType[];
}
export interface ITypeName extends Common {
  escapedText: string;
}

export interface IParameter extends Common {
  name: IName;
  type: IType;
}
export interface IArrayElementType extends Common {
  typeName?: ITypeName;
}
export type IExpression = IJsxArgument281 | IExpression_Other | IObjectMethodExpression208 | IExpression214 | IExpression223;
export interface IObjectMethodExpression208 extends Common {
  kind: 208;
  name: IName;
  expression: IName;
}
export interface IExpression_Other extends Common {
  escapedText?: string;
  arguments?: (IArgument | IJsxArgument281 | IName)[];
  text?: string;
  hasExtendedUnicodeEscape?: boolean;
  expression?: IExpression;
  //  name?: IName;
}
export interface IExpression214 extends Common {
  kind: 214;
}
export interface IOperatorToken extends Common {
  kind: 63;
}
export interface IExpression223 extends Common {
  kind: 223;
  left: IExpression;
  operatorToken: IOperatorToken;
  right: IExpression;
}
export interface IArgument extends Common {
  text: string;
  hasExtendedUnicodeEscape: boolean;
}
export interface IJsxArgument281 extends Common {
  kind: 281;
  text: string;
  hasExtendedUnicodeEscape: boolean;
  openingElement: IJsxElement;
  children: (IPlainText | IJsxAttribute | IJsxArgument281)[];
  closingElement: Omit<IJsxElement, "attributes">;
}

export interface IJsxElement extends Common {
  tagName: IName;
  attributes: IJsxAttribute;
}
export interface IJsxAttribute extends Common {
  properties: IProperty[];
}
export interface IProperty extends Common {
  name: IName;
  initializer: IInitializer;
}
export type IInitializer = IArrowFunction216 | IExpressionInitializer291;
export interface IExpressionInitializer291 extends Common {
  kind: 291;
  expression: IExpression;
}
export type IPlainText = IPlainText10 | IPlainText11;
export interface IPlainText10 extends Common {
  kind: 10;
  text: string;
  containsOnlyTriviaWhiteSpaces: boolean;
}
export interface IPlainText11 extends Common {
  kind: 11;
  text: string;
  containsOnlyTriviaWhiteSpaces: boolean;
}
export interface IArrowFunction216 extends Common {
  kind: 216;
  parameters: IParameter[];
  body: IBody210;
  equalsGreaterThanToken: IArrowForFunction38;
}

export interface IArrowForFunction38 extends Common {
  kind: 38;
}
