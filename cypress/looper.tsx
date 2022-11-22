
import LOOPER from '../components/looper.js'



describe('LOOPER', () => {

    
    it('uses custom text for the button label', () => {
        cy.mount(<LOOPER>Click me!</LOOPER>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});


/*
[
   {
      "pos": 94,
      "end": 409,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 4981891,
      "kind": 259,
      "modifiers": [
         {
            "pos": 94,
            "end": 104,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 93
         },
         {
            "pos": 104,
            "end": 112,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 88
         }
      ],
      "parameters": [
         {
            "pos": 123,
            "end": 137,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 166,
            "name": {
               "pos": 123,
               "end": 128,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "props"
            },
            "type": {
               "pos": 129,
               "end": 137,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 157
            }
         },
         {
            "pos": 138,
            "end": 159,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 138,
               "end": 151,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 140,
                     "end": 149,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 140,
                        "end": 149,
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
               "pos": 152,
               "end": 159,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 180,
               "typeName": {
                  "pos": 152,
                  "end": 159,
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
         "pos": 160,
         "end": 409,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 4457602,
         "kind": 238,
         "statements": [
            {
               "pos": 162,
               "end": 204,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 162,
                  "end": 203,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981760,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 171,
                        "end": 203,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525312,
                        "kind": 257,
                        "name": {
                           "pos": 171,
                           "end": 185,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 173,
                                 "end": 176,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 173,
                                    "end": 176,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "val"
                                 }
                              },
                              {
                                 "pos": 177,
                                 "end": 184,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 177,
                                    "end": 184,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "setVal"
                                 }
                              }
                           ]
                        },
                        "initializer": {
                           "pos": 187,
                           "end": 203,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 187,
                              "end": 196,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "arguments": [
                              {
                                 "pos": 197,
                                 "end": 202,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 10,
                                 "text": "lkj",
                                 "hasExtendedUnicodeEscape": false
                              }
                           ]
                        }
                     }
                  ]
               }
            },
            {
               "pos": 204,
               "end": 232,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 204,
                  "end": 231,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4457472,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 215,
                        "end": 231,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 257,
                        "name": {
                           "pos": 215,
                           "end": 219,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "arr"
                        },
                        "initializer": {
                           "pos": 221,
                           "end": 231,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 206,
                           "elements": [
                              {
                                 "pos": 223,
                                 "end": 224,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 8,
                                 "text": "5",
                                 "numericLiteralFlags": 0
                              },
                              {
                                 "pos": 225,
                                 "end": 227,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 8,
                                 "text": "6",
                                 "numericLiteralFlags": 0
                              },
                              {
                                 "pos": 228,
                                 "end": 230,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 8,
                                 "text": "8",
                                 "numericLiteralFlags": 0
                              }
                           ],
                           "multiLine": false
                        }
                     }
                  ]
               }
            },
            {
               "pos": 232,
               "end": 406,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4195458,
               "kind": 250,
               "expression": {
                  "pos": 242,
                  "end": 405,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 1026,
                  "kind": 214,
                  "expression": {
                     "pos": 244,
                     "end": 400,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1026,
                     "kind": 281,
                     "openingElement": {
                        "pos": 244,
                        "end": 299,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1026,
                        "kind": 283,
                        "tagName": {
                           "pos": 251,
                           "end": 254,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        },
                        "attributes": {
                           "pos": 254,
                           "end": 298,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 289,
                           "properties": [
                              {
                                 "pos": 254,
                                 "end": 269,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 288,
                                 "name": {
                                    "pos": 254,
                                    "end": 260,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "originalKeywordKind": 84,
                                    "escapedText": "class"
                                 },
                                 "initializer": {
                                    "pos": 261,
                                    "end": 269,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 10,
                                    "text": "looper",
                                    "hasExtendedUnicodeEscape": false
                                 }
                              },
                              {
                                 "pos": 269,
                                 "end": 298,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1026,
                                 "kind": 288,
                                 "name": {
                                    "pos": 269,
                                    "end": 277,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "onClick"
                                 },
                                 "initializer": {
                                    "pos": 278,
                                    "end": 298,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 291,
                                    "expression": {
                                       "pos": 279,
                                       "end": 297,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 1024,
                                       "kind": 216,
                                       "parameters": [
                                          {
                                             "pos": 279,
                                             "end": 280,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 166,
                                             "name": {
                                                "pos": 279,
                                                "end": 280,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 79,
                                                "escapedText": "e"
                                             }
                                          }
                                       ],
                                       "body": {
                                          "pos": 283,
                                          "end": 297,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 210,
                                          "expression": {
                                             "pos": 283,
                                             "end": 290,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "setVal"
                                          },
                                          "arguments": [
                                             {
                                                "pos": 291,
                                                "end": 296,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 10,
                                                "text": "foo",
                                                "hasExtendedUnicodeEscape": false
                                             }
                                          ]
                                       },
                                       "equalsGreaterThanToken": {
                                          "pos": 280,
                                          "end": 283,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 38
                                       }
                                    }
                                 }
                              }
                           ]
                        }
                     },
                     "children": [
                        {
                           "pos": 299,
                           "end": 307,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 307,
                           "end": 388,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 291,
                           "expression": {
                              "pos": 308,
                              "end": 387,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 1026,
                              "kind": 210,
                              "expression": {
                                 "pos": 308,
                                 "end": 315,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 208,
                                 "expression": {
                                    "pos": 308,
                                    "end": 311,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "arr"
                                 },
                                 "name": {
                                    "pos": 312,
                                    "end": 315,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "map"
                                 }
                              },
                              "arguments": [
                                 {
                                    "pos": 316,
                                    "end": 386,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 216,
                                    "parameters": [
                                       {
                                          "pos": 316,
                                          "end": 320,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 166,
                                          "name": {
                                             "pos": 316,
                                             "end": 320,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "each"
                                          }
                                       }
                                    ],
                                    "body": {
                                       "pos": 323,
                                       "end": 386,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 214,
                                       "expression": {
                                          "pos": 325,
                                          "end": 377,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 281,
                                          "openingElement": {
                                             "pos": 325,
                                             "end": 353,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 2,
                                             "kind": 283,
                                             "tagName": {
                                                "pos": 336,
                                                "end": 343,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 79,
                                                "escapedText": "Fancify"
                                             },
                                             "attributes": {
                                                "pos": 343,
                                                "end": 352,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 2,
                                                "kind": 289,
                                                "properties": [
                                                   {
                                                      "pos": 343,
                                                      "end": 352,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 2,
                                                      "kind": 288,
                                                      "name": {
                                                         "pos": 343,
                                                         "end": 345,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 79,
                                                         "escapedText": "x"
                                                      },
                                                      "initializer": {
                                                         "pos": 346,
                                                         "end": 352,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 2,
                                                         "kind": 291,
                                                         "expression": {
                                                            "pos": 347,
                                                            "end": 351,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 0,
                                                            "kind": 79,
                                                            "escapedText": "each"
                                                         }
                                                      }
                                                   }
                                                ]
                                             }
                                          },
                                          "children": [
                                             {
                                                "pos": 353,
                                                "end": 361,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 2,
                                                "kind": 11,
                                                "text": "Fancier ",
                                                "containsOnlyTriviaWhiteSpaces": false
                                             },
                                             {
                                                "pos": 361,
                                                "end": 366,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 2,
                                                "kind": 291,
                                                "expression": {
                                                   "pos": 362,
                                                   "end": 365,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 79,
                                                   "escapedText": "val"
                                                }
                                             },
                                             {
                                                "pos": 366,
                                                "end": 367,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 2,
                                                "kind": 11,
                                                "text": " ",
                                                "containsOnlyTriviaWhiteSpaces": false
                                             }
                                          ],
                                          "closingElement": {
                                             "pos": 367,
                                             "end": 377,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 2,
                                             "kind": 284,
                                             "tagName": {
                                                "pos": 369,
                                                "end": 376,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 79,
                                                "escapedText": "Fancify"
                                             }
                                          }
                                       }
                                    },
                                    "equalsGreaterThanToken": {
                                       "pos": 320,
                                       "end": 323,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 38
                                    }
                                 }
                              ]
                           }
                        },
                        {
                           "pos": 388,
                           "end": 394,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "pos": 394,
                        "end": 400,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 396,
                           "end": 399,
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
         "escapedText": "LOOPER"
      }
   }
]
*/

