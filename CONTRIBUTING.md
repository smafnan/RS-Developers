# Contributing to RS Developers

Thanks for taking the time to contribute. This document covers how to get a
change from your machine into `main`.

## Before you start

For anything more than a typo, **open an issue first** and say what you plan to
do. It avoids two people building the same thing, and it avoids you writing
code that gets rejected on approach rather than on quality.

If an issue already exists and nobody is assigned, comment on it to claim it.

## Setup

There is no build step and there are no dependencies. Clone the repo and open
`index.html` in a browser.

```bash
git clone https://github.com/smafnan/RS-Developers.git
cd RS-Developers
```

If you do not have write access, fork the repo on GitHub first and clone your
fork instead.

## Making a change

1. **Branch off `main`.** Use a short, descriptive name.

   ```bash
   git checkout main
   git pull
   git checkout -b add-contact-form-backend
   ```

   Suggested prefixes: `feat/`, `fix/`, `docs/`, `chore/`.

2. **Make your change.** Keep the pull request focused on one thing. A PR that
   fixes a bug *and* restructures three files is hard to review and slow to
   merge.

3. **Check it in a browser.** Open `index.html` and confirm the page still
   renders and every link and form control still works.

4. **Commit.** Write the subject line in the imperative mood, under about 70
   characters, and explain *why* in the body if it is not obvious.

   ```
   Add responsive meta tag to index.html

   Without it the page renders at desktop width on phones and the user has
   to pinch to zoom.
   ```

5. **Push and open a pull request** against `main`.

   ```bash
   git push -u origin add-contact-form-backend
   ```

   GitHub will prompt you to open the PR. Fill in the template — it is short.

## Pull request expectations

- Target `main`
- One logical change per PR
- Title describes the change, not the file that changed
- Link the issue it closes: `Closes #12`
- Include a before/after screenshot for anything that changes what the page
  looks like

A maintainer will review it. Expect comments — review feedback is normal and is
not a judgement on your work. Push follow-up commits to the same branch to
address it; do not open a new PR.

## Code style

Nothing is enforced by tooling yet, so the bar is consistency with what is
already there:

- Two spaces for indentation
- Lowercase HTML tag and attribute names
- Double quotes on attribute values
- Semantic elements over `<div>` where one fits (`<header>`, `<nav>`,
  `<section>`, `<footer>`)
- Keep the markup accessible: every input gets a `<label>`, every image gets
  `alt` text, headings descend in order without skipping levels

## Reporting bugs

Open an issue using the bug report template. The single most useful thing you
can include is the exact steps to reproduce it, plus your browser and version.

## Questions

Open an issue with the question and prefix the title with `Question:`.
