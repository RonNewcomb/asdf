
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
      "pos": 57,
      "end": 714,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 4981891,
      "kind": 259,
      "name": {
         "pos": 82,
         "end": 88,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 0,
         "kind": 79,
         "escapedText": "Under"
      },
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
            "pos": 89,
            "end": 133,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 89,
               "end": 106,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 90,
                     "end": 104,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 90,
                        "end": 104,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "aNumericInput"
                     }
                  }
               ]
            },
            "type": {
               "pos": 107,
               "end": 133,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 184,
               "members": [
                  {
                     "pos": 109,
                     "end": 131,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 168,
                     "name": {
                        "pos": 109,
                        "end": 123,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "aNumericInput"
                     },
                     "type": {
                        "pos": 124,
                        "end": 131,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1,
                        "kind": 148
                     }
                  }
               ]
            }
         },
         {
            "pos": 134,
            "end": 155,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 134,
               "end": 147,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 136,
                     "end": 145,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 136,
                        "end": 145,
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
               "pos": 148,
               "end": 155,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 180,
               "typeName": {
                  "pos": 148,
                  "end": 155,
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
         "pos": 156,
         "end": 714,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 4457603,
         "kind": 238,
         "statements": [
            {
               "pos": 158,
               "end": 191,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 241,
               "expression": {
                  "pos": 158,
                  "end": 190,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 210,
                  "expression": {
                     "pos": 158,
                     "end": 172,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 208,
                     "expression": {
                        "pos": 158,
                        "end": 168,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "console"
                     },
                     "name": {
                        "pos": 169,
                        "end": 172,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "log"
                     }
                  },
                  "arguments": [
                     {
                        "pos": 173,
                        "end": 189,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 10,
                        "text": "Under.state = ",
                        "hasExtendedUnicodeEscape": false
                     }
                  ]
               }
            },
            {
               "pos": 191,
               "end": 237,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 191,
                  "end": 236,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981760,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 199,
                        "end": 236,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525312,
                        "kind": 257,
                        "name": {
                           "pos": 199,
                           "end": 221,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 201,
                                 "end": 208,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 201,
                                    "end": 208,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "counter"
                                 }
                              },
                              {
                                 "pos": 209,
                                 "end": 220,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 209,
                                    "end": 220,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "setCounter"
                                 }
                              }
                           ]
                        },
                        "initializer": {
                           "pos": 223,
                           "end": 236,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 223,
                              "end": 232,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "arguments": [
                              {
                                 "pos": 233,
                                 "end": 235,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
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
               "pos": 237,
               "end": 271,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 237,
                  "end": 270,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981760,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 245,
                        "end": 270,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525312,
                        "kind": 257,
                        "name": {
                           "pos": 245,
                           "end": 255,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 247,
                                 "end": 248,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 247,
                                    "end": 248,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "y"
                                 }
                              },
                              {
                                 "pos": 249,
                                 "end": 254,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 249,
                                    "end": 254,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "sety"
                                 }
                              }
                           ]
                        },
                        "initializer": {
                           "pos": 257,
                           "end": 270,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 257,
                              "end": 266,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "arguments": [
                              {
                                 "pos": 267,
                                 "end": 269,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
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
               "pos": 271,
               "end": 369,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 271,
                  "end": 368,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4457472,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 280,
                        "end": 368,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1024,
                        "kind": 257,
                        "name": {
                           "pos": 280,
                           "end": 288,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "handler"
                        },
                        "initializer": {
                           "pos": 290,
                           "end": 368,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1024,
                           "kind": 216,
                           "parameters": [],
                           "body": {
                              "pos": 296,
                              "end": 368,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 238,
                              "statements": [
                                 {
                                    "pos": 298,
                                    "end": 335,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 241,
                                    "expression": {
                                       "pos": 298,
                                       "end": 334,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 210,
                                       "expression": {
                                          "pos": 298,
                                          "end": 314,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 208,
                                          "expression": {
                                             "pos": 298,
                                             "end": 310,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "console"
                                          },
                                          "name": {
                                             "pos": 311,
                                             "end": 314,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "log"
                                          }
                                       },
                                       "arguments": [
                                          {
                                             "pos": 315,
                                             "end": 324,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 10,
                                             "text": "clicked",
                                             "hasExtendedUnicodeEscape": false
                                          },
                                          {
                                             "pos": 325,
                                             "end": 333,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "counter"
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    "pos": 335,
                                    "end": 364,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 241,
                                    "expression": {
                                       "pos": 335,
                                       "end": 363,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 210,
                                       "expression": {
                                          "pos": 335,
                                          "end": 350,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "setCounter"
                                       },
                                       "arguments": [
                                          {
                                             "pos": 351,
                                             "end": 362,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 223,
                                             "left": {
                                                "pos": 351,
                                                "end": 358,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 79,
                                                "escapedText": "counter"
                                             },
                                             "operatorToken": {
                                                "pos": 358,
                                                "end": 360,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 39
                                             },
                                             "right": {
                                                "pos": 360,
                                                "end": 362,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
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
                              "pos": 293,
                              "end": 296,
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
               "pos": 369,
               "end": 454,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457473,
               "kind": 240,
               "declarationList": {
                  "pos": 369,
                  "end": 453,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4457473,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 378,
                        "end": 453,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1025,
                        "kind": 257,
                        "name": {
                           "pos": 378,
                           "end": 381,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "h2"
                        },
                        "initializer": {
                           "pos": 383,
                           "end": 453,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1025,
                           "kind": 216,
                           "parameters": [
                              {
                                 "pos": 385,
                                 "end": 397,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1,
                                 "kind": 166,
                                 "name": {
                                    "pos": 385,
                                    "end": 390,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "event"
                                 },
                                 "type": {
                                    "pos": 391,
                                    "end": 397,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1,
                                    "kind": 180,
                                    "typeName": {
                                       "pos": 391,
                                       "end": 397,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 79,
                                       "escapedText": "Event"
                                    }
                                 }
                              }
                           ],
                           "body": {
                              "pos": 401,
                              "end": 453,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 238,
                              "statements": [
                                 {
                                    "pos": 403,
                                    "end": 420,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 241,
                                    "expression": {
                                       "pos": 403,
                                       "end": 419,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 210,
                                       "expression": {
                                          "pos": 403,
                                          "end": 412,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "sety"
                                       },
                                       "arguments": [
                                          {
                                             "pos": 413,
                                             "end": 418,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 223,
                                             "left": {
                                                "pos": 413,
                                                "end": 414,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 79,
                                                "escapedText": "y"
                                             },
                                             "operatorToken": {
                                                "pos": 414,
                                                "end": 416,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 39
                                             },
                                             "right": {
                                                "pos": 416,
                                                "end": 418,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 8,
                                                "text": "7",
                                                "numericLiteralFlags": 0
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    "pos": 420,
                                    "end": 449,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 241,
                                    "expression": {
                                       "pos": 420,
                                       "end": 448,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 210,
                                       "expression": {
                                          "pos": 420,
                                          "end": 446,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 208,
                                          "expression": {
                                             "pos": 420,
                                             "end": 430,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "event"
                                          },
                                          "name": {
                                             "pos": 431,
                                             "end": 446,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
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
                              "pos": 398,
                              "end": 401,
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
               "pos": 454,
               "end": 712,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4194434,
               "kind": 250,
               "expression": {
                  "pos": 464,
                  "end": 711,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 2,
                  "kind": 214,
                  "expression": {
                     "pos": 466,
                     "end": 707,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 281,
                     "openingElement": {
                        "pos": 466,
                        "end": 494,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 283,
                        "tagName": {
                           "pos": 472,
                           "end": 475,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        },
                        "attributes": {
                           "pos": 475,
                           "end": 493,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 289,
                           "properties": [
                              {
                                 "pos": 475,
                                 "end": 493,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 288,
                                 "name": {
                                    "pos": 475,
                                    "end": 483,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "onClick"
                                 },
                                 "initializer": {
                                    "pos": 484,
                                    "end": 493,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 2,
                                    "kind": 291,
                                    "expression": {
                                       "pos": 485,
                                       "end": 492,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
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
                           "pos": 494,
                           "end": 519,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      number inputted = ",
                           "containsOnlyTriviaWhiteSpaces": false
                        },
                        {
                           "pos": 519,
                           "end": 534,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 291,
                           "expression": {
                              "pos": 520,
                              "end": 533,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "aNumericInput"
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
                        },
                        {
                           "pos": 541,
                           "end": 547,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 282,
                           "tagName": {
                              "pos": 542,
                              "end": 544,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "br"
                           },
                           "attributes": {
                              "pos": 544,
                              "end": 544,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 289,
                              "properties": []
                           }
                        },
                        {
                           "pos": 547,
                           "end": 572,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      and state.counter=",
                           "containsOnlyTriviaWhiteSpaces": false
                        },
                        {
                           "pos": 572,
                           "end": 581,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 291,
                           "expression": {
                              "pos": 573,
                              "end": 580,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "counter"
                           }
                        },
                        {
                           "pos": 581,
                           "end": 588,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 588,
                           "end": 594,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 282,
                           "tagName": {
                              "pos": 589,
                              "end": 591,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "br"
                           },
                           "attributes": {
                              "pos": 591,
                              "end": 591,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 289,
                              "properties": []
                           }
                        },
                        {
                           "pos": 594,
                           "end": 601,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 601,
                           "end": 696,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 601,
                              "end": 636,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 602,
                                 "end": 608,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "button"
                              },
                              "attributes": {
                                 "pos": 608,
                                 "end": 635,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": [
                                    {
                                       "pos": 608,
                                       "end": 622,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 288,
                                       "name": {
                                          "pos": 608,
                                          "end": 613,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "originalKeywordKind": 154,
                                          "escapedText": "type"
                                       },
                                       "initializer": {
                                          "pos": 614,
                                          "end": 622,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 10,
                                          "text": "button",
                                          "hasExtendedUnicodeEscape": false
                                       }
                                    },
                                    {
                                       "pos": 622,
                                       "end": 635,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 288,
                                       "name": {
                                          "pos": 622,
                                          "end": 630,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "onClick"
                                       },
                                       "initializer": {
                                          "pos": 631,
                                          "end": 635,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 291,
                                          "expression": {
                                             "pos": 632,
                                             "end": 634,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
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
                                 "pos": 636,
                                 "end": 650,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\n        Y is ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 650,
                                 "end": 653,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 651,
                                    "end": 652,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "y"
                                 }
                              },
                              {
                                 "pos": 653,
                                 "end": 687,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": " and also the other handler\n      ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              }
                           ],
                           "closingElement": {
                              "pos": 687,
                              "end": 696,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 689,
                                 "end": 695,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "button"
                              }
                           }
                        },
                        {
                           "pos": 696,
                           "end": 701,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "pos": 701,
                        "end": 707,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 703,
                           "end": 706,
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
      }
   }
];
