
import type { IStatement } from "../IAST.js";
import FANCIFY from '../components/fancify.js'



describe('FANCIFY', () => {

    
    it('renders', () => {
        cy.mount(
          <FANCIFY x={{}} >
            {}
          </FANCIFY>)
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
               "kind": 203,
               "elements": [
                  {
                     "kind": 205,
                     "name": {
                        "kind": 79,
                        "escapedText": "x"
                     }
                  },
                  {
                     "kind": 205,
                     "name": {
                        "kind": 79,
                        "escapedText": "children"
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
                        "escapedText": "x"
                     },
                     "type": {
                        "kind": 131
                     }
                  },
                  {
                     "kind": 168,
                     "name": {
                        "kind": 79,
                        "escapedText": "children"
                     },
                     "type": {
                        "kind": 131
                     },
                     "questionToken": {
                        "kind": 57
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
                                    "escapedText": "f"
                                 }
                              },
                              {
                                 "kind": 205,
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "setf"
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
               "kind": 242,
               "expression": {
                  "kind": 221,
                  "operator": 53,
                  "operand": {
                     "kind": 79,
                     "escapedText": "children"
                  }
               },
               "thenStatement": {
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
                                 "escapedText": "warn"
                              }
                           },
                           "arguments": [
                              {
                                 "kind": 10,
                                 "text": "Fancify needs children",
                                 "hasExtendedUnicodeEscape": false
                              }
                           ]
                        }
                     },
                     {
                        "kind": 250,
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
                                 "properties": []
                              }
                           },
                           "children": [],
                           "closingElement": {
                              "kind": 284,
                              "tagName": {
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
                           "text": "good",
                           "hasExtendedUnicodeEscape": false
                        }
                     ]
                  }
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
                           "escapedText": "toggle"
                        },
                        "initializer": {
                           "kind": 216,
                           "parameters": [],
                           "body": {
                              "kind": 210,
                              "expression": {
                                 "kind": 79,
                                 "escapedText": "setf"
                              },
                              "arguments": [
                                 {
                                    "kind": 224,
                                    "condition": {
                                       "kind": 223,
                                       "left": {
                                          "kind": 79,
                                          "escapedText": "f"
                                       },
                                       "operatorToken": {
                                          "kind": 36
                                       },
                                       "right": {
                                          "kind": 10,
                                          "text": "large",
                                          "hasExtendedUnicodeEscape": false
                                       }
                                    },
                                    "questionToken": {
                                       "kind": 57
                                    },
                                    "whenTrue": {
                                       "kind": 10,
                                       "text": "small",
                                       "hasExtendedUnicodeEscape": false
                                    },
                                    "colonToken": {
                                       "kind": 58
                                    },
                                    "whenFalse": {
                                       "kind": 10,
                                       "text": "large",
                                       "hasExtendedUnicodeEscape": false
                                    }
                                 }
                              ]
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
                                    "escapedText": "style"
                                 },
                                 "initializer": {
                                    "kind": 291,
                                    "expression": {
                                       "kind": 225,
                                       "head": {
                                          "kind": 15,
                                          "text": "font-size: ",
                                          "rawText": "font-size: ",
                                          "templateFlags": 0
                                       },
                                       "templateSpans": [
                                          {
                                             "kind": 236,
                                             "expression": {
                                                "kind": 79,
                                                "escapedText": "f"
                                             },
                                             "literal": {
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
                                 "kind": 288,
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "onClick"
                                 },
                                 "initializer": {
                                    "kind": 291,
                                    "expression": {
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
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "kind": 291,
                           "expression": {
                              "kind": 79,
                              "escapedText": "children"
                           }
                        },
                        {
                           "kind": 11,
                           "text": " ",
                           "containsOnlyTriviaWhiteSpaces": false
                        },
                        {
                           "kind": 291,
                           "expression": {
                              "kind": 79,
                              "escapedText": "x"
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
         "escapedText": "FANCIFY"
      }
   }
];
