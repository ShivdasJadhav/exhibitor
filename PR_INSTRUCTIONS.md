# Pull Request Instructions 📝

This document provides detailed guidelines for creating and submitting pull requests to the Exhibitor project. Following these guidelines ensures smooth review and faster merging of your contributions.

## 📋 Table of Contents

- [Before You Start](#before-you-start)
- [PR Types](#pr-types)
- [Creating a Pull Request](#creating-a-pull-request)
- [PR Title Guidelines](#pr-title-guidelines)
- [PR Description Template](#pr-description-template)
- [Code Quality Checklist](#code-quality-checklist)
- [Review Process](#review-process)
- [Common Issues & Solutions](#common-issues--solutions)
- [Best Practices](#best-practices)

## ✅ Before You Start

### Step 1: Ensure Your Fork is Updated
```bash
# Add upstream if not already added
git remote add upstream https://github.com/ShivdasJadhav/exhibitor.git

# Fetch latest from main repository
git fetch upstream

# Update your main branch
git checkout main
git merge upstream/main
```

### Step 2: Create a Feature Branch
```bash
# Create and checkout feature branch
git checkout -b feature/feature-name

# Or for bug fixes
git checkout -b bugfix/issue-name

# Or for documentation
git checkout -b docs/documentation-title
```

### Step 3: Make Your Changes
- Write clean, well-commented code
- Follow the project's coding standards
- Test your changes thoroughly
- Commit with meaningful messages

### Step 4: Stay Updated During Development
```bash
# Before creating PR, rebase to latest
git fetch upstream
git rebase upstream/main

# If conflicts occur, resolve them
git add .
git rebase --continue
```

## 🎯 PR Types

### 1. Bug Fix PR
**When**: Fixing a reported bug or issue
```
Type: 🐛 Bug Fix
Branch: bugfix/issue-description
```

**Includes**:
- Root cause explanation
- How the fix works
- Related issue link
- Test case for the bug

### 2. Feature PR
**When**: Adding new functionality
```
Type: ✨ Feature
Branch: feature/feature-name
```

**Includes**:
- Feature description
- Use cases
- Implementation details
- Screenshots/demos (if UI)

### 3. Enhancement PR
**When**: Improving existing functionality
```
Type: 🔧 Enhancement
Branch: enhancement/improvement-name
```

**Includes**:
- What's being improved
- Why it's an improvement
- Performance metrics (if applicable)

### 4. Documentation PR
**When**: Adding or improving documentation
```
Type: 📚 Documentation
Branch: docs/doc-title
```

**Includes**:
- Documentation updates
- Examples
- Links to related docs

### 5. Performance PR
**When**: Optimizing code or improving performance
```
Type: ⚡ Performance
Branch: perf/optimization-area
```

**Includes**:
- Performance metrics (before/after)
- Optimization explanation
- Benchmarks

### 6. Testing PR
**When**: Adding or improving tests
```
Type: 🧪 Testing
Branch: test/test-area
```

**Includes**:
- Test descriptions
- Code coverage increase
- Test scenarios

## 🔄 Creating a Pull Request

### Step 1: Push Your Branch
```bash
# Push your feature branch to your fork
git push origin feature/your-feature-name

# Force push only if you've rebased (use carefully)
git push origin feature/your-feature-name --force-with-lease
```

### Step 2: Create PR on GitHub
1. Go to your fork: `github.com/YOUR_USERNAME/exhibitor`
2. Click "Compare & pull request" button
3. Ensure:
   - Base repository: `ShivdasJadhav/exhibitor`
   - Base branch: `main`
   - Head repository: `YOUR_USERNAME/exhibitor`
   - Compare branch: `your-feature-branch`

### Step 3: Fill PR Details
Use the PR description template provided in the next section.

### Step 4: Submit PR
Click "Create pull request" button

## 📝 PR Title Guidelines

### Format
```
<type>: <description>
```

### Types
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style
- `refactor` - Code refactoring
- `perf` - Performance improvement
- `test` - Testing
- `chore` - Build/dependency changes

### Examples

✅ **Good PR Titles**:
- `feat: add user profile customization options`
- `fix: resolve image upload validation issue`
- `docs: update MongoDB setup instructions for Windows`
- `perf: optimize artwork feed pagination`
- `test: add unit tests for authentication service`

❌ **Poor PR Titles**:
- `Fix bug`
- `Update code`
- `Changes`
- `WIP: something`
- `Random updates`

## 📋 PR Description Template

Use this template for all PRs. Copy the entire template into your PR description:

```markdown
## 📝 Description
<!-- Clear and concise description of your changes -->

## 🎯 Type of Change
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (fix or feature causing existing functionality to change)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Refactoring

## 🔗 Related Issue
<!-- Link to related issue(s) using # notation -->
Closes #(issue number)

## 📸 Screenshots/Videos
<!-- If applicable, add screenshots or videos of the changes -->
<!-- Especially for UI changes -->

## 🧪 Testing Done
<!-- Describe testing performed -->
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] All tests pass locally

## ✅ Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests passed locally with my changes
- [ ] Any dependent changes have been merged and published
- [ ] I have tested the changes on multiple browsers/devices (if applicable)

## 📚 Additional Information
<!-- Any additional information that reviewers should know -->

## 🔀 How to Test
<!-- Step-by-step instructions to test the changes -->
1. Step 1
2. Step 2
3. Step 3

## 🚀 Deployment Notes
<!-- Any special considerations for deployment -->

## 📖 Links
<!-- Links to documentation, related discussions, etc. -->
```

## ✔️ Code Quality Checklist

### Before Submitting PR, Verify:

#### Code Quality
- [ ] Code follows project style guide
- [ ] No console.log() statements left in production code
- [ ] No commented-out code blocks
- [ ] Proper error handling implemented
- [ ] No hardcoded values (use environment variables)
- [ ] Functions are modular and reusable
- [ ] Complex logic is documented

#### Testing
- [ ] Unit tests added for new code
- [ ] All existing tests pass
- [ ] New tests cover edge cases
- [ ] Code coverage maintained or improved

#### Documentation
- [ ] Code comments added where needed
- [ ] JSDoc comments for functions/components
- [ ] README updated if needed
- [ ] API documentation updated (if applicable)

#### Performance
- [ ] No performance regressions
- [ ] Bundle size not significantly increased
- [ ] Database queries optimized
- [ ] No memory leaks introduced

#### Security
- [ ] No sensitive data in commits
- [ ] Input validation implemented
- [ ] SQL injection/XSS considerations
- [ ] Authentication/authorization checked

#### Browser/Device
- [ ] Tested on Chrome, Firefox, Safari (if UI)
- [ ] Responsive design verified (if UI)
- [ ] Mobile testing done (if UI)
- [ ] No console errors

### Run These Commands Before Submitting

```bash
# Check code style
npm run lint

# Run tests
npm test

# Build frontend (if changed)
cd client
npm run build
cd ..

# Check bundle size
npm run build:analyze  # If available

# Type checking (if using TypeScript)
npm run type-check
```

## 🔍 Review Process

### Timeline
1. **Submission**: PR is created
2. **Automated Checks**: CI/CD pipelines run (0-5 mins)
3. **Initial Review**: Maintainer assigns reviewer (within 24 hours)
4. **Review Period**: Active review and discussion (1-3 days)
5. **Revisions**: Address feedback (as needed)
6. **Approval**: Get approval from maintainer (1-2 days)
7. **Merge**: PR is merged into main (same day)

### Responding to Feedback

#### When Reviewer Requests Changes:
1. Read feedback carefully
2. Make requested changes in your branch
3. Commit with message: `chore: address review feedback`
4. Push updates: `git push origin feature/your-feature`
5. Comment on PR explaining changes (don't just push)
6. Mark conversations as resolved

#### If You Disagree:
1. Explain your reasoning clearly
2. Provide evidence/documentation
3. Be respectful and open to discussion
4. Maintainer makes final decision

### Updating Your PR

```bash
# Make changes locally
git add .
git commit -m "chore: address review feedback"

# Push to your branch
git push origin feature/your-feature-name

# No need to create a new PR, updates appear automatically
```

## 🛠️ Common Issues & Solutions

### Issue: PR shows conflicts
**Solution**:
```bash
# Update your branch with main
git fetch upstream
git rebase upstream/main

# Resolve conflicts in your editor
# Then continue rebase
git add .
git rebase --continue

# Force push (use with caution)
git push origin feature/your-feature --force-with-lease
```

### Issue: Forgot to update main first
**Solution**:
```bash
# Stash your changes
git stash

# Update main
git fetch upstream
git checkout main
git merge upstream/main

# Recreate your branch
git checkout -b feature/your-feature-name

# Apply stashed changes
git stash pop
```

### Issue: Too many commits in PR
**Solution**:
```bash
# Interactive rebase to squash commits
git rebase -i upstream/main

# Mark commits as 'squash' or 's' to combine with previous
# Then force push
git push origin feature/your-feature --force-with-lease
```

### Issue: Accidentally committed sensitive data
**Solution**:
1. Don't panic! Contact maintainers immediately
2. Do not push if not already pushed
3. Maintainers can rewrite history

## 💡 Best Practices

### 1. Keep PRs Focused
- One feature or fix per PR
- Avoid combining multiple unrelated changes
- Easier to review and revert if needed

```bash
# Good: Separate feature and bugfix
# PR 1: Feature: Add user profiles
# PR 2: Fix: Correct login redirect

# Avoid: Everything in one PR
# PR 1: Add user profiles, fix login, update docs, etc.
```

### 2. Keep PRs Small
- Fewer than 400 lines of code when possible
- Easier to review, faster merge time
- Easier to debug if issues arise

### 3. Write Descriptive Commit Messages
```bash
# Good
git commit -m "feat: implement user profile editing

- Add profile edit form component
- Update user API endpoint for profile updates
- Add validation for profile fields
- Include tests for profile updates"

# Avoid
git commit -m "Update code"
```

### 4. Test Thoroughly Before Submitting
```bash
# Test locally before pushing
npm test
npm run lint

# Try on different browsers
# Test on mobile if UI changes
# Verify API with Postman
```

### 5. Use Draft PRs for Work in Progress
1. Create PR
2. Click "Convert to draft"
3. Work on changes
4. Click "Ready for review" when done

### 6. Ask Questions Early
- Don't wait until PR creation to ask
- Open an issue or discussion first
- Align with maintainers on approach

### 7. Be Respectful and Professional
- Accept feedback gracefully
- Ask for clarification if needed
- Thank reviewers for their time

### 8. Follow the PR Template
- Makes review faster
- Provides all necessary context
- Shows professionalism

### 9. Link to Related Issues
```markdown
Closes #123
Related to #456
Fixes #789
```

### 10. Keep Your Fork Updated
```bash
# Regularly sync with upstream
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## 📊 PR Statistics

### Optimal PR Metrics
- **Size**: 200-400 lines of code
- **Time to Review**: 24-48 hours
- **Commits**: 1-5 well-organized commits
- **Test Coverage**: 80%+
- **Build Time**: < 5 minutes

## 🎯 Examples of Excellent PRs

### Example 1: Feature PR
```
Title: feat: add user profile customization

Description:
## 📝 Description
Allows users to customize their profile with bio, avatar, and social links.

## 🎯 Type of Change
- [x] New feature (non-breaking)
- [ ] Breaking change
- [x] Documentation update

## 🔗 Related Issue
Closes #234

## 📸 Screenshots
[Screenshots of new profile customization interface]

## 🧪 Testing Done
- [x] Tested on desktop and mobile
- [x] Unit tests added
- [x] All tests pass

## ✅ Checklist
All items checked...
```

### Example 2: Bug Fix PR
```
Title: fix: resolve image upload size validation

Description:
## 📝 Description
Fixed issue where image upload validation was not properly checking file sizes, allowing oversized files to be uploaded.

## 🐛 Root Cause
The validation logic was comparing file size in bytes with limit in KB without proper conversion.

## 🔧 Solution
Added proper unit conversion and improved error messaging.

## 🔗 Related Issue
Closes #189

## 🧪 Testing Done
- [x] Reproduced original bug
- [x] Verified fix works
- [x] Added regression tests
```

## 📞 Need Help?

- **Questions about PR process**: Comment on any PR or open an issue
- **Need code review advice**: Open an issue or discussion
- **Have suggestions for this guide**: Create an issue

---

**Thank you for contributing to Exhibitor!** 🎨✨

Your contributions make this project better for everyone. We appreciate your effort and attention to detail!
