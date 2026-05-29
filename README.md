# Bharat Trails 🏔️

**Bharat Trails** is a modern, responsive web application built with Next.js 15 (App Router) designed to help adventurers explore the hidden, high-altitude gems of India. 

From the frozen Chadar Trek of Zanskar to the extreme frontiers of the Aeyo (Dibang) Valley, Bharat Trails provides curated itineraries, an interactive budget calculator with live flight scraping, and an official government permits hub.

## ✨ Features

- **Interactive Budget Calculator:** Dynamically estimates costs for massive group trips, including precise local commute parsing and tier-based accommodation options.
- **Live Flight Scraping:** Integrates with the **Flights Sky RapidAPI** to pull live flight prices and itineraries directly into the budget calculator, complete with Skyscanner deep-links for instant booking.
- **Dynamic Wikipedia Images:** Automatically fetches high-quality destination photography via the public Wikimedia REST API.
- **Official Permits Hub:** A verified database of all mandatory Inner Line Permits (ILPs) and Forest Trekking pass portals, fully audited to point exclusively to official `.gov.in` digital portals.
- **Suhas's Secret Picks:** A curated list of 6 highly-guarded, off-grid locations curated by Suhas.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (Zero-Tailwind architecture for full aesthetic control)
- **Animations:** GSAP (GreenSock) for high-performance scroll triggers and micro-animations
- **APIs:** Flights Sky (RapidAPI) & Wikimedia REST API

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

### Environment Variables
You need a RapidAPI key to fetch live flight data.
1. Copy `.env.local.example` to `.env.local`.
2. Add your RapidAPI key to `.env.local`.

*(Note: `.env.local` is fully ignored by Git to protect your keys).*

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
Copyright (c) 2026 Suhas Akella.
