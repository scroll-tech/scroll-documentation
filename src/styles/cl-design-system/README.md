[image url]: https://smartcontract.imgix.net/examples/design-system-docs/image

# Chainlink Labs Design System Guidelines

By Brian Boehlke & Alejandro Larumbe

Q3 2022

**Status:** In Progress

<br />

# Table of Contents:

1. [Background](#background)
2. [Getting started](#getting-started)
3. [Tokens](#tokens)
4. [Values](#values)
5. [Global tag styling](#global-tags)
6. [Classes](#classes)
7. [Modules](#modules)

<br />

# Background <a id="background"></a>

As of Q3 2022, the Front End team released a public version of the Design System as an NPM package.

This document is a guide for importing the package and using the Design System files in a product external to the Product Design and FE teams.

## What is the Chainlink Labs Design System?

A library of styles & components released as reusable code to make adopting teams more efficient and consistent in their execution.
To make the system work for the largest number of users, the styles and classes are all written in CSS files.

<br />

# Getting started <a id="getting-started"></a>

## Install NPM package

The Design System's NPM package makes the underlying Chainlink Labs Product Design styles available to any team interested in using them.

- Install latest version: `npm install @chainlink/design-system`

- Install specific version: `npm install @chainlink/design-system@[version_number]`

## Import design system

To get started, import the Design System into one of your app’s top layer components:

```js
require(@chainlink/design-system/global-styles.css)
```

or

```js
import "@chainlink/design-system/global-styles.css"
```

Importing the design system in your application will apply out of the box styling to HTML tags and access to CSS variables, tokens, and class-based components.

<br />

# Currently available in Chainlink Design System (CLDS)

The library is broken up into different groups: `Values`, `Tokens`, `Global Tags`, `Classes`, and `Modules`. Each group serves a different level of complexity.

_For example_:

_Values_ are the lowest level variable in the Design System. Most point to hard coded values such as pixels, rem, percentages, or hex numbers.

```css
--blue-600: #375bd2;
```

_Tokens_ assign semantically named variables that point to the individual values.

```css
--color-text-link: var(--blue-600);
```

_Classes_ are more complex by combining multiple declarations into CSS classes that can be applied to HTML tags.

```css
:where(.heading-600, h1) {
  font-size: 2rem;
  margin-bottom: var(--space-4x);
  letter-spacing: -0.04rem;
}

:where(.paragraph, .paragraph-100, .paragraph-200, .paragraph-300, body, p) {
  font-family: var(--font-family-text);
  line-height: 1.5;
  font-weight: var(--font-weight-normal);
  color: var(--color-text-primary);
}
```

Importing CLDS automatically applies classes to certain _HTML tags_. <a id="global-tag-example"></a>

For example, before importing CLDS:

```jsx
<h1>Chainlink Data Feeds</h1>
<p>Explore the decentralized oracle networks powered by Chainlink</p>
```

![alt text](https://smartcontract.imgix.net/examples/design-system-docs/image8.png?auto=compress%2Cformat)

Becomes Chainlink styled when the Design System is imported:

![alt text](https://smartcontract.imgix.net/examples/design-system-docs/image1.png?auto=compress%2Cformat)

<br />

## Tokens <a id="tokens"></a>

Semantically named variables and styles used in our frontend apps -such as _Data_, _Faucets_, and _Automation_- to help simplify implementation and reduce future maintenance.

The CLDS provides tokens in the form of CSS variables.

_For example_:

```jsx
<div
  style={{
    margin: "var(--space-4x)",
    backgroundColor: "var(--color-background-secondary)",
  }}
>
  <h1>Chainlink Data Feeds</h1>
  <p>Explore the decentralized oracle networks powered by Chainlink</p>
</div>
```

![alt text](https://smartcontract.imgix.net/examples/design-system-docs/image4.png?auto=compress%2Cformat)

<br/>

The tokens are split based on their proposed use:

- [Background](tokens/background.css) (colors)
- [Border](tokens/border.css) (colors, widths, radii, box-shadows)
- [Fill](tokens/fill.css) (colors used for SVG icons)
- [Shadow](tokens/shadow.css) (colors and box-shadows)
- [Typography](tokens/typography.css) (colors)

<br/>

### Background

**Color**

| Name                         | Intended use                         |
| ---------------------------- | ------------------------------------ |
| --color-background-primary   | Body background                      |
| --color-background-secondary | Section background                   |
| --color-background-error     | Alert error background               |
| --color-background-contrast  | Banner background                    |
| --color-background-warning   | Alert warning background             |
| --color-background-success   | Alert success background             |
| --color-background-info      | Alert highlight background           |
| --color-background-disabled  | Disabled button & control background |

<br/>

### Border

**Color**

| Name                               | Intended use                                                             |
| ---------------------------------- | ------------------------------------------------------------------------ |
| --color-border-primary             | Cards, Tiles                                                             |
| --color-border-secondary           | Dropdown, Menu, use with --shadow-mid when combining borders and shadows |
| --color-border-contrast            | Banner border                                                            |
| --color-border-interactive         | Input & control borders resting state                                    |
| --color-border-interactive-focus   | UI focus border                                                          |
| --color-border-interactive-hover   | Input & control border hover state                                       |
| --color-border-interactive-pressed | Input & control border pressed state                                     |
| --color-border-interactive-error   | Interactive card pressed state                                           |
| --color-border-disabled            | Disabled button & control border                                         |
| --color-border-separator           | Horizontal rule                                                          |

**Inner borders as box-shadow**

| Name                 | Intended use                                                             |
| -------------------- | ------------------------------------------------------------------------ |
| --border-primary     | Cards, Tiles                                                             |
| --border-secondary   | Dropdown, Menu, use with --shadow-mid when combining borders and shadows |
| --border-interactive | Input & control borders resting state                                    |

**Radius**

| Name                      | Intended use         |
| ------------------------- | -------------------- |
| --border-radius-primary   | Inputs, Buttons      |
| --border-radius-secondary | Cards                |
| --border-radius-reset     | Border reset         |
| --border-radius-round     | Rounded icon buttons |

**Width**

| Name                     | Intended use |
| ------------------------ | ------------ |
| --border-width-primary   | Inputs       |
| --border-width-secondary | Buttons      |
| --border-width-reset     | Border reset |

<br/>

### Fill

**Color**

| Name                 | Intended use                |
| -------------------- | --------------------------- |
| --color-fill-success | Success icon fill and Alert |
| --color-fill-error   | Error icon fill and Alert   |
| --color-fill-warning | Warning icon fill and Alert |
| --color-fill-info    | Info icon fill and Alert    |

<br/>

### Shadow

**Color tints**
| Name | Intended use |
| ---------------------- | ------------------------------------------- |
| --shadow-color-primary | Shadows on background-primary and secondary |
| --shadow-color-secondary | Shadows on gray backgrounds |
| --shadow-color-contrast | Shadows on the dimmed/scrim background |

**Shadows in form of layered box shadows**

| Name                    | Intended use                                       |
| ----------------------- | -------------------------------------------------- |
| --shadow-low            | Tile, Tooltip                                      |
| --shadow-mid            | Toast, Menu, Side Panel                            |
| --shadow-high           | Modal                                              |
| --shadow-low-secondary  | Options for shadows on different background colors |
| --shadow-mid-secondary  |                                                    |
| --shadow-high-secondary |                                                    |

<br/>

### **Typography**

| Name                      | Intended use                      |
| ------------------------- | --------------------------------- |
| --color-text-primary      | Body text                         |
| --color-text-secondary    | Body text on secondary background |
| --color-text-heading      | Heading text                      |
| --color-text-error        | Error state text                  |
| --color-text-warning      | Warning text                      |
| --color-text-success      | Success text                      |
| --color-text-info         | Alert text                        |
| --color-text-contrast     | Banner text                       |
| --color-text-link         | Link text                         |
| --color-text-link-hover   | Link text hover                   |
| --color-text-link-pressed | Link text pressed                 |
| --color-text-disabled     | Disabled text                     |
| --color-text-placeholder  | Form placeholder text             |
| --color-text-value        | Form value text                   |
| --color-text-label        | Form label text                   |

<br/>

## Values <a id="values"></a>

The base values of the design system. These tend to be hard-coded values like pixels, rem, hex numbers, etc.
These values can be accessed using the [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var) function:

```css
.example {
  padding: var(--space-2x);
  background-color: var(--orange-200);
}
```

`PRO TIP` - Aim to use the tokens as the first option and fall back to use the low-level values if the token does not exist.

<br />

Values are split according to their use:

- [Space](values/space.css)
- [Color](values/colors.css)
- [Font](values/font.css)

<br/>

## Classes <a id="classes"></a>

Classes that can be applied to HTML tags to leverage the Product Design team’s styles. These classes are included when importing the design system.

### Usage

To use, add the pertinent class to an HTML tag (no need for additional imports). _For example_:

```jsx
<div className="container">
```

In addition, a group of classes are `applied automatically to certain HTML tags` when importing the design system. (See [example](#global-tag-example) above)

<br/>

### **List of tags automatically styled**:

- **Layout:** _main_

- **Typography:** _h1_, _h2_, _h3_, _h4_, _h5_, _h6_, _p_, _span_, _button_, _input_, _select_, _area_, _label_

<br/>

`PRO Tip` - _Classes_ can be overridden if needed by applying a different _class_ or CSS styling to an HTML tag.

<br/>

Classes available in CLDS acording to their use:

### [**Layout**](components/layout.css)

Top level classes to match the page layout of the Chainlink productss (ie. Automation, VRF, etc.).

- **container**

- **card** _Example_:

```jsx
<div className="card">
  <h4>Chainlink Data Feeds</h4>
  <p>Explore the decentralized oracle networks powered by Chainlink</p>
</div>
```

![alt text](https://smartcontract.imgix.net/examples/design-system-docs/image7.png?auto=compress%2Cformat)

<br/>

### [**Typography**](components/typography.css)

CSS classes that match the Product Design team’s text styles within Figma.

- By importing the CLDS, the Typography component file will assign styles to all headings, paragraphs and spans
- To override or apply classes to any other HTML tags, add the class to the tag
  - This will provide the tag: font-family, font-weight, color, and line-height
  - If needing to change the font-weight, apply using inline styles.

```jsx
<h2 className="heading-600" style={{ marginBottom: "var(--space-12x)" }}>
  Example
</h2>
```

List all typography classes:

| Name          | Intended use 📱                  | Automatically applied to: |
| ------------- | -------------------------------- | ------------------------- |
| display-400   | Marketing headers and titles     |                           |
| display-500   |                                  |                           |
| display-600   |                                  |                           |
| heading-100   | Headers and titles               | h6                        |
| heading-200   |                                  | h5                        |
| heading-300   |                                  | h4                        |
| heading-400   |                                  | h3                        |
| heading-500   |                                  | h2                        |
| heading-600   |                                  | h1                        |
| paragraph-100 | Multi-line text block (2+ lines) |                           |
| paragraph-200 |                                  | body, p                   |
| paragraph-300 |                                  |                           |
| text-100      | Single lines of text (1 line)    |                           |
| text-200      |                                  | span                      |
| text-300      |                                  |                           |
| label         | Form labels, table headers       |                           |

<br/>

## Modules <a id="modules"></a>

More complex components that rely on a tag hierarchy and may have variants. Module components are responsive.

In order to use, import each component:

```js
const component = require("@chainlink/design-system/component.module.css")
```

or

```js
import component from "@chainlink/design-system/component.module.css"
```

Module components are [module.css](https://css-tricks.com/css-modules-part-1-need/) files. You can read this [guide](https://css-tricks.com/css-modules-part-2-getting-started/) if your app does not support module.css files out of the box.

<br/>

### Button

**Import**

```js
import button from "@chainlink/design-system/button.module.css"
```

**Variants**

- primary
- secondary
- tertiary
- tag
- reset

**Structure**

```js
<button href="#" className={button.variant}>
  Button label
</button>
```

Tertiary button accepts an svg image:

```js
<button className={button.tertiary}>
  <svg />
  Button label
</button>
```

**Usage**

```js

<button href="#" className={button.primary}>
    Primary
</button>

<a href="#" className={button.secondary}>
    Secondary
</a>

<button className={button.tertiary}>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 0C6.41775..." fill="currentColor" />
  </svg>
 Tertiary
</button>

<button className={button.tag}>Tag</button>

<li className={button.reset}>Reset</li>
```

<br/>

![alt text](https://smartcontract.imgix.net/examples/design-system-docs/image2.png?auto=compress%2Cformat)

<br/>

### **Hero**

**Import**

```js
import hero from "@chainlink/design-system/hero.module.css"
```

**Usage**

Place the hero.container class in the components's parent element.

**Structure**

```jsx
<section className={hero.container}>
  <h1>
    Hero Title
    {/* Optional */}
    <button className={button.primary}>Actions button</button>
  </h1>
  {/* Optional */}
  <p>Description</p>
  {/* Optional. May be a button or a. */}
  <button className={button.primary}>Button 1</button>
  {/* Optional. May be a button or a. */}
  <a href="#" className={button.secondary}>
    Button 2
  </a>
</section>
```

**Usage**

```jsx
<section className={hero.container}>
  <h1>
    Chainlink Verifiable Randomness Function
    <button className={button.primary}>Actions</button>
  </h1>
  <p>Chainlink VRF provides cryptographically secure randomness for your smart contracts.</p>
  <button className={button.primary}>Create Subscription</button>
  <a href="https://docs.chain.link/docs/chainlink-vrf/" className={button.secondary}>
    Go to the docs
  </a>
</section>
```

Desktop:

![alt text](https://smartcontract.imgix.net/examples/design-system-docs/image5.png?auto=compress%2Cformat)

Mobile:

![alt text](https://smartcontract.imgix.net/examples/design-system-docs/image6.png?auto=compress%2Cformat)

A stripped down version of the Hero might look like this:

```tsx
<section className={hero.container}>
  <h1>Chainlink Verifiable Randomness Function</h1>
  <p>Chainlink VRF provides cryptographically secure randomness for your smart contracts.</p>
  <a href="https://docs.chain.link/docs/chainlink-vrf/" className={button.secondary}>
    Go to the docs
  </a>
</section>
```

![alt text](https://smartcontract.imgix.net/examples/design-system-docs/image3.png?auto=compress%2Cformat)

<br/>

### **Header banner**

**Import**

```js
import headerbanner from "@chainlink/design-system/headerbanner.module.css"
```

**Structure**

```jsx
<div className={headerbanner.container}>
  {/* Optional*/}
  <div className={headerbanner.badge}>
    <span>NEW</span>
  </div>
  <p>
    Description
    {/* Optional*/}
    <a href="#">Link Text</a>
  </p>
</div>
```

**Usage example**

```jsx
<div className={headerbanner.container}>
  <div className={headerbanner.badge}>
    <span>NEW</span>
  </div>
  <p>
    Join the global Web3 community at SmartCon 2022.{" "}
    <a href="https://smartcon.chain.link/?utm_medium=referral&utm_source=data-chain-link&utm_campaign=FY22Q3-smartcon-2022">
      Learn more
    </a>
  </p>
</div>
```

![alt text](https://smartcontract.imgix.net/examples/design-system-docs/image9.png?auto=compress%2Cformat)

```

```
