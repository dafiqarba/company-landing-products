# Landing Page of a Company Profile for eDOT Submission

Minimal landing page of a company profile built with **Next.js (App Router)**, **Typescript**, and **Tailwind**.

- 2 sections (Company Description & Products)
- Responsive page and products grid for mobile, tablet, and desktop
- Product image previewer
- Rendering strategy: ISR

## Live Demo

[Company Profile Landing Page](https://company-landing-products.vercel.app/)

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Getting Started

### Run Locally

```bash
npm i                       # or pnpm i / yarn
cp .env.example .env.local  # update the .env
npm run dev
```

## Project Structure

```
src/        
├── styles/       # global styles
├── app/          # Company Profile Page Component (page.tsx)
├── types/        # Global reusable type definition
├── utils/        # Function helpers
├── constants/    # Global constants
├── components/   # Components used on the Company Profile Page
```
