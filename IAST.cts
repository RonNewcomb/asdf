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
  modifiers?: IModifiers[];
  name?: IName;
  parameters?: IParameter[];
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
  arguments?: IArgument[];
  text?: string;
  hasExtendedUnicodeEscape?: boolean;
}

export interface IArgument extends Common {
  //281
  text: string;
  hasExtendedUnicodeEscape: boolean;
  openingElement: IJsxElement;
  children: (IPlainText | IJsxAttribute | any)[];
  closingElement: IJsxElement; //284
}

export interface IJsxElement extends Common {
  //284
  tagName: IName;
  attributes: IJsxAttribute;
}
export interface IJsxAttribute extends Common {
  //289
  properties: IProperty[];
}
export interface IProperty extends Common {
  //288
  name: IName;
  initializer: IInitializer;
}
export interface IInitializer extends Common {
  //291
  expression: IExpression;
}
export interface IPlainText extends Common {
  //11
  text: string;
  containsOnlyTriviaWhiteSpaces: boolean;
}
