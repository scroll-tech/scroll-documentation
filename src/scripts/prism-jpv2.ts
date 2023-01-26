// Expand with support for job spec v2 toml
Prism.languages.jpv2dot = Prism.languages.extend("dot", {})

const variable = {
  pattern: /\$\(.*\)/,
  lookbehind: !0,
  inside: {
    comment: {
      pattern: /[$().]/,
    },
    keyword: {
      pattern: /[^$().]/,
    },
  },
}

Prism.languages.jpv2dot["attr-value"].inside.variable = variable
Prism.languages.jpv2dot["attr-value"].inside.markup.inside.variable = variable

Prism.languages.jpv2 = Prism.languages.extend("toml", {})
Prism.languages.insertBefore("jpv2", "string", {
  pipeline: {
    pattern: /"""(?:\\[\s\S]|[^\\])*?"""/,
    inside: Prism.languages.jpv2dot,
    greedy: !0,
    alias: "language-jpv2dot",
  },
})
