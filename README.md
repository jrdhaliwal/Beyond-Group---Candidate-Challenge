# Beyond Group — Foam Bid Calculator

A lightweight web-based tool that helps Beyond Group team members calculate and present polyurethane foam bids quickly and accurately.

Below is a link to the web app.

Link: https://beyond-group-foam-bid-calculator.vercel.app

## What I Built

A three-panel web app that takes job inputs and instantly produces both an internal cost breakdown and a client-facing quote. No install, no login — just open the link on any device and start entering numbers.

I chose a web app because it's a format everyone understands, can be opened anywhere at any time, and requires nothing from the user beyond a browser.

The default values are pre-loaded with the Lethbridge scenario from the brief, so you can see how the numbers interact in a real-world quote immediately. All values can be changed at any time for any job.

## Layout

The three-panel layout is intentional:

- **Job Details** — where the user enters client and site information
- **Internal Cost Breakdown** — costs and margin that matter to Beyond Group
- **Client Quote** — the numbers the client actually sees, including GST and optional contingency pricing

Each column has a clear, single purpose. No digging around for what goes where.

## Assumptions Made

- **1 room per worker per night** — hotel cost is calculated as `workers × nights × $200`
- **8-hour workdays** — used as the default; can be changed in the input
- **Fuel rate of $0.72/km** — based on the 2025 CRA automobile allowance rate

## What I'd Build Next

- **Quote export** — generate a clean PDF or email-ready document directly from the tool so team members aren't manually transcribing numbers
- **Job history database** — save past quotes and reference them later for estimating, comparisons, and auditing
- **More input coverage** — with more time I'd gather additional operational details from the Beyond Group team to reduce the number of assumptions baked into the defaults
