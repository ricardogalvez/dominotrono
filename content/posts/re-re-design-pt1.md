---
author: Ricardo G.
categories: ['thoughts']
date: 2021-01-29T10:52:00-05:00
draft: false
tags: []
title: "Re Re Design Pt. 1"
---

I am going to redesign this site. I am also publiclly committing to writing more about what I am doing. The idea being that my memory kind of sucks and I want to document this process as I go along.

But since this post lives deep in a development branch, the logging of the site might not see the light of day for some time. I'm ok with that too.

## Jan. 29, 2021

So today, I'm working specifically on updating the CSS for this project. Its bloated and way to repetitive. There's way too many nested classes and mostly bad bad badness, as I didnt really know (or care) that it was getting out of hand. I just had a mode of thinking about things and thats how I did things. But that way, in retrospect was just too damn fragile. So time for a reckoning.

### C.U.B.E.

I like the approach to writing CSS that Andy Bell laid in a couple of posts so I'm going down that road, because the reasoning is sound in my mind, that is the mental model resonates with how I _want_ my CSS to be written. Its simple; it stands for Compose, Utility, Block, Exception, it makes heavy use of the Cascade and relies on a simple premise that a majority of styles can be set a higher level in the cascade, can be more or less _global_ and only modified where an _exception_ occurs. Pretty cool and I think will make this site's CSS way cleaner, easier to maintain and experiment with without worry that I'll screw something up somewhere else. Or need to create more convoluted partials and classes when creating explorations or making modifications.

#### Short list of modifications

- Added in the stack utility
- Reorganization of the style scheme completed
- Working towards using `clamp()` instead of the responsive font vendor function
- creating more partial templates to further isolate blocks of code for ease of use and readability

### Jan. 30, 2021

Carrying on through the CSS cleanup, and adding in compact and more concise css and html partials, reflective of a more component based way of thinking. While Its not nearly close enough, this is the overall attitude and mind set.

It should also be noted that as of today, the compiled css file size is around 42.5K. Way too much! My goal is to cut it half from when I originally started which was at 50.1K (Yikes!) So when its down to 25-20K I'll be happy. Ideally though I should be at 10 or less. I just don't think there's enough styling going on to warrant such a big file. And is indicative of my lackadaisical approach and superficial understanding of the BEM methodology and its implementation. That misapprehension manifesting as a needlessly deep nested structure. Hard to maintain.

### Feb. 5 / 6, 2021

Mostly going through and adding composition classes and the odd utility class. The goal is to make it so high level layout can be handled w/ one or two classes, instead of spreading layout and grid rules around. I also think I'll be able to refactor some of the more complicated grid layouts to use flex instead... That should be fun.

### Feb. 7, 2021

Fixing up some type rules and I must admit, I'm still unclear as to how to make `clamp` work...

### Feb. 8, 2021

So I had to jump through some hoops to get my brain around how clamping works but I think I have it. This post helped quite a bit <https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/>, but also, if I follow correctly, creates some heavy lifting on the `scss` front to get it to work. Mostly converting the much of the scale rules to be unit-less until the last second. I'm still not certain it is the correct approach, for my needs. To be really honest I've been chasing this fluid typography dragon for years now, and I'm still not pleased with where I'm at in terms of understanding or having a solid approach. Alas, I like a fiend w/ his dope or a drunkard with his wine, I will have lust for the lure of fluid type...

### Feb. 10, 2021

New branch added this tackles issue #53 where we start to address the overall issue laid out by Simon Collison here: <https://colly.com/articles/this-used-to-be-our-playground> I intend to make this site my playground.

- first up: get some cool `svg` arworks into this project.  ✓
- next up: get some css and/ or JS working on individual groups and elements within the svg. Better yet:
  - Will HUGO allow me to put dynamic content inside the SVG in the form of a partial?
  - Still unclear on this front...

### Feb. 15 - 17, 2021

I havent reallly been journaling the progress on recent changes and progress, but this thing is coming along, or spinning wildly out of control I'm not sure. But it is fun! I want to continue work on the home page, but I know its probalby not the thing I should be doing. Futzing w/ SVG and robots is lots of fun. But I need to get other things in the pipeling. The trick now is how to merge the whole thing down without all hell breaking loose.

Thats the trick.

### Feb. 18, 2021

Not much to report at this point. Sidetracked by starting up another project.
