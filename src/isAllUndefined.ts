import * as _ from 'lodash';
import { isDefined } from "./isDefined";
/**
 * Checks if all values are non-Defined
 *
 * A value is Defined, if it is a native type variable
 * or a non-Empty defined Object.
 *
 * Examples:
 *
 * isDefined(null)
 * // => false
 *
 * isDefined(true)
 * // => true
 *
 * isDefined(false)
 * // => true
 *
 * isDefined(1)
 * // => true
 *
 * isDefined([])
 * // => false
 *
 * isDefined({})
 * // => false
 *
 * isDefined([1, 2, 3])
 * // => false
 *
 * isDefined({ 'a': 1 })
 * // => false
 *
 *
 * @param value
 * @returns {boolean}
 */
export function isAllUndefined(...values: any[]) : boolean {
  let outVal = true;
  _.each(values, 
    (item) => outVal = outVal && !isDefined(item));
  return outVal;
}
