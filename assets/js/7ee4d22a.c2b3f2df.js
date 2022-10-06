"use strict";(self.webpackChunkngrx_course=self.webpackChunkngrx_course||[]).push([[791],{5132:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(6213),s=["components"],l={title:"Chapter 6: Reducers",sidebar_position:6},p=void 0,c={unversionedId:"chapter-6",id:"chapter-6",isDocsHomePage:!1,title:"Chapter 6: Reducers",description:"How do we modify the State?",source:"@site/docs/chapter-6.mdx",sourceDirName:".",slug:"/chapter-6",permalink:"/ngrx-essentials-course/docs/chapter-6",editUrl:"https://github.com/this-is-angular/ngrx-essentials-course/edit/main/docs/chapter-6.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Chapter 6: Reducers",sidebar_position:6},sidebar:"courseSidebar",previous:{title:"Chapter 5: Actions",permalink:"/ngrx-essentials-course/docs/chapter-5"},next:{title:"Chapter 7: Basic Selectors",permalink:"/ngrx-essentials-course/docs/chapter-7"}},d=[{value:"How do we modify the State?",id:"how-do-we-modify-the-state",children:[]},{value:"What are Reducers?",id:"what-are-reducers",children:[]},{value:"What are pure functions?",id:"what-are-pure-functions",children:[]},{value:"Understanding our State",id:"understanding-our-state",children:[]},{value:"Writing Reducers",id:"writing-reducers",children:[]},{value:"Using NgRx built-in functions to reduce boilerplate",id:"using-ngrx-built-in-functions-to-reduce-boilerplate",children:[]},{value:"Homework",id:"homework",children:[]}],u={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-do-we-modify-the-state"},"How do we modify the State?"),(0,r.kt)("p",null,"So far, we have learned how to create ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions"),", the building blocks of NgRx, that signal the ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," about what happened in the application and what needs to be done. But ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions")," are just objects, that don't hold any functionality; they by themselves cannot make any ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," changes. To make those changes actually happen, we have to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer"),", next of the core most important concepts of NgRx."),(0,r.kt)("h2",{id:"what-are-reducers"},"What are Reducers?"),(0,r.kt)("p",null,"Reducers are ",(0,r.kt)("em",{parentName:"p"},"pure functions")," that receive two arguments, the current ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," of the application, an ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," object, calculate the new state based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," that happened, and return that new ",(0,r.kt)("inlineCode",{parentName:"p"},"State"),". Usually calculating involves determining which ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," happened (sometimes via ",(0,r.kt)("inlineCode",{parentName:"p"},"switch-case")," statements, but NgRx provides utilities that reduce boilerplate), copying the previous state into a new object while modifying the relevant properties of the ",(0,r.kt)("inlineCode",{parentName:"p"},"State"),", and returning the new ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," object. Every time an ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),' is dispatched (we will learn more about dispatching in the next chapters, for now "dispatching" an ',(0,r.kt)("inlineCode",{parentName:"p"},"Action")," means the ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," has happened), NgRx will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," function, providing the old ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," object as arguments, get the returned new ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," and immediately notify all of our components about the change (how neat is that!). Essentially, ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducers")," are the central place where ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," changes happen."),(0,r.kt)("h2",{id:"what-are-pure-functions"},"What are pure functions?"),(0,r.kt)("p",null,'In the previous paragraph, we mentioned a concept of "pure functions", a core principle of functional programming. If you are familiar with the concept of a ',(0,r.kt)("inlineCode",{parentName:"p"},"pure function"),", or with functional programming in general, you can skip this paragraph. If not, let's explore what a ",(0,r.kt)("inlineCode",{parentName:"p"},"pure function")," is. A ",(0,r.kt)("inlineCode",{parentName:"p"},"pure function")," is a function that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Receives data only using its arguments"),(0,r.kt)("li",{parentName:"ol"},"Never accesses global variables"),(0,r.kt)("li",{parentName:"ol"},"Provided the same arguments, always returns the same result"),(0,r.kt)("li",{parentName:"ol"},"Does not have side effects. By side effects we mean every impact a function can have on the external environment, like modifying a global variable, ",(0,r.kt)("inlineCode",{parentName:"li"},"console.log"),"-ing something, sending HTTP requests, accessing ",(0,r.kt)("inlineCode",{parentName:"li"},"localStorage")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"cookies")," and so on.")),(0,r.kt)("p",null,"Basically, a ",(0,r.kt)("inlineCode",{parentName:"p"},"pure function")," is a function that only receives arguments, calculates a result (that is always the same for the same arguments), and returns that result."),(0,r.kt)("p",null,"Example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"pure function"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function add(a: number, b: number) {\n  return a + b;\n}\n")),(0,r.kt)("p",null,"This function will always return the same result for the same numbers, and has zero impact on the external environment."),(0,r.kt)("p",null,"Example of an ",(0,r.kt)("inlineCode",{parentName:"p"},"impure function"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function sendRequest(url: string) {\n  return fetch(url).then((response) => response.json());\n}\n")),(0,r.kt)("p",null,"This function makes an HTTP request, which is a side effect. On top of that, even if the URL stays the same, there is no guarantee that the remote server will always return the same data; thus, this function is ",(0,r.kt)("em",{parentName:"p"},"impure"),"."),(0,r.kt)("p",null,"Pure functions are easy to understand, test and debug. Thus, they are a very important concept in functional programming, and, by extension, NgRx. You can read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"pure functions")," ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976"},"here")," and ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c"},"here"),"."),(0,r.kt)("h2",{id:"understanding-our-state"},"Understanding our State"),(0,r.kt)("p",null,"Before we can write a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer"),", we first must understand the shape of our ",(0,r.kt)("inlineCode",{parentName:"p"},"State"),". What data it holds, what are the property names and so on. So far our state is simple: we have an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Category")," items, and that is it."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," folder that we have created, create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"state.ts")," and put the following code in it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Category {\n  name: string;\n}\n\nexport interface AppState {\n  categories: Category[];\n}\n\nexport const initialState: AppState = {\n  categories: [],\n};\n")),(0,r.kt)("p",null,"In this file, we have defined what a ",(0,r.kt)("inlineCode",{parentName:"p"},"Category")," is, defined how our application ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," looks via the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppState")," interface, and defined the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialState")," (the state that the app has ",(0,r.kt)("em",{parentName:"p"},"before")," any ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," has happened). Now we are set to create our first ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," function!"),(0,r.kt)("h2",{id:"writing-reducers"},"Writing Reducers"),(0,r.kt)("p",null,"In the same ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," folder, create another file named ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer.ts"),", and put the following code in it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Action } from "@ngrx/store";\n\nimport { AppState } from "./state";\n\nexport function reducer(state: AppState, action: Action) {\n  switch (action.type) {\n    case "[Category List] Add Category":\n      return { ...state, categories: [...state.categories, action.payload] };\n    default:\n      return state;\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," Beware of the ",(0,r.kt)("strong",{parentName:"p"},"payload"),' attribute of the Action, which only fits the "old" way to create actions. Next example will use the props and call directly the properties added to the Action.')),(0,r.kt)("p",null,"Now let's deconstruct this example. First of all, as you see, the ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," function is a pure function. Next, it differentiates between ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions")," using a ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," statement and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," types. On each different ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),", our ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," will return a slightly different version of a ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," to match that ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),"'s intent. As we have only one ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," for now, we wrote only one ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," statement, and if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," is not identified, we return the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," without modifying it. As you can see, the practice is to copy the state, and return a new object. ",(0,r.kt)("strong",{parentName:"p"},"Never modify the previous ",(0,r.kt)("inlineCode",{parentName:"strong"},"state")," object, always return a new one"),".\nWhat will happen is when we dispatch the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCategory")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," function will be called, the new ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," (with the added category object in the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," array) will be returned, and then NgRx will propagate that change to all of our components."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," is a great way to centralize ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," changes. if we have ",(0,r.kt)("em",{parentName:"p"},"any")," problems with how our ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," has been changed, we need only to look inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," to find out where the bug is. It is a ",(0,r.kt)("inlineCode",{parentName:"p"},"pure function"),", so it also easy to test, and understand."),(0,r.kt)("h2",{id:"using-ngrx-built-in-functions-to-reduce-boilerplate"},"Using NgRx built-in functions to reduce boilerplate"),(0,r.kt)("p",null,"Writing long ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," statements can be tedious; those might be even harder to read; a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," in a large enterprise project might as well have hundreds of ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," statements. Thus, the NgRx team has created special functions to help us generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," function. Let's rewrite our code to use those functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Action, createReducer, on } from "@ngrx/store";\n\nimport * as actions from "./actions";\nimport { AppState, initialState } from "./state";\n\nconst _reducer = createReducer(\n  initialState,\n  on(actions.addCategory, (state, {category}) => ({\n    ...state,\n    categories: [...state.categories, category],\n  }))\n);\n\nexport function reducer(state: AppState, action: Action) {\n  return _reducer(state, action);\n}\n')),(0,r.kt)("p",null,"Let's understand what goes on here. First of all, we have the ",(0,r.kt)("inlineCode",{parentName:"p"},"createReducer")," function, which does exactly that - creates the resulting ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," function. It receives the initial state of the application, and then an arbitrary amount of handlers for each action (we provided only one, but we can (and will!) have lots of ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions"),", and thus. lots of ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," function calls). The ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," function receives an ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," as the first argument, and a callback function as a second one, which acts like a mini-",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," for only that specific ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),". Thus, the need to write huge ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," statements is eliminated. Note that the callback signature is (state, {category}) in which we ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring"},"destruct")," the action passed in the second argument in order to only get the props. Now let's understand two specific parts of this code:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Why did we create a ",(0,r.kt)("inlineCode",{parentName:"em"},"_reducer")," function only to call it in the ",(0,r.kt)("inlineCode",{parentName:"em"},"reducer")," function?")," The thing is, in the next chapters we are going to register the ",(0,r.kt)("inlineCode",{parentName:"li"},"reducer")," function in our ",(0,r.kt)("inlineCode",{parentName:"li"},"AppModule"),", and because of how the Angular build process works, it does not allow including anonymous functions like the one returned by ",(0,r.kt)("inlineCode",{parentName:"li"},"createReducer"),", only declared named functions. Thus we wrote a conventional function and called our ",(0,r.kt)("inlineCode",{parentName:"li"},"_reducer")," from it. ",(0,r.kt)("strong",{parentName:"li"},"Always create ",(0,r.kt)("inlineCode",{parentName:"strong"},"Reducers")," like this"),"."),(0,r.kt)("li",{parentName:"ol"},"_Why didn't we ",(0,r.kt)("inlineCode",{parentName:"li"},"import")," the ",(0,r.kt)("inlineCode",{parentName:"li"},"Action")," we wanted by name, but rather did ",(0,r.kt)("inlineCode",{parentName:"li"},"import * as actions from './actions';"),"? Because we can easily have dozens of ",(0,r.kt)("inlineCode",{parentName:"li"},"Actions")," that are handled in a single ",(0,r.kt)("inlineCode",{parentName:"li"},"Reducer")," function, we would like to import them as a single object to avoid too cluttered imports.")),(0,r.kt)("h2",{id:"homework"},"Homework"),(0,r.kt)("p",null,"Of course, homework isn't going anywhere. Remember the ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions")," we created in the previous homework? we are going to use them."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the same ",(0,r.kt)("inlineCode",{parentName:"li"},"reducer"),", create a handler for deleting a ",(0,r.kt)("inlineCode",{parentName:"li"},"Category")," (consider the name of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Category")," unique)."),(0,r.kt)("li",{parentName:"ol"},"Write a handler that deletes ",(0,r.kt)("strong",{parentName:"li"},"all")," categories from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Store"),".")),(0,r.kt)("p",null,"Now we not only know how to create ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions")," modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," with them in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," function, but also how to avoid too much boilerplate code. Now let's learn how to actually use the ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," data in our components."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Exercise 1 solution"),(0,r.kt)(o.Z,{title:"reducer.ts",className:"language-ts",mdxType:"CodeBlock"},"const _reducer = createReducer(\n  initialState,\n  // other handlers\n  on(actions.deleteCategory, (state, {name}) => ({\n    ...state,\n    categories: state.categories.filter(\n      (cat) => cat.name !== name\n    ), // filter out the deleted category\n  }))\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Exercise 2 solution"),(0,r.kt)(o.Z,{title:"reducer.ts",className:"language-ts",mdxType:"CodeBlock"},"const _reducer = createReducer(\n  initialState,\n  // other handlers\n  on(actions.deleteAllCategories, (state) => ({ ...state, categories: [] })) // just assign a new empty array for categories\n);\n")))}h.isMDXComponent=!0}}]);