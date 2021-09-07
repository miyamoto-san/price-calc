import { COMPANY_USER_REBATE, NEW_PRODUCT_PRICE, OLD_PRODUCT_PRICE, PUBLISHED_DATE_REBATE } from "./config";
/**
 * Calculate price
 * @param {0 | 1} userType
 * @param {0 | 1} productType
 * @param {number} price
 * @param {Date} publishedDate
 * @returns {number}
 */
function calculatePrice(userType, productType, price, publishedDate) {
  try {
    return (
      price +
      getUserTypeRebate(userType) +
      getProductTypeRebate(productType) +
      getPublishedDateRebate(publishedDate)
    );
  } catch (e) {
    console.log(e.message);
  }
}

/**
 * Applies rebate based on userType
 * @param {0 | 1} userType
 * @returns {boolean}
 */
export function getUserTypeRebate(userType) {
  return userType === 0 ? 0 : COMPANY_USER_REBATE;
}

/**
 * Applies rebate based on productType
 * @param {0 | 1} productType
 * @returns {boolean}
 */
export function getProductTypeRebate(productType) {
  return productType === 0 ? NEW_PRODUCT_PRICE : OLD_PRODUCT_PRICE;
}

/**
 * Applies rebate based on published date
 * @param {Date} publishedDate
 * @returns {boolean}
 */
export function getPublishedDateRebate(publishedDate) {
  return publishedDate.toDateString() === new Date().toDateString()
    ? PUBLISHED_DATE_REBATE
    : 0;
}

export default calculatePrice;
