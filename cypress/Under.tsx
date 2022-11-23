
import type { IStatement } from "../IAST.js";
import Under from '../components/Under.js'



describe('Under', () => {

    
    it('renders', () => {
        cy.mount(
          <Under aNumericInput={6} >
            
          </Under>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});



const ast: IStatement[] = [
   {
      "kind": 259,
      "name": {
         "kind": 79,
         "escapedText": "Under"
      },
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
               "kind": 203,
               "elements": [
                  {
                     "kind": 205,
                     "name": {
                        "kind": 79,
                        "escapedText": "aNumericInput"
                     }
                  }
               ]
            },
            "type": {
               "kind": 184,
               "members": [
                  {
                     "kind": 168,
                     "name": {
                        "kind": 79,
                        "escapedText": "aNumericInput"
                     },
                     "type": {
                        "kind": 148
                     }
                  }
               ]
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
               "kind": 241,
               "expression": {
                  "kind": 210,
                  "expression": {
                     "kind": 208,
                     "expression": {
                        "kind": 79,
                        "escapedText": "console"
                     },
                     "name": {
                        "kind": 79,
                        "escapedText": "log"
                     }
                  },
                  "arguments": [
                     {
                        "kind": 10,
                        "text": "Under.state = ",
                        "hasExtendedUnicodeEscape": false
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
                           "kind": 204,
                           "elements": [
                              {
                                 "kind": 205,
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "counter"
                                 }
                              },
                              {
                                 "kind": 205,
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "setCounter"
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
                                 "kind": 8,
                                 "text": "17",
                                 "numericLiteralFlags": 0
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
                           "kind": 204,
                           "elements": [
                              {
                                 "kind": 205,
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "y"
                                 }
                              },
                              {
                                 "kind": 205,
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "sety"
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
                                 "kind": 8,
                                 "text": "44",
                                 "numericLiteralFlags": 0
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
                           "escapedText": "handler"
                        },
                        "initializer": {
                           "kind": 216,
                           "parameters": [],
                           "body": {
                              "kind": 238,
                              "statements": [
                                 {
                                    "kind": 241,
                                    "expression": {
                                       "kind": 210,
                                       "expression": {
                                          "kind": 208,
                                          "expression": {
                                             "kind": 79,
                                             "escapedText": "console"
                                          },
                                          "name": {
                                             "kind": 79,
                                             "escapedText": "log"
                                          }
                                       },
                                       "arguments": [
                                          {
                                             "kind": 10,
                                             "text": "clicked",
                                             "hasExtendedUnicodeEscape": false
                                          },
                                          {
                                             "kind": 79,
                                             "escapedText": "counter"
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    "kind": 241,
                                    "expression": {
                                       "kind": 210,
                                       "expression": {
                                          "kind": 79,
                                          "escapedText": "setCounter"
                                       },
                                       "arguments": [
                                          {
                                             "kind": 223,
                                             "left": {
                                                "kind": 79,
                                                "escapedText": "counter"
                                             },
                                             "operatorToken": {
                                                "kind": 39
                                             },
                                             "right": {
                                                "kind": 8,
                                                "text": "1",
                                                "numericLiteralFlags": 0
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ],
                              "multiLine": true
                           },
                           "equalsGreaterThanToken": {
                              "kind": 38
                           }
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
                           "escapedText": "h2"
                        },
                        "initializer": {
                           "kind": 216,
                           "parameters": [
                              {
                                 "kind": 166,
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "event"
                                 },
                                 "type": {
                                    "kind": 180,
                                    "typeName": {
                                       "kind": 79,
                                       "escapedText": "Event"
                                    }
                                 }
                              }
                           ],
                           "body": {
                              "kind": 238,
                              "statements": [
                                 {
                                    "kind": 241,
                                    "expression": {
                                       "kind": 210,
                                       "expression": {
                                          "kind": 79,
                                          "escapedText": "sety"
                                       },
                                       "arguments": [
                                          {
                                             "kind": 223,
                                             "left": {
                                                "kind": 79,
                                                "escapedText": "y"
                                             },
                                             "operatorToken": {
                                                "kind": 39
                                             },
                                             "right": {
                                                "kind": 8,
                                                "text": "7",
                                                "numericLiteralFlags": 0
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    "kind": 241,
                                    "expression": {
                                       "kind": 210,
                                       "expression": {
                                          "kind": 208,
                                          "expression": {
                                             "kind": 79,
                                             "escapedText": "event"
                                          },
                                          "name": {
                                             "kind": 79,
                                             "escapedText": "stopPropagation"
                                          }
                                       },
                                       "arguments": []
                                    }
                                 }
                              ],
                              "multiLine": true
                           },
                           "equalsGreaterThanToken": {
                              "kind": 38
                           }
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
                                    "escapedText": "onClick"
                                 },
                                 "initializer": {
                                    "kind": 291,
                                    "expression": {
                                       "kind": 79,
                                       "escapedText": "handler"
                                    }
                                 }
                              }
                           ]
                        }
                     },
                     "children": [
                        {
                           "kind": 11,
                           "text": "\n      number inputted = ",
                           "containsOnlyTriviaWhiteSpaces": false
                        },
                        {
                           "kind": 291,
                           "expression": {
                              "kind": 79,
                              "escapedText": "aNumericInput"
                           }
                        },
                        {
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "kind": 282,
                           "tagName": {
                              "kind": 79,
                              "escapedText": "br"
                           },
                           "attributes": {
                              "kind": 289,
                              "properties": []
                           }
                        },
                        {
                           "kind": 11,
                           "text": "\n      and state.counter=",
                           "containsOnlyTriviaWhiteSpaces": false
                        },
                        {
                           "kind": 291,
                           "expression": {
                              "kind": 79,
                              "escapedText": "counter"
                           }
                        },
                        {
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "kind": 282,
                           "tagName": {
                              "kind": 79,
                              "escapedText": "br"
                           },
                           "attributes": {
                              "kind": 289,
                              "properties": []
                           }
                        },
                        {
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "kind": 281,
                           "openingElement": {
                              "kind": 283,
                              "tagName": {
                                 "kind": 79,
                                 "escapedText": "button"
                              },
                              "attributes": {
                                 "kind": 289,
                                 "properties": [
                                    {
                                       "kind": 288,
                                       "name": {
                                          "kind": 79,
                                          "originalKeywordKind": 154,
                                          "escapedText": "type"
                                       },
                                       "initializer": {
                                          "kind": 10,
                                          "text": "button",
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
                                             "kind": 79,
                                             "escapedText": "h2"
                                          }
                                       }
                                    }
                                 ]
                              }
                           },
                           "children": [
                              {
                                 "kind": 11,
                                 "text": "\n        Y is ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "kind": 291,
                                 "expression": {
                                    "kind": 79,
                                    "escapedText": "y"
                                 }
                              },
                              {
                                 "kind": 11,
                                 "text": " and also the other handler\n      ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              }
                           ],
                           "closingElement": {
                              "kind": 284,
                              "tagName": {
                                 "kind": 79,
                                 "escapedText": "button"
                              }
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
      }
   }
];
