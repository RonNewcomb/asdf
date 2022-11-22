
import FANCIFY from '../components/fancify.js'



describe('FANCIFY', () => {

    
    it('renders', () => {
        cy.mount(<FANCIFY undefined={x={"anythings!"} children={"anythings!"}} undefined={({ /* IState */ })}>Click me!</FANCIFY>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});


/*
[
   {
      "pos": 57,
      "end": 478,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 4981891,
      "kind": 259,
      "modifiers": [
         {
            "pos": 57,
            "end": 65,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 93
         },
         {
            "pos": 65,
            "end": 73,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 88
         }
      ],
      "parameters": [
         {
            "pos": 84,
            "end": 127,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 84,
               "end": 99,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 85,
                     "end": 87,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 85,
                        "end": 87,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "x"
                     }
                  },
                  {
                     "pos": 88,
                     "end": 97,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 88,
                        "end": 97,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "children"
                     }
                  }
               ]
            },
            "type": {
               "pos": 100,
               "end": 127,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 184,
               "members": [
                  {
                     "pos": 102,
                     "end": 110,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 168,
                     "name": {
                        "pos": 102,
                        "end": 104,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "x"
                     },
                     "type": {
                        "pos": 105,
                        "end": 109,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1,
                        "kind": 131
                     }
                  },
                  {
                     "pos": 110,
                     "end": 125,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 168,
                     "name": {
                        "pos": 110,
                        "end": 119,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "children"
                     },
                     "type": {
                        "pos": 121,
                        "end": 125,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1,
                        "kind": 131
                     },
                     "questionToken": {
                        "pos": 119,
                        "end": 120,
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
            "pos": 128,
            "end": 149,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 128,
               "end": 141,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 130,
                     "end": 139,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 130,
                        "end": 139,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "useState"
                     }
                  }
               ]
            },
            "type": {
               "pos": 142,
               "end": 149,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 180,
               "typeName": {
                  "pos": 142,
                  "end": 149,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 79,
                  "escapedText": "IState"
               }
            }
         }
      ],
      "body": {
         "pos": 150,
         "end": 478,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 4457602,
         "kind": 238,
         "statements": [
            {
               "pos": 152,
               "end": 191,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 152,
                  "end": 190,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981760,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 160,
                        "end": 190,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525312,
                        "kind": 257,
                        "name": {
                           "pos": 160,
                           "end": 170,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 162,
                                 "end": 163,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 162,
                                    "end": 163,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "f"
                                 }
                              },
                              {
                                 "pos": 164,
                                 "end": 169,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 164,
                                    "end": 169,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "setf"
                                 }
                              }
                           ]
                        },
                        "initializer": {
                           "pos": 172,
                           "end": 190,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 172,
                              "end": 181,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "arguments": [
                              {
                                 "pos": 182,
                                 "end": 189,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 10,
                                 "text": "large",
                                 "hasExtendedUnicodeEscape": false
                              }
                           ]
                        }
                     }
                  ]
               }
            },
            {
               "pos": 191,
               "end": 309,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4194434,
               "kind": 242,
               "expression": {
                  "pos": 199,
                  "end": 208,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 221,
                  "operator": 53,
                  "operand": {
                     "pos": 200,
                     "end": 208,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 79,
                     "escapedText": "children"
                  }
               },
               "thenStatement": {
                  "pos": 209,
                  "end": 283,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4194434,
                  "kind": 238,
                  "statements": [
                     {
                        "pos": 211,
                        "end": 255,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 241,
                        "expression": {
                           "pos": 211,
                           "end": 254,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 211,
                              "end": 228,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 208,
                              "expression": {
                                 "pos": 211,
                                 "end": 223,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "console"
                              },
                              "name": {
                                 "pos": 224,
                                 "end": 228,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "warn"
                              }
                           },
                           "arguments": [
                              {
                                 "pos": 229,
                                 "end": 253,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 10,
                                 "text": "Fancify needs children",
                                 "hasExtendedUnicodeEscape": false
                              }
                           ]
                        }
                     },
                     {
                        "pos": 255,
                        "end": 279,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 4194434,
                        "kind": 250,
                        "expression": {
                           "pos": 266,
                           "end": 278,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 266,
                              "end": 272,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 268,
                                 "end": 271,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 271,
                                 "end": 271,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [],
                           "closingElement": {
                              "pos": 272,
                              "end": 278,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 274,
                                 "end": 277,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        }
                     }
                  ],
                  "multiLine": true
               },
               "elseStatement": {
                  "pos": 288,
                  "end": 309,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 241,
                  "expression": {
                     "pos": 288,
                     "end": 308,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 210,
                     "expression": {
                        "pos": 288,
                        "end": 300,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 208,
                        "expression": {
                           "pos": 288,
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
                           "end": 307,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 10,
                           "text": "good",
                           "hasExtendedUnicodeEscape": false
                        }
                     ]
                  }
               }
            },
            {
               "pos": 309,
               "end": 374,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 309,
                  "end": 373,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4457472,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 318,
                        "end": 373,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1024,
                        "kind": 257,
                        "name": {
                           "pos": 318,
                           "end": 325,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "toggle"
                        },
                        "initializer": {
                           "pos": 327,
                           "end": 373,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1024,
                           "kind": 216,
                           "parameters": [],
                           "body": {
                              "pos": 333,
                              "end": 373,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 210,
                              "expression": {
                                 "pos": 333,
                                 "end": 338,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "setf"
                              },
                              "arguments": [
                                 {
                                    "pos": 339,
                                    "end": 372,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 224,
                                    "condition": {
                                       "pos": 339,
                                       "end": 352,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 223,
                                       "left": {
                                          "pos": 339,
                                          "end": 340,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "f"
                                       },
                                       "operatorToken": {
                                          "pos": 340,
                                          "end": 344,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 36
                                       },
                                       "right": {
                                          "pos": 344,
                                          "end": 352,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 10,
                                          "text": "large",
                                          "hasExtendedUnicodeEscape": false
                                       }
                                    },
                                    "questionToken": {
                                       "pos": 352,
                                       "end": 354,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 57
                                    },
                                    "whenTrue": {
                                       "pos": 354,
                                       "end": 362,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 10,
                                       "text": "small",
                                       "hasExtendedUnicodeEscape": false
                                    },
                                    "colonToken": {
                                       "pos": 362,
                                       "end": 364,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 58
                                    },
                                    "whenFalse": {
                                       "pos": 364,
                                       "end": 372,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 10,
                                       "text": "large",
                                       "hasExtendedUnicodeEscape": false
                                    }
                                 }
                              ]
                           },
                           "equalsGreaterThanToken": {
                              "pos": 330,
                              "end": 333,
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
               "pos": 374,
               "end": 476,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4195458,
               "kind": 250,
               "expression": {
                  "pos": 384,
                  "end": 475,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 1026,
                  "kind": 214,
                  "expression": {
                     "pos": 386,
                     "end": 471,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1026,
                     "kind": 281,
                     "openingElement": {
                        "pos": 386,
                        "end": 439,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1026,
                        "kind": 283,
                        "tagName": {
                           "pos": 392,
                           "end": 395,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        },
                        "attributes": {
                           "pos": 395,
                           "end": 438,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 289,
                           "properties": [
                              {
                                 "pos": 395,
                                 "end": 421,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1026,
                                 "kind": 288,
                                 "name": {
                                    "pos": 395,
                                    "end": 401,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "style"
                                 },
                                 "initializer": {
                                    "pos": 402,
                                    "end": 421,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 291,
                                    "expression": {
                                       "pos": 403,
                                       "end": 420,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 1024,
                                       "kind": 225,
                                       "head": {
                                          "pos": 403,
                                          "end": 417,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 1024,
                                          "kind": 15,
                                          "text": "font-size: ",
                                          "rawText": "font-size: ",
                                          "templateFlags": 0
                                       },
                                       "templateSpans": [
                                          {
                                             "pos": 417,
                                             "end": 420,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 1024,
                                             "kind": 236,
                                             "expression": {
                                                "pos": 417,
                                                "end": 418,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 79,
                                                "escapedText": "f"
                                             },
                                             "literal": {
                                                "pos": 418,
                                                "end": 420,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 1024,
                                                "kind": 17,
                                                "text": "",
                                                "rawText": "",
                                                "templateFlags": 0
                                             }
                                          }
                                       ]
                                    }
                                 }
                              },
                              {
                                 "pos": 421,
                                 "end": 438,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 288,
                                 "name": {
                                    "pos": 421,
                                    "end": 429,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "onClick"
                                 },
                                 "initializer": {
                                    "pos": 430,
                                    "end": 438,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 2,
                                    "kind": 291,
                                    "expression": {
                                       "pos": 431,
                                       "end": 437,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "toggle"
                                    }
                                 }
                              }
                           ]
                        }
                     },
                     "children": [
                        {
                           "pos": 439,
                           "end": 446,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 446,
                           "end": 456,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 291,
                           "expression": {
                              "pos": 447,
                              "end": 455,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "children"
                           }
                        },
                        {
                           "pos": 456,
                           "end": 457,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": " ",
                           "containsOnlyTriviaWhiteSpaces": false
                        },
                        {
                           "pos": 457,
                           "end": 460,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 291,
                           "expression": {
                              "pos": 458,
                              "end": 459,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "x"
                           }
                        },
                        {
                           "pos": 460,
                           "end": 465,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "pos": 465,
                        "end": 471,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 467,
                           "end": 470,
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
      },
      "name": {
         "escapedText": "FANCIFY"
      }
   }
]
*/

