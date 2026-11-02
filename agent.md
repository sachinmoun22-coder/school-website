# Agent Guide

## Project

This repository contains the S.B.S Sr.Sec. School Matour Kaithal website. It is a React application built with Vite, Tailwind CSS, and React Router.

## Development

- Install dependencies with `npm install`.
- Start the development server with `npm run dev`.
- Create a production build with `npm run build`.
- Run the linter with `npm run lint`.
- Run focused lint checks with `npx oxlint <file>`.

## Project Structure

- `src/pages/` contains page-level components.
- `src/components/` contains shared UI and feature components.
- `src/data/` contains school content and reusable page data.
- `public/` contains static assets served from the site root.

## Change Guidelines

- Make focused changes and preserve existing styling, responsive behavior, and functionality.
- Reuse existing components, utility classes, and data patterns before introducing new ones.
- Keep school facts consistent with the website's published information. Do not invent or present unconfirmed details as official.
- Do not commit credentials or other secrets. Use environment variables for integrations that require credentials.
- After code changes, run the relevant lint check and `npm run build`.
