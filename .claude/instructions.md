# Project Instructions for Claude

## Directory Structure

This project maintains a clean root directory. Only the following are allowed in root:

```
.
├── .github/          # GitHub Actions workflows and scripts
├── .gitignore        # Git ignore patterns
├── code/             # All executable scripts and Makefile
├── data/             # Data files, configs, docker-compose files
├── docs/             # All documentation (dated reports, guides)
└── README.md         # Main project documentation
```

**Do not create files in root** except README.md and .gitignore.

## File Organization Rules

1. **code/** - All shell scripts, Makefile, and executable code
2. **data/** - CSV files, docker-compose files, configuration files, zap-configs
3. **docs/** - All markdown documentation with date prefixes (YYYY-MM-DD-name.md)
4. **.github/** - Workflows and CI/CD scripts only

## Makefile Usage

The Makefile is located in `code/`. Run from root with:
```bash
make -f code/Makefile <target>
```

## Documentation Naming

Reports and documentation in `docs/` should be dated:
- `docs/YYYY-MM-DD-report-name.md`

## When Making Changes

- Always verify new files go to the correct directory
- Update references in all docs when moving files
- Keep root clean - only the 5 items listed above
