const isSentryDSN = require('./')

test('should check for valid sentry DSN', () => {
  expect(isSentryDSN()).toBe(false)
  expect(isSentryDSN('foobarbaz')).toBe(false)
  expect(isSentryDSN('https://<key>@sentry.io/<project>')).toBe(true)
})
