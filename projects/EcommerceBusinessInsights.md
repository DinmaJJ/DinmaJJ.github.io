---
layout: default
title: Ecommerce Business Insights Project
permalink: /projects/ecommerce-business-insights-project/
---

# Ecommerce Business Insights 

**Problem:** To understand customer behaviour, business risks, reasons  for growth and decline and generate insights that can help decision making.

**Solution:** Built a website that automatically cleans data and provides meaningful insights showing reasons for growth and decline, causes of churn in customers, customers with likelihood of having a high life time value and what risks the business curently experiences.

## Approach

1. **Data Collection:** Extracted 3 years of ecommerce business data (200K+ records).
2. **EDA:** Analyzed patterns in the ecommerce business data.
3. **ETL:** Built an ETL pipeline that extracted the data, leaned and standardised the columns and loaded them into a database.
4. **Analysis:** Designed charts that showed trends and relationships between columns in the dataset.
5. **Modeling:** Created a Churn and Customer Lifetime Value prediction model.
6. **Evaluation:** Achieved 89% precision on test set

## Results

- Identified churn drivers like low-credit tiers, high shipping cost, nonsubscription to newsletters.
- Identified operational issues that leads to low rating like delivery speed and warehouse delivery rate.
- Identified the best performing products.
- Identified the period were rise and fall occurs and predicted sales, profit and orders for the next year.

## Code Highlights

```python
# Bar Chart 
fig3 = px.bar(
    payments,
    x="payment_method",
    y="failed_payment_rate",
    title="Failed Payment Rate by Payment Method",
    labels={"payment_method": "Payment Method", "failed_payment_rate": "Failed Payment Rate (%)"},
)

fig3.update_traces(texttemplate="%{y:.2f}%", textposition="outside")
fig3.update_layout(
    yaxis_ticksuffix="%",
    xaxis_tickangle=-30,
)

fig3.show()
