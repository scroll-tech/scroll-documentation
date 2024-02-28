// Expand to support job spec v2 TOML
Prism.languages.jpv2dot = Prism.languages.extend("dot", {});

const variable = {
  pattern: /\$\(.*\)/,
  lookbehind: true,
  inside: {
    comment: {
      pattern: /[$().]/
    },
    keyword: {
      pattern: /[^$().]/
    }
  }
};

Prism.languages.jpv2dot["attr-value"].inside.variable = variable;
Prism.languages.jpv2dot["attr-value"].inside.markup.inside.variable = variable;

Prism.languages.jpv2 = Prism.languages.extend("toml", {});
Prism.languages.insertBefore("jpv2", "string", {
  pipeline: {
    pattern: /"""(?:\\[\s\S]|[^\\])*?"""/,
    inside: Prism.languages.jpv2dot,
    greedy: true,
    alias: "language-jpv2dot"
  }
});
