---
layout: ../../layouts/CaseStudy.astro
title: S&P 500 Insight
order: 1
tags: [Financial analytics, Data engineering]
summary: Which S&P 500 companies look strongest right now? A research platform that scores companies on value, quality and momentum, then lets you explore the rankings live.
stack: [Python, SQL, PostgreSQL, TimescaleDB, FastAPI, Streamlit, Docker]
live: https://s-p500-insights-dashboard.streamlit.app/
repo: https://github.com/DinmaJJ/S-P500-Insights-Dashboard
image: /images/work/sp500-insight.jpg
---

## The problem

Comparing S&P 500 companies means juggling prices, fundamentals and company profiles from different sources, each on its own schedule. I wanted one place where an investor could see which companies stand out on **value, quality and momentum** at the same time.

## The data

- Daily market prices
- Company fundamentals
- Company profiles

All pulled from external data sources and stored in PostgreSQL with TimescaleDB for the time-series data.

## What I built

- An ingestion workflow that brings the three sources together, with database upserts so re-runs never duplicate data.
- Alembic migrations so the schema can change safely over time.
- A scoring framework that combines value, quality and momentum indicators into a single ranking.
- A FastAPI layer and a Streamlit dashboard for exploring rankings and signals, all packaged with Docker.

## What it shows

Judging a stock on a single metric gives an incomplete picture. A company can look cheap and still be financially weak, or be strong but already priced high.

So the score looks at three things at once:

- **Value (30%):** how cheaply it's priced, from P/E, P/B and P/S multiples.
- **Quality (35%):** how financially strong it is, from return on equity, margins and balance sheet strength.
- **Momentum (35%):** how the price is performing, from 1 to 12 month returns and the trend against the 200-day average.

That lets someone compare companies on valuation, strength and price performance together, rather than making a decision on one number.
