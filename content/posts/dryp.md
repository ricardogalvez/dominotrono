---
author: Ricardo G.
categories: []
date: 2018-02-17T09:07:37-05:00
draft: false
postimage: ""
postImageAlt: ""
figcaption: ""
tags: ["javascript" , "gardening" ]
title: "Dryp: A remote garden manager"
---
This project is to fulfill a couple ends. The first is purely for professional development and add new and relevant work to my portfolio. The idea is to create a "mock" product and run it through from basic concept to a finished product complete w/ screen designs, work flows, functional and technical specs. While it may never see the light of day in terms of a real, functional product, I think that, as a project demonstrating the breadth of my abilities it will be apparent.

## A Project outline

### Story Frames
* the Dryp app tells you the story about your garden from day to day
* the Dryp is a configurable garden control system that lets you monitor, control and memorialize your garden using open source software and hardware.
* Users will access their "plot" via the Dryp interface and be able to see air and soil temps, soil pH, irrigation and ventilation settings.
* Dryp will visualize the status of various aspects of the garden.
* Dryp will allow user's to schedule
* Dryp will record and monitor Air and soil temp and save it to a database
* The Dryp application can help you control ventilation and lighting if connected
* micro-geography of plants can be mapped

### Functional specs / Software ~ Hardware interface
* Overall the project would be expressed as a web app
* requires a local weather stataion (arduino / raspberry pi)
* raspberryPi
  - hosts node app
  - hosts DB
  - tcp/ip communication
* remote, web based application to control various functions of an automated garden
  - node.js / golang / python / electron?
    * core application / controller: node / go / python
    * hardware control: processing / wiring
* collect data about garden status and store it
* requires access to local weather data

* Irrigation can be scheduled / programmed
* Soil pH can be monitored

### Users
* me, but could be useful for DIYer who possesses a fair amout of technical ability

### Wireframes

### Implementation
* Hardware
  - Arudino
  - raspberryPi
* Software
  - wiring / processing Arduino I/O
  - node
  - html / js front end UI
* Data
  - from weather station
  - data from garden sensors
  - soil temp
  - air temp
  - moisture levels
  - UV levels
* UI
  - main page / system status dashboard
    * see Data section above
  - irrigation control
  - greenhouse control
    * ventilation
  - _Optional:_ garden cameras
    * IR raspberryPi (NoIR?) cameras
* Database

### Screen Design
* primarily a small screen app,
  - tablet and desktop versions would be cool

<img width="468" height="614" src="/media/IMG_3997.jpg" alt="" style="background-size: cover; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjggNjE0Ij48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz48L2ZpbHRlcj48cGF0aCBmaWxsPSIjY2ViZWJhIiBkPSJNMCAwaDQ2N3Y2MTRIMHoiLz48ZyBmaWx0ZXI9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMiAxLjIpIHNjYWxlKDIuMzk4NDQpIiBmaWxsLW9wYWNpdHk9Ii41Ij48ZWxsaXBzZSBmaWxsPSIjOGE2YTY5IiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDU4LjQgLTcxIDE2NCkgc2NhbGUoOTUuNjA3MzggNDUuMTIxNDcpIi8+PGVsbGlwc2UgZmlsbD0iI2ZmZiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTYuNSA1MTYuMyA3NC43KSBzY2FsZSgzNC44NTQ1MiAxOTQuMDAwMDEpIi8+PGVsbGlwc2UgZmlsbD0iI2IxM2IxZCIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgtMTQ4LjE1NzIxIC0yLjg0NDc2IC4yNDkxMiAtMTIuOTc0MSA5Ni44IDQuNSkiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKC02MS45IDE0MS40IC0xMDEuNykgc2NhbGUoMzIuMjY1NDEgMTAzLjY4NDAzKSIvPjxlbGxpcHNlIGZpbGw9IiNmZmYiIGN4PSIxNjEiIGN5PSIyNDMiIHJ4PSIxNzgiIHJ5PSIyOSIvPjxwYXRoIGZpbGw9IiM1MTQ3NTUiIGQ9Ik02MCAyMjBsLTMwLTEgNjgtODJ6Ii8+PGVsbGlwc2UgZmlsbD0iIzhkNzE2YyIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTQ5LjUgODYuMiA5NS4yKSBzY2FsZSgzMi42MjkzNSAxMi4yNDAwOSkiLz48ZWxsaXBzZSBmaWxsPSIjN2E1NDUzIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDIzLjgxNTcyIC0xOS43NzIxOSAxMS4xMzg3OCAxMy40MTY3MyAxODMuMyAxOTMpIi8+PC9nPjwvc3ZnPg==);">
