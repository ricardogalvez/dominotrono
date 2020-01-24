---
author: Ricardo G.
categories: ['experiments']
date: 2018-12-17T19:26:30-05:00
draft: false
tags: []
title: 'Paper JS any one?'
vendorJS: 'paperJS'
---

## A winding path of sorts

So this was some doing getting hooked up. Paper has its own formating/ name spacing thing (need to find out exactly what its called) and getting it going wasn't that easy. And right now its kludged in...

- hugo needs more conditional logic at the template level
- Paper has its own type attribute that needs to be modified so that our script can be called
  - that looks like this: `<script type="text/paperscript" ...>`
