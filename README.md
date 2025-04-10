# Personal Projects Monorepo

## Overview
This monorepo contains my personal projects and applications. It serves as a centralized repository for managing multiple related projects while sharing common configurations and utilities.

## Projects
- **Blog** - Personal blog application
- **Portfolio** - Personal portfolio website
- **ResumeRoast** - Application for reviewing and improving resumes

## Repository Structure
```
├── blog/          # Personal blog application
├── portfolio/     # Portfolio website
├── roastresume/   # Resume review application
└── scripts/       # Utility scripts for project management
```

## Scripts
- `npm run search` - Copies post content to search content
- `npm run blog` - Copies post to blog

## Setup
Each project is managed as a Git submodule. To get started:

1. Clone this repository with submodules:
```bash
git clone --recursive [repository-url]
```

2. If you've already cloned the repository, initialize submodules:
```bash
git submodule update --init --recursive
```

## License
ISC