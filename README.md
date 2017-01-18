# TpvCoffeeProjectTeamApp

is a progressive web app built with [angular2](https://angular.io/) + [firebase](https://firebase.google.com/) + 
[google material design](https://www.google.com/design/spec/material-design/introduction.html) for the gang at the peanut vendor coffee project

---

[![](https://raw.githubusercontent.com/projekt-kreatywa/coffee-project/master/src/assets/TPV-TCP-logo.png)](dev mode - sorry folks)

currently the application lives at [dev mode - sorry folks](dev mode - sorry folks)

---

## table of contents
 * [what is this](#what-is-this)
 * [demo](#demo)
 * [used libraries, guides, etc.](#used-libraries-guides-etc)
   * [libraries](#libraries)
   * [guides](#guides)
   * [other resources](#other-resources)
 * [installation](#installation)
   * [configuration](#configuration)
   * [firebase](#firebase)
 * [development](#development)
 * [tests](#tests)
   * [unit tests](#unit-tests)
   * [e2e tests](#e2e-tests)
 * [build](#build)
 * [author](#author)
 * [license](#license)

## what is this
coffee project is a progressive web app built with [angular2](https://angular.io/) + [firebase](https://firebase.google.com/) + 
[google material design](https://www.google.com/design/spec/material-design/introduction.html) for the gang at the peanut vendor coffee project

currently it contains following features:
 * social media login (facebook, twitter, google+ and github)
 * personal 'todo' item list
 * chat with other users
 
the project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21 and is a clone of [angular2-firebase-material-demo](https://github.com/tarlepp/angular2-firebase-material-demo) by [tarleoo](https://github.com/tarlepp)

## the app

currently the application lives at [dev mode - sorry folks](dev mode - sorry folks)

[![qr code to the application](https://raw.githubusercontent.com/projekt-kreatywa/coffee-project/master/coffee-project-url-dynamic.png)](dev mode - sorry folks)

while the demo of the seed application can be found at [https://fir-todo-v3.firebaseapp.com/](https://fir-todo-v3.firebaseapp.com/)

## used libraries, guides, etc.

### libraries
 * [angular 2](https://github.com/angular/angular)
 * [material design for angular 2](https://github.com/angular/material2)
 * [angularfire2](https://github.com/angular/angularfire2)
 * [angular2-moment](https://github.com/urish/angular2-moment)
 * [angular-cli](https://github.com/angular/angular-cli)
 
### guides
 * [angular 2 style guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
 
### other resources
 * [firebase](https://firebase.google.com/)
 * [material design](https://www.google.com/design/spec/material-design/)

---

## installation
first of all you have to install ```npm``` and ```node.js``` to your box. installation instructions can
be found [here](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager). 

note that ```node.js 6.x``` is required.

```bash
$ git clone https://github.com/projekt-kreatywa/coffee-project.git
$ cd coffee-project

# install the project's dependencies with npm
$ npm install

# fast install (via yarn, https://yarnpkg.com)
$ yarn install  # or yarn
```
---

## configuration
see `/src/app/config/config.ts_example` file and copy it to `/src/app/config/config.ts` file and make necessary changes to it. note that you need a [firebase account](https://firebase.google.com/) to get all necessary config values.

if you are not familiar with firebase and/or don't have a firebase developer account, sign up quickly with your google id here: [https://firebase.google.com/](https://firebase.google.com/).

after you have created new application you will need to make some [security rules](https://firebase.google.com/docs/database/security/quickstart) 
for the used data storage. below is configuration that this demo application uses, so you can use the same within your 
application.

```
{
    "rules": {
      "messages": {
          ".write": "auth !== null",
          ".read": "auth !== null"
      },
      "todos": {
        "$uid": {
          // grants write access to the owner of this user account whose uid must exactly match the key ($uid)
          ".write": "auth !== null && auth.uid === $uid",
          // grants read access to any user who is logged in with facebook
          ".read": "auth !== null && auth.uid === $uid"
        }
      }
    }
}
```

these rules ensure that 'todo' items are show only to user who made those. also chat messages requires that user is
logged in to read / write those.

---

## development
to start developing in the project run:

```bash
$ npm start
# or
$ ng serve
```

then head to `http://localhost:4200` in your browser.

## code scaffolding
run `ng generate component component-name` to generate a new component. you can also use `ng generate directive/pipe/service/class`.

## build
run `ng build` to build the project. the build artifacts will be stored in the `dist/` directory. use the `--prod` flag for a production build.

## tests

### unit tests
to run tests run:

```bash
$ npm test
# or
$ ng test
```

### e2e tests
to run tests run:

```bash
$ npm run e2e
# or
$ ng e2e
```

## deploying to github pages

run `ng github-pages:deploy` to deploy to github pages.

## further help

to get more help on the `angular-cli` use `ng --help` or go check out the [angular-cli readme](https://github.com/angular/angular-cli/readme.md).

---

## using @angular/flex-layout module

this will require a bit of footwork until npm install of [@angular/flex-layout](https://github.com/angular/flex-layout) is available via standard `npm i @angular/flex-layout` which will be after the the flex-layout v1.0.0-beta.1 release (week of december 20, 2016).

### fast start 

installing flex-layout with npm is **not yet** available. developers can easily install this `@angular/flex-layout` library using a **local build** and directory copy:

```console
gulp build:release
ditto ./dist/@angular/flex-layout <your project>/node_modules/@angular/flex-layout
```

### npm

the expected deployment process to **npm** (and the standardized use of `npm i @angular/flex-layout`) is **not** yet available. npm installs will be available after the the flex-layout v1.0.0-beta.1 release (week of december 20, 2016).

### application usages
in their application module, developers import the global layout api directives (as shown below): 

```ts
// demo-app-module.ts

import { FlexLayoutModule } from '@angular/flex-layout';

@ngmodule({
  imports: [
    browsermodule, commonmodule, formsmodule, httpmodule,  // import ng2 core modules
    FlexLayoutModule.forRoot(),                            // import dependency on flex-layout
  ], 
)}
export class demoappmodule { }
```


in their component templates, developers easily use the layout api to build
complex, dynamic layouts:

```html
<div fx-layout="row">
  <div [fx-layout]="firstcol" [fx-flex]="firstcolwidth" >
    <div fx-flex="27%"> first item in row  </div>
    <div fx-flex      > second item in row </div>
  </div>
  <div [fx-layout]="secondcol" flex >
    <div fx-flex       > first item in column  </div>
    <div fx-flex="33px"> second item in column </div>
  </div>
</div>
``` 

### further help

to get more help on the installation and use of @angular/flex-layout check out [flex-layout readme](https://github.com/angular/flex-layout)

---

## credits


- [rafszul](https://github.com/rafszul) of [projekt:kreatywa](https://github.com/projekt-kreatywa)
- [lukas](https://github.com/lukas-coffee-wine) of [the peanut vendor coffee project](https://www.thepeanutvendor.co.uk/pages/coffee-project) 

---

## license
[the mit license (mit)](license)




This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
