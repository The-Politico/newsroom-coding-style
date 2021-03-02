module.exports = {
  "root": true,
  "extends": "airbnb",
  "rules": {
    "jsx-a11y/anchor-is-valid": "off",
    "import/no-unresolved": "off",
    "react/prop-types": [1, { skipUndeclared: true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "max-len": [
      1,
      {
        "code": 80,
        "tabWidth": 2,
        "ignoreUrls": true,
        "ignoreTemplateLiterals": true
      }
    ]
  },
  "globals": {
    "React": "writable",
    "window": "writable"
  }
};
