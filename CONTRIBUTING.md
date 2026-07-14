# Contributing to Exhibitor 🎨

Thank you for your interest in contributing to **Exhibitor**! We're excited to have you join our community of creators and developers. This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Questions or Need Help?](#questions-or-need-help)

## 📜 Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inclusive environment for all contributors, regardless of age, body size, disability, ethnicity, gender identity, level of experience, nationality, personal appearance, race, religion, sexual identity, or sexual orientation.

### Our Standards
Examples of behavior that contributes to creating a positive environment include:
- Using welcoming and inclusive language
- Being respectful of differing opinions and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

### Enforcement
Unacceptable behavior includes:
- Harassment of any kind
- Discriminatory language or behavior
- Personal attacks
- Trolling or insulting/derogatory comments
- Unwelcome sexual advances

**Violations should be reported to the project maintainers.**

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git
- MongoDB (Local or Atlas)
- GitHub account

### Initial Steps
1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your work
4. Set up the development environment (see Development Setup section)
5. Make your changes
6. Commit with clear messages
7. Push to your fork
8. Create a Pull Request

## 💡 Ways to Contribute

### 🐛 Bug Reports & Fixes
- Report bugs by creating detailed issues
- Fix existing bugs (check "good first issue" label)
- Add regression tests for fixed bugs

### ✨ Feature Requests & Implementation
- Suggest new features by opening an issue
- Implement requested features
- Enhance existing functionality

### 📚 Documentation
- Improve README and documentation
- Add code comments and JSDoc
- Create tutorials or guides
- Fix typos and grammar

### 🧪 Tests
- Write unit tests
- Write integration tests
- Improve test coverage
- Fix failing tests

### 🎨 UI/UX Improvements
- Improve design and user experience
- Fix accessibility issues
- Enhance responsive design
- Optimize performance

### 🔍 Code Review
- Review pull requests
- Suggest improvements
- Test changes and provide feedback

## 🛠️ Development Setup

### 1. Fork and Clone
```bash
# Fork the repository on GitHub (click Fork button)

# Clone your fork
git clone https://github.com/YOUR_USERNAME/exhibitor.git
cd exhibitor

# Add upstream remote to keep track of original repo
git remote add upstream https://github.com/ShivdasJadhav/exhibitor.git
```

### 2. Create Development Branch
```bash
# Update main branch
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b bugfix/bug-name
```

### 3. Install Dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..

# Install server dependencies
cd server
npm install
cd ..
```

### 4. Setup Environment
```bash
# Copy example env files
cp .env.example .env
cd server
cp .env.example .env
cd ..

# Update .env files with your configuration
# See README.md for environment variables
```

### 5. Start Development Servers
```bash
# Terminal 1: Backend
cd server
npm start

# Terminal 2: Frontend
cd client
npm start
```

## 📝 Coding Standards

### JavaScript/React Standards

#### File Naming
- Components: `PascalCase.js` (e.g., `UserProfile.js`)
- Utilities: `camelCase.js` (e.g., `validationUtils.js`)
- Constants: `UPPER_SNAKE_CASE` files (e.g., `API_ENDPOINTS.js`)

#### Code Style
```javascript
// ✅ Good
const getUserProfile = (userId) => {
  return fetch(`/api/users/${userId}`).then(res => res.json());
};

