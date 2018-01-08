import a11y from 'react-a11y'

const rules = {
  'avoid-positive-tabindex': 'warn',
  'button-role-space': 'warn',
  'hidden-uses-tabindex': 'warn',
  'img-uses-alt': 'warn',
  'label-uses-for': 'warn',
  'mouse-events-map-to-key-events': 'warn',
  'no-access-key': 'warn',
  'no-hash-ref': 'warn',
  'no-unsupported-elements-use-aria': 'warn',
  'onclick-uses-role': 'warn',
  'onclick-uses-tabindex': 'warn',
  'redundant-alt': 'warn',
  'tabindex-uses-button': 'warn',
  'use-onblur-not-onchange': 'warn',
  'valid-aria-role': 'warn',
}

export default (React, ReactDOM) => a11y(React, ReactDOM, { rules })
