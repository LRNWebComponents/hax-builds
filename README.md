# HAX for builds
This repo contains prebuilt versions of HAX based on running build routines against source. This can make it easier to integrate HAX into platforms by referencing a build (either CDN or adding this version to your platform) and not need to build HAX from source (via bower / npm) in order to utilize it.

This is most useful when your just trying out HAX or you don't have Polymer based build routines yet want to leverage the capabilities we've built into HAX. You'll be forced to peg to a specific point release but this will get you much of the advanced elements found in hax demos without needing to understand anything about integration.

[builds/hax.html](builds/hax.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.5/builds/hax.html"></script>`
HAX + Polymer to build what's found in the haxtheweb.org demo. The [index file](build/index.html) file located in this same directory will provide a simple "app" integration to see how that works as well.

[builds/elements.html](builds/elements.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.5/builds/elements.html"></script>`
Polymer + Common element set found in the haxtheweb.org. Use this after saving the content to ensure that it renders correctly because you'll have all the elements.

[builds/cms-hax.html](builds/cms-hax.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.5/builds/cms-hax.html"></script>`
cms-hax + kitchen-sink - CMS based implementation which ensures all dependencies are in place for rendering. This is for drop in CMS style integrations.

[builds/wysiwyg-hax.html](builds/wysiwyg-hax.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.5/builds/wysiwyg-hax.html"></script>`
wysiwyg-hax + kitchen-sink - WYSIWYG based implementation which ensures all dependencies are in place for rendering. This is for drop in WYSIWYG style integrations.

[builds/kitchen-sink.html](builds/kitchen-sink.html)
`<script src="https://cdn.rawgit.com/LRNWebComponents/hax-builds/0.16.5/builds/kitchen-sink.html"></script>`
HAX + Polymer + Common element set found in the haxtheweb.org demo. The index file located in this same directory will provide a simple "app" integration.
