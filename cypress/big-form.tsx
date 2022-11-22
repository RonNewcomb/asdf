
import BIGFORM from '../components/big-form.js'
import { IForm } from '../components/big-form.js'


describe('BIGFORM', () => {

    
    it('renders', () => {
        cy.mount(<BIGFORM>Click me!</BIGFORM>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});

describe('IForm', () => {

    
    it('renders', () => {
        cy.mount(<IForm>Click me!</IForm>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});


/*
[
   {
      "pos": 57,
      "end": 118,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 1,
      "kind": 261,
      "name": {
         "pos": 75,
         "end": 81,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 0,
         "kind": 79,
         "escapedText": "IForm"
      },
      "modifiers": [
         {
            "pos": 57,
            "end": 65,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 93
         }
      ],
      "members": [
         {
            "pos": 83,
            "end": 99,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 168,
            "name": {
               "pos": 83,
               "end": 90,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "name"
            },
            "type": {
               "pos": 91,
               "end": 98,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 152
            }
         },
         {
            "pos": 99,
            "end": 116,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 168,
            "name": {
               "pos": 99,
               "end": 107,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "email"
            },
            "type": {
               "pos": 108,
               "end": 115,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 152
            }
         }
      ]
   },
   {
      "pos": 118,
      "end": 629,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 4981891,
      "kind": 259,
      "modifiers": [
         {
            "pos": 118,
            "end": 126,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 93
         },
         {
            "pos": 126,
            "end": 134,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 88
         }
      ],
      "parameters": [
         {
            "pos": 145,
            "end": 159,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 166,
            "name": {
               "pos": 145,
               "end": 150,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "props"
            },
            "type": {
               "pos": 151,
               "end": 159,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 157
            }
         },
         {
            "pos": 160,
            "end": 189,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 160,
               "end": 181,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 162,
                     "end": 171,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 162,
                        "end": 171,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "useState"
                     }
                  },
                  {
                     "pos": 172,
                     "end": 179,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 172,
                        "end": 179,
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
               "pos": 182,
               "end": 189,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 180,
               "typeName": {
                  "pos": 182,
                  "end": 189,
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
         "pos": 190,
         "end": 629,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 4457603,
         "kind": 238,
         "statements": [
            {
               "pos": 192,
               "end": 260,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457473,
               "kind": 240,
               "declarationList": {
                  "pos": 192,
                  "end": 259,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981761,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 200,
                        "end": 259,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525313,
                        "kind": 257,
                        "name": {
                           "pos": 200,
                           "end": 216,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 202,
                                 "end": 206,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 202,
                                    "end": 206,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "form"
                                 }
                              },
                              {
                                 "pos": 207,
                                 "end": 215,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 207,
                                    "end": 215,
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
                           "pos": 218,
                           "end": 259,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1,
                           "kind": 210,
                           "expression": {
                              "pos": 218,
                              "end": 227,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "typeArguments": [
                              {
                                 "pos": 228,
                                 "end": 233,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1,
                                 "kind": 180,
                                 "typeName": {
                                    "pos": 228,
                                    "end": 233,
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
                                 "pos": 235,
                                 "end": 258,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 207,
                                 "properties": [
                                    {
                                       "pos": 236,
                                       "end": 245,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 299,
                                       "name": {
                                          "pos": 236,
                                          "end": 241,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "name"
                                       },
                                       "initializer": {
                                          "pos": 242,
                                          "end": 245,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 10,
                                          "text": "",
                                          "hasExtendedUnicodeEscape": false
                                       }
                                    },
                                    {
                                       "pos": 246,
                                       "end": 256,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 299,
                                       "name": {
                                          "pos": 246,
                                          "end": 252,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "email"
                                       },
                                       "initializer": {
                                          "pos": 253,
                                          "end": 256,
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
               "pos": 260,
               "end": 627,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4195458,
               "kind": 250,
               "expression": {
                  "pos": 269,
                  "end": 626,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 1026,
                  "kind": 214,
                  "expression": {
                     "pos": 271,
                     "end": 622,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1026,
                     "kind": 281,
                     "openingElement": {
                        "pos": 271,
                        "end": 282,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 283,
                        "tagName": {
                           "pos": 277,
                           "end": 281,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "form"
                        },
                        "attributes": {
                           "pos": 281,
                           "end": 281,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 289,
                           "properties": []
                        }
                     },
                     "children": [
                        {
                           "pos": 282,
                           "end": 289,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 289,
                           "end": 414,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 281,
                           "openingElement": {
                              "pos": 289,
                              "end": 294,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 290,
                                 "end": 293,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 293,
                                 "end": 293,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 294,
                                 "end": 309,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n        Name: ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 309,
                                 "end": 401,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1026,
                                 "kind": 282,
                                 "tagName": {
                                    "pos": 310,
                                    "end": 315,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "input"
                                 },
                                 "attributes": {
                                    "pos": 315,
                                    "end": 398,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 289,
                                    "properties": [
                                       {
                                          "pos": 315,
                                          "end": 327,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 288,
                                          "name": {
                                             "pos": 315,
                                             "end": 320,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "originalKeywordKind": 154,
                                             "escapedText": "type"
                                          },
                                          "initializer": {
                                             "pos": 321,
                                             "end": 327,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 10,
                                             "text": "text",
                                             "hasExtendedUnicodeEscape": false
                                          }
                                       },
                                       {
                                          "pos": 327,
                                          "end": 345,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 288,
                                          "name": {
                                             "pos": 327,
                                             "end": 333,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "value"
                                          },
                                          "initializer": {
                                             "pos": 334,
                                             "end": 345,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 2,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 335,
                                                "end": 344,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 208,
                                                "expression": {
                                                   "pos": 335,
                                                   "end": 339,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 79,
                                                   "escapedText": "form"
                                                },
                                                "name": {
                                                   "pos": 340,
                                                   "end": 344,
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
                                          "pos": 345,
                                          "end": 398,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 1026,
                                          "kind": 288,
                                          "name": {
                                             "pos": 345,
                                             "end": 354,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "onChange"
                                          },
                                          "initializer": {
                                             "pos": 355,
                                             "end": 398,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 1026,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 356,
                                                "end": 397,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 1024,
                                                "kind": 216,
                                                "parameters": [
                                                   {
                                                      "pos": 356,
                                                      "end": 357,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 166,
                                                      "name": {
                                                         "pos": 356,
                                                         "end": 357,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 79,
                                                         "escapedText": "e"
                                                      }
                                                   }
                                                ],
                                                "body": {
                                                   "pos": 360,
                                                   "end": 397,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 210,
                                                   "expression": {
                                                      "pos": 360,
                                                      "end": 367,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 79,
                                                      "escapedText": "render"
                                                   },
                                                   "arguments": [
                                                      {
                                                         "pos": 368,
                                                         "end": 396,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 214,
                                                         "expression": {
                                                            "pos": 369,
                                                            "end": 395,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 0,
                                                            "kind": 223,
                                                            "left": {
                                                               "pos": 369,
                                                               "end": 378,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 369,
                                                                  "end": 373,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "form"
                                                               },
                                                               "name": {
                                                                  "pos": 374,
                                                                  "end": 378,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "name"
                                                               }
                                                            },
                                                            "operatorToken": {
                                                               "pos": 378,
                                                               "end": 380,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 63
                                                            },
                                                            "right": {
                                                               "pos": 380,
                                                               "end": 395,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 380,
                                                                  "end": 389,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 208,
                                                                  "expression": {
                                                                     "pos": 380,
                                                                     "end": 382,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "e"
                                                                  },
                                                                  "name": {
                                                                     "pos": 383,
                                                                     "end": 389,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "target"
                                                                  }
                                                               },
                                                               "name": {
                                                                  "pos": 390,
                                                                  "end": 395,
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
                                                   "pos": 357,
                                                   "end": 360,
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
                                 "pos": 401,
                                 "end": 408,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n      ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              }
                           ],
                           "closingElement": {
                              "pos": 408,
                              "end": 414,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 410,
                                 "end": 413,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 414,
                           "end": 421,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 421,
                           "end": 550,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 281,
                           "openingElement": {
                              "pos": 421,
                              "end": 426,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 422,
                                 "end": 425,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 425,
                                 "end": 425,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 426,
                                 "end": 442,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n        Email: ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 442,
                                 "end": 537,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1026,
                                 "kind": 282,
                                 "tagName": {
                                    "pos": 443,
                                    "end": 448,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "input"
                                 },
                                 "attributes": {
                                    "pos": 448,
                                    "end": 534,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 289,
                                    "properties": [
                                       {
                                          "pos": 448,
                                          "end": 461,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 288,
                                          "name": {
                                             "pos": 448,
                                             "end": 453,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "originalKeywordKind": 154,
                                             "escapedText": "type"
                                          },
                                          "initializer": {
                                             "pos": 454,
                                             "end": 461,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 10,
                                             "text": "email",
                                             "hasExtendedUnicodeEscape": false
                                          }
                                       },
                                       {
                                          "pos": 461,
                                          "end": 480,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 288,
                                          "name": {
                                             "pos": 461,
                                             "end": 467,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "value"
                                          },
                                          "initializer": {
                                             "pos": 468,
                                             "end": 480,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 2,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 469,
                                                "end": 479,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 208,
                                                "expression": {
                                                   "pos": 469,
                                                   "end": 473,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 79,
                                                   "escapedText": "form"
                                                },
                                                "name": {
                                                   "pos": 474,
                                                   "end": 479,
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
                                          "pos": 480,
                                          "end": 534,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 1026,
                                          "kind": 288,
                                          "name": {
                                             "pos": 480,
                                             "end": 489,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "onChange"
                                          },
                                          "initializer": {
                                             "pos": 490,
                                             "end": 534,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 1026,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 491,
                                                "end": 533,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 1024,
                                                "kind": 216,
                                                "parameters": [
                                                   {
                                                      "pos": 491,
                                                      "end": 492,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 166,
                                                      "name": {
                                                         "pos": 491,
                                                         "end": 492,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 79,
                                                         "escapedText": "e"
                                                      }
                                                   }
                                                ],
                                                "body": {
                                                   "pos": 495,
                                                   "end": 533,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 210,
                                                   "expression": {
                                                      "pos": 495,
                                                      "end": 502,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 79,
                                                      "escapedText": "render"
                                                   },
                                                   "arguments": [
                                                      {
                                                         "pos": 503,
                                                         "end": 532,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 214,
                                                         "expression": {
                                                            "pos": 504,
                                                            "end": 531,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 0,
                                                            "kind": 223,
                                                            "left": {
                                                               "pos": 504,
                                                               "end": 514,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 504,
                                                                  "end": 508,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "form"
                                                               },
                                                               "name": {
                                                                  "pos": 509,
                                                                  "end": 514,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "email"
                                                               }
                                                            },
                                                            "operatorToken": {
                                                               "pos": 514,
                                                               "end": 516,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 63
                                                            },
                                                            "right": {
                                                               "pos": 516,
                                                               "end": 531,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 516,
                                                                  "end": 525,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 208,
                                                                  "expression": {
                                                                     "pos": 516,
                                                                     "end": 518,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "e"
                                                                  },
                                                                  "name": {
                                                                     "pos": 519,
                                                                     "end": 525,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "target"
                                                                  }
                                                               },
                                                               "name": {
                                                                  "pos": 526,
                                                                  "end": 531,
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
                                                   "pos": 492,
                                                   "end": 495,
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
                                 "pos": 537,
                                 "end": 544,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n      ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              }
                           ],
                           "closingElement": {
                              "pos": 544,
                              "end": 550,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 546,
                                 "end": 549,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 550,
                           "end": 557,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 557,
                           "end": 610,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 557,
                              "end": 562,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 558,
                                 "end": 561,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 561,
                                 "end": 561,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 562,
                                 "end": 571,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n        ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              },
                              {
                                 "pos": 571,
                                 "end": 582,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 572,
                                    "end": 581,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 208,
                                    "expression": {
                                       "pos": 572,
                                       "end": 576,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "form"
                                    },
                                    "name": {
                                       "pos": 577,
                                       "end": 581,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "name"
                                    }
                                 }
                              },
                              {
                                 "pos": 582,
                                 "end": 585,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": " @ ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 585,
                                 "end": 597,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 586,
                                    "end": 596,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 208,
                                    "expression": {
                                       "pos": 586,
                                       "end": 590,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "form"
                                    },
                                    "name": {
                                       "pos": 591,
                                       "end": 596,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "email"
                                    }
                                 }
                              },
                              {
                                 "pos": 597,
                                 "end": 604,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n      ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              }
                           ],
                           "closingElement": {
                              "pos": 604,
                              "end": 610,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 606,
                                 "end": 609,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 610,
                           "end": 615,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "pos": 615,
                        "end": 622,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 617,
                           "end": 621,
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

