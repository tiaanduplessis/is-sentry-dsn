module.exports = function isSentryDSN (str = '') {
  if (!str) {
    return false
  }

  // {PROTOCOL}://{PUBLIC_KEY}@{HOST}/{PROJECT_ID}
  return /https:\/\/.+@.+\/.+/.test(str)
}
