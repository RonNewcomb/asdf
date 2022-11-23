
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


/*
[
   {
      "pos": 57,
      "end": 242,
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
         },
         {
            "pos": 116,
            "end": 133,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 168,
            "name": {
               "pos": 116,
               "end": 124,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "phone"
            },
            "type": {
               "pos": 125,
               "end": 132,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 148
            }
         },
         {
            "pos": 133,
            "end": 150,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 168,
            "name": {
               "pos": 133,
               "end": 140,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "good"
            },
            "type": {
               "pos": 141,
               "end": 149,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 134
            }
         },
         {
            "pos": 150,
            "end": 172,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 168,
            "name": {
               "pos": 150,
               "end": 161,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "verygood"
            },
            "type": {
               "pos": 163,
               "end": 171,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 134
            },
            "questionToken": {
               "pos": 161,
               "end": 162,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 57
            }
         },
         {
            "pos": 172,
            "end": 192,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 168,
            "name": {
               "pos": 172,
               "end": 184,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "subobject"
            },
            "type": {
               "pos": 185,
               "end": 191,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 180,
               "typeName": {
                  "pos": 185,
                  "end": 191,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 79,
                  "escapedText": "IForm"
               }
            }
         },
         {
            "pos": 192,
            "end": 215,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 168,
            "name": {
               "pos": 192,
               "end": 206,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "maybeObject"
            },
            "type": {
               "pos": 208,
               "end": 214,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 180,
               "typeName": {
                  "pos": 208,
                  "end": 214,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 79,
                  "escapedText": "IForm"
               }
            },
            "questionToken": {
               "pos": 206,
               "end": 207,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 57
            }
         },
         {
            "pos": 215,
            "end": 240,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 168,
            "name": {
               "pos": 215,
               "end": 230,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "arrayObjects"
            },
            "type": {
               "pos": 231,
               "end": 239,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 185,
               "elementType": {
                  "pos": 231,
                  "end": 237,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 1,
                  "kind": 180,
                  "typeName": {
                     "pos": 231,
                     "end": 237,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 79,
                     "escapedText": "IForm"
                  }
               }
            }
         }
      ]
   },
   {
      "pos": 242,
      "end": 762,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 4981891,
      "kind": 259,
      "modifiers": [
         {
            "pos": 242,
            "end": 250,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 93
         },
         {
            "pos": 250,
            "end": 258,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 88
         }
      ],
      "parameters": [
         {
            "pos": 269,
            "end": 283,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "kind": 166,
            "name": {
               "pos": 269,
               "end": 274,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 79,
               "escapedText": "props"
            },
            "type": {
               "pos": 275,
               "end": 283,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 157
            }
         },
         {
            "pos": 284,
            "end": 313,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 284,
               "end": 305,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 286,
                     "end": 295,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 286,
                        "end": 295,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "useState"
                     }
                  },
                  {
                     "pos": 296,
                     "end": 303,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 296,
                        "end": 303,
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
               "pos": 306,
               "end": 313,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 180,
               "typeName": {
                  "pos": 306,
                  "end": 313,
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
         "pos": 314,
         "end": 762,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 4457603,
         "kind": 238,
         "statements": [
            {
               "pos": 316,
               "end": 393,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457473,
               "kind": 240,
               "declarationList": {
                  "pos": 316,
                  "end": 392,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981761,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 324,
                        "end": 392,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525313,
                        "kind": 257,
                        "name": {
                           "pos": 324,
                           "end": 340,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 326,
                                 "end": 330,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 326,
                                    "end": 330,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "form"
                                 }
                              },
                              {
                                 "pos": 331,
                                 "end": 339,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 331,
                                    "end": 339,
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
                           "pos": 342,
                           "end": 392,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1,
                           "kind": 210,
                           "expression": {
                              "pos": 342,
                              "end": 351,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "typeArguments": [
                              {
                                 "pos": 352,
                                 "end": 357,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1,
                                 "kind": 180,
                                 "typeName": {
                                    "pos": 352,
                                    "end": 357,
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
                                 "pos": 359,
                                 "end": 391,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1,
                                 "kind": 231,
                                 "expression": {
                                    "pos": 359,
                                    "end": 382,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 207,
                                    "properties": [
                                       {
                                          "pos": 360,
                                          "end": 369,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 299,
                                          "name": {
                                             "pos": 360,
                                             "end": 365,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "name"
                                          },
                                          "initializer": {
                                             "pos": 366,
                                             "end": 369,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 10,
                                             "text": "",
                                             "hasExtendedUnicodeEscape": false
                                          }
                                       },
                                       {
                                          "pos": 370,
                                          "end": 380,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 299,
                                          "name": {
                                             "pos": 370,
                                             "end": 376,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "email"
                                          },
                                          "initializer": {
                                             "pos": 377,
                                             "end": 380,
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
                                 },
                                 "type": {
                                    "pos": 385,
                                    "end": 391,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1,
                                    "kind": 180,
                                    "typeName": {
                                       "pos": 385,
                                       "end": 391,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
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
               "pos": 393,
               "end": 760,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4195458,
               "kind": 250,
               "expression": {
                  "pos": 402,
                  "end": 759,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 1026,
                  "kind": 214,
                  "expression": {
                     "pos": 404,
                     "end": 755,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1026,
                     "kind": 281,
                     "openingElement": {
                        "pos": 404,
                        "end": 415,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 283,
                        "tagName": {
                           "pos": 410,
                           "end": 414,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "form"
                        },
                        "attributes": {
                           "pos": 414,
                           "end": 414,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 289,
                           "properties": []
                        }
                     },
                     "children": [
                        {
                           "pos": 415,
                           "end": 422,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 422,
                           "end": 547,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 281,
                           "openingElement": {
                              "pos": 422,
                              "end": 427,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 423,
                                 "end": 426,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 426,
                                 "end": 426,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 427,
                                 "end": 442,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n        Name: ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 442,
                                 "end": 534,
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
                                    "end": 531,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 289,
                                    "properties": [
                                       {
                                          "pos": 448,
                                          "end": 460,
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
                                             "end": 460,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 10,
                                             "text": "text",
                                             "hasExtendedUnicodeEscape": false
                                          }
                                       },
                                       {
                                          "pos": 460,
                                          "end": 478,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 288,
                                          "name": {
                                             "pos": 460,
                                             "end": 466,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "value"
                                          },
                                          "initializer": {
                                             "pos": 467,
                                             "end": 478,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 2,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 468,
                                                "end": 477,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 208,
                                                "expression": {
                                                   "pos": 468,
                                                   "end": 472,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 79,
                                                   "escapedText": "form"
                                                },
                                                "name": {
                                                   "pos": 473,
                                                   "end": 477,
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
                                          "pos": 478,
                                          "end": 531,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 1026,
                                          "kind": 288,
                                          "name": {
                                             "pos": 478,
                                             "end": 487,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "onChange"
                                          },
                                          "initializer": {
                                             "pos": 488,
                                             "end": 531,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 1026,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 489,
                                                "end": 530,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 1024,
                                                "kind": 216,
                                                "parameters": [
                                                   {
                                                      "pos": 489,
                                                      "end": 490,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 166,
                                                      "name": {
                                                         "pos": 489,
                                                         "end": 490,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 79,
                                                         "escapedText": "e"
                                                      }
                                                   }
                                                ],
                                                "body": {
                                                   "pos": 493,
                                                   "end": 530,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 210,
                                                   "expression": {
                                                      "pos": 493,
                                                      "end": 500,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 79,
                                                      "escapedText": "render"
                                                   },
                                                   "arguments": [
                                                      {
                                                         "pos": 501,
                                                         "end": 529,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 214,
                                                         "expression": {
                                                            "pos": 502,
                                                            "end": 528,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 0,
                                                            "kind": 223,
                                                            "left": {
                                                               "pos": 502,
                                                               "end": 511,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 502,
                                                                  "end": 506,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "form"
                                                               },
                                                               "name": {
                                                                  "pos": 507,
                                                                  "end": 511,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "name"
                                                               }
                                                            },
                                                            "operatorToken": {
                                                               "pos": 511,
                                                               "end": 513,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 63
                                                            },
                                                            "right": {
                                                               "pos": 513,
                                                               "end": 528,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 513,
                                                                  "end": 522,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 208,
                                                                  "expression": {
                                                                     "pos": 513,
                                                                     "end": 515,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "e"
                                                                  },
                                                                  "name": {
                                                                     "pos": 516,
                                                                     "end": 522,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "target"
                                                                  }
                                                               },
                                                               "name": {
                                                                  "pos": 523,
                                                                  "end": 528,
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
                                                   "pos": 490,
                                                   "end": 493,
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
                                 "pos": 534,
                                 "end": 541,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n      ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              }
                           ],
                           "closingElement": {
                              "pos": 541,
                              "end": 547,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 543,
                                 "end": 546,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 547,
                           "end": 554,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 554,
                           "end": 683,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 281,
                           "openingElement": {
                              "pos": 554,
                              "end": 559,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 555,
                                 "end": 558,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 558,
                                 "end": 558,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 559,
                                 "end": 575,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n        Email: ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 575,
                                 "end": 670,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1026,
                                 "kind": 282,
                                 "tagName": {
                                    "pos": 576,
                                    "end": 581,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "input"
                                 },
                                 "attributes": {
                                    "pos": 581,
                                    "end": 667,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 289,
                                    "properties": [
                                       {
                                          "pos": 581,
                                          "end": 594,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 288,
                                          "name": {
                                             "pos": 581,
                                             "end": 586,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "originalKeywordKind": 154,
                                             "escapedText": "type"
                                          },
                                          "initializer": {
                                             "pos": 587,
                                             "end": 594,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 10,
                                             "text": "email",
                                             "hasExtendedUnicodeEscape": false
                                          }
                                       },
                                       {
                                          "pos": 594,
                                          "end": 613,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 288,
                                          "name": {
                                             "pos": 594,
                                             "end": 600,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "value"
                                          },
                                          "initializer": {
                                             "pos": 601,
                                             "end": 613,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 2,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 602,
                                                "end": 612,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 208,
                                                "expression": {
                                                   "pos": 602,
                                                   "end": 606,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 79,
                                                   "escapedText": "form"
                                                },
                                                "name": {
                                                   "pos": 607,
                                                   "end": 612,
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
                                          "pos": 613,
                                          "end": 667,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 1026,
                                          "kind": 288,
                                          "name": {
                                             "pos": 613,
                                             "end": 622,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "onChange"
                                          },
                                          "initializer": {
                                             "pos": 623,
                                             "end": 667,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 1026,
                                             "kind": 291,
                                             "expression": {
                                                "pos": 624,
                                                "end": 666,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 1024,
                                                "kind": 216,
                                                "parameters": [
                                                   {
                                                      "pos": 624,
                                                      "end": 625,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 166,
                                                      "name": {
                                                         "pos": 624,
                                                         "end": 625,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 79,
                                                         "escapedText": "e"
                                                      }
                                                   }
                                                ],
                                                "body": {
                                                   "pos": 628,
                                                   "end": 666,
                                                   "flags": 0,
                                                   "modifierFlagsCache": 0,
                                                   "transformFlags": 0,
                                                   "kind": 210,
                                                   "expression": {
                                                      "pos": 628,
                                                      "end": 635,
                                                      "flags": 0,
                                                      "modifierFlagsCache": 0,
                                                      "transformFlags": 0,
                                                      "kind": 79,
                                                      "escapedText": "render"
                                                   },
                                                   "arguments": [
                                                      {
                                                         "pos": 636,
                                                         "end": 665,
                                                         "flags": 0,
                                                         "modifierFlagsCache": 0,
                                                         "transformFlags": 0,
                                                         "kind": 214,
                                                         "expression": {
                                                            "pos": 637,
                                                            "end": 664,
                                                            "flags": 0,
                                                            "modifierFlagsCache": 0,
                                                            "transformFlags": 0,
                                                            "kind": 223,
                                                            "left": {
                                                               "pos": 637,
                                                               "end": 647,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 637,
                                                                  "end": 641,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "form"
                                                               },
                                                               "name": {
                                                                  "pos": 642,
                                                                  "end": 647,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 79,
                                                                  "escapedText": "email"
                                                               }
                                                            },
                                                            "operatorToken": {
                                                               "pos": 647,
                                                               "end": 649,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 63
                                                            },
                                                            "right": {
                                                               "pos": 649,
                                                               "end": 664,
                                                               "flags": 0,
                                                               "modifierFlagsCache": 0,
                                                               "transformFlags": 0,
                                                               "kind": 208,
                                                               "expression": {
                                                                  "pos": 649,
                                                                  "end": 658,
                                                                  "flags": 0,
                                                                  "modifierFlagsCache": 0,
                                                                  "transformFlags": 0,
                                                                  "kind": 208,
                                                                  "expression": {
                                                                     "pos": 649,
                                                                     "end": 651,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "e"
                                                                  },
                                                                  "name": {
                                                                     "pos": 652,
                                                                     "end": 658,
                                                                     "flags": 0,
                                                                     "modifierFlagsCache": 0,
                                                                     "transformFlags": 0,
                                                                     "kind": 79,
                                                                     "escapedText": "target"
                                                                  }
                                                               },
                                                               "name": {
                                                                  "pos": 659,
                                                                  "end": 664,
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
                                                   "pos": 625,
                                                   "end": 628,
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
                                 "pos": 670,
                                 "end": 677,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n      ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              }
                           ],
                           "closingElement": {
                              "pos": 677,
                              "end": 683,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 679,
                                 "end": 682,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 683,
                           "end": 690,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 690,
                           "end": 743,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 690,
                              "end": 695,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 691,
                                 "end": 694,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 694,
                                 "end": 694,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [
                              {
                                 "pos": 695,
                                 "end": 704,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n        ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              },
                              {
                                 "pos": 704,
                                 "end": 715,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 705,
                                    "end": 714,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 208,
                                    "expression": {
                                       "pos": 705,
                                       "end": 709,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "form"
                                    },
                                    "name": {
                                       "pos": 710,
                                       "end": 714,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "name"
                                    }
                                 }
                              },
                              {
                                 "pos": 715,
                                 "end": 718,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": " @ ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 718,
                                 "end": 730,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 719,
                                    "end": 729,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 208,
                                    "expression": {
                                       "pos": 719,
                                       "end": 723,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "form"
                                    },
                                    "name": {
                                       "pos": 724,
                                       "end": 729,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "email"
                                    }
                                 }
                              },
                              {
                                 "pos": 730,
                                 "end": 737,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n      ",
                                 "containsOnlyTriviaWhiteSpaces": true
                              }
                           ],
                           "closingElement": {
                              "pos": 737,
                              "end": 743,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 739,
                                 "end": 742,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              }
                           }
                        },
                        {
                           "pos": 743,
                           "end": 748,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "pos": 748,
                        "end": 755,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 750,
                           "end": 754,
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