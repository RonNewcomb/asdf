import AppStart from "../components/app-start.js";
import type { IStatement } from "../IAST.js";

describe("AppStart", () => {
  it("renders", () => {
    cy.mount(<AppStart seed={"sample string"}>{}</AppStart>);
    cy.get("button").should("contains.text", "Click me!");
  });
});

const ast: IStatement[] = [
  {
    kind: 259,
    name: {
      kind: 79,
      escapedText: "AppStart",
    },
    modifiers: [
      {
        kind: 93,
      },
      {
        kind: 88,
      },
    ],
    parameters: [
      {
        kind: 166,
        name: {
          kind: 79,
          escapedText: "props",
        },
        type: {
          kind: 184,
          members: [
            {
              kind: 168,
              name: {
                kind: 79,
                escapedText: "seed",
              },
              type: {
                kind: 152,
              },
            },
            {
              kind: 168,
              name: {
                kind: 79,
                escapedText: "children",
              },
              type: {
                kind: 131,
              },
              questionToken: {
                kind: 57,
              },
            },
          ],
        },
      },
      {
        kind: 166,
        name: {
          kind: 79,
          escapedText: "state",
        },
        type: {
          kind: 190,
          types: [
            {
              kind: 180,
              typeName: {
                kind: 79,
                escapedText: "IState",
              },
            },
            {
              kind: 184,
              members: [
                {
                  kind: 168,
                  name: {
                    kind: 79,
                    originalKeywordKind: 128,
                    escapedText: "as",
                  },
                  type: {
                    kind: 152,
                  },
                },
              ],
            },
          ],
        },
      },
    ],
    body: {
      kind: 238,
      statements: [
        {
          kind: 241,
          expression: {
            kind: 210,
            expression: {
              kind: 208,
              expression: {
                kind: 79,
                escapedText: "console",
              },
              name: {
                kind: 79,
                escapedText: "log",
              },
            },
            arguments: [
              {
                kind: 10,
                text: "app-start state",
                hasExtendedUnicodeEscape: false,
              },
              {
                kind: 79,
                escapedText: "state",
              },
            ],
          },
        },
        {
          kind: 241,
          expression: {
            kind: 210,
            expression: {
              kind: 208,
              expression: {
                kind: 79,
                escapedText: "console",
              },
              name: {
                kind: 79,
                escapedText: "log",
              },
            },
            arguments: [
              {
                kind: 10,
                text: "app-start props ",
                hasExtendedUnicodeEscape: false,
              },
              {
                kind: 79,
                escapedText: "props",
              },
            ],
          },
        },
        {
          kind: 241,
          expression: {
            kind: 223,
            left: {
              kind: 208,
              expression: {
                kind: 79,
                escapedText: "state",
              },
              name: {
                kind: 79,
                originalKeywordKind: 128,
                escapedText: "as",
              },
            },
            operatorToken: {
              kind: 63,
            },
            right: {
              kind: 10,
              text: "appstart.state.as!",
              hasExtendedUnicodeEscape: false,
            },
          },
        },
        {
          kind: 240,
          declarationList: {
            kind: 258,
            declarations: [
              {
                kind: 257,
                name: {
                  kind: 204,
                  elements: [
                    {
                      kind: 205,
                      name: {
                        kind: 79,
                        escapedText: "z",
                      },
                    },
                    {
                      kind: 205,
                      name: {
                        kind: 79,
                        escapedText: "setZ",
                      },
                    },
                  ],
                },
                initializer: {
                  kind: 210,
                  expression: {
                    kind: 208,
                    expression: {
                      kind: 79,
                      escapedText: "state",
                    },
                    name: {
                      kind: 79,
                      escapedText: "useState",
                    },
                  },
                  arguments: [
                    {
                      kind: 8,
                      text: "65",
                      numericLiteralFlags: 0,
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          kind: 240,
          declarationList: {
            kind: 258,
            declarations: [
              {
                kind: 257,
                name: {
                  kind: 79,
                  escapedText: "pressed",
                },
                initializer: {
                  kind: 216,
                  parameters: [],
                  body: {
                    kind: 210,
                    expression: {
                      kind: 79,
                      escapedText: "setZ",
                    },
                    arguments: [
                      {
                        kind: 223,
                        left: {
                          kind: 79,
                          escapedText: "z",
                        },
                        operatorToken: {
                          kind: 39,
                        },
                        right: {
                          kind: 8,
                          text: "5",
                          numericLiteralFlags: 0,
                        },
                      },
                    ],
                  },
                  equalsGreaterThanToken: {
                    kind: 38,
                  },
                },
              },
            ],
          },
        },
        {
          kind: 250,
          expression: {
            kind: 214,
            expression: {
              kind: 281,
              openingElement: {
                kind: 283,
                tagName: {
                  kind: 79,
                  escapedText: "div",
                },
                attributes: {
                  kind: 289,
                  properties: [
                    {
                      kind: 288,
                      name: {
                        kind: 79,
                        originalKeywordKind: 84,
                        escapedText: "class",
                      },
                      initializer: {
                        kind: 10,
                        text: "app-start",
                        hasExtendedUnicodeEscape: false,
                      },
                    },
                  ],
                },
              },
              children: [
                {
                  kind: 11,
                  text: "\n      ",
                  containsOnlyTriviaWhiteSpaces: true,
                },
                {
                  kind: 281,
                  openingElement: {
                    kind: 283,
                    tagName: {
                      kind: 79,
                      escapedText: "span",
                    },
                    attributes: {
                      kind: 289,
                      properties: [],
                    },
                  },
                  children: [
                    {
                      kind: 11,
                      text: "yee ",
                      containsOnlyTriviaWhiteSpaces: false,
                    },
                  ],
                  closingElement: {
                    kind: 284,
                    tagName: {
                      kind: 79,
                      escapedText: "span",
                    },
                  },
                },
                {
                  kind: 11,
                  text: "\n      ",
                  containsOnlyTriviaWhiteSpaces: true,
                },
                {
                  kind: 282,
                  tagName: {
                    kind: 79,
                    escapedText: "Under",
                  },
                  attributes: {
                    kind: 289,
                    properties: [
                      {
                        kind: 288,
                        name: {
                          kind: 79,
                          escapedText: "aNumericInput",
                        },
                        initializer: {
                          kind: 291,
                          expression: {
                            kind: 8,
                            text: "5",
                            numericLiteralFlags: 0,
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 11,
                  text: "\n      ",
                  containsOnlyTriviaWhiteSpaces: true,
                },
                {
                  kind: 281,
                  openingElement: {
                    kind: 283,
                    tagName: {
                      kind: 79,
                      escapedText: "button",
                    },
                    attributes: {
                      kind: 289,
                      properties: [
                        {
                          kind: 288,
                          name: {
                            kind: 79,
                            originalKeywordKind: 154,
                            escapedText: "type",
                          },
                          initializer: {
                            kind: 10,
                            text: "button",
                            hasExtendedUnicodeEscape: false,
                          },
                        },
                        {
                          kind: 288,
                          name: {
                            kind: 79,
                            escapedText: "onClick",
                          },
                          initializer: {
                            kind: 291,
                            expression: {
                              kind: 79,
                              escapedText: "pressed",
                            },
                          },
                        },
                        {
                          kind: 288,
                          name: {
                            kind: 79,
                            escapedText: "onKeyDown",
                          },
                          initializer: {
                            kind: 291,
                            expression: {
                              kind: 79,
                              escapedText: "pressed",
                            },
                          },
                        },
                      ],
                    },
                  },
                  children: [
                    {
                      kind: 11,
                      text: "\n        z is ",
                      containsOnlyTriviaWhiteSpaces: false,
                    },
                    {
                      kind: 291,
                      expression: {
                        kind: 79,
                        escapedText: "z",
                      },
                    },
                    {
                      kind: 11,
                      text: "\n      ",
                      containsOnlyTriviaWhiteSpaces: true,
                    },
                  ],
                  closingElement: {
                    kind: 284,
                    tagName: {
                      kind: 79,
                      escapedText: "button",
                    },
                  },
                },
                {
                  kind: 11,
                  text: "\n      ",
                  containsOnlyTriviaWhiteSpaces: true,
                },
                {
                  kind: 282,
                  tagName: {
                    kind: 79,
                    escapedText: "Looper",
                  },
                  attributes: {
                    kind: 289,
                    properties: [],
                  },
                },
                {
                  kind: 11,
                  text: "\n      ",
                  containsOnlyTriviaWhiteSpaces: true,
                },
                {
                  kind: 282,
                  tagName: {
                    kind: 79,
                    escapedText: "BigForm",
                  },
                  attributes: {
                    kind: 289,
                    properties: [],
                  },
                },
                {
                  kind: 11,
                  text: "\n      ",
                  containsOnlyTriviaWhiteSpaces: true,
                },
                {
                  kind: 281,
                  openingElement: {
                    kind: 283,
                    tagName: {
                      kind: 79,
                      escapedText: "div",
                    },
                    attributes: {
                      kind: 289,
                      properties: [],
                    },
                  },
                  children: [
                    {
                      kind: 291,
                      expression: {
                        kind: 208,
                        expression: {
                          kind: 79,
                          escapedText: "props",
                        },
                        name: {
                          kind: 79,
                          escapedText: "children",
                        },
                      },
                    },
                  ],
                  closingElement: {
                    kind: 284,
                    tagName: {
                      kind: 79,
                      escapedText: "div",
                    },
                  },
                },
                {
                  kind: 11,
                  text: "\n    ",
                  containsOnlyTriviaWhiteSpaces: true,
                },
              ],
              closingElement: {
                kind: 284,
                tagName: {
                  kind: 79,
                  escapedText: "div",
                },
              },
            },
          },
        },
      ],
      multiLine: true,
    },
  },
  {
    kind: 241,
    expression: {
      kind: 210,
      expression: {
        kind: 79,
        escapedText: "renderJsx",
      },
      arguments: [
        {
          kind: 10,
          text: "app-start",
          hasExtendedUnicodeEscape: false,
        },
        {
          kind: 281,
          openingElement: {
            kind: 283,
            tagName: {
              kind: 79,
              escapedText: "AppStart",
            },
            attributes: {
              kind: 289,
              properties: [
                {
                  kind: 288,
                  name: {
                    kind: 79,
                    escapedText: "seed",
                  },
                  initializer: {
                    kind: 291,
                    expression: {
                      kind: 10,
                      text: "seed value",
                      hasExtendedUnicodeEscape: false,
                    },
                  },
                },
              ],
            },
          },
          children: [
            {
              kind: 11,
              text: "\n    ",
              containsOnlyTriviaWhiteSpaces: true,
            },
            {
              kind: 281,
              openingElement: {
                kind: 283,
                tagName: {
                  kind: 79,
                  escapedText: "div",
                },
                attributes: {
                  kind: 289,
                  properties: [],
                },
              },
              children: [
                {
                  kind: 11,
                  text: "\n      inner",
                  containsOnlyTriviaWhiteSpaces: false,
                },
                {
                  kind: 281,
                  openingElement: {
                    kind: 283,
                    tagName: {
                      kind: 79,
                      escapedText: "div",
                    },
                    attributes: {
                      kind: 289,
                      properties: [],
                    },
                  },
                  children: [
                    {
                      kind: 11,
                      text: "asdfdsf",
                      containsOnlyTriviaWhiteSpaces: false,
                    },
                  ],
                  closingElement: {
                    kind: 284,
                    tagName: {
                      kind: 79,
                      escapedText: "div",
                    },
                  },
                },
                {
                  kind: 11,
                  text: "l;kj?\n    ",
                  containsOnlyTriviaWhiteSpaces: false,
                },
              ],
              closingElement: {
                kind: 284,
                tagName: {
                  kind: 79,
                  escapedText: "div",
                },
              },
            },
            {
              kind: 11,
              text: "\n  ",
              containsOnlyTriviaWhiteSpaces: true,
            },
          ],
          closingElement: {
            kind: 284,
            tagName: {
              kind: 79,
              escapedText: "AppStart",
            },
          },
        },
      ],
    },
  },
];
