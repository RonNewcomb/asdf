import AppStart from "../components/app-start.js";

describe("AppStart", () => {
  it("uses custom text for the button label", () => {
    cy.mount(<AppStart>Click me!</AppStart>);
    cy.get("button").should("contains.text", "Click me!");
  });
});

/*
[
   {
      "pos": 171,
      "end": 761,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 4457603,
      "kind": 259,
      "name": {
         "pos": 196,
         "end": 205,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 0,
         "kind": 79,
         "escapedText": "AppStart"
      },
      "modifiers": [
         {
            "pos": 171,
            "end": 179,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 93
         },
         {
            "pos": 179,
            "end": 187,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 88
         }
      ],
      "parameters": [
         {
            "pos": 206,
            "end": 245,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 166,
            "name": {
               "pos": 206,
               "end": 211,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "props"
            },
            "type": {
               "pos": 212,
               "end": 245,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 184,
               "members": [
                  {
                     "pos": 214,
                     "end": 228,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 168,
                     "name": {
                        "pos": 214,
                        "end": 219,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "seed"
                     },
                     "type": {
                        "pos": 220,
                        "end": 227,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1,
                        "kind": 152
                     }
                  },
                  {
                     "pos": 228,
                     "end": 243,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 168,
                     "name": {
                        "pos": 228,
                        "end": 237,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "children"
                     },
                     "type": {
                        "pos": 239,
                        "end": 243,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1,
                        "kind": 131
                     },
                     "questionToken": {
                        "pos": 237,
                        "end": 238,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 57
                     }
                  }
               ]
            }
         },
         {
            "pos": 246,
            "end": 277,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 166,
            "name": {
               "pos": 246,
               "end": 252,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "state"
            },
            "type": {
               "pos": 253,
               "end": 277,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 190,
               "types": [
                  {
                     "pos": 253,
                     "end": 260,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 180,
                     "typeName": {
                        "pos": 253,
                        "end": 260,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "IState"
                     }
                  },
                  {
                     "pos": 262,
                     "end": 277,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 184,
                     "members": [
                        {
                           "pos": 264,
                           "end": 275,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1,
                           "kind": 168,
                           "name": {
                              "pos": 264,
                              "end": 267,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "originalKeywordKind": 128,
                              "escapedText": "as"
                           },
                           "type": {
                              "pos": 268,
                              "end": 275,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 1,
                              "kind": 152
                           }
                        }
                     ]
                  }
               ]
            }
         }
      ],
      "body": {
         "pos": 278,
         "end": 761,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 4457602,
         "kind": 238,
         "statements": [
            {
               "pos": 280,
               "end": 321,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 241,
               "expression": {
                  "pos": 280,
                  "end": 320,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 210,
                  "expression": {
                     "pos": 280,
                     "end": 294,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 208,
                     "expression": {
                        "pos": 280,
                        "end": 290,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "console"
                     },
                     "name": {
                        "pos": 291,
                        "end": 294,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "log"
                     }
                  },
                  "arguments": [
                     {
                        "pos": 295,
                        "end": 312,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 10,
                        "text": "app-start state",
                        "hasExtendedUnicodeEscape": false
                     },
                     {
                        "pos": 313,
                        "end": 319,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "state"
                     }
                  ]
               }
            },
            {
               "pos": 321,
               "end": 363,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 241,
               "expression": {
                  "pos": 321,
                  "end": 362,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 210,
                  "expression": {
                     "pos": 321,
                     "end": 335,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 208,
                     "expression": {
                        "pos": 321,
                        "end": 331,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "console"
                     },
                     "name": {
                        "pos": 332,
                        "end": 335,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "log"
                     }
                  },
                  "arguments": [
                     {
                        "pos": 336,
                        "end": 354,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 10,
                        "text": "app-start props ",
                        "hasExtendedUnicodeEscape": false
                     },
                     {
                        "pos": 355,
                        "end": 361,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "props"
                     }
                  ]
               }
            },
            {
               "pos": 363,
               "end": 398,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 241,
               "expression": {
                  "pos": 363,
                  "end": 397,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 223,
                  "left": {
                     "pos": 363,
                     "end": 374,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 208,
                     "expression": {
                        "pos": 363,
                        "end": 371,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "state"
                     },
                     "name": {
                        "pos": 372,
                        "end": 374,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "originalKeywordKind": 128,
                        "escapedText": "as"
                     }
                  },
                  "operatorToken": {
                     "pos": 374,
                     "end": 376,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 63
                  },
                  "right": {
                     "pos": 376,
                     "end": 397,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 10,
                     "text": "appstart.state.as!",
                     "hasExtendedUnicodeEscape": false
                  }
               }
            },
            {
               "pos": 398,
               "end": 438,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 398,
                  "end": 437,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981760,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 406,
                        "end": 437,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525312,
                        "kind": 257,
                        "name": {
                           "pos": 406,
                           "end": 416,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 408,
                                 "end": 409,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 408,
                                    "end": 409,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "z"
                                 }
                              },
                              {
                                 "pos": 410,
                                 "end": 415,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 410,
                                    "end": 415,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "setZ"
                                 }
                              }
                           ]
                        },
                        "initializer": {
                           "pos": 418,
                           "end": 437,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 418,
                              "end": 433,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 208,
                              "expression": {
                                 "pos": 418,
                                 "end": 424,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "state"
                              },
                              "name": {
                                 "pos": 425,
                                 "end": 433,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "useState"
                              }
                           },
                           "arguments": [
                              {
                                 "pos": 434,
                                 "end": 436,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 8,
                                 "text": "65",
                                 "numericLiteralFlags": 0
                              }
                           ]
                        }
                     }
                  ]
               }
            },
            {
               "pos": 438,
               "end": 476,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 438,
                  "end": 475,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4457472,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 447,
                        "end": 475,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1024,
                        "kind": 257,
                        "name": {
                           "pos": 447,
                           "end": 455,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "pressed"
                        },
                        "initializer": {
                           "pos": 457,
                           "end": 475,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1024,
                           "kind": 216,
                           "parameters": [],
                           "body": {
                              "pos": 463,
                              "end": 475,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 210,
                              "expression": {
                                 "pos": 463,
                                 "end": 468,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "setZ"
                              },
                              "arguments": [
                                 {
                                    "pos": 469,
                                    "end": 474,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 223,
                                    "left": {
                                       "pos": 469,
                                       "end": 470,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "z"
                                    },
                                    "operatorToken": {
                                       "pos": 470,
                                       "end": 472,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 39
                                    },
                                    "right": {
                                       "pos": 472,
                                       "end": 474,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 8,
                                       "text": "5",
                                       "numericLiteralFlags": 0
                                    }
                                 }
                              ]
                           },
                           "equalsGreaterThanToken": {
                              "pos": 460,
                              "end": 463,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 38
                           }
                        }
                     }
                  ]
               }
            },
            {
               "pos": 476,
               "end": 759,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4194434,
               "kind": 250,
               "expression": {
                  "pos": 486,
                  "end": 758,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 2,
                  "kind": 214,
                  "expression": {
                     "pos": 488,
                     "end": 754,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 281,
                     "openingElement": {
                        "pos": 488,
                        "end": 516,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 283,
                        "tagName": {
                           "pos": 494,
                           "end": 497,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        },
                        "attributes": {
                           "pos": 497,
                           "end": 515,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 289,
                           "properties": [
                              {
                                 "pos": 497,
                                 "end": 515,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 288,
                                 "name": {
                                    "pos": 497,
                                    "end": 503,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "originalKeywordKind": 84,
                                    "escapedText": "class"
                                 },
                                 "initializer": {
                                    "pos": 504,
                                    "end": 515,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 10,
                                    "text": "app-start",
                                    "hasExtendedUnicodeEscape": false
                                 }
                              }
                           ]
                        }
                     },
                     "children": [
                        {
                           "pos": 516,
                           "end": 523,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 523,
                           "end": 540,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 523,
                              "end": 529,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 524,
                                 "end": 528,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "span"
                              },
                              "attributes": {
                                 "pos": 528,
                                 "end": 528,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 529,
                                 "end": 533,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "yee ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              }
                           ],
                           "closingElement": {
                              "pos": 533,
                              "end": 540,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 535,
                                 "end": 539,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "span"
                              }
                           }
                        },
                        {
                           "pos": 540,
                           "end": 547,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 547,
                           "end": 574,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 282,
                           "tagName": {
                              "pos": 548,
                              "end": 553,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "Under"
                           },
                           "attributes": {
                              "pos": 553,
                              "end": 571,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 289,
                              "properties": [
                                 {
                                    "pos": 553,
                                    "end": 571,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 2,
                                    "kind": 288,
                                    "name": {
                                       "pos": 553,
                                       "end": 567,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "aNumericInput"
                                    },
                                    "initializer": {
                                       "pos": 568,
                                       "end": 571,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 291,
                                       "expression": {
                                          "pos": 569,
                                          "end": 570,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 8,
                                          "text": "5",
                                          "numericLiteralFlags": 0
                                       }
                                    }
                                 }
                              ]
                           }
                        },
                        {
                           "pos": 574,
                           "end": 581,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 581,
                           "end": 674,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 581,
                              "end": 641,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 582,
                                 "end": 588,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "button"
                              },
                              "attributes": {
                                 "pos": 588,
                                 "end": 640,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": [
                                    {
                                       "pos": 588,
                                       "end": 602,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 288,
                                       "name": {
                                          "pos": 588,
                                          "end": 593,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "originalKeywordKind": 154,
                                          "escapedText": "type"
                                       },
                                       "initializer": {
                                          "pos": 594,
                                          "end": 602,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 10,
                                          "text": "button",
                                          "hasExtendedUnicodeEscape": false
                                       }
                                    },
                                    {
                                       "pos": 602,
                                       "end": 620,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 288,
                                       "name": {
                                          "pos": 602,
                                          "end": 610,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "onClick"
                                       },
                                       "initializer": {
                                          "pos": 611,
                                          "end": 620,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 291,
                                          "expression": {
                                             "pos": 612,
                                             "end": 619,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "pressed"
                                          }
                                       }
                                    },
                                    {
                                       "pos": 620,
                                       "end": 640,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 288,
                                       "name": {
                                          "pos": 620,
                                          "end": 630,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "onKeyDown"
                                       },
                                       "initializer": {
                                          "pos": 631,
                                          "end": 640,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 291,
                                          "expression": {
                                             "pos": 632,
                                             "end": 639,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "pressed"
                                          }
                                       }
                                    }
                                 ]
                              }
                           },
                           "children": [
                              {
                                 "pos": 641,
                                 "end": 655,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n        z is ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 655,
                                 "end": 658,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 656,
                                    "end": 657,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "z"
                                 }
                              },
                              {
                                 "pos": 658,
                                 "end": 665,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n      ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              }
                           ],
                           "closingElement": {
                              "pos": 665,
                              "end": 674,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 667,
                                 "end": 673,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "button"
                              }
                           }
                        },
                        {
                           "pos": 674,
                           "end": 681,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 681,
                           "end": 691,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 282,
                           "tagName": {
                              "pos": 682,
                              "end": 688,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "Looper"
                           },
                           "attributes": {
                              "pos": 688,
                              "end": 688,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 289,
                              "properties": []
                           }
                        },
                        {
                           "pos": 691,
                           "end": 698,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 698,
                           "end": 709,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 282,
                           "tagName": {
                              "pos": 699,
                              "end": 706,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "BigForm"
                           },
                           "attributes": {
                              "pos": 706,
                              "end": 706,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 289,
                              "properties": []
                           }
                        },
                        {
                           "pos": 709,
                           "end": 716,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 716,
                           "end": 743,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 716,
                              "end": 721,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 717,
                                 "end": 720,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 720,
                                 "end": 720,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 721,
                                 "end": 737,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 722,
                                    "end": 736,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 208,
                                    "expression": {
                                       "pos": 722,
                                       "end": 727,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "props"
                                    },
                                    "name": {
                                       "pos": 728,
                                       "end": 736,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "children"
                                    }
                                 }
                              }
                           ],
                           "closingElement": {
                              "pos": 737,
                              "end": 743,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 739,
                                 "end": 742,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 743,
                           "end": 748,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "pos": 748,
                        "end": 754,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 750,
                           "end": 753,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        }
                     }
                  }
               }
            }
         ],
         "multiLine": true
      }
   },
   {
      "pos": 761,
      "end": 955,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 2,
      "kind": 241,
      "expression": {
         "pos": 761,
         "end": 954,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 2,
         "kind": 210,
         "expression": {
            "pos": 761,
            "end": 833,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 79,
            "escapedText": "renderJsx"
         },
         "arguments": [
            {
               "pos": 834,
               "end": 848,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 10,
               "text": "app-start",
               "hasExtendedUnicodeEscape": false
            },
            {
               "pos": 849,
               "end": 952,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 2,
               "kind": 281,
               "openingElement": {
                  "pos": 849,
                  "end": 882,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 2,
                  "kind": 283,
                  "tagName": {
                     "pos": 853,
                     "end": 861,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 79,
                     "escapedText": "AppStart"
                  },
                  "attributes": {
                     "pos": 861,
                     "end": 881,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 289,
                     "properties": [
                        {
                           "pos": 861,
                           "end": 881,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 288,
                           "name": {
                              "pos": 861,
                              "end": 866,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "seed"
                           },
                           "initializer": {
                              "pos": 867,
                              "end": 881,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 291,
                              "expression": {
                                 "pos": 868,
                                 "end": 880,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 10,
                                 "text": "seed value",
                                 "hasExtendedUnicodeEscape": false
                              }
                           }
                        }
                     ]
                  }
               },
               "children": [
                  {
                     "pos": 882,
                     "end": 887,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 11,
                     "text": "\n    ",
                     "containsOnlyTriviaWhiteSpaces": true
                  },
                  {
                     "pos": 887,
                     "end": 938,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 281,
                     "openingElement": {
                        "pos": 887,
                        "end": 892,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 283,
                        "tagName": {
                           "pos": 888,
                           "end": 891,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        },
                        "attributes": {
                           "pos": 891,
                           "end": 891,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 289,
                           "properties": []
                        }
                     },
                     "children": [
                        {
                           "pos": 892,
                           "end": 904,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      inner",
                           "containsOnlyTriviaWhiteSpaces": false
                        },
                        {
                           "pos": 904,
                           "end": 922,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 904,
                              "end": 909,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 905,
                                 "end": 908,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 908,
                                 "end": 908,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 909,
                                 "end": 916,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "asdfdsf",
                                 "containsOnlyTriviaWhiteSpaces": false
                              }
                           ],
                           "closingElement": {
                              "pos": 916,
                              "end": 922,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 918,
                                 "end": 921,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 922,
                           "end": 932,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "l;kj?\n    ",
                           "containsOnlyTriviaWhiteSpaces": false
                        }
                     ],
                     "closingElement": {
                        "pos": 932,
                        "end": 938,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 934,
                           "end": 937,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        }
                     }
                  },
                  {
                     "pos": 938,
                     "end": 941,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 11,
                     "text": "\n  ",
                     "containsOnlyTriviaWhiteSpaces": true
                  }
               ],
               "closingElement": {
                  "pos": 941,
                  "end": 952,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 2,
                  "kind": 284,
                  "tagName": {
                     "pos": 943,
                     "end": 951,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 79,
                     "escapedText": "AppStart"
                  }
               }
            }
         ]
      }
   }
]
*/
