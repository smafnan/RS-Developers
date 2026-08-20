// Cheap structural sanity check for index.html: every opening tag
// (including the custom <x-dc>, <sc-if>, <sc-for> elements the dc-runtime
// template uses) has a matching close, and every tag's attribute list has
// no unterminated quotes. This is not an HTML5 validator — a strict one
// would flag the DSL's camelCase attributes (onClick, style-hover, ref=)
// as invalid, since they aren't standard HTML. It only catches the class
// of mistake a diff like this one is actually likely to introduce: a
// dropped closing tag or an unbalanced quote while hand-editing the
// template.
const fs = require("fs");
const path = require("path");

const file = path.resolve(__dirname, "..", "..", "index.html");
let html = fs.readFileSync(file, "utf8");

// Strip <script>/<style> bodies and HTML comments — none of them hold
// markup, and comments in particular may mention tag-like text (e.g. a
// reviewer note that says "<x-dc>") that isn't an actual tag.
html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/g, "<script></script>");
html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/g, "<style></style>");
html = html.replace(/<!--[\s\S]*?-->/g, "");

const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

const tagPattern = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:[^>"']|"[^"]*"|'[^']*')*?)(\/?)>/g;
const stack = [];
let match;
let count = 0;

while ((match = tagPattern.exec(html)) !== null) {
  const [, closing, name, , selfClosing] = match;
  const tag = name.toLowerCase();
  count++;

  if (closing) {
    const top = stack.pop();
    if (!top || top !== tag) {
      const line = html.slice(0, match.index).split("\n").length;
      console.error(`Mismatched closing tag </${tag}> near line ${line} (expected </${top ?? "nothing on stack"}>).`);
      process.exit(1);
    }
    continue;
  }

  if (selfClosing || VOID_ELEMENTS.has(tag)) continue;
  stack.push(tag);
}

if (stack.length > 0) {
  console.error(`Unclosed tag(s) at end of file: ${stack.join(", ")}`);
  process.exit(1);
}

console.log(`index.html: ${count} tags checked, all balanced.`);
