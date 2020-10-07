# USDA Ingredients API

A library that makes REST requests against the USDA API to pull ingredients for food products.

## Installation

```bash
# through npm
npm i usda-ingredients-api --save
```

## Example Usage

```javascript
const usda = require("usda-ingredients-api");

const results = await usda("815893000163");

console.log(results);

/*
[
    {
        "fdcId": 383682,
        "description": "A.A. BORSARI, PEPPER SEASONING PEPPERCORN",
        "lowercaseDescription": "a.a. borsari, pepper seasoning peppercorn",
        "dataType": "Branded",
        "gtinUpc": "815893000163",
        "publishedDate": "2019-04-01",
        "brandOwner": "Valley Brook Farm",
        "ingredients": "CRACKED BLACK PEPPER, GARLIC, SEA SALT, SPICES.",
        "foodNutrients": [
            {
                "nutrientId": 1004,
                "nutrientName": "Total lipid (fat)",
                "nutrientNumber": "204",
                "unitName": "G",
                "derivationCode": "LCCD",
                "derivationDescription": "Calculated from a daily value percentage per serving size measure",
                "value": 0
            },
            {
                "nutrientId": 1005,
                "nutrientName": "Carbohydrate, by difference",
                "nutrientNumber": "205",
                "unitName": "G",
                "derivationCode": "LCCD",
                "derivationDescription": "Calculated from a daily value percentage per serving size measure",
                "value": 0
            },
            {
                "nutrientId": 1003,
                "nutrientName": "Protein",
                "nutrientNumber": "203",
                "unitName": "G",
                "derivationCode": "LCCS",
                "derivationDescription": "Calculated from value per serving size measure",
                "value": 0
            },
            {
                "nutrientId": 1008,
                "nutrientName": "Energy",
                "nutrientNumber": "208",
                "unitName": "KCAL",
                "derivationCode": "LCCS",
                "derivationDescription": "Calculated from value per serving size measure",
                "value": 0
            },
            {
                "nutrientId": 1093,
                "nutrientName": "Sodium, Na",
                "nutrientNumber": "307",
                "unitName": "MG",
                "derivationCode": "LCCS",
                "derivationDescription": "Calculated from value per serving size measure",
                "value": 10556
            }
        ],
        "allHighlightFields": "<b>GTIN/UPC</b>: <em>815893000163</em>",
        "score": -651.1118
    }
]
*/
```