// ✅ Good - with proper spacing
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// ❌ Avoid
const getUserProfile=(userId)=>{
  return fetch(`/api/users/${userId}`).then(res=>res.json());
}
```

#### React Components
```javascript
// ✅ Good - functional component with clear structure
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ userId, onDelete }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteUser(userId);
      onDelete(userId);
    } catch (error) {
      console.error('Failed to delete user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="user-card">
      <h2>User Profile</h2>
      {/* JSX content */}
      <button onClick={handleDelete} disabled={isLoading}>
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
};

UserCard.propTypes = {
  userId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserCard;
```

### Best Practices

1. **Use meaningful variable names**
   ```javascript
   // ✅ Good
   const isUserAuthenticated = user && user.token;
   
   // ❌ Avoid
   const x = user && user.token;
   ```

2. **Add comments for complex logic**
   ```javascript
   // Implement exponential backoff for API retries
   const retryWithBackoff = async (fn, maxRetries = 3) => {
     // Implementation
   };
   ```

3. **Handle errors properly**
   ```javascript
   try {
     const response = await fetchData();
     return response.data;
   } catch (error) {
     console.error('Failed to fetch data:', error);
     throw new Error('Data fetch failed');
   }
   ```

4. **Use const and let, avoid var**
   ```javascript
   // ✅ Good
   const isActive = true;
   let counter = 0;
   
   // ❌ Avoid
   var isActive = true;
   ```

5. **Keep functions focused and DRY**
   ```javascript
   // ✅ Good - single responsibility
   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   
   const validateForm = (formData) => {
     return {
       email: validateEmail(formData.email),
       password: formData.password.length >= 8,
     };
   };
   ```

## 📨 Commit Message Guidelines

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring without feature changes
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Build process, dependencies, etc.

### Examples

```bash
# Feature
git commit -m "feat(auth): add JWT token refresh mechanism

- Implement automatic token refresh before expiration
- Add refresh token endpoint
- Update auth middleware to handle token refresh

Closes #123"

# Bug Fix
git commit -m "fix(artwork): fix image upload validation

Validate file size before upload to prevent server errors"

# Documentation
git commit -m "docs(readme): update installation instructions for macOS"

# Refactoring
git commit -m "refactor(api): extract common error handling logic"
```

### Best Practices
1. Use imperative mood ("add" not "added" or "adds")
2. Capitalize the subject line
3. Don't end the subject line with a period
4. Limit subject to 50 characters
5. Keep body lines to 72 characters
6. Reference issues when applicable (e.g., "Fixes #123")

## 🔄 Pull Request Process

### Before Creating a PR
1. ✅ Update your branch with upstream changes
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. ✅ Run tests locally
   ```bash
   npm test
   ```

3. ✅ Check code formatting
   ```bash
   npm run lint
   ```

4. ✅ Build frontend
   ```bash
   cd client
   npm run build
   cd ..
   ```

5. ✅ Test the application manually

### Creating a PR
1. Push your branch to your fork
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create PR on GitHub with:
   - Descriptive title
   - Clear description of changes
   - Reference to related issues
   - Screenshots for UI changes

See [PR_INSTRUCTIONS.md](./PR_INSTRUCTIONS.md) for detailed PR guidelines.

### PR Requirements
- [ ] Descriptive title and description
- [ ] Related issue(s) linked
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
- [ ] Commits are squashed where appropriate

### Review Process
1. One or more maintainers will review the PR
2. Address feedback and make requested changes
3. Push updates (maintainer will re-review)
4. Once approved, PR will be merged

## 🐛 Reporting Bugs

### Before Reporting
- Check if the bug has already been reported
- Ensure you're using the latest version
- Verify the bug is reproducible

### How to Report
1. Use the GitHub Issues page
2. Click "New Issue"
3. Fill in all sections:

**Title**: Clear, concise description
```
Login button not working on mobile devices
```

**Description**:
```
## Bug Description
The login button is unresponsive on mobile devices.

## Steps to Reproduce
1. Open the app on mobile
2. Navigate to login page
3. Click the login button
4. Button does not respond

## Expected Behavior
Login button should be clickable and functional

## Actual Behavior
Button is unresponsive, page doesn't navigate

## Environment
- Browser: Chrome 91.0
- Device: iPhone 12
- OS: iOS 14.5
- App Version: 1.0.0

## Screenshots
[Attach screenshots if applicable]

## Additional Context
The button works fine on desktop
```

## ✨ Suggesting Enhancements

### How to Suggest
1. Check if the feature has been requested
2. Open a GitHub Issue
3. Use the feature request template:

```
## Feature Description
Brief description of the enhancement

## Motivation
Why would this feature be useful? What problems does it solve?

## Proposed Solution
How should this feature work?

## Alternative Solutions
Are there other approaches?

## Additional Context
Any other relevant information
```

## ❓ Questions or Need Help?

### Getting Help
1. **Check Documentation**: Read README.md and existing docs
2. **Search Issues**: Look for similar questions
3. **Ask in Issues**: Create a question issue
4. **Discussion**: Use GitHub Discussions if available

### Resources
- [Project README](./README.md)
- [PR Instructions](./PR_INSTRUCTIONS.md)
- [GitHub Issues](https://github.com/ShivdasJadhav/exhibitor/issues)
- [MERN Stack Resources](https://mern.io/)

## 🎯 Tips for Successful Contributions

1. **Start Small**: Begin with small bug fixes or documentation
2. **Check Existing Work**: Look at open PRs to avoid duplicates
3. **Ask Questions**: It's better to ask than assume
4. **Be Patient**: Reviews take time
5. **Engage with Feedback**: Be open to suggestions
6. **Test Thoroughly**: Test on multiple devices/browsers
7. **Keep Updated**: Regularly sync with upstream main

## 📊 Contribution Recognition

Contributors are recognized for:
- Code contributions
- Bug reports
- Documentation improvements
- Community support
- Feature suggestions

Thank you for contributing to Exhibitor! 🌟

---

**Happy Contributing!** 🚀
