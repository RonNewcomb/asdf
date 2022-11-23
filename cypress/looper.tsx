
import type { IStatement } from "../IAST.js";
import LOOPER from '../components/looper.js'



describe('LOOPER', () => {

    
    it('renders', () => {
        cy.mount(
          <LOOPER >
            
          </LOOPER>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});



const ast: IStatement[] = [
   {
      "kind": 259,
      "modifiers": [
         {
            "kind": 93
         },
         {
            "kind": 88
         }
      ],
      "parameters": [
         {
            "kind": 166,
            "name": {
               "kind": 79,
               "escapedText": "props"
            },
            "type": {
               "kind": 157
            }
         },
         {
            "kind": 166,
            "name": {
               "kind": 203,
               "elements": [
                  {
                     "kind": 205,
                     "name": {
                        "kind": 79,
                        "escapedText": "useState"
                     }
                  }
               ]
            },
            "type": {
               "kind": 180,
               "typeName": {
                  "kind": 79,
                  "escapedText": "IState"
               }
            }
         }
      ],
      "body": {
         "kind": 238,
         "statements": [
            {
               "kind": 240,
               "declarationList": {
                  "kind": 258,
                  "declarations": [
                     {
                        "kind": 257,
                        "name": {
                           "kind": 204,
                           "elements": [
                              {
                                 "kind": 205,
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "val"
                                 }
                              },
                              {
                                 "kind": 205,
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "setVal"
                                 }
                              }
                           ]
                        },
                        "initializer": {
                           "kind": 210,
                           "expression": {
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "arguments": [
                              {
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
               "kind": 240,
               "declarationList": {
                  "kind": 258,
                  "declarations": [
                     {
                        "kind": 257,
                        "name": {
                           "kind": 79,
                           "escapedText": "arr"
                        },
                        "initializer": {
                           "kind": 206,
                           "elements": [
                              {
                                 "kind": 8,
                                 "text": "5",
                                 "numericLiteralFlags": 0
                              },
                              {
                                 "kind": 8,
                                 "text": "6",
                                 "numericLiteralFlags": 0
                              },
                              {
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
               "kind": 250,
               "expression": {
                  "kind": 214,
                  "expression": {
                     "kind": 281,
                     "openingElement": {
                        "kind": 283,
                        "tagName": {
                           "kind": 79,
                           "escapedText": "div"
                        },
                        "attributes": {
                           "kind": 289,
                           "properties": [
                              {
                                 "kind": 288,
                                 "name": {
                                    "kind": 79,
                                    "originalKeywordKind": 84,
                                    "escapedText": "class"
                                 },
                                 "initializer": {
                                    "kind": 10,
                                    "text": "looper",
                                    "hasExtendedUnicodeEscape": false
                                 }
                              },
                              {
                                 "kind": 288,
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "onClick"
                                 },
                                 "initializer": {
                                    "kind": 291,
                                    "expression": {
                                       "kind": 216,
                                       "parameters": [
                                          {
                                             "kind": 166,
                                             "name": {
                                                "kind": 79,
                                                "escapedText": "e"
                                             }
                                          }
                                       ],
                                       "body": {
                                          "kind": 210,
                                          "expression": {
                                             "kind": 79,
                                             "escapedText": "setVal"
                                          },
                                          "arguments": [
                                             {
                                                "kind": 10,
                                                "text": "foo",
                                                "hasExtendedUnicodeEscape": false
                                             }
                                          ]
                                       },
                                       "equalsGreaterThanToken": {
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
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "kind": 291,
                           "expression": {
                              "kind": 210,
                              "expression": {
                                 "kind": 208,
                                 "expression": {
                                    "kind": 79,
                                    "escapedText": "arr"
                                 },
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "map"
                                 }
                              },
                              "arguments": [
                                 {
                                    "kind": 216,
                                    "parameters": [
                                       {
                                          "kind": 166,
                                          "name": {
                                             "kind": 79,
                                             "escapedText": "each"
                                          }
                                       }
                                    ],
                                    "body": {
                                       "kind": 214,
                                       "expression": {
                                          "kind": 281,
                                          "openingElement": {
                                             "kind": 283,
                                             "tagName": {
                                                "kind": 79,
                                                "escapedText": "Fancify"
                                             },
                                             "attributes": {
                                                "kind": 289,
                                                "properties": [
                                                   {
                                                      "kind": 288,
                                                      "name": {
                                                         "kind": 79,
                                                         "escapedText": "x"
                                                      },
                                                      "initializer": {
                                                         "kind": 291,
                                                         "expression": {
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
                                                "kind": 11,
                                                "text": "Fancier ",
                                                "containsOnlyTriviaWhiteSpaces": false
                                             },
                                             {
                                                "kind": 291,
                                                "expression": {
                                                   "kind": 79,
                                                   "escapedText": "val"
                                                }
                                             },
                                             {
                                                "kind": 11,
                                                "text": " ",
                                                "containsOnlyTriviaWhiteSpaces": false
                                             }
                                          ],
                                          "closingElement": {
                                             "kind": 284,
                                             "tagName": {
                                                "kind": 79,
                                                "escapedText": "Fancify"
                                             }
                                          }
                                       }
                                    },
                                    "equalsGreaterThanToken": {
                                       "kind": 38
                                    }
                                 }
                              ]
                           }
                        },
                        {
                           "kind": 11,
                           "text": "\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "kind": 284,
                        "tagName": {
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
];
