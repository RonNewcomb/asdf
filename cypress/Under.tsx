
import Under from '../components/Under.js'



describe('Under', () => {

    
    it('uses custom text for the button label', () => {
        cy.mount(<Under>Click me!</Under>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});


/*
[
   {
      "pos": 57,
      "end": 742,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 4981891,
      "kind": 259,
      "name": {
         "pos": 84,
         "end": 90,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 0,
         "kind": 79,
         "escapedText": "Under"
      },
      "modifiers": [
         {
            "pos": 57,
            "end": 67,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 93
         },
         {
            "pos": 67,
            "end": 75,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "kind": 88
         }
      ],
      "parameters": [
         {
            "pos": 91,
            "end": 135,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 91,
               "end": 108,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 92,
                     "end": 106,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 92,
                        "end": 106,
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
               "pos": 109,
               "end": 135,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 184,
               "members": [
                  {
                     "pos": 111,
                     "end": 133,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 168,
                     "name": {
                        "pos": 111,
                        "end": 125,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "aNumericInput"
                     },
                     "type": {
                        "pos": 126,
                        "end": 133,
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
            "pos": 136,
            "end": 157,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 136,
               "end": 149,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 138,
                     "end": 147,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 138,
                        "end": 147,
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
               "pos": 150,
               "end": 157,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 180,
               "typeName": {
                  "pos": 150,
                  "end": 157,
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
         "pos": 158,
         "end": 742,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 4457603,
         "kind": 238,
         "statements": [
            {
               "pos": 160,
               "end": 194,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 0,
               "kind": 241,
               "expression": {
                  "pos": 160,
                  "end": 193,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 210,
                  "expression": {
                     "pos": 160,
                     "end": 175,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 208,
                     "expression": {
                        "pos": 160,
                        "end": 171,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "console"
                     },
                     "name": {
                        "pos": 172,
                        "end": 175,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "log"
                     }
                  },
                  "arguments": [
                     {
                        "pos": 176,
                        "end": 192,
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
               "pos": 194,
               "end": 241,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 194,
                  "end": 240,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981760,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 203,
                        "end": 240,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525312,
                        "kind": 257,
                        "name": {
                           "pos": 203,
                           "end": 225,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 205,
                                 "end": 212,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 205,
                                    "end": 212,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "counter"
                                 }
                              },
                              {
                                 "pos": 213,
                                 "end": 224,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 213,
                                    "end": 224,
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
                           "pos": 227,
                           "end": 240,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 227,
                              "end": 236,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "arguments": [
                              {
                                 "pos": 237,
                                 "end": 239,
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
               "pos": 241,
               "end": 276,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 241,
                  "end": 275,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981760,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 250,
                        "end": 275,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525312,
                        "kind": 257,
                        "name": {
                           "pos": 250,
                           "end": 260,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 252,
                                 "end": 253,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 252,
                                    "end": 253,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "y"
                                 }
                              },
                              {
                                 "pos": 254,
                                 "end": 259,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 254,
                                    "end": 259,
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
                           "pos": 262,
                           "end": 275,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 262,
                              "end": 271,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "arguments": [
                              {
                                 "pos": 272,
                                 "end": 274,
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
               "pos": 276,
               "end": 379,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 276,
                  "end": 378,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4457472,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 287,
                        "end": 378,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1024,
                        "kind": 257,
                        "name": {
                           "pos": 287,
                           "end": 295,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "handler"
                        },
                        "initializer": {
                           "pos": 297,
                           "end": 378,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1024,
                           "kind": 216,
                           "parameters": [],
                           "body": {
                              "pos": 303,
                              "end": 378,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 238,
                              "statements": [
                                 {
                                    "pos": 305,
                                    "end": 343,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 241,
                                    "expression": {
                                       "pos": 305,
                                       "end": 342,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 210,
                                       "expression": {
                                          "pos": 305,
                                          "end": 322,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 208,
                                          "expression": {
                                             "pos": 305,
                                             "end": 318,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "console"
                                          },
                                          "name": {
                                             "pos": 319,
                                             "end": 322,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "log"
                                          }
                                       },
                                       "arguments": [
                                          {
                                             "pos": 323,
                                             "end": 332,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 10,
                                             "text": "clicked",
                                             "hasExtendedUnicodeEscape": false
                                          },
                                          {
                                             "pos": 333,
                                             "end": 341,
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
                                    "pos": 343,
                                    "end": 373,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 241,
                                    "expression": {
                                       "pos": 343,
                                       "end": 372,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 210,
                                       "expression": {
                                          "pos": 343,
                                          "end": 359,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "setCounter"
                                       },
                                       "arguments": [
                                          {
                                             "pos": 360,
                                             "end": 371,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 223,
                                             "left": {
                                                "pos": 360,
                                                "end": 367,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 79,
                                                "escapedText": "counter"
                                             },
                                             "operatorToken": {
                                                "pos": 367,
                                                "end": 369,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 39
                                             },
                                             "right": {
                                                "pos": 369,
                                                "end": 371,
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
                              "pos": 300,
                              "end": 303,
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
               "pos": 379,
               "end": 469,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457473,
               "kind": 240,
               "declarationList": {
                  "pos": 379,
                  "end": 468,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4457473,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 390,
                        "end": 468,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1025,
                        "kind": 257,
                        "name": {
                           "pos": 390,
                           "end": 393,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "h2"
                        },
                        "initializer": {
                           "pos": 395,
                           "end": 468,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1025,
                           "kind": 216,
                           "parameters": [
                              {
                                 "pos": 397,
                                 "end": 409,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1,
                                 "kind": 166,
                                 "name": {
                                    "pos": 397,
                                    "end": 402,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "event"
                                 },
                                 "type": {
                                    "pos": 403,
                                    "end": 409,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1,
                                    "kind": 180,
                                    "typeName": {
                                       "pos": 403,
                                       "end": 409,
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
                              "pos": 413,
                              "end": 468,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 238,
                              "statements": [
                                 {
                                    "pos": 415,
                                    "end": 433,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 241,
                                    "expression": {
                                       "pos": 415,
                                       "end": 432,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 210,
                                       "expression": {
                                          "pos": 415,
                                          "end": 425,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "sety"
                                       },
                                       "arguments": [
                                          {
                                             "pos": 426,
                                             "end": 431,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 223,
                                             "left": {
                                                "pos": 426,
                                                "end": 427,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 79,
                                                "escapedText": "y"
                                             },
                                             "operatorToken": {
                                                "pos": 427,
                                                "end": 429,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 39
                                             },
                                             "right": {
                                                "pos": 429,
                                                "end": 431,
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
                                    "pos": 433,
                                    "end": 463,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 241,
                                    "expression": {
                                       "pos": 433,
                                       "end": 462,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 210,
                                       "expression": {
                                          "pos": 433,
                                          "end": 460,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 208,
                                          "expression": {
                                             "pos": 433,
                                             "end": 444,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 0,
                                             "kind": 79,
                                             "escapedText": "event"
                                          },
                                          "name": {
                                             "pos": 445,
                                             "end": 460,
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
                              "pos": 410,
                              "end": 413,
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
               "pos": 469,
               "end": 739,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4194434,
               "kind": 250,
               "expression": {
                  "pos": 481,
                  "end": 738,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 2,
                  "kind": 214,
                  "expression": {
                     "pos": 483,
                     "end": 733,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 2,
                     "kind": 281,
                     "openingElement": {
                        "pos": 483,
                        "end": 512,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 283,
                        "tagName": {
                           "pos": 490,
                           "end": 493,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        },
                        "attributes": {
                           "pos": 493,
                           "end": 511,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 289,
                           "properties": [
                              {
                                 "pos": 493,
                                 "end": 511,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 288,
                                 "name": {
                                    "pos": 493,
                                    "end": 501,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "onClick"
                                 },
                                 "initializer": {
                                    "pos": 502,
                                    "end": 511,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 2,
                                    "kind": 291,
                                    "expression": {
                                       "pos": 503,
                                       "end": 510,
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
                           "pos": 512,
                           "end": 538,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      number inputted = ",
                           "containsOnlyTriviaWhiteSpaces": false
                        },
                        {
                           "pos": 538,
                           "end": 553,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 291,
                           "expression": {
                              "pos": 539,
                              "end": 552,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "aNumericInput"
                           }
                        },
                        {
                           "pos": 553,
                           "end": 561,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 561,
                           "end": 567,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 282,
                           "tagName": {
                              "pos": 562,
                              "end": 564,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "br"
                           },
                           "attributes": {
                              "pos": 564,
                              "end": 564,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 289,
                              "properties": []
                           }
                        },
                        {
                           "pos": 567,
                           "end": 593,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      and state.counter=",
                           "containsOnlyTriviaWhiteSpaces": false
                        },
                        {
                           "pos": 593,
                           "end": 602,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 291,
                           "expression": {
                              "pos": 594,
                              "end": 601,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "counter"
                           }
                        },
                        {
                           "pos": 602,
                           "end": 610,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 610,
                           "end": 616,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 282,
                           "tagName": {
                              "pos": 611,
                              "end": 613,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "br"
                           },
                           "attributes": {
                              "pos": 613,
                              "end": 613,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 289,
                              "properties": []
                           }
                        },
                        {
                           "pos": 616,
                           "end": 624,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 624,
                           "end": 721,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 624,
                              "end": 659,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 625,
                                 "end": 631,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "button"
                              },
                              "attributes": {
                                 "pos": 631,
                                 "end": 658,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": [
                                    {
                                       "pos": 631,
                                       "end": 645,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 288,
                                       "name": {
                                          "pos": 631,
                                          "end": 636,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "originalKeywordKind": 154,
                                          "escapedText": "type"
                                       },
                                       "initializer": {
                                          "pos": 637,
                                          "end": 645,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 10,
                                          "text": "button",
                                          "hasExtendedUnicodeEscape": false
                                       }
                                    },
                                    {
                                       "pos": 645,
                                       "end": 658,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 2,
                                       "kind": 288,
                                       "name": {
                                          "pos": 645,
                                          "end": 653,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "onClick"
                                       },
                                       "initializer": {
                                          "pos": 654,
                                          "end": 658,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 2,
                                          "kind": 291,
                                          "expression": {
                                             "pos": 655,
                                             "end": 657,
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
                                 "pos": 659,
                                 "end": 674,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": "\r\n        Y is ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              },
                              {
                                 "pos": 674,
                                 "end": 677,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 291,
                                 "expression": {
                                    "pos": 675,
                                    "end": 676,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "y"
                                 }
                              },
                              {
                                 "pos": 677,
                                 "end": 712,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 11,
                                 "text": " and also the other handler\r\n      ",
                                 "containsOnlyTriviaWhiteSpaces": false
                              }
                           ],
                           "closingElement": {
                              "pos": 712,
                              "end": 721,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 714,
                                 "end": 720,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "button"
                              }
                           }
                        },
                        {
                           "pos": 721,
                           "end": 727,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "pos": 727,
                        "end": 733,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 729,
                           "end": 732,
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
]
*/

