# Contributing to the Scroll Documentation

Welcome to the Scroll Documentation project! As we develop the initial scope of our documentation, we're focused on ensuring high quality and relevance. We welcome code and content contributions but encourage a discussion-first approach to align on expectations and scope. Here's how you can contribute:

### Starting Your Contribution

1. **Discuss Your Idea First:**
   - Before making any changes, please open an issue to discuss your proposed contribution. This helps us align on the necessity and implementation of your idea.
   - If interested, comment on the issue to be assigned.

2. **Making Your Contribution:**
   - **Fork the Repository:** Start by forking the repository to your own GitHub account.
   - **Create a Pull Request (PR):** Make your changes in your fork and submit a PR to our repository.
     - **Squash Your Commits:** If your PR includes multiple commits, please squash them into a single commit for a cleaner history.
     - **Resolve Conflicts:** If your PR has conflicts with the `develop` branch, you may need to rebase it.

3. **PR Review Process:**
   - Once submitted, your PR will be reviewed by the team. We may merge it, request amendments, or close it based on our review.

### Contribution Standards

- **Commit Messages:**
  - Start with a present-tense verb.
  - Keep the headline concise but descriptive.
  - Use a format like `add X`, `fix Y`, `improve Z`.
  - Example: "`update contract addresses for USDC on Scroll Sepolia`".
  
- **Code and Documentation Quality:**
  - Ensure your changes build successfully with `yarn build`.
  - Adhere to code formatting standards (e.g., Prettier).
  - Optimize and compress images to maintain site performance. Keep images under 20kb.

### Advanced Git Techniques

- **Rebasing a PR:**
  ```shell
  git fetch
  git rebase origin/main
  # Resolve any conflicts
  git push --force-with-lease
  ```
  Rebasing helps keep your branch up to date with the main branch.

- **Squashing Commits:**
  When squashing commits, edit the commit messages to reflect the singular change your PR introduces. This makes the project history more readable.

### Quality Assurance

- **Link Checks:**
  Run `npm run linkcheck` to verify that all links in your changes are valid.

- **Code Samples:**
  Add or update code samples in `/public/samples/` to reflect your changes or new features.

### Writing Style Guide

- Use **bold** for key terms and important concepts.
- Use _italics_ for emphasis sparingly.
- For menu navigation instructions, use bold: **File** > **New**.
- Favor markdown syntax over HTML for simplicity.
- Begin additional notes with **Note:** for clarity.
- Maintain a second-person perspective ("you") throughout the documentation.

