# RS Developers

The RS Developers website. Currently a single static page, `index.html`, with no
styling — it is a starting point, not a finished site.

## Getting started

No build step, no dependencies. Clone and open the file:

```bash
git clone https://github.com/smafnan/RS-Developers.git
cd RS-Developers
open index.html          # macOS — or just double-click the file
```

If you would rather serve it over HTTP (needed once you add fetch calls or
routing):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
.
├── index.html      # the entire site
├── README.md
├── CONTRIBUTING.md # how to make a change
└── .github/        # pull request and issue templates
```

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the
branch-and-pull-request workflow.

Short version:

1. Fork the repo (or branch, if you have write access)
2. Create a branch: `git checkout -b your-change`
3. Commit your work
4. Open a pull request against `main`

## Roadmap

Rough list of what needs doing. Pick one and open a PR.

- [ ] Write real copy for the About section
- [ ] Add real services and project entries
- [ ] Add styling (CSS)
- [ ] Wire the contact form to a real backend or form service
- [ ] Add a favicon
- [ ] Add Open Graph / social preview tags
- [ ] Set up deployment (GitHub Pages, Netlify, or Vercel)

## License

No license has been chosen yet. Until one is added, default copyright applies
and reuse rights are not granted.
