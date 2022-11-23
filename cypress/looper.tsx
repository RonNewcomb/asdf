
import LOOPER from '../components/looper.js'



describe('LOOPER', () => {

    
    it('renders', () => {
        cy.mount(
          <LOOPER >
            
          </LOOPER>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});


/*
[
   {
      "pos": 93,
      "end": 395,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 4981891,
      "kind": 259,
      "modifiers": [
         {
            "pos": 93,
            "end": 101,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 93
         },
         {
            "pos": 101,
            "end": 109,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 88
         }
      ],
      "parameters": [
         {
            "pos": 120,
            "end": 134,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 166,
            "name": {
               "pos": 120,
               "end": 125,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "props"
            },
            "type": {
               "pos": 126,
               "end": 134,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 157
            }
         },
         {
            "pos": 135,
            "end": 156,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 135,
               "end": 148,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 137,
                     "end": 146,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 137,
                        "end": 146,
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
               "pos": 149,
               "end": 156,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 180,
               "typeName": {
                  "pos": 149,
                  "end": 156,
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
         "pos": 157,
         "end": 395,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 4457602,
         "kind": 238,
         "statements": [
            {
               "pos": 159,
               "end": 200,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 159,
                  "end": 199,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981760,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 167,
                        "end": 199,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525312,
                        "kind": 257,
                        "name": {
                           "pos": 167,
                           "end": 181,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 169,
                                 "end": 172,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 169,
                                    "end": 172,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "val"
                                 }
                              },
                              {
                                 "pos": 173,
                                 "end": 180,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 173,
                                    "end": 180,
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
                           "pos": 183,
                           "end": 199,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 183,
                              "end": 192,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "arguments": [
                              {
                                 "pos": 193,
                                 "end": 198,
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
               "pos": 200,
               "end": 226,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 200,
                  "end": 225,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4457472,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 209,
                        "end": 225,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 257,
                        "name": {
                           "pos": 209,
                           "end": 213,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "arr"
                        },
                        "initializer": {
                           "pos": 215,
                           "end": 225,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 206,
                           "elements": [
                              {
                                 "pos": 217,
                                 "end": 218,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 8,
                                 "text": "5",
                                 "numericLiteralFlags": 0
                              },
                              {
                                 "pos": 219,
                                 "end": 221,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 8,
                                 "text": "6",
                                 "numericLiteralFlags": 0
                              },
                              {
                                 "pos": 222,
                                 "end": 224,
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
               "pos": 226,
               "end": 393,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4195458,
               "kind": 250,
               "expression": {
                  "pos": 235,
                  "end": 392,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 1026,
                  "kind": 214,
                  "expression": {
                     "pos": 237,
                     "end": 388,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1026,
                     "kind": 281,
                     "openingElement": {
                        "pos": 237,
                        "end": 291,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1026,
                        "kind": 283,
                        "tagName": {
                           "pos": 243,
                           "end": 246,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        },
                        "attributes": {
                           "pos": 246,
                           "end": 290,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 289,
                           "properties": [
                              {
                                 "pos": 246,
                                 "end": 261,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 288,
                                 "name": {
                                    "pos": 246,
                                    "end": 252,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "originalKeywordKind": 84,
                                    "escapedText": "class"
                                 },
                                 "initializer": {
                                    "pos": 253,
                                    "end": 261,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 10,
                                    "text": "looper",
                                    "hasExtendedUnicodeEscape": false
                                 }
                              },
                              {
                                 "pos": 261,
                                 "end": 290,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1026,
                                 "kind": 288,
                                 "name": {
                                    "pos": 261,
                                    "end": 269,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "onClick"
                                 },
                                 "initializer": {
                                    "pos": 270,
                                    "end": 290,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 291,
                                    "expression": {
                                       "pos": 271,
                                       "end": 289,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 1024,
                                       "kind": 216,
                                       "parameters": [
                                          {
                                             "pos": 271,
                                             "end": 272,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 166,
                                             "name": {
                                                "pos": 271,
                                                "end": 272,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 79,
                                                "escapedText": "e"
                                             }
                                          }
                                       ],
                                       "body": {
                                          "pos": 275,
                                          "end": 289,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 210,
                                          "expression": {
                                             "pos": 275,
                                             "end": 282,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "setVal"
                                          },
                                          "arguments": [
                                             {
                                                "pos": 283,
                                                "end": 288,
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
                                          "pos": 272,
                                          "end": 275,
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
                           "pos": 291,
                           "end": 298,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 298,
                           "end": 377,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 291,
                           "expression": {
                              "pos": 299,
                              "end": 376,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 1026,
                              "kind": 210,
                              "expression": {
                                 "pos": 299,
                                 "end": 306,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 208,
                                 "expression": {
                                    "pos": 299,
                                    "end": 302,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "arr"
                                 },
                                 "name": {
                                    "pos": 303,
                                    "end": 306,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "map"
                                 }
                              },
                              "arguments": [
                                 {
                                    "pos": 307,
                                    "end": 375,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 216,
                                    "parameters": [
                                       {
                                          "pos": 307,
                                          "end": 311,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 166,
                                          "name": {
                                             "pos": 307,
                                             "end": 311,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "each"
                                          }
                                       }
                                    ],
                                    "body": {
                                       "pos": 314,
                                       "end": 375,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 214,
                                       "expression": {
                                          "pos": 316,
                                          "end": 367,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 281,
                                          "openingElement": {
                                             "pos": 316,
                                             "end": 343,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 2,
                                             "kind": 283,
                                             "tagName": {
                                                "pos": 326,
                                                "end": 333,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 79,
                                                "escapedText": "Fancify"
                                             },
                                             "attributes": {
                                                "pos": 333,
                                                "end": 342,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 2,
                                                "kind": 289,
                                                "properties": [
                                                   {
                                                      "pos": 333,
                                                      "end": 342,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 2,
                                                      "kind": 288,
                                                      "name": {
                                                         "pos": 333,
                                                         "end": 335,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 79,
                                                         "escapedText": "x"
                                                      },
                                                      "initializer": {
                                                         "pos": 336,
                                                         "end": 342,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 2,
                                                         "kind": 291,
                                                         "expression": {
                                                            "pos": 337,
                                                            "end": 341,
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
                                                "pos": 343,
                                                "end": 351,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 2,
                                                "kind": 11,
                                                "text": "Fancier ",
                                                "containsOnlyTriviaWhiteSpaces": false
                                             },
                                             {
                                                "pos": 351,
                                                "end": 356,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 2,
                                                "kind": 291,
                                                "expression": {
                                                   "pos": 352,
                                                   "end": 355,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 79,
                                                   "escapedText": "val"
                                                }
                                             },
                                             {
                                                "pos": 356,
                                                "end": 357,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 2,
                                                "kind": 11,
                                                "text": " ",
                                                "containsOnlyTriviaWhiteSpaces": false
                                             }
                                          ],
                                          "closingElement": {
                                             "pos": 357,
                                             "end": 367,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 2,
                                             "kind": 284,
                                             "tagName": {
                                                "pos": 359,
                                                "end": 366,
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
                                       "pos": 311,
                                       "end": 314,
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
                           "pos": 377,
                           "end": 382,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "pos": 382,
                        "end": 388,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 384,
                           "end": 387,
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