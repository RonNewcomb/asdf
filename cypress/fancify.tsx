
import FANCIFY from '../components/fancify.js'



describe('FANCIFY', () => {

    
    it('uses custom text for the button label', () => {
        cy.mount(<FANCIFY>Click me!</FANCIFY>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    

});


/*
[
   {
      "pos": 57,
      "end": 495,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 4981891,
      "kind": 259,
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
            "pos": 86,
            "end": 129,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 86,
               "end": 101,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 87,
                     "end": 89,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 87,
                        "end": 89,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "x"
                     }
                  },
                  {
                     "pos": 90,
                     "end": 99,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 90,
                        "end": 99,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "children"
                     }
                  }
               ]
            },
            "type": {
               "pos": 102,
               "end": 129,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 184,
               "members": [
                  {
                     "pos": 104,
                     "end": 112,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 168,
                     "name": {
                        "pos": 104,
                        "end": 106,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "x"
                     },
                     "type": {
                        "pos": 107,
                        "end": 111,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1,
                        "kind": 131
                     }
                  },
                  {
                     "pos": 112,
                     "end": 127,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1,
                     "kind": 168,
                     "name": {
                        "pos": 112,
                        "end": 121,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 79,
                        "escapedText": "children"
                     },
                     "type": {
                        "pos": 123,
                        "end": 127,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1,
                        "kind": 131
                     },
                     "questionToken": {
                        "pos": 121,
                        "end": 122,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 57
                     }
                  }
               ]
            }
         },
         {
            "pos": 130,
            "end": 151,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 525313,
            "kind": 166,
            "name": {
               "pos": 130,
               "end": 143,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 525312,
               "kind": 203,
               "elements": [
                  {
                     "pos": 132,
                     "end": 141,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1024,
                     "kind": 205,
                     "name": {
                        "pos": 132,
                        "end": 141,
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
               "pos": 144,
               "end": 151,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 1,
               "kind": 180,
               "typeName": {
                  "pos": 144,
                  "end": 151,
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
         "pos": 152,
         "end": 495,
         "flags": 0,
         "modifierFlagsCache": 0,
         "transformFlags": 4457602,
         "kind": 238,
         "statements": [
            {
               "pos": 154,
               "end": 194,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 154,
                  "end": 193,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4981760,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 163,
                        "end": 193,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 525312,
                        "kind": 257,
                        "name": {
                           "pos": 163,
                           "end": 173,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 525312,
                           "kind": 204,
                           "elements": [
                              {
                                 "pos": 165,
                                 "end": 166,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 165,
                                    "end": 166,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "f"
                                 }
                              },
                              {
                                 "pos": 167,
                                 "end": 172,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1024,
                                 "kind": 205,
                                 "name": {
                                    "pos": 167,
                                    "end": 172,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "setf"
                                 }
                              }
                           ]
                        },
                        "initializer": {
                           "pos": 175,
                           "end": 193,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 175,
                              "end": 184,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "useState"
                           },
                           "arguments": [
                              {
                                 "pos": 185,
                                 "end": 192,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
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
               "pos": 194,
               "end": 317,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4194434,
               "kind": 242,
               "expression": {
                  "pos": 204,
                  "end": 213,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 221,
                  "operator": 53,
                  "operand": {
                     "pos": 205,
                     "end": 213,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 79,
                     "escapedText": "children"
                  }
               },
               "thenStatement": {
                  "pos": 214,
                  "end": 291,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4194434,
                  "kind": 238,
                  "statements": [
                     {
                        "pos": 216,
                        "end": 261,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 241,
                        "expression": {
                           "pos": 216,
                           "end": 260,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 210,
                           "expression": {
                              "pos": 216,
                              "end": 234,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 208,
                              "expression": {
                                 "pos": 216,
                                 "end": 229,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "console"
                              },
                              "name": {
                                 "pos": 230,
                                 "end": 234,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "warn"
                              }
                           },
                           "arguments": [
                              {
                                 "pos": 235,
                                 "end": 259,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 10,
                                 "text": "Fancify needs children",
                                 "hasExtendedUnicodeEscape": false
                              }
                           ]
                        }
                     },
                     {
                        "pos": 261,
                        "end": 286,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 4194434,
                        "kind": 250,
                        "expression": {
                           "pos": 273,
                           "end": 285,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 281,
                           "openingElement": {
                              "pos": 273,
                              "end": 279,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 283,
                              "tagName": {
                                 "pos": 275,
                                 "end": 278,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "div"
                              },
                              "attributes": {
                                 "pos": 278,
                                 "end": 278,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 289,
                                 "properties": []
                              }
                           },
                           "children": [],
                           "closingElement": {
                              "pos": 279,
                              "end": 285,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 2,
                              "kind": 284,
                              "tagName": {
                                 "pos": 281,
                                 "end": 284,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
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
                  "pos": 296,
                  "end": 317,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "kind": 241,
                  "expression": {
                     "pos": 296,
                     "end": 316,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 0,
                     "kind": 210,
                     "expression": {
                        "pos": 296,
                        "end": 308,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "kind": 208,
                        "expression": {
                           "pos": 296,
                           "end": 304,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "console"
                        },
                        "name": {
                           "pos": 305,
                           "end": 308,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "log"
                        }
                     },
                     "arguments": [
                        {
                           "pos": 309,
                           "end": 315,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 10,
                           "text": "good",
                           "hasExtendedUnicodeEscape": false
                        }
                     ]
                  }
               }
            },
            {
               "pos": 317,
               "end": 384,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4457472,
               "kind": 240,
               "declarationList": {
                  "pos": 317,
                  "end": 383,
                  "flags": 2,
                  "modifierFlagsCache": 0,
                  "transformFlags": 4457472,
                  "kind": 258,
                  "declarations": [
                     {
                        "pos": 328,
                        "end": 383,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1024,
                        "kind": 257,
                        "name": {
                           "pos": 328,
                           "end": 335,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "toggle"
                        },
                        "initializer": {
                           "pos": 337,
                           "end": 383,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1024,
                           "kind": 216,
                           "parameters": [],
                           "body": {
                              "pos": 343,
                              "end": 383,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 210,
                              "expression": {
                                 "pos": 343,
                                 "end": 348,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 0,
                                 "kind": 79,
                                 "escapedText": "setf"
                              },
                              "arguments": [
                                 {
                                    "pos": 349,
                                    "end": 382,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 224,
                                    "condition": {
                                       "pos": 349,
                                       "end": 362,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 223,
                                       "left": {
                                          "pos": 349,
                                          "end": 350,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 79,
                                          "escapedText": "f"
                                       },
                                       "operatorToken": {
                                          "pos": 350,
                                          "end": 354,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 36
                                       },
                                       "right": {
                                          "pos": 354,
                                          "end": 362,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 0,
                                          "kind": 10,
                                          "text": "large",
                                          "hasExtendedUnicodeEscape": false
                                       }
                                    },
                                    "questionToken": {
                                       "pos": 362,
                                       "end": 364,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 57
                                    },
                                    "whenTrue": {
                                       "pos": 364,
                                       "end": 372,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 10,
                                       "text": "small",
                                       "hasExtendedUnicodeEscape": false
                                    },
                                    "colonToken": {
                                       "pos": 372,
                                       "end": 374,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 58
                                    },
                                    "whenFalse": {
                                       "pos": 374,
                                       "end": 382,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
                                       "kind": 10,
                                       "text": "large",
                                       "hasExtendedUnicodeEscape": false
                                    }
                                 }
                              ]
                           },
                           "equalsGreaterThanToken": {
                              "pos": 340,
                              "end": 343,
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
               "pos": 384,
               "end": 492,
               "flags": 0,
               "modifierFlagsCache": 0,
               "transformFlags": 4195458,
               "kind": 250,
               "expression": {
                  "pos": 396,
                  "end": 491,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 1026,
                  "kind": 214,
                  "expression": {
                     "pos": 398,
                     "end": 486,
                     "flags": 0,
                     "modifierFlagsCache": 0,
                     "transformFlags": 1026,
                     "kind": 281,
                     "openingElement": {
                        "pos": 398,
                        "end": 452,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 1026,
                        "kind": 283,
                        "tagName": {
                           "pos": 405,
                           "end": 408,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 0,
                           "kind": 79,
                           "escapedText": "div"
                        },
                        "attributes": {
                           "pos": 408,
                           "end": 451,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 1026,
                           "kind": 289,
                           "properties": [
                              {
                                 "pos": 408,
                                 "end": 434,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 1026,
                                 "kind": 288,
                                 "name": {
                                    "pos": 408,
                                    "end": 414,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "style"
                                 },
                                 "initializer": {
                                    "pos": 415,
                                    "end": 434,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 1026,
                                    "kind": 291,
                                    "expression": {
                                       "pos": 416,
                                       "end": 433,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 1024,
                                       "kind": 225,
                                       "head": {
                                          "pos": 416,
                                          "end": 430,
                                          "flags": 0,
                                          "modifierFlagsCache": 0,
                                          "transformFlags": 1024,
                                          "kind": 15,
                                          "text": "font-size: ",
                                          "rawText": "font-size: ",
                                          "templateFlags": 0
                                       },
                                       "templateSpans": [
                                          {
                                             "pos": 430,
                                             "end": 433,
                                             "flags": 0,
                                             "modifierFlagsCache": 0,
                                             "transformFlags": 1024,
                                             "kind": 236,
                                             "expression": {
                                                "pos": 430,
                                                "end": 431,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 0,
                                                "kind": 79,
                                                "escapedText": "f"
                                             },
                                             "literal": {
                                                "pos": 431,
                                                "end": 433,
                                                "flags": 0,
                                                "modifierFlagsCache": 0,
                                                "transformFlags": 1024,
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
                                 "pos": 434,
                                 "end": 451,
                                 "flags": 0,
                                 "modifierFlagsCache": 0,
                                 "transformFlags": 2,
                                 "kind": 288,
                                 "name": {
                                    "pos": 434,
                                    "end": 442,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 0,
                                    "kind": 79,
                                    "escapedText": "onClick"
                                 },
                                 "initializer": {
                                    "pos": 443,
                                    "end": 451,
                                    "flags": 0,
                                    "modifierFlagsCache": 0,
                                    "transformFlags": 2,
                                    "kind": 291,
                                    "expression": {
                                       "pos": 444,
                                       "end": 450,
                                       "flags": 0,
                                       "modifierFlagsCache": 0,
                                       "transformFlags": 0,
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
                           "pos": 452,
                           "end": 460,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n      ",
                           "containsOnlyTriviaWhiteSpaces": true
                        },
                        {
                           "pos": 460,
                           "end": 470,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 291,
                           "expression": {
                              "pos": 461,
                              "end": 469,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "children"
                           }
                        },
                        {
                           "pos": 470,
                           "end": 471,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": " ",
                           "containsOnlyTriviaWhiteSpaces": false
                        },
                        {
                           "pos": 471,
                           "end": 474,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 291,
                           "expression": {
                              "pos": 472,
                              "end": 473,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "kind": 79,
                              "escapedText": "x"
                           }
                        },
                        {
                           "pos": 474,
                           "end": 480,
                           "flags": 0,
                           "modifierFlagsCache": 0,
                           "transformFlags": 2,
                           "kind": 11,
                           "text": "\r\n    ",
                           "containsOnlyTriviaWhiteSpaces": true
                        }
                     ],
                     "closingElement": {
                        "pos": 480,
                        "end": 486,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 2,
                        "kind": 284,
                        "tagName": {
                           "pos": 482,
                           "end": 485,
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
         "escapedText": "FANCIFY"
      }
   }
]
*/

