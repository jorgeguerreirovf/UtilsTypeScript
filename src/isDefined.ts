import * as _ from 'lodash';

/**
 * Checks if a is Defined
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
export function isDefined(value: any) : boolean {

  if (!_.isEmpty(value)) {
    return true;
  }

  if (typeof value === 'string') {
    return value !== '';
  }

  if(typeof value == 'number') {
    return !_.isNaN(value);
  }

  if(Object.prototype.toString.call(value) === '[object Date]') {
    return true;
  }

  return typeof value === 'boolean';
}
