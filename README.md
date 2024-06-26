[![Github Build](https://github.com/scriptex/svgo-add-viewbox/workflows/Build/badge.svg)](https://github.com/scriptex/svgo-add-viewbox/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/svgo-add-viewbox/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/svgo-add-viewbox&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-svgo-add-viewbox-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/svgo-add-viewbox/badge)](https://www.codefactor.io/repository/github/scriptex/svgo-add-viewbox)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon.atanas.info/api/analytics?account=UA-83446952-1&page=github.com/scriptex/svgo-add-viewbox&pixel)](https://github.com/scriptex/svgo-add-viewbox/)

# SVGO Add viewBox

> An SVGO plugin to add `viewBox` attribute based on `width` and `height` attributes

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/svgo-add-viewbox?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/svgo-add-viewbox?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/svgo-add-viewbox?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/svgo-add-viewbox)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/svgo-add-viewbox?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/svgo-add-viewbox?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/svgo-add-viewbox?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/svgo-add-viewbox?style=plastic)

This plugin adds the `viewBox` attribute to your SVGs based on the `width` and `height` attributes. The difference between this plugin and the built-in [`removeDimensions`](https://github.com/svg/svgo/blob/master/plugins/removeDimensions.js) plugin is that `svgo-add-viewbox` does not remove the `width` and `height` of your SVGs.

In order to use this plugin correctly, your SVGs should have their `width` and `height` attributes specified.

## Usage

**v2.x.x or 3.x.x of this plugin should be used with SVGO v3 and above.**

**v1.x.x of this plugin should be used with SVGO v2.**

1. Create a `svgo.config.js` file following the [official configuration guide](https://github.com/svg/svgo#configuration)
2. Use the option to specify a custom plugin.
3. Install this module from NPM

```sh
npm install svgo-add-viewbox --save-dev
# or
yarn add svgo-add-viewbox -D
```

4. `import` the module in your `svgo.config.js` file:

```javascript
import addViewBox from 'svgo-add-viewbox';
```

5. In the `plugins` array in your `svgo.config.js` file add the following:

```javascript
plugins: [
	// ... more plugins
	addViewBox
	// ... more plugins
];
```

6. Arguments

-   `overwrite` - boolean - defaults to `true` - If set to `false` will preserve any existing `viewBox` attribute on your input SVG files.

Usage:

```javascript
plugins: [
	// ... more plugins
	{
		...addViewBox,
		params: {
			overwrite: false
		}
	}
	// ... more plugins
];
```

7. Execute your SVG transformation NPM script.

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
 <img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
 <img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
 <img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
 <img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
 <img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
 <img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
 <img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
 <img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
 <img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
