# SVGO Add viewBox [![npm][npm-version-img]][npm-version-url] [![MIT license][license-img]][license-url] [![Twitter][twitter-img]][twitter-url] [![Analytics][analytics-img]][analytics-url]

> An SVGO plugin to add `viewBox` attribute based on `width` and `height` attributes

[![All issues on Github][github-issues-img]][github-issues-url]
[![Open issues on Github][github-open-issues-img]][github-open-issues-url]
[![Closed issues on Github][github-closed-issues-img]][github-closed-issues-url]
[![Latest Github gag][github-tag-img]][github-tag-url]
[![GitHub last commit][last-commit-img]][last-commit-url]

[![Weekly downloads on NPM][npm-downloads-weekly-img]][npm-url]
[![Monthly downloads on NPM][npm-downloads-monthly-img]][npm-url]
[![Yearly downloads on NPM][npm-downloads-yearly-img]][npm-url]
[![Total downloads on NPM][npm-downloads-total-img]][npm-url]

[![Githib build status][github-status-img]][github-status-url]
[![Combined Github checks][github-checks-img]][github-checks-url]
![Publish size][publish-size-img]
![Top language][github-top-language-img]
![Used languages count][github-languages-img]
[![Renovate App Status][renovateapp-img]][renovateapp-url]
[![Make A Pull Request][prs-welcome-img]][prs-welcome-url]

This plugin adds the `viewBox` attribute to your SVGs based on the `width` and `height` attributes. The difference between this plugin and the built-in [`removeDimensions`](https://github.com/svg/svgo/blob/master/plugins/removeDimensions.js) plugin is that `svgo-add-viewbox` does not remove the `width` and `height` of your SVGs.

In order to use this plugin correctly, you SVGs should have their `width` and `height` attributes specified.

## Usage

**This plugin should be used with SVGO v2 and above.**

1. Create a `svgo.config.js` file following the [official configuration guide](https://github.com/svg/svgo#configuration)
2. Use the option to specify a custom plugin.
3. Install this module from NPM
    ```sh
    npm install svgo-add-viewbox --save-dev
    # or
    yarn add svgo-add-viewbox -D
    ```
4. `require` the module which you just created in your `svgo.config.js` file:
    ```javascript
    const addViewBox = require('svgo-add-viewbox');
    ```
5. In the `plugins` array in your `svgo.config.js` file add the following:
    ```javascript
    plugins: [
    	// ... more plugins
    	{
    		fn: addViewBox.fn,
    		name: 'addViewBox',
    		type: addViewBox.type,
    		active: addViewBox.active,
    		description: addViewBox.description
    	}
    	// ... more plugins
    ];
    ```
6. Execute your SVG transformation NPM script.

## Support this project

[![Tweet][tweet-img]][tweet-url]
[![Donate on PayPal][paypal-img]][paypal-url]
[![Become a Patron][patreon-img]][patreon-url]
[![Buy Me A Coffee][ko-fi-img]][ko-fi-url]
[![Donate on Liberapay][liberapay-img]][liberapay-url]
[![Donate on Issuehunt][issuehunt-img]][issuehunt-url]

## LICENSE

[MIT][license-url]

[npm-version-img]: https://badgen.net/npm/v/svgo-add-viewbox?icon=npm
[npm-version-url]: https://www.npmjs.com/package/svgo-add-viewbox
[license-img]: https://badgen.net/npm/license/svgo-add-viewbox
[license-url]: https://github.com/scriptex/svgo-add-viewbox/blob/master/LICENSE
[twitter-url]: https://twitter.com/scriptexbg
[twitter-img]: https://badgen.net/twitter/follow/scriptexbg?icon=twitter&color=1da1f2&cache=300
[github-tag-img]: https://badgen.net/github/tag/scriptex/svgo-add-viewbox?icon=github
[github-tag-url]: https://github.com/scriptex/svgo-add-viewbox/releases/latest
[github-checks-img]: https://badgen.net/github/checks/scriptex/svgo-add-viewbox?icon=github
[github-checks-url]: https://github.com/scriptex/svgo-add-viewbox
[github-issues-img]: https://badgen.net/github/issues/scriptex/svgo-add-viewbox?icon=github
[github-issues-url]: https://github.com/scriptex/svgo-add-viewbox/issues
[github-open-issues-img]: https://badgen.net/github/open-issues/scriptex/svgo-add-viewbox?icon=github
[github-open-issues-url]: https://github.com/scriptex/svgo-add-viewbox/issues?q=is%3Aopen+is%3Aissue
[github-closed-issues-img]: https://badgen.net/github/closed-issues/scriptex/svgo-add-viewbox?icon=github
[github-closed-issues-url]: https://github.com/scriptex/svgo-add-viewbox/issues?q=is%3Aissue+is%3Aclosed
[last-commit-img]: https://badgen.net/github/last-commit/scriptex/svgo-add-viewbox?icon=github
[last-commit-url]: https://github.com/scriptex/svgo-add-viewbox/commits/master
[analytics-img]: https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/svgo-add-viewbox/README.md
[analytics-url]: https://github.com/scriptex/svgo-add-viewbox/
[npm-downloads-weekly-img]: https://badgen.net/npm/dw/svgo-add-viewbox?icon=npm
[npm-downloads-monthly-img]: https://badgen.net/npm/dm/svgo-add-viewbox?icon=npm
[npm-downloads-yearly-img]: https://badgen.net/npm/dy/svgo-add-viewbox?icon=npm
[npm-downloads-total-img]: https://badgen.net/npm/dt/svgo-add-viewbox?icon=npm
[npm-url]: https://www.npmjs.com/package/svgo-add-viewbox
[tweet-img]: https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3
[tweet-url]: https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fsvgo-add-viewbox&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome
[paypal-img]: https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65
[paypal-url]: https://www.paypal.me/scriptex
[patreon-img]: https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413
[patreon-url]: https://www.patreon.com/atanas
[ko-fi-img]: https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi
[ko-fi-url]: https://ko-fi.com/scriptex
[liberapay-img]: https://img.shields.io/liberapay/receives/scriptex.svg?logo=liberapay
[liberapay-url]: https://liberapay.com/scriptex
[issuehunt-img]: https://raw.githubusercontent.com/BoostIO/issuehunt-materials/master/v1/issuehunt-shield-v1.svg
[issuehunt-url]: https://issuehunt.io/r/scriptex/svgo-add-viewbox
[publish-size-img]: https://badgen.net/packagephobia/publish/svgo-add-viewbox
[renovateapp-img]: https://badgen.net/badge/renovate/enabled/green?cache=300
[renovateapp-url]: https://renovatebot.com
[prs-welcome-img]: https://badgen.net/badge/PRs/welcome/green?cache=300
[prs-welcome-url]: https://github.com/scriptex/svgo-add-viewbox/pulls
[github-status-img]: https://badgen.net/github/status/scriptex/svgo-add-viewbox?icon=github
[github-status-url]: https://github.com/scriptex/svgo-add-viewbox/actions/workflows/build.yml
[github-languages-img]: https://img.shields.io/github/languages/count/scriptex/svgo-add-viewbox
[github-top-language-img]: https://img.shields.io/github/languages/top/scriptex/svgo-add-viewbox
