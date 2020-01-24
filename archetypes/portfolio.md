---
title: '{{ replace .TranslationBaseName '-' ' ' | title }}'
date: {{ .Date }}
draft: false
categories: 'portfolio'
author: Ricardo G.
postImageSqip: '../media/portfolio/{{ replace .TranslationBaseName '-' '_' | lower }}/sqip.svg'
portfolioHero1x: '../media/portfolio/{{ replace .TranslationBaseName '-' '_' | lower }}/placeHolder_sm.png'
portfolioHero2x: '../media/portfolio/{{ replace .TranslationBaseName '-' '_' | lower }}heroPlaceholder@2x.png'
portfolioHero3x: '../media/portfolio/{{ replace .TranslationBaseName '-' '_' | lower }}/heroPlaceholder@3x.png'
portfolioHeroAlt: ''
# heroFigcaption goes on the portfolio/ landing page
heroFigcaption: ''
postImage1x: '../media/portfolio/{{ replace .TranslationBaseName '-' '_' | lower }}/placeHolder_sm.png'
postImage2x: '../media/portfolio/{{ replace .TranslationBaseName '-' '_' | lower }}/placeHolder_sm@2x.png'
postImage3x: '../media/portfolio/{{ replace .TranslationBaseName '-' '_' | lower }}/placeHolder_sm@3x.png'
postImageAlt: ''
figcaption: ''
svgClipObjectClass: ''
svgColorClass: ''
projectRoles: ['role one', 'role two']
projectClients: ['client A', 'client B']
projectCredits: ['collaborator 1', 'collaborator 2']
projectDate: ''
tags: []
weight: 10
externalURL: ''
projectDesc: ''
newLayout: #true or false
---

## Project Details
