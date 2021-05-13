module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    // Base rules
    indentation: 2,
    'number-leading-zero': 'never',
    'string-quotes': 'double',
    'selector-max-id': 0,
    'selector-list-comma-newline-after': 'always',
    "rule-empty-line-before": [
      "always-multi-line", {
        except: ["first-nested"],
        ignore: ["after-comment"],
      }
    ],
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'] },
    ],
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'at-rule-empty-line-before': [
      'always', {
        except: [
          'blockless-after-same-name-blockless',
          'first-nested',
        ],
        ignore: ['after-comment'],
      }
    ],
    "declaration-empty-line-before": [ "always", {
      except: [
        "after-declaration",
        "first-nested",
      ],
      ignore: [
        "after-comment",
        "inside-single-line-block",
      ],
    } ],
    'max-empty-lines': 1,

    // Sass rules
    'max-nesting-depth': 2,
    'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
    'scss/at-extend-no-missing-placeholder': true,
    "scss/dollar-variable-empty-line-before": [
      "always",
      {
        except: [
          "after-dollar-variable",
          "first-nested"
        ],
        ignore: ["after-comment"],
      }
    ],
    'order/order': [
      'declarations',
      { type: 'at-rule' },
      { type: 'at-rule', hasBlock: true },
      'rules',
    ],
  },
};
