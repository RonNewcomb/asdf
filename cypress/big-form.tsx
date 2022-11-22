
import BIGFORM from '../components/big-form.js'
import { IForm } from '../components/big-form.js'


describe('BIGFORM', () => {

    
    it('uses custom text for the button label', () => {
        cy.mount(<BIGFORM>Click me!</BIGFORM>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});

describe('IForm', () => {

    
    it('uses custom text for the button label', () => {
        cy.mount(<IForm>Click me!</IForm>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});


/*
[
   {
      "pos": 57,
      "end": 123,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 1,
      "kind": 261,
      "name": {
         "pos": 77,
         "end": 83,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 0,
         "kind": 79,
         "escapedText": "IForm"
      },
      "modifiers": [
         {
            "pos": 57,
            "end": 67,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 93
         }
      ],
      "members": [
         {
            "pos": 85,
            "end": 102,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 168,
            "name": {
               "pos": 85,
               "end": 93,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "name"
            },
            "type": {
               "pos": 94,
               "end": 101,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 152
            }
         },
         {
            "pos": 102,
            "end": 120,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 168,
            "name": {
               "pos": 102,
               "end": 111,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "email"
            },
            "type": {
               "pos": 112,
               "end": 119,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 152
            }
         }
      ]
   },
   {
      "pos": 123,
      "end": 651,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 4981891,
      "kind": 259,
      "modifiers": [
         {
            "pos": 123,
            "end": 133,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 93
         },
         {
            "pos": 133,
            "end": 141,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 88
         }
      ],
      "parameters": [
         {
            "pos": 152,
            "end": 166,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 166,
            "name": {
               "pos": 152,
               "end": 157,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "props"
            },
            "type": {
               "pos": 158,
               "end": 166,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 157
            }
         },
         {
            "pos": 167,
            "end": 196,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 167,
               "end": 188,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 169,
                     "end": 178,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 169,
                        "end": 178,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "useState"
                     }
                  },
                  {
                     "pos": 179,
                     "end": 186,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 179,
                        "end": 186,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "render"
                     }
                  }
               ]
            },
            "type": {
               "pos": 189,
               "end": 196,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 180,
               "typeName": {
                  "pos": 189,
                  "end": 196,
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
         "pos": 197,
         "end": 651,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 4457603,
         "kind": 238,
         "statements": [
            {
               "pos": 199,
               "end": 268,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457473,
               "kind": 240,
               "declarationList": {
                  "pos": 199,
                  "end": 267,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981761,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 208,
                        "end": 267,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525313,
                        "kind": 257,
                        "name": {
                           "pos": 208,
                           "end": 224,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 210,
                                 "end": 214,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 210,
                                    "end": 214,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "form"
                                 }
                              },
                              {
                                 "pos": 215,
                                 "end": 223,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 215,
                                    "end": 223,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "setForm"
                                 }
                              }
                           ]
                        },
                        "initializer": {
                           "pos": 226,
                           "end": 267,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1,
                           "kind": 210,
                           "expression": {
                              "pos": 226,
                              "end": 235,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "typeArguments": [
                              {
                                 "pos": 236,
                                 "end": 241,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1,
                                 "kind": 180,
                                 "typeName": {
                                    "pos": 236,
                                    "end": 241,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "IForm"
                                 }
                              }
                           ],
                           "arguments": [
                              {
                                 "pos": 243,
                                 "end": 266,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 207,
                                 "properties": [
                                    {
                                       "pos": 244,
                                       "end": 253,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 299,
                                       "name": {
                                          "pos": 244,
                                          "end": 249,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "name"
                                       },
                                       "initializer": {
                                          "pos": 250,
                                          "end": 253,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 10,
                                          "text": "",
                                          "hasExtendedUnicodeEscape": false
                                       }
                                    },
                                    {
                                       "pos": 254,
                                       "end": 264,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 299,
                                       "name": {
                                          "pos": 254,
                                          "end": 260,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "email"
                                       },
                                       "initializer": {
                                          "pos": 261,
                                          "end": 264,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 10,
                                          "text": "",
                                          "hasExtendedUnicodeEscape": false
                                       }
                                    }
                                 ],
                                 "multiLine": false
                              }
                           ]
                        }
                     }
                  ]
               }
            },
            {
               "pos": 268,
               "end": 648,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4195458,
               "kind": 250,
               "expression": {
                  "pos": 278,
                  "end": 647,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 1026,
                  "kind": 214,
                  "expression": {
                     "pos": 280,
                     "end": 642,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1026,
                     "kind": 281,
                     "openingElement": {
                        "pos": 280,
                        "end": 292,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 283,
                        "tagName": {
                           "pos": 287,
                           "end": 291,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "form"
                        },
                        "attributes": {
                           "pos": 291,
                           "end": 291,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 289,
                           "properties": []
                        }
                     },
                     "children": [
                        {
                           "pos": 292,
                           "end": 300,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 300,
                           "end": 427,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 281,
                           "openingElement": {
                              "pos": 300,
                              "end": 305,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 301,
                                 "end": 304,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 304,
                                 "end": 304,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 305,
                                 "end": 321,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\r\n        Name: ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 321,
                                 "end": 413,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1026,
                                 "kind": 282,
                                 "tagName": {
                                    "pos": 322,
                                    "end": 327,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "input"
                                 },
                                 "attributes": {
                                    "pos": 327,
                                    "end": 410,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 289,
                                    "properties": [
                                       {
                                          "pos": 327,
                                          "end": 339,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 288,
                                          "name": {
                                             "pos": 327,
                                             "end": 332,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "originalKeywordKind": 154,
                                             "escapedText": "type"
                                          },
                                          "initializer": {
                                             "pos": 333,
                                             "end": 339,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 10,
                                             "text": "text",
                                             "hasExtendedUnicodeEscape": false
                                          }
                                       },
                                       {
                                          "pos": 339,
                                          "end": 357,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 288,
                                          "name": {
                                             "pos": 339,
                                             "end": 345,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "value"
                                          },
                                          "initializer": {
                                             "pos": 346,
                                             "end": 357,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 2,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 347,
                                                "end": 356,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 208,
                                                "expression": {
                                                   "pos": 347,
                                                   "end": 351,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 79,
                                                   "escapedText": "form"
                                                },
                                                "name": {
                                                   "pos": 352,
                                                   "end": 356,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 79,
                                                   "escapedText": "name"
                                                }
                                             }
                                          }
                                       },
                                       {
                                          "pos": 357,
                                          "end": 410,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 1026,
                                          "kind": 288,
                                          "name": {
                                             "pos": 357,
                                             "end": 366,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "onChange"
                                          },
                                          "initializer": {
                                             "pos": 367,
                                             "end": 410,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 1026,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 368,
                                                "end": 409,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 1024,
                                                "kind": 216,
                                                "parameters": [
                                                   {
                                                      "pos": 368,
                                                      "end": 369,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 166,
                                                      "name": {
                                                         "pos": 368,
                                                         "end": 369,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 79,
                                                         "escapedText": "e"
                                                      }
                                                   }
                                                ],
                                                "body": {
                                                   "pos": 372,
                                                   "end": 409,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 210,
                                                   "expression": {
                                                      "pos": 372,
                                                      "end": 379,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 79,
                                                      "escapedText": "render"
                                                   },
                                                   "arguments": [
                                                      {
                                                         "pos": 380,
                                                         "end": 408,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 214,
                                                         "expression": {
                                                            "pos": 381,
                                                            "end": 407,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 0,
                                                            "kind": 223,
                                                            "left": {
                                                               "pos": 381,
                                                               "end": 390,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 381,
                                                                  "end": 385,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "form"
                                                               },
                                                               "name": {
                                                                  "pos": 386,
                                                                  "end": 390,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "name"
                                                               }
                                                            },
                                                            "operatorToken": {
                                                               "pos": 390,
                                                               "end": 392,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 63
                                                            },
                                                            "right": {
                                                               "pos": 392,
                                                               "end": 407,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 392,
                                                                  "end": 401,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 208,
                                                                  "expression": {
                                                                     "pos": 392,
                                                                     "end": 394,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "e"
                                                                  },
                                                                  "name": {
                                                                     "pos": 395,
                                                                     "end": 401,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "target"
                                                                  }
                                                               },
                                                               "name": {
                                                                  "pos": 402,
                                                                  "end": 407,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "value"
                                                               }
                                                            }
                                                         }
                                                      }
                                                   ]
                                                },
                                                "equalsGreaterThanToken": {
                                                   "pos": 369,
                                                   "end": 372,
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
                              {
                                 "pos": 413,
                                 "end": 421,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\r\n      ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              }
                           ],
                           "closingElement": {
                              "pos": 421,
                              "end": 427,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 423,
                                 "end": 426,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 427,
                           "end": 435,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 435,
                           "end": 566,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 281,
                           "openingElement": {
                              "pos": 435,
                              "end": 440,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 436,
                                 "end": 439,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 439,
                                 "end": 439,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 440,
                                 "end": 457,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\r\n        Email: ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 457,
                                 "end": 552,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1026,
                                 "kind": 282,
                                 "tagName": {
                                    "pos": 458,
                                    "end": 463,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "input"
                                 },
                                 "attributes": {
                                    "pos": 463,
                                    "end": 549,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 289,
                                    "properties": [
                                       {
                                          "pos": 463,
                                          "end": 476,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 288,
                                          "name": {
                                             "pos": 463,
                                             "end": 468,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "originalKeywordKind": 154,
                                             "escapedText": "type"
                                          },
                                          "initializer": {
                                             "pos": 469,
                                             "end": 476,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 10,
                                             "text": "email",
                                             "hasExtendedUnicodeEscape": false
                                          }
                                       },
                                       {
                                          "pos": 476,
                                          "end": 495,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 288,
                                          "name": {
                                             "pos": 476,
                                             "end": 482,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "value"
                                          },
                                          "initializer": {
                                             "pos": 483,
                                             "end": 495,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 2,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 484,
                                                "end": 494,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 208,
                                                "expression": {
                                                   "pos": 484,
                                                   "end": 488,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 79,
                                                   "escapedText": "form"
                                                },
                                                "name": {
                                                   "pos": 489,
                                                   "end": 494,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 79,
                                                   "escapedText": "email"
                                                }
                                             }
                                          }
                                       },
                                       {
                                          "pos": 495,
                                          "end": 549,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 1026,
                                          "kind": 288,
                                          "name": {
                                             "pos": 495,
                                             "end": 504,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "onChange"
                                          },
                                          "initializer": {
                                             "pos": 505,
                                             "end": 549,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 1026,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 506,
                                                "end": 548,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 1024,
                                                "kind": 216,
                                                "parameters": [
                                                   {
                                                      "pos": 506,
                                                      "end": 507,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 166,
                                                      "name": {
                                                         "pos": 506,
                                                         "end": 507,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 79,
                                                         "escapedText": "e"
                                                      }
                                                   }
                                                ],
                                                "body": {
                                                   "pos": 510,
                                                   "end": 548,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 210,
                                                   "expression": {
                                                      "pos": 510,
                                                      "end": 517,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 79,
                                                      "escapedText": "render"
                                                   },
                                                   "arguments": [
                                                      {
                                                         "pos": 518,
                                                         "end": 547,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 214,
                                                         "expression": {
                                                            "pos": 519,
                                                            "end": 546,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 0,
                                                            "kind": 223,
                                                            "left": {
                                                               "pos": 519,
                                                               "end": 529,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 519,
                                                                  "end": 523,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "form"
                                                               },
                                                               "name": {
                                                                  "pos": 524,
                                                                  "end": 529,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "email"
                                                               }
                                                            },
                                                            "operatorToken": {
                                                               "pos": 529,
                                                               "end": 531,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 63
                                                            },
                                                            "right": {
                                                               "pos": 531,
                                                               "end": 546,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 531,
                                                                  "end": 540,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 208,
                                                                  "expression": {
                                                                     "pos": 531,
                                                                     "end": 533,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "e"
                                                                  },
                                                                  "name": {
                                                                     "pos": 534,
                                                                     "end": 540,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "target"
                                                                  }
                                                               },
                                                               "name": {
                                                                  "pos": 541,
                                                                  "end": 546,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "value"
                                                               }
                                                            }
                                                         }
                                                      }
                                                   ]
                                                },
                                                "equalsGreaterThanToken": {
                                                   "pos": 507,
                                                   "end": 510,
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
                              {
                                 "pos": 552,
                                 "end": 560,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\r\n      ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              }
                           ],
                           "closingElement": {
                              "pos": 560,
                              "end": 566,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 562,
                                 "end": 565,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 566,
                           "end": 574,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 574,
                           "end": 629,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 574,
                              "end": 579,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 575,
                                 "end": 578,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 578,
                                 "end": 578,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 579,
                                 "end": 589,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\r\n        ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              },
                              {
                                 "pos": 589,
                                 "end": 600,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 590,
                                    "end": 599,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 208,
                                    "expression": {
                                       "pos": 590,
                                       "end": 594,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "form"
                                    },
                                    "name": {
                                       "pos": 595,
                                       "end": 599,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "name"
                                    }
                                 }
                              },
                              {
                                 "pos": 600,
                                 "end": 603,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": " @ ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 603,
                                 "end": 615,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 604,
                                    "end": 614,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 208,
                                    "expression": {
                                       "pos": 604,
                                       "end": 608,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "form"
                                    },
                                    "name": {
                                       "pos": 609,
                                       "end": 614,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "email"
                                    }
                                 }
                              },
                              {
                                 "pos": 615,
                                 "end": 623,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\r\n      ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              }
                           ],
                           "closingElement": {
                              "pos": 623,
                              "end": 629,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 625,
                                 "end": 628,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 629,
                           "end": 635,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "pos": 635,
                        "end": 642,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 637,
                           "end": 641,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
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
]
*/

