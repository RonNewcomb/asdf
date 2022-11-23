export interface Common {
  pos: number;
  end: number;
  flags: number;
  modifierFlagsCache: number;
  transformFlags: number;
  kind: number;
}

export interface ASTTree {
  fileName: string;
  statements: IStatement[];
}
export interface IStatement extends Common {
  moduleSpecifier?: IModuleSpecifier;
  importClause?: IImportClause;
  name?: IName;
  modifiers?: IModifiers[];
  parameters?: IParameter[];
  body?: IBody;
}
export interface IBody extends Common {
  multiline: boolean;
  statements: IImperativeStatements[];
}
export interface IImperativeStatements extends Common {
  declarationList: IDeclarationList;
  expression: IExpression;
}
export interface IDeclarationList extends Common {
  declarations: IDeclaration[];
}
export interface IDeclaration extends Common {
  name: IName & {
    elements: IName[];
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
export interface IName extends Common {
  escapedText: string;
}
export interface IType extends Common {
  members?: IMember[];
  typeName?: ITypeName;
  elementType?: IArrayElementType;
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
export interface IExpression extends Common {
  escapedText?: string;
  arguments?: (IArgument | IJsxArgument)[];
  text?: string;
  hasExtendedUnicodeEscape?: boolean;
}
export interface IArgument extends Common {
  text: string;
  hasExtendedUnicodeEscape: boolean;
}
export interface IJsxArgument extends Common {
  text: string;
  hasExtendedUnicodeEscape: boolean;
  openingElement: IJsxElement;
  children: (IPlainText | IJsxAttribute | any)[];
  closingElement: IJsxElement;
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
export interface IInitializer extends Common {
  expression: IExpression;
}
export interface IPlainText extends Common {
  text: string;
  containsOnlyTriviaWhiteSpaces: boolean;
}
