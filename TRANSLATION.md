# Translation Initiative

_Our translation initiative hopes to translate Scroll documentation into different languages and make the website accessible to people worldwide._

Our current documentation is only available in English, but with community contributions, we want to support many language communities. Since this is a new initiative and we want to maintain high assurances about the information in our documentation, **we're only accepting contributions in Mandarin and Spanish**. Once we're comfortable with the process and can ensure a good experience for community translators, we'll seek contributions in additional languages.

### Want to get involved as a translator?

Create an issue describing which article you wish to translate. Then get started! If you need help or have any questions, join the [Scroll Discord](https://discord.gg/scroll). Once your translation is submitted, we'll ask a member of our team to do a review.

### Standards and Policies

For now, we will defer to Ethereum.org's excellent [Translation Style Guide](https://ethereum.org/en/contributing/translation-program/translators-guide/). We do not use a translation platform, but please assume all other guidance applies here.

## Starting a translation

1. Fork this repository
1. Create an issue named using the format "Translation: _[English Article Name]_ (_[lang]_)" -- for example, "Translation: User Guide Faucet (zh)"
1. Find the article you wish to translate in `src/content/docs/en/` and copy it to a matching folder in `src/content/docs/[lang]/`. All files should maintain the same file name and folder structure as the English version of the site.
1. To translate UI elements or article names, modify the appropriate entry in `public/locales/[lang]/translation.json`. If you're unsure what to do here, suggest any additional changes to the site in your PR.
1. Make a PR with the title following the template above. Be sure to mention the original issue in your description.
1. A team member will review, recommend changes and work with you to get the final version added to the code base.

### Not familiar with Git?

If you don't want to worry about all this Git stuff, contact a team member or community moderator on the [Scroll Discord](https://discord.gg/scroll). We'd be happy to point you at the original file to translate and suggest an online text editor (like [HackMD](https://hackmd.io/)) for sharing your results. We'll take it from there.
