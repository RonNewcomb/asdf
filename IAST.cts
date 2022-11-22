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
export interface IStatement {
  moduleSpecifier?: IModuleSpecifier;
  importClause?: IImportClause;
  modifiers?: IModifiers[];
  name?: IName;
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
