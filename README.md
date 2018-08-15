## General Media Source Files

All **general** image, audio and video source files which are used in multiple
places within the SME Virtual Network (as opposed being attached to single
SME Virtual Network project).

This repository only contains the media **source files** (e.g. Adobe Illustrator files, Sketch
files, Adobe After Effects files, GIMP files...etc.). Distributable media files
(e.g. .png, .svg, .git, .mp4...etc.) are not generally allowed in this repository.

### Prerequisites

If you are modifying this project, you will need the following tools installed
on your local machine to successfully commit a change.

1. Install Node.js version 8.0 or greater.

   See [this page](https://nodejs.org/en/download/).

   For macOS development machines, installing Node.js with [Homebrew](https://brew.sh/)
   is recommended.

2. Install Yarn.

   See [this page](https://yarnpkg.com/en/docs/install).

3. Install Git Large File Storage

   Git Large File Storage (or Git LFS) allows large binary assets like media source files to be managed by Git.

   See [this page](https://git-lfs.github.com/) for installation instructions. If you are on macOS, installing via [Homebrew](https://brew.sh/) is recommended.

### Install Git LFS

Git commit hooks must be installed by Git LFS on a freshly cloned repository.
This only has to be done once after a fresh clone.

Run the following in the repository root:

```bash
git lfs install
```

After this command completes, the Git hooks will be successfully installed.

### SME Logos and Branding Restrictions

The [SME](http://www.sme.org/) logos and brands which are part of the media source
files in this repository are not licensed for use outside of SME activities. SME
logo and brand usage is only allowed by the SME and authorized parties connected
to the SME (e.g. like regional chapters).

If you fork this project for use in some context not related to the SME, you
must not use SME logos or brands inappropriately. This means that you are free to
modify the media source files in this repository, but you must remove all SME logos
and brands. Please see the [SME Branding Guidelines](http://www.sme.org/sme-logo/)
for when a SME logo can be used and what conditions are attached to SME logos and brands.

All media source files which contain SME logos and/or brands are stored in
the `/restricted` directory.

### Third-Party Brands and Logos

Some of the media source files may depict or contain trademarks from third-parties
(e.g. YouTube, Slack...etc.). These depictions are trademarks of their respective
owners. The use of these trademarks does not indicate endorsement of the trademark
holder by the SME Virtual Network, or vice versa.

**Do not use third-party logos for any purpose except to represent the company,
product, or service to which they correspond.**

## License

The contents of this repository are licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
A copy of this license is included in the root of this repository.
