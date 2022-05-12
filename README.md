# Geosatis App 🌐
<img width="1779" alt="Screenshot 2022-05-12 at 18 57 32" src="https://user-images.githubusercontent.com/65896178/168128893-cdd210ad-0440-4381-b54d-d667a709ffa7.png">

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [Project](#project)
- [License](#license)
- [Author Info](#author-info)

---

## Description

This is a mock application from Geosatis that helps monitoring potential offenders using Leaflet as the map.

#### Technologies

- Angular
- Leaflet
- ngRx
- Material UI

---

## How To Use

#### Installation 🛠

Clone this project on your local device and install all dependecies with NPM

```
npm install
```

To start development:
```
ng serve
```

Geosatis is using [json-server](https://github.com/typicode/json-server) for the backend and this project already contains pre-populated offenders.

To run the server:
```
npm run server
```

#### Launch both commands 🚀

This project contains [concurrently](https://www.npmjs.com/package/concurrently) which allows it to launch both commands at the same time.

To run **Angular** and the **Server** at the same time:
```
npm run dev
```

#### Testing 🧪

I'm using Jasmin for unit testing.

To run the tests: 

```
ng test
```

---

## Project 

When I received the project details, I immediately launch **Milanote** to start planning the development process.

### Plannification 🗺
---

First, I needed to understand all of the requirements of the project (**Features**, **UI**, **interactions**, ...) and then, I looked at the technologies needed to complete this project. It helped me build a strong foundation for all of the tasks and in which order I need to accomplish them.

Before starting to code, I wanted to create a quick design on **Figma**. Designing an app helps me understand the different interactions, look, and feel of the application so that I don't have to ask myself the question of "what color should I use" when coding.

<img width="700" alt="Screenshot 2022-05-06 at 16 37 08" src="https://user-images.githubusercontent.com/65896178/167154970-5c0c8f96-39d2-4094-b119-733233ec6d4b.png">

*Figma Design**

After creating a rough sketch, watch crash courses on Angular, and ngRx to better understand these technologies since I hardly used them in the past.

My basic understanding of Angular and ngRx gave me enough confidence to start thinking about the architecture of the application.

### Application Architecture 🏠
---

Creating a design system is long and I was very short on time so I decided to use **Material UI** to get components such as **Modals**, **Title bars**, and **selectors** to get the visual up and running as soon as possible. 

In terms of designing the Store, I choose to only put **2 states**, The **offender list** and the **index page** for the pagination system.

The last piece I had to figure out was the implementation of the pagination system. My first approach was to query the server to get only the filtered list of offenders and make another query when we want to navigate to the next page. 

This idea was good and easier to implement but the problem was that the application needed to also display all of the offenders which means another call to the server to get the same information twice. 

Instead of that I took the hard road and decided to query only one time my server to retrieve all of the offenders and create a pagination system using "**Selectors**" from ngRx. To get this working, it meant that I also needed to store the current Index of the page on my Store to keep track of the changes on different components.

### What could I have done better ? 🤔
---

I would spend a little bit more time creating a design for different screen size and adding interactions because I tried different implementations that made me loose a little bit of time. 

---

## License

MIT License

Copyright (c) [2017] [James Q Quick]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Author Info

- Max Balej - [Send me a mail](mailto:mbalej34@gmail.com)
