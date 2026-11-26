# Reveral for Publii

Reveral is a responsive, product-focused Publii theme for SaaS companies, technology teams, and digital services.

## Install

Copy this theme folder into your Publii site's `input/themes` directory, then select **Reveral** in the site's theme settings. The root of this folder contains `config.json`, `index.hbs`, `post.hbs`, `assets/css/main.css`, and the 400 × 300 theme thumbnail required by Publii.

## Customize

Use the **Theme** settings in Publii to edit the homepage copy and calls to action, customer names, feature highlights and cards, three independent media-tab sections, product values, and the site-wide call to action. You can upload a hero image or provide media URLs for feature cards and media tabs. Media tabs accept images or self-hosted videos with poster images.

Theme settings also control light, dark, or automatic color mode; independent light and dark colors; desktop and mobile media ratios; media fit; archive layout and grid columns; and card author/date visibility. Posts and pages each provide standard, compact, and split templates. Tag and author pages can use the default alternating list or their grid template.

Create the **Main menu** and **Footer menu** in Publii's menu manager and assign them to the matching menu positions in the theme settings.

## Download updates

Every push creates a downloadable ZIP artifact in the repository's **Actions** tab. Artifacts are retained for 90 days. To publish a permanent versioned download on GitHub Releases, update `version` in `config.json` (keeping the theme name and author unchanged), commit the matching tag `v<version>` (for example `v1.0.2`), and push the commit and tag. The tag must match the theme version; the workflow packages the installable ZIP and attaches it to the release. Theme source updates are pushed directly to `main`; this workflow does not create pull requests.

## Theme structure

- `index.hbs`, `posts.hbs`, `page.hbs`, `post.hbs`: homepage, post listing, page, and post templates.
- `post-compact.hbs`, `post-split.hbs`, `page-compact.hbs`, `page-split.hbs`: alternate reading layouts.
- `tag.hbs`, `tag-grid.hbs`, `author.hbs`, `author-grid.hbs`: archive layouts.
- `partials/`: shared header, footer, navigation, cards, CTA, and pagination.
- `assets/css/main.css`, `assets/js/main.js`: theme styles and accessible navigation/media-tab interactions.
