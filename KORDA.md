# Rules for AI agents in this repository (Korda fork of Twenty)

These rules come from Korda's "Development Guidelines: Building on Twenty CRM" (5 Nov 2026) and apply to every agent and every person. They come before the Twenty house rules in CLAUDE.md.

## Git
- Never push to `main`. Never force-push.
- Work on a branch named feat/<name>, fix/<name> or chore/<name>.
- Before starting and before opening a PR: git pull origin main and rebase.
- Resolve merge conflicts yourself; never discard other people's changes.

## Scope
- Work only on the linked issue. One feature per branch.
- Problems outside the scope: list them in the PR description, don't fix them.
- Keep the diff under ~400 changed lines. If it grows beyond that, stop and propose a split.
- Prefer Twenty configuration and extension points over editing core Twenty files.

## Keeping custom code separate from Twenty core
In order of preference:
1. Configuration in Twenty itself (custom objects, fields, views, workflows), with no code.
2. Twenty's extension points: its APIs, webhooks and app/extension mechanisms.
3. Our own modules, in clearly named folders we own, apart from upstream code.
4. Core changes only when unavoidable, kept minimal, and listed in the PR description.

Upstream Twenty releases are pulled in a dedicated `chore/upstream-sync` PR, never mixed with feature work.

## Quality
- Run lint, typecheck and tests before every commit. Fix all failures.
- Add tests for new behaviour.
- No refactors or formatting changes mixed into feature work.

## Finishing
- Open a DRAFT pull request using the PR template.
- Describe what changed, how you tested it, and any schema or migration changes.
