# usda-ingredients-api

a private REST API used for pulling ingredients given a UPC code from ndb.nal.usda.gov

## installation

```
git clone https://github.com/joshterrill/usda-ingredients-api
cd usda-ingredients-api/
npm install
npm start
```

## example usage

### Get ingredients by UPC code:
##### GET `/upc/815893000163`
##### Response:

```
{
  "success": true,
  "error": null,
  "data": {
    "upc": "815893000163",
    "fullProductText": "A.A. BORSARI, PEPPER SEASONING PEPPERCORN, UPC: 815893000163",
    "productText": "A.A. BORSARI, PEPPER SEASONING PEPPERCORN",
    "ingredientsList": [
      "CRACKED BLACK PEPPER",
      "GARLIC",
      "SEA SALT",
      "SPICES"
    ],
    "ingredientsText": "CRACKED BLACK PEPPER, GARLIC, SEA SALT, SPICES"
  }
}
```

## contact

Email: joshterrill.dev@gmail.com