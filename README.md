# HAX for builds
This repo contains prebuilt versions of HAX based on running build routines against source. This can make it easier to integrate HAX into platforms by referencing a build (either CDN or adding this version to your platform) and not need to build HAX from source (via bower / npm) in order to utilize it.

This repo include the following builds:

[builds/hax-kitchen-sink.html](builds/hax-kitchen-sink.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.2/builds/hax-kitchen-sink.html"></script>`
HAX + Polymer + Common element set found in the haxtheweb.org demo. This is what most people would think of as "HAX" yet isn't required in order to utilize.

[builds/hax-solo.html](builds/hax-solo.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.2/builds/hax-solo.html"></script>`
HAX by itself, smallest payload to just get HAX and it's related dependencies without polymer though. This is good for when you are using polymer elsewhere in your project.

[builds/hax.html](builds/hax.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.2/builds/hax.html"></script>`
hax-solo.html + Polymer (1.x.x); for drop in stand alone integration. If wired up to a haxStore data feed then you can supply your own elements yet pull the editor in easily through one import.

