const request = require("request");

const defaultRequestOptions = {
    method: "POST",
    url: "https://fdc.nal.usda.gov/portal-data/external/search",
    headers:
        { "Content-Type": "application/json" },
    body:
    {
        includeDataTypes:
        {
            "Survey (FNDDS)": true,
            Foundation: true,
            Branded: true,
            "SR Legacy": true
        },
        referenceFoodsCheckBox: true,
        sortCriteria: { sortColumn: "description", sortDirection: "asc" },
        pageNumber: 1,
        generalSearchInput: "",
        exactBrandOwner: null
    },
    json: true
};



module.exports = async (generalSearchInput) => {
    return new Promise((resolve, reject) => {
        defaultRequestOptions.body.generalSearchInput = generalSearchInput;
        request(defaultRequestOptions, (error, response, body) => {
            if (error) {
                reject(error);
            } else if (!body.foods || !body.foods.length) {
                reject(`Unable to find food with search criteria: ${generalSearchInput}`);
            }
            resolve(body.foods);
        });
    });
}