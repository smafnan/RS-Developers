# R&S Builders — marketing site

A dark-editorial marketing site for R&S Builders, a residential
construction, remodeling, interiors and property company. One `index.html`,
five views — home, work, services, studio and contact — switched client-side
with no page reloads and no build step.

**Preview:** https://rs-builders-website.netlify.app — a separate deployment
used to review this redesign before merge. It is not wired to this repo; once
merged, point your own hosting and domain at `main` (see
[Deployment](#deployment)).

## How the page works

There's no framework install and no bundler. `index.html` is written in a
JSX-like template syntax (`<x-dc>`, `{{ expression }}` bindings, `sc-if` /
`sc-for` directives, `onClick`/`ref`/`style-hover` attributes) that
`support.js` parses and renders entirely in the browser — it pulls
React, ReactDOM and Babel Standalone from a CDN at load time. `support.js`
itself is generated output (see its header comment) and shouldn't be
hand-edited; content and markup changes belong in `index.html`.

Because of this, a stock HTML validator isn't the right tool for checking
`index.html` — see [CI](#ci) for what actually runs against it.

## Getting started

No build step, no dependencies to install.

```bash
git clone https://github.com/smafnan/RS-Developers.git
cd RS-Developers
python3 -m http.server 8000
# then visit http://localhost:8000
```

Opening `index.html` directly (`file://`) mostly works too, but serving it
over HTTP avoids the handful of browsers that restrict local script/fetch
access on `file://` pages.

## Project structure

```
.
├── index.html                     # every page/section of the site
├── support.js                     # GENERATED runtime — do not hand-edit
├── uploads/                       # source photography
├── README.md
├── CONTRIBUTING.md                # branch-and-PR workflow
└── .github/
    ├── workflows/ci.yml           # runs the checks below on every PR
    ├── scripts/                   # the check scripts CI runs
    ├── ISSUE_TEMPLATE/
    └── PULL_REQUEST_TEMPLATE.md
```

## Content still marked as placeholder

Anything in `[BRACKETS]` — phone number, WhatsApp number, email, office
address, city, testimonial quote, team bios, project locations, registration
number, social links — is a deliberate stand-in, not a bug, flagged that way
so it can't ship unfilled by accident. Replace it with real business details
before this goes live on the client's domain.

## CI

`.github/workflows/ci.yml` validates the things a change to this template can
actually break:

- `support.js` and the inline `<script type="text/x-dc">` template both still
  parse as valid JavaScript
- every tag in `index.html` is properly closed and balanced
- every `uploads/...` path referenced in `index.html` points at a file that
  exists in the repo

It intentionally does not run a general-purpose HTML5 validator — this page's
custom attributes (`onClick`, `style-hover`, `ref`, `sc-if`, `sc-for`) are the
template runtime's API, and a strict validator would flag them as invalid
even though they're correct.

## Deployment

Not yet configured in this repo. The page has no build step, so any static
host works — GitHub Pages, Netlify, Vercel, or similar — serve `index.html`,
`support.js` and `uploads/` as-is.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the
branch-and-pull-request workflow.

Short version:

1. Fork the repo (or branch, if you have write access)
2. Create a branch: `git checkout -b your-change`
3. Commit your work
4. Open a pull request against `main`

## Roadmap

- [x] Write real copy for the About section
- [x] Add real services and project entries
- [x] Add styling
- [ ] Fill in the bracketed placeholders with real business details (phone,
      email, address, testimonial, team, registration number)
- [ ] Wire the contact form to a real backend or form service
- [ ] Add a favicon
- [ ] Round out Open Graph / social preview tags (title and description are
      set; image and card type are still missing)
- [ ] Set up deployment (GitHub Pages, Netlify, or Vercel)

## License

No license has been chosen yet. Until one is added, default copyright applies
and reuse rights are not granted.
