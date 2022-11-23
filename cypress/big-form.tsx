
import type { IStatement } from "../IAST.js";
import BIGFORM from '../components/big-form.js'
import { IForm } from '../components/big-form.js'


describe('BIGFORM', () => {

    
    it('renders', () => {
        cy.mount(
          <BIGFORM >
            
          </BIGFORM>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});



const ast: IStatement[] = [
   {
      "kind": 261,
      "name": {
         "kind": 79,
         "escapedText": "IForm"
      },
      "modifiers": [
         {
            "kind": 93
         }
      ],
      "members": [
         {
            "kind": 168,
            "name": {
               "kind": 79,
               "escapedText": "name"
            },
            "type": {
               "kind": 152
            }
         },
         {
            "kind": 168,
            "name": {
               "kind": 79,
               "escapedText": "email"
            },
            "type": {
               "kind": 152
            }
         },
         {
            "kind": 168,
            "name": {
               "kind": 79,
               "escapedText": "phone"
            },
            "type": {
               "kind": 148
            }
         },
         {
            "kind": 168,
            "name": {
               "kind": 79,
               "escapedText": "good"
            },
            "type": {
               "kind": 134
            }
         },
         {
            "kind": 168,
            "name": {
               "kind": 79,
               "escapedText": "verygood"
            },
            "type": {
               "kind": 134
            },
            "questionToken": {
               "kind": 57
            }
         },
         {
            "kind": 168,
            "name": {
               "kind": 79,
               "escapedText": "subobject"
            },
            "type": {
               "kind": 180,
               "typeName": {
                  "kind": 79,
                  "escapedText": "IForm"
               }
            }
         },
         {
            "kind": 168,
            "name": {
               "kind": 79,
               "escapedText": "maybeObject"
            },
            "type": {
               "kind": 180,
               "typeName": {
                  "kind": 79,
                  "escapedText": "IForm"
               }
            },
            "questionToken": {
               "kind": 57
            }
         },
         {
            "kind": 168,
            "name": {
               "kind": 79,
               "escapedText": "arrayObjects"
            },
            "type": {
               "kind": 185,
               "elementType": {
                  "kind": 180,
                  "typeName": {
                     "kind": 79,
                     "escapedText": "IForm"
                  }
               }
            }
         }
      ]
   },
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
                  },
                  {
                     "kind": 205,
                     "name": {
                        "kind": 79,
                        "escapedText": "render"
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
                                    "escapedText": "form"
                                 }
                              },
                              {
                                 "kind": 205,
                                 "name": {
                                    "kind": 79,
                                    "escapedText": "setForm"
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
                           "typeArguments": [
                              {
                                 "kind": 180,
                                 "typeName": {
                                    "kind": 79,
                                    "escapedText": "IForm"
                                 }
                              }
                           ],
                           "arguments": [
                              {
                                 "kind": 231,
                                 "expression": {
                                    "kind": 207,
                                    "properties": [
                                       {
                                          "kind": 299,
                                          "name": {
                                             "kind": 79,
                                             "escapedText": "name"
                                          },
                                          "initializer": {
                                             "kind": 10,
                                             "text": "",
                                             "hasExtendedUnicodeEscape": false
                                          }
                                       },
                                       {
                                          "kind": 299,
                                          "name": {
                                             "kind": 79,
                                             "escapedText": "email"
                                          },
                                          "initializer": {
                                             "kind": 10,
                                             "text": "",
                                             "hasExtendedUnicodeEscape": false
                                          }
                                       }
                                    ],
                                    "multiLine": false
                                 },
                                 "type": {
                                    "kind": 180,
                                    "typeName": {
                                       "kind": 79,
                                       "escapedText": "IForm"
                                    }
                                 }
                              }
                           ]
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
                           "escapedText": "form"
                        },
                        "attributes": {
                           "kind": 289,
                           "properties": []
                        }
                     },
                     "children": [
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
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "kind": 11,
                                 "text": "\n        Name: ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "kind": 282,
                                 "tagName": {
                                    "kind": 79,
                                    "escapedText": "input"
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
                                             "text": "text",
                                             "hasExtendedUnicodeEscape": false
                                          }
                                       },
                                       {
                                          "kind": 288,
                                          "name": {
                                             "kind": 79,
                                             "escapedText": "value"
                                          },
                                          "initializer": {
                                             "kind": 291,
                                             "expression": {
                                                "kind": 208,
                                                "expression": {
                                                   "kind": 79,
                                                   "escapedText": "form"
                                                },
                                                "name": {
                                                   "kind": 79,
                                                   "escapedText": "name"
                                                }
                                             }
                                          }
                                       },
                                       {
                                          "kind": 288,
                                          "name": {
                                             "kind": 79,
                                             "escapedText": "onChange"
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
                                                      "escapedText": "render"
                                                   },
                                                   "arguments": [
                                                      {
                                                         "kind": 214,
                                                         "expression": {
                                                            "kind": 223,
                                                            "left": {
                                                               "kind": 208,
                                                               "expression": {
                                                                  "kind": 79,
                                                                  "escapedText": "form"
                                                               },
                                                               "name": {
                                                                  "kind": 79,
                                                                  "escapedText": "name"
                                                               }
                                                            },
                                                            "operatorToken": {
                                                               "kind": 63
                                                            },
                                                            "right": {
                                                               "kind": 208,
                                                               "expression": {
                                                                  "kind": 208,
                                                                  "expression": {
                                                                     "kind": 79,
                                                                     "escapedText": "e"
                                                                  },
                                                                  "name": {
                                                                     "kind": 79,
                                                                     "escapedText": "target"
                                                                  }
                                                               },
                                                               "name": {
                                                                  "kind": 79,
                                                                  "escapedText": "value"
                                                               }
                                                            }
                                                         }
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
                              {
                                 "kind": 11,
                                 "text": "\n      ",
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
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "kind": 11,
                                 "text": "\n        Email: ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "kind": 282,
                                 "tagName": {
                                    "kind": 79,
                                    "escapedText": "input"
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
                                             "text": "email",
                                             "hasExtendedUnicodeEscape": false
                                          }
                                       },
                                       {
                                          "kind": 288,
                                          "name": {
                                             "kind": 79,
                                             "escapedText": "value"
                                          },
                                          "initializer": {
                                             "kind": 291,
                                             "expression": {
                                                "kind": 208,
                                                "expression": {
                                                   "kind": 79,
                                                   "escapedText": "form"
                                                },
                                                "name": {
                                                   "kind": 79,
                                                   "escapedText": "email"
                                                }
                                             }
                                          }
                                       },
                                       {
                                          "kind": 288,
                                          "name": {
                                             "kind": 79,
                                             "escapedText": "onChange"
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
                                                      "escapedText": "render"
                                                   },
                                                   "arguments": [
                                                      {
                                                         "kind": 214,
                                                         "expression": {
                                                            "kind": 223,
                                                            "left": {
                                                               "kind": 208,
                                                               "expression": {
                                                                  "kind": 79,
                                                                  "escapedText": "form"
                                                               },
                                                               "name": {
                                                                  "kind": 79,
                                                                  "escapedText": "email"
                                                               }
                                                            },
                                                            "operatorToken": {
                                                               "kind": 63
                                                            },
                                                            "right": {
                                                               "kind": 208,
                                                               "expression": {
                                                                  "kind": 208,
                                                                  "expression": {
                                                                     "kind": 79,
                                                                     "escapedText": "e"
                                                                  },
                                                                  "name": {
                                                                     "kind": 79,
                                                                     "escapedText": "target"
                                                                  }
                                                               },
                                                               "name": {
                                                                  "kind": 79,
                                                                  "escapedText": "value"
                                                               }
                                                            }
                                                         }
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
                              {
                                 "kind": 11,
                                 "text": "\n      ",
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
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "kind": 11,
                                 "text": "\n        ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              },
                              {
                                 "kind": 291,
                                 "expression": {
                                    "kind": 208,
                                    "expression": {
                                       "kind": 79,
                                       "escapedText": "form"
                                    },
                                    "name": {
                                       "kind": 79,
                                       "escapedText": "name"
                                    }
                                 }
                              },
                              {
                                 "kind": 11,
                                 "text": " @ ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "kind": 291,
                                 "expression": {
                                    "kind": 208,
                                    "expression": {
                                       "kind": 79,
                                       "escapedText": "form"
                                    },
                                    "name": {
                                       "kind": 79,
                                       "escapedText": "email"
                                    }
                                 }
                              },
                              {
                                 "kind": 11,
                                 "text": "\n      ",
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
                           "escapedText": "form"
                        }
                     }
                  }
               }
            }
         ],
         "multiLine": true
      },
      "name": {
         "escapedText": "BIGFORM"
      }
   }
];
