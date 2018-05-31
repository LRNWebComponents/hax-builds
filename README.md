# HAX for builds
This repo contains prebuilt versions of HAX based on running build routines against source. This can make it easier to integrate HAX into platforms by referencing a build (either CDN or adding this version to your platform) and not need to build HAX from source (via bower / npm) in order to utilize it.

This is most useful when your just trying out HAX or you don't have Polymer based build routines yet want to leverage the capabilities we've built into HAX. You'll be forced to peg to a specific point release but this will get you much of the advanced elements found in hax demos without needing to understand anything about integration.

[build/hax.html](build/hax.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.5/build/hax.html"></script>`
HAX + Polymer to build what's found in the haxtheweb.org demo. The [index file](build/index.html) file located in this same directory will provide a simple "app" integration to see how that works as well.

[build/elements.html](build/elements.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.5/build/elements.html"></script>`
Polymer + Common element set found in the haxtheweb.org. Use this after saving the content to ensure that it renders correctly because you'll have all the elements.

[build/cms-hax.html](build/cms-hax.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.5/build/cms-hax.html"></script>`
cms-hax + kitchen-sink - CMS based implementation which ensures all dependencies are in place for rendering. This is for drop in CMS style integrations.

[build/wysiwyg-hax.html](build/wysiwyg-hax.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.5/build/wysiwyg-hax.html"></script>`
wysiwyg-hax + kitchen-sink - WYSIWYG based implementation which ensures all dependencies are in place for rendering. This is for drop in WYSIWYG style integrations.

[build/kitchen-sink.html](build/kitchen-sink.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.5/build/kitchen-sink.html"></script>`
HAX + Polymer + Common element set found in the haxtheweb.org demo. The index file located in this same directory will provide a simple "app" integration.
