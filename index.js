/*
 * Find the first occurrence of the pattern in the string passed.
 * 
 * @example find('Some string', 'string', 0, true)
 *
 * @param {String|RegExp} pattern pattern to match against string
 * @param {Number} [startingAt=0] index to begin matching
 * @param {Boolean} plain use indexOf instead of string.match
 *
 * @returns Array If a match is found pass an array containing the start and end of the match.
 */
function find (hay, pattern, startingAt, plain) {
  startingAt = startingAt || 0

  let needle
  if (plain) {
    pattern = String(pattern)
    needle = hay.slice(startingAt).indexOf(pattern)
  } else {
    needle = hay.slice(startingAt || 0).match(pattern)
    needle = needle ? needle[0] : null
  }

  if (!needle || needle === -1) {
    return [null, null]
  }

  if (plain) {
    needle += startingAt
    return [needle, needle + pattern.length]
  }

  let start = plain 
    ? needle
    : hay.slice(startingAt).indexOf(needle)

  start += startingAt

  let end = plain
    ? start + pattern.length
    : start + needle.length

  return [start, end]
}

module.exports = find
