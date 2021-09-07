import { expect, it } from "@jest/globals";
import { COMPANY_USER_REBATE, NEW_PRODUCT_PRICE, OLD_PRODUCT_PRICE, PUBLISHED_DATE_REBATE } from "../src/config";
import calculatePrice, { getProductTypeRebate, getUserTypeRebate, getPublishedDateRebate } from "../src/price-calculator";

describe("price calculator", function () {
  it("should calc price right", function () {
    let userType = 0;
    let productType = 0;
    let price = 1;
    let publishedDate = new Date();

    let expected = 16;
    let actual = calculatePrice(userType, productType, price, publishedDate);
    expect(expected).toBe(actual);
  });

  it("Applies the correct published date rebate", () => {
    expect(getPublishedDateRebate(new Date())).toBe(PUBLISHED_DATE_REBATE);
    expect(getPublishedDateRebate(new Date("2020-01-01"))).toBe(0);
  })
});
