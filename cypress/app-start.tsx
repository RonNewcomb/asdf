
import AppStart from '../components/app-start.js'



describe('AppStart', () => {

    
    it('uses custom text for the button label', () => {
        cy.mount(<AppStart>Click me!</AppStart>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});


/*
[
   {
      "pos": 174,
      "end": 786,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 4457603,
      "kind": 259,
      "name": {
         "pos": 201,
         "end": 210,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 0,
         "kind": 79,
         "escapedText": "AppStart"
      },
      "modifiers": [
         {
            "pos": 174,
            "end": 184,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 93
         },
         {
            "pos": 184,
            "end": 192,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 88
         }
      ],
      "parameters": [
         {
            "pos": 211,
            "end": 250,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 166,
            "name": {
               "pos": 211,
               "end": 216,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "props"
            },
            "type": {
               "pos": 217,
               "end": 250,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 184,
               "members": [
                  {
                     "pos": 219,
                     "end": 233,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 168,
                     "name": {
                        "pos": 219,
                        "end": 224,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "seed"
                     },
                     "type": {
                        "pos": 225,
                        "end": 232,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1,
                        "kind": 152
                     }
                  },
                  {
                     "pos": 233,
                     "end": 248,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 168,
                     "name": {
                        "pos": 233,
                        "end": 242,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "children"
                     },
                     "type": {
                        "pos": 244,
                        "end": 248,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1,
                        "kind": 131
                     },
                     "questionToken": {
                        "pos": 242,
                        "end": 243,
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
            "pos": 251,
            "end": 282,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 166,
            "name": {
               "pos": 251,
               "end": 257,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "state"
            },
            "type": {
               "pos": 258,
               "end": 282,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 190,
               "types": [
                  {
                     "pos": 258,
                     "end": 265,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 180,
                     "typeName": {
                        "pos": 258,
                        "end": 265,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "IState"
                     }
                  },
                  {
                     "pos": 267,
                     "end": 282,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 184,
                     "members": [
                        {
                           "pos": 269,
                           "end": 280,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1,
                           "kind": 168,
                           "name": {
                              "pos": 269,
                              "end": 272,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "originalKeywordKind": 128,
                              "escapedText": "as"
                           },
                           "type": {
                              "pos": 273,
                              "end": 280,
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
         "pos": 283,
         "end": 786,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 4457602,
         "kind": 238,
         "statements": [
            {
               "pos": 285,
               "end": 327,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 241,
               "expression": {
                  "pos": 285,
                  "end": 326,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 210,
                  "expression": {
                     "pos": 285,
                     "end": 300,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 208,
                     "expression": {
                        "pos": 285,
                        "end": 296,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "console"
                     },
                     "name": {
                        "pos": 297,
                        "end": 300,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "log"
                     }
                  },
                  "arguments": [
                     {
                        "pos": 301,
                        "end": 318,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 10,
                        "text": "app-start state",
                        "hasExtendedUnicodeEscape": false
                     },
                     {
                        "pos": 319,
                        "end": 325,
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
               "pos": 327,
               "end": 370,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 241,
               "expression": {
                  "pos": 327,
                  "end": 369,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 210,
                  "expression": {
                     "pos": 327,
                     "end": 342,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 208,
                     "expression": {
                        "pos": 327,
                        "end": 338,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "console"
                     },
                     "name": {
                        "pos": 339,
                        "end": 342,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "log"
                     }
                  },
                  "arguments": [
                     {
                        "pos": 343,
                        "end": 361,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 10,
                        "text": "app-start props ",
                        "hasExtendedUnicodeEscape": false
                     },
                     {
                        "pos": 362,
                        "end": 368,
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
               "pos": 370,
               "end": 406,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 241,
               "expression": {
                  "pos": 370,
                  "end": 405,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 223,
                  "left": {
                     "pos": 370,
                     "end": 382,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 208,
                     "expression": {
                        "pos": 370,
                        "end": 379,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "state"
                     },
                     "name": {
                        "pos": 380,
                        "end": 382,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "originalKeywordKind": 128,
                        "escapedText": "as"
                     }
                  },
                  "operatorToken": {
                     "pos": 382,
                     "end": 384,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 63
                  },
                  "right": {
                     "pos": 384,
                     "end": 405,
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
               "pos": 406,
               "end": 447,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 406,
                  "end": 446,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981760,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 415,
                        "end": 446,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525312,
                        "kind": 257,
                        "name": {
                           "pos": 415,
                           "end": 425,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 417,
                                 "end": 418,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 417,
                                    "end": 418,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "z"
                                 }
                              },
                              {
                                 "pos": 419,
                                 "end": 424,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 419,
                                    "end": 424,
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
                           "pos": 427,
                           "end": 446,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 427,
                              "end": 442,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 208,
                              "expression": {
                                 "pos": 427,
                                 "end": 433,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "state"
                              },
                              "name": {
                                 "pos": 434,
                                 "end": 442,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "useState"
                              }
                           },
                           "arguments": [
                              {
                                 "pos": 443,
                                 "end": 445,
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
               "pos": 447,
               "end": 487,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 447,
                  "end": 486,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4457472,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 458,
                        "end": 486,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1024,
                        "kind": 257,
                        "name": {
                           "pos": 458,
                           "end": 466,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "pressed"
                        },
                        "initializer": {
                           "pos": 468,
                           "end": 486,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1024,
                           "kind": 216,
                           "parameters": [],
                           "body": {
                              "pos": 474,
                              "end": 486,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 210,
                              "expression": {
                                 "pos": 474,
                                 "end": 479,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "setZ"
                              },
                              "arguments": [
                                 {
                                    "pos": 480,
                                    "end": 485,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 223,
                                    "left": {
                                       "pos": 480,
                                       "end": 481,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "z"
                                    },
                                    "operatorToken": {
                                       "pos": 481,
                                       "end": 483,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 39
                                    },
                                    "right": {
                                       "pos": 483,
                                       "end": 485,
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
                              "pos": 471,
                              "end": 474,
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
               "pos": 487,
               "end": 783,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4194434,
               "kind": 250,
               "expression": {
                  "pos": 499,
                  "end": 782,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 2,
                  "kind": 214,
                  "expression": {
                     "pos": 501,
                     "end": 777,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 281,
                     "openingElement": {
                        "pos": 501,
                        "end": 530,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 283,
                        "tagName": {
                           "pos": 508,
                           "end": 511,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        },
                        "attributes": {
                           "pos": 511,
                           "end": 529,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 289,
                           "properties": [
                              {
                                 "pos": 511,
                                 "end": 529,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 288,
                                 "name": {
                                    "pos": 511,
                                    "end": 517,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "originalKeywordKind": 84,
                                    "escapedText": "class"
                                 },
                                 "initializer": {
                                    "pos": 518,
                                    "end": 529,
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
                           "pos": 530,
                           "end": 538,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 538,
                           "end": 555,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 538,
                              "end": 544,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 539,
                                 "end": 543,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "span"
                              },
                              "attributes": {
                                 "pos": 543,
                                 "end": 543,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 544,
                                 "end": 548,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "yee ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              }
                           ],
                           "closingElement": {
                              "pos": 548,
                              "end": 555,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 550,
                                 "end": 554,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "span"
                              }
                           }
                        },
                        {
                           "pos": 555,
                           "end": 563,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 563,
                           "end": 590,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 282,
                           "tagName": {
                              "pos": 564,
                              "end": 569,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "Under"
                           },
                           "attributes": {
                              "pos": 569,
                              "end": 587,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 289,
                              "properties": [
                                 {
                                    "pos": 569,
                                    "end": 587,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 2,
                                    "kind": 288,
                                    "name": {
                                       "pos": 569,
                                       "end": 583,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "aNumericInput"
                                    },
                                    "initializer": {
                                       "pos": 584,
                                       "end": 587,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 291,
                                       "expression": {
                                          "pos": 585,
                                          "end": 586,
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
                           "pos": 590,
                           "end": 598,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 598,
                           "end": 693,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 598,
                              "end": 658,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 599,
                                 "end": 605,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "button"
                              },
                              "attributes": {
                                 "pos": 605,
                                 "end": 657,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": [
                                    {
                                       "pos": 605,
                                       "end": 619,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 288,
                                       "name": {
                                          "pos": 605,
                                          "end": 610,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "originalKeywordKind": 154,
                                          "escapedText": "type"
                                       },
                                       "initializer": {
                                          "pos": 611,
                                          "end": 619,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 10,
                                          "text": "button",
                                          "hasExtendedUnicodeEscape": false
                                       }
                                    },
                                    {
                                       "pos": 619,
                                       "end": 637,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 288,
                                       "name": {
                                          "pos": 619,
                                          "end": 627,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "onClick"
                                       },
                                       "initializer": {
                                          "pos": 628,
                                          "end": 637,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 291,
                                          "expression": {
                                             "pos": 629,
                                             "end": 636,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "pressed"
                                          }
                                       }
                                    },
                                    {
                                       "pos": 637,
                                       "end": 657,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 288,
                                       "name": {
                                          "pos": 637,
                                          "end": 647,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "onKeyDown"
                                       },
                                       "initializer": {
                                          "pos": 648,
                                          "end": 657,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 291,
                                          "expression": {
                                             "pos": 649,
                                             "end": 656,
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
                                 "pos": 658,
                                 "end": 673,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\r\n        z is ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 673,
                                 "end": 676,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 674,
                                    "end": 675,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "z"
                                 }
                              },
                              {
                                 "pos": 676,
                                 "end": 684,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\r\n      ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              }
                           ],
                           "closingElement": {
                              "pos": 684,
                              "end": 693,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 686,
                                 "end": 692,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "button"
                              }
                           }
                        },
                        {
                           "pos": 693,
                           "end": 701,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 701,
                           "end": 711,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 282,
                           "tagName": {
                              "pos": 702,
                              "end": 708,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "Looper"
                           },
                           "attributes": {
                              "pos": 708,
                              "end": 708,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 289,
                              "properties": []
                           }
                        },
                        {
                           "pos": 711,
                           "end": 719,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 719,
                           "end": 730,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 282,
                           "tagName": {
                              "pos": 720,
                              "end": 727,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "BigForm"
                           },
                           "attributes": {
                              "pos": 727,
                              "end": 727,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 289,
                              "properties": []
                           }
                        },
                        {
                           "pos": 730,
                           "end": 738,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 738,
                           "end": 765,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 738,
                              "end": 743,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 739,
                                 "end": 742,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 742,
                                 "end": 742,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 743,
                                 "end": 759,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 744,
                                    "end": 758,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 208,
                                    "expression": {
                                       "pos": 744,
                                       "end": 749,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "props"
                                    },
                                    "name": {
                                       "pos": 750,
                                       "end": 758,
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
                              "pos": 759,
                              "end": 765,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 761,
                                 "end": 764,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 765,
                           "end": 771,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "pos": 771,
                        "end": 777,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 773,
                           "end": 776,
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
      "pos": 786,
      "end": 990,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 2,
      "kind": 241,
      "expression": {
         "pos": 786,
         "end": 989,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 2,
         "kind": 210,
         "expression": {
            "pos": 786,
            "end": 861,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 79,
            "escapedText": "renderJsx"
         },
         "arguments": [
            {
               "pos": 862,
               "end": 877,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 10,
               "text": "app-start",
               "hasExtendedUnicodeEscape": false
            },
            {
               "pos": 878,
               "end": 986,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 2,
               "kind": 281,
               "openingElement": {
                  "pos": 878,
                  "end": 912,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 2,
                  "kind": 283,
                  "tagName": {
                     "pos": 883,
                     "end": 891,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 79,
                     "escapedText": "AppStart"
                  },
                  "attributes": {
                     "pos": 891,
                     "end": 911,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 289,
                     "properties": [
                        {
                           "pos": 891,
                           "end": 911,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 288,
                           "name": {
                              "pos": 891,
                              "end": 896,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "seed"
                           },
                           "initializer": {
                              "pos": 897,
                              "end": 911,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 291,
                              "expression": {
                                 "pos": 898,
                                 "end": 910,
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
                     "pos": 912,
                     "end": 918,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 11,
                     "text": "\r\n    ",
                     "containsOnlyTriviaWhiteSpaces": true
                  },
                  {
                     "pos": 918,
                     "end": 971,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 281,
                     "openingElement": {
                        "pos": 918,
                        "end": 923,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 283,
                        "tagName": {
                           "pos": 919,
                           "end": 922,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        },
                        "attributes": {
                           "pos": 922,
                           "end": 922,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 289,
                           "properties": []
                        }
                     },
                     "children": [
                        {
                           "pos": 923,
                           "end": 936,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      inner",
                           "containsOnlyTriviaWhiteSpaces": false
                        },
                        {
                           "pos": 936,
                           "end": 954,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 936,
                              "end": 941,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 937,
                                 "end": 940,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 940,
                                 "end": 940,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 941,
                                 "end": 948,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "asdfdsf",
                                 "containsOnlyTriviaWhiteSpaces": false
                              }
                           ],
                           "closingElement": {
                              "pos": 948,
                              "end": 954,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 950,
                                 "end": 953,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 954,
                           "end": 965,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "l;kj?\r\n    ",
                           "containsOnlyTriviaWhiteSpaces": false
                        }
                     ],
                     "closingElement": {
                        "pos": 965,
                        "end": 971,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 967,
                           "end": 970,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        }
                     }
                  },
                  {
                     "pos": 971,
                     "end": 975,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 11,
                     "text": "\r\n  ",
                     "containsOnlyTriviaWhiteSpaces": true
                  }
               ],
               "closingElement": {
                  "pos": 975,
                  "end": 986,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 2,
                  "kind": 284,
                  "tagName": {
                     "pos": 977,
                     "end": 985,
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

