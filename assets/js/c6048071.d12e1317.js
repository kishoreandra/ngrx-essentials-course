"use strict";(self.webpackChunkngrx_course=self.webpackChunkngrx_course||[]).push([[267],{2044:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={title:"Chapter 9: Building a real application",sidebar_position:9},l=void 0,p={unversionedId:"chapter-9",id:"chapter-9",isDocsHomePage:!1,title:"Chapter 9: Building a real application",description:"What makes a real WebApp?",source:"@site/docs/chapter-9.md",sourceDirName:".",slug:"/chapter-9",permalink:"/ngrx-course/docs/chapter-9",editUrl:"https://github.com/this-is-angular/ngrx-course/edit/main/docs/chapter-9.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Chapter 9: Building a real application",sidebar_position:9},sidebar:"courseSidebar",previous:{title:"Chapter 8: Modifying State",permalink:"/ngrx-course/docs/chapter-8"},next:{title:"Chapter 10: Working with side effects",permalink:"/ngrx-course/docs/chapter-10"}},d=[{value:"What makes a real WebApp?",id:"what-makes-a-real-webapp",children:[]},{value:"Building a backend",id:"building-a-backend",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Accessing the API from our application",id:"accessing-the-api-from-our-application",children:[]}],c={toc:d};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-makes-a-real-webapp"},"What makes a real WebApp?"),(0,r.kt)("p",null,"In our code so far, we have added and used data models that we stored in variables (the ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," itself is just a variable in the operational memory of the computer). Of course that sort of data lacks persistence, meaning we can add categories, expenses a other data, but when we just reload the page, all that data will be gone. Frankly speaking, this makes our app a bit useless, so let's fix it."),(0,r.kt)("h2",{id:"building-a-backend"},"Building a backend"),(0,r.kt)("p",null,"Don't be worried because of the title of this paragraph, we are not going to build a ",(0,r.kt)("em",{parentName:"p"},"real")," backend. Instead, for learning purposes, to better emulate a real development environment, we are going to run a mock backend using a special tool called ",(0,r.kt)("inlineCode",{parentName:"p"},"json-server"),". It is a program written in Node.js that takes a JSON file and turns it into a sort of a database, running it ona specific port, so that we can access it using HTTP requests. It follows the REST principles. so we can:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," requests to retrieve lists of data"),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"get")," requests by ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),' to retrieve a single entity from the "database"'),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"post")," requests to add new entities to the database"),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"patch")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"put")," requests to update existing entities"),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"delete")," requests to delete entities from the database")),(0,r.kt)("p",null,"We are going to use this tool to build an API that supports our financial logging application."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Installing is simple. We have to install it globally so we are able to run it in any folder on our machines. Open the command line in any folder (though preferably inside our application directories) and run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g json-server\n")),(0,r.kt)("p",null,"When the installation is finished, head to this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Armenvardanyan95/ngrx-tutorial-app/blob/main/database.json"},"file")," on GitHub and download it's contents to the root directory of your application. Let's explore the contents a little. The file looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "categories": [\n    {\n      "id": 1,\n      "name": "Food"\n    },\n    {\n      "id": 2,\n      "name": "Electricity bills"\n    },\n    {\n      "id": 1,\n      "name": "Car repair"\n    }\n  ],\n  "expenses": [\n    // omitted for brevity\n  ]\n}\n')),(0,r.kt)("p",null,"As you see, we have data about the categories and expenses. When we run ",(0,r.kt)("inlineCode",{parentName:"p"},"json-server")," on our ",(0,r.kt)("inlineCode",{parentName:"p"},"database.json")," file, we will have access to the categories through ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/categories/")," URL, and to the expenses through ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/expenses/")," URL. Let's do this! In your root directory, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"json-server database.json\n")),(0,r.kt)("p",null,"and head to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),". You will be greeted with a welcome page that lists pour resources, in our case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"/categories")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"/expenses"),". If you click on the URLs, you wi;ll see the actual data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"database.json")," file. Our API is up and running!"),(0,r.kt)("h2",{id:"accessing-the-api-from-our-application"},"Accessing the API from our application"),(0,r.kt)("p",null,"In Angular, as you most probably know, we use services to interact with remote APIs. Let's create a service for interacting with the categories section of our database. Under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app")," directory, create a folder named ",(0,r.kt)("inlineCode",{parentName:"p"},"services"),", and put a ",(0,r.kt)("inlineCode",{parentName:"p"},"category.service.ts")," file in it (you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ng generate"),"). In that service, let's add methods for retrieving, creating and deleting categories. In the end, your service might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// src/app/services/category.service.ts\n\nimport { Injectable } from "@angular/core";\nimport { HttpClient } from "@angular/common/http";\n\n@Injectable({ providedIn: "root" })\nexport class CategoryService {\n  readonly baseUrl = "http://localhost:3000/categories";\n\n  constructor(private readonly http: HttpClient) {}\n\n  getCategories() {\n    return this.http.get<Category[]>(this.baseUrl);\n  }\n\n  getCategoryById(id: number) {\n    return this.http.get<Category>(`${this.baseUrl}/${id}`);\n  }\n\n  addCategory(category: Category) {\n    return this.http.post<Category>(this.baseUrl, category);\n  }\n\n  deleteCategory(id: number) {\n    return this.http.delete<void>(`${this.baseUrl}/${id}`);\n  }\n}\n')),(0,r.kt)("p",null,"In next chapters, we will be using this service to add categories, retrieve them and delete them ",(0,r.kt)("em",{parentName:"p"},"really"),", with a database and persistence.\nThis chapter has been a setup of some tools that we are going to use extensively. In the upcoming chapter, we will learn to interact with remote APIs in an NgRx way."))}u.isMDXComponent=!0}}]);