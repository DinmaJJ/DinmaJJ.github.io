---
layout: ../../layouts/CaseStudy.astro
title: Automated SIM Registration System
order: 3
tags: [Data automation, Data validation]
summary: A small registration workflow that validates and standardises customer records, reducing the time required to process each record.
stack: [Python, SQLite, Streamlit, Pandas]
live: https://automated-sim-registration-website-llbxzsmi8ya8rpgjbuweyd.streamlit.app/
repo: https://github.com/DinmaJJ/Automated-SIM-registration-Website
---

## The problem

Manual SIM registration data entry can be repetitive and slow. Incomplete or inconsistent customer information can also create extra work during processing.

## What I built

I built an automated registration workflow that accepts customer records in bulk and applies validation and standardisation checks before saving records to a SQLite database.

- Generated sample Nigerian customer records for testing.
- Added bulk CSV ingestion and record-level validation.
- Checked for missing fields and incomplete records.
- Used SQLite to store processed registration data.
- Created a Streamlit interface to demonstrate the workflow and compare manual and automated processing.

## Results

In the test scenario, processing time was reduced from approximately **130 seconds to 0.5 seconds per record**. The project demonstrates how validation and automation can reduce repetitive data-entry work and make record processing more consistent.

## Links

Try the [live application](https://automated-sim-registration-website-llbxzsmi8ya8rpgjbuweyd.streamlit.app/) or view the [GitHub repository](https://github.com/DinmaJJ/Automated-SIM-registration-Website).
