---
title: API Overview
tags: api, documentation
---

This section explains the Honeyswap Subgraph and how to interact with it. The Honeyswap subgraph indexes data from the Honeyswap contracts over time. It organizes data about pairs, tokens, Honeyswap as a whole, and more. The subgraph updates any time a transaction is made on Honeyswap. The subgraph runs on [The Graph](https://thegraph.com/) protocol's hosted service and can be openly queried.

## Resources

[Subgraph Explorer](https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2) - sandbox for querying data and endpoints for developers.

[Honeyswap Subgraph](https://github.com/1Hive/uniswap-v2-subgraph) - source code for deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state of Honeyswap and also tracks historical data. It is currently used to power [info.honeyswap.org](https://info.honeyswap.org/). **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).**

## Making Queries

To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/introduction).

## Versions

The [Honeyswap Subgraph](https://thegraph.com/explorer/subgraph/1Hive/uniswap-v2) only tracks data on Honeyswap V2.