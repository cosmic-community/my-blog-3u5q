# My Blog

![App Preview](https://imgix.cosmicjs.com/e72c38f0-598a-11f1-ab5f-510f297ffc99-autopilot-photo-1581092918056-0c4c3acd3789-1779858854391.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, beautifully designed blog and creative portfolio built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 📝 Dynamic blog post pages with rich content
- 👤 Author profile pages
- 🏷️ Category-based post filtering
- 🖼️ Optimized images via imgix
- 📱 Fully responsive design
- ⚡ Server-side rendering
- 🎨 Modern, clean UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a167d57f2c683f5f2b35075&clone_repository=6a167e51f2c683f5f2b350aa)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories. User instructions: title: "How Oil-Free Air Compressors Improve Industrial Efficiency", category: "Air Compressor Systems", image:"", date: "May 2026", readTime: description"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: categories, authors, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Headless CMS integration
- **Inter Font** - Modern typography

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with content

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all posts with authors and categories
const response = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses three content types: **posts**, **authors**, and **categories** with deep relationships between them.

## Deployment Options

- Vercel (recommended)
- Netlify
- Any Node.js hosting

<!-- README_END -->