const assert = require("assert");
const usda = require("../");

describe("USDA Tests", () => {
    it("should lookup ingredients for UPC 815893000163", async () => {
        const results = await usda("815893000163");
        console.log(JSON.stringify(results));
        assert.ok(results);
        assert.strictEqual(results.length > 0, true);
        assert.strictEqual(results[0].gtinUpc, "815893000163")
    });
    it("should fail because search brings back no results", async () => {
        try {
            await usda("a3453f1231g13sdgh");
        } catch (error) {
            assert.strictEqual(error, "Unable to find food with search criteria: a3453f1231g13sdgh");
        }
    });
});