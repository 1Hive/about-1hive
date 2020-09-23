---
title: Fees
tags: protocol-overview, documentation
---

## Liquidity provider fees

There is a **0.3%** fee for swapping tokens. **This fee is split by liquidity providers proportional to their contribution to liquidity reserves.**

Swapping fees are immediately deposited into liquidity reserves. This increases the value of liquidity tokens, functioning as a payout to all liquidity providers proportional to their share of the pool. Fees are collected by burning liquidity tokens to remove a porportional share of the underlying reserves.

Since fees are added to liquidity pools, the invariant increases at the end of every trade. Within a single transaction, the invariant represents `token0_pool / token1_pool` at the end of the previous transaction.

There are many community developed tools to determine returns. You can also read more in the docs about how to think about [LP returns](/docs/honeyswap/advanced-topics/returns/).

## Protocol Fees

There is a 0.05% protocol fee enabled for Honeyswap. These fees are sent to the 1Hive Common Pool.

## Protocol Charge Calculation

The protocol-wide charge of 0.05% per trade is enabled. This represents ⅙th (16.6̅%) of the 0.30% fee.

This amount does not affect the fee paid by traders, but affects the amount received by liquidity providers.

Rather than calculating this charge on swaps, which would significantly increase gas costs for all users, the charge is instead calculated when liquidity is added or removed. See the <a href='/whitepaper.pdf' target='_blank' rel='noopener noreferrer'>whitepaper</a> for more details.
