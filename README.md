
![CrowdSort Logo](/images/crowdsort_logo.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<!--![last commit](https://img.shields.io/github/last-commit/jack-allan/kgrid-demos/crowdsort.svg?colorB=brightgreen)-->
[![GitHub release](https://img.shields.io/github/release/kgrid-demos/crowdsort.svg?style=flat&logo=appveyor)](https://github.com/kgrid-demos/crowdsort/releases/)
[![latest commit](https://img.shields.io/github/last-commit/kgrid-demos/crowdsort.svg?colorB=brightgreen)](https://github.com/kgrid-demos/crowdsort/commits/)



### Project Overview

CrowdSort is a web app concept in prototype format.

This concept involves 3 things:
  * Comparison sorting (from computer science)
  * Experts answering "this or that" questions (somewhat like either.io)
  * Having a crowd develop a risk model by sorting things by relative risk

Although CrowdSorting could be applied to many things, the first use case is in regards to medication risk. 

Imagine if experienced pharmacists could routinely use a system to compare two drugs head-to-head and tell the system which of the two drugs carried the greater risk. If this is possible, then, using a "crowd" of pharmacists, it may be possible to develop and test the reliability and validity of a relative risk measurement for medications. 

This idea is the starting point for CrowdSort, and the basis of a feasability experiment taking place during the Winter of 2019 (formal research paper to follow).



### Prerequisites

This web application lives completely in the browser, no additional software or download is required.


### Getting Started

CrowdSort can be accessed through the [Knowledge Grid demo page](http://crowdsort.herokuapp.com/).


![CrowdSort Home Page](/images/landing_page.png)

### File Structure

    .
    ├── ...
    ├── api                                     # 
    │   ├── CrowdSort1.postman_collection.json  # 
    │   ├── models                              #
    │   │   ├── selectionSort.js                #
    │   ├── routes                              #
    │   │   ├── selectionSort.js                #
    ├── check_responses.ipynb                   #
    ├── data                                    #
    │   ├── drug_comparison.json                #
    │   ├── drug_comparisons.txt                #
    ├── database.json                           # 
    ├── heroku.md                               #
    ├── images                                  # 
    ├── package-lock.json                       #
    ├── package.json                            #
    ├── README.md                               #
    ├── server.js                               #
    ├── web                                     #
    │   ├── images                              #
    │   ├── scripts                             # Schema and data
    │   │    ├── comparisons.js                 # Vue components
    │   ├── style                               #
    │   │    ├── style.css                      #                 
    │   ├── index.html                          #
    │   ├── normalize.css                       #
    └── ...


### Built With

* [Vue.js](https://vuejs.org/) - JavaScript Framework
* [Heroku](https://www.heroku.com/) - Cloud Application Platform
* [mLab MongoDB](https://www.mlab.com/home) - Database Framework


### Deployment

The CrowdSort is a web app hosted on Heroku. Details can be found on the [Heroku readme](heroku.md).

### Authors

* **Allen Flynn**
* **Jack Allan**
* **Koki Sasagawa**
* **Sara Kurosu** 
* **Natalie Lampa**  
* **George Meng**


### Acknowledgments

The Knowledge Grid\
Department of Learning Health Sciences, Michigan Medicine

<img src="https://i.imgur.com/G0fr4DT.png" alt="Michigan_Medicine_logo" height="50"/>
<p align="right"><img src="https://i.imgur.com/IFIBLeO.png" alt="KGridLogo" width="70"/></p>

