# POLITICO Newsroom Codindg Style Guide

*v1.0.1*

This style guide is intended for coders of all levels in the POLITICO newsroom. It aims to give an easily scannable yet comprehensive set of rules on code syntax and helpful guides on code composition.

*Are you here for help with the npm package, @politico/eslint-config-interactives? Check out [these docs](./eslint-config-interactives).*.

# Table of Contents

- [Values](#values)
    - [Readable](#readability)
    - [Unobtrusive](#unobtrusive)
    - [Opinionated](#opinionated)
    - [Flexible](#flexible)
- [Elementary Coding Rules of Usage](#elementary-coding-rules-of-usage)
    - [JavaScript](#javascript)
    - [React](#react)
    - [CSS](#css)
    - [SASS](#sass)
    - [Usage Amendments](#usage-amendments)
        - [JavaScript](#javascript-1)
        - [React](#react-1)
        - [CSS](#css-1)
        - [SASS](#sass-1)
- [Coding Principles of Composition](#coding-principles-of-composition)
    - [Organizing Code Into Files](#organizing-code-into-files)
        - [Indentation](#indentation)
        - [Logic in JSX](#logic-in-jsx)
        - [A Note on Hooks](#a-note-on-hooks)
    - [Optimization Through Memoization](#optimization-through-memoization)
    - [Using Fragments](#using-fragments-in-jsx)
- [Amending This Style Guide](#amending-this-style-guide)
    - [Proposal](#proposal)
    - [Reconciliation](#reconciliation)
    - [Discussion](#discussion)
    - [Ratification](#ratification)

# Values

This style guide contains rules and recommendations for how we should write code. When we write these rules, or amend them, we want to consider the following core values. They are listed in order of importance, with the first being the most significant.

## Readability

Our number one value in writing code is readability, and this style guide's principle purpose should be to promote that. We're a small tight-knit team, and that means we often need to work with or edit each other's code. Having everyone know where things are and how things work is more important than writing super-concise code. Rules should be evaluated based on how they affect the readability of the underlying codebase.

## Unobtrusive

We have deadlines, and sometimes you just need to get a page out. Having an unobtrusive workflow is necessary to meet those deadlines. Most of these style rules should be handled automatically (eslint) and those that aren't should be able to be ignored. HOWEVER, coding on deadline should not come at the expense of readability. Coding under this level or pressure is more likely to lead to mistakes, and any developer on the team must be able to come in and fix a bug that appears.

## Opinionated

Tabs vs spaces. With three words, I've reminded you that some coders care very deeply about bespoke coding conventions. Others don't. This style guide is designed to handle both. These rules are highly opinionated on what is and is not allowed, and that's designed to keep disagreements and arguments to a minimum. If a piece of code breaks one of these rules, it is in violation of POLITICO style. If it doesn't, it technically isn't. However, keeping with the previous values: not *all* code *must* follow these rules to be published.

## Flexible

It's important that this document remain flexible enough to accommodate the ever-changing world of development and natural staff turnover. Nothing in here is set in stone, and we encourage spirited debate among coders in the right forums.

# Elementary Coding Rules of Usage

As a base, we have subscribed to the Airbnb coding standard for JavaScript and CSS. See amendments below for additional rules that add/remove/change parts of the Airbnb standard.

*With version 1.0.0, [@politico/eslint-config-interactives](https://github.com/The-Politico/eslint-config-interactives) will be updated to adhere to this new standard.*

## JavaScript

1. [Types](https://github.com/airbnb/javascript#types)
2. [References](https://github.com/airbnb/javascript#references)
3. [Objects](https://github.com/airbnb/javascript#objects)
4. [Arrays](https://github.com/airbnb/javascript#arrays)
5. [Destructuring](https://github.com/airbnb/javascript#destructuring)
6. [Strings](https://github.com/airbnb/javascript#strings)
7. [Functions](https://github.com/airbnb/javascript#functions)
8. [Arrow Functions](https://github.com/airbnb/javascript#arrow-functions)
9. [Classes & Constructors](https://github.com/airbnb/javascript#classes--constructors)
10. [Modules](https://github.com/airbnb/javascript#modules)
11. [Iterators and Generators](https://github.com/airbnb/javascript#iterators-and-generators)
12. [Properties](https://github.com/airbnb/javascript#properties)
13. [Variables](https://github.com/airbnb/javascript#variables)
14. [Hoisting](https://github.com/airbnb/javascript#hoisting)
15. [Comparison Operators & Equality](https://github.com/airbnb/javascript#comparison-operators--equality)
16. [Blocks](https://github.com/airbnb/javascript#blocks)
17. [Control Statements](https://github.com/airbnb/javascript#control-statements)
18. [Comments](https://github.com/airbnb/javascript#comments)
19. [Whitespace](https://github.com/airbnb/javascript#whitespace)
20. [Commas](https://github.com/airbnb/javascript#commas)
21. [Semicolons](https://github.com/airbnb/javascript#semicolons)
22. [Type Casting & Coercion](https://github.com/airbnb/javascript#type-casting--coercion)
23. [Naming Conventions](https://github.com/airbnb/javascript#naming-conventions)
24. [Accessors](https://github.com/airbnb/javascript#accessors)

## React

1. [Basic Rules](https://github.com/airbnb/javascript/tree/master/react#basic-rules)
2. [Class vs createClass vs stateless](https://github.com/airbnb/javascript/tree/master/react#class-vs-reactcreateclass-vs-stateless)
3. [Mixins](https://github.com/airbnb/javascript/tree/master/react#mixins)
4. [Naming](https://github.com/airbnb/javascript/tree/master/react#naming)
5. [Declaration](https://github.com/airbnb/javascript/tree/master/react#declaration)
6. [Alignment](https://github.com/airbnb/javascript/tree/master/react#alignment)
7. [Quotes](https://github.com/airbnb/javascript/tree/master/react#quotes)
8. [Spacing](https://github.com/airbnb/javascript/tree/master/react#spacing)
9. [Props](https://github.com/airbnb/javascript/tree/master/react#props)
10. [Refs](https://github.com/airbnb/javascript/tree/master/react#refs)
11. [Parentheses](https://github.com/airbnb/javascript/tree/master/react#parentheses)
12. [Tags](https://github.com/airbnb/javascript/tree/master/react#tags)
13. [Methods](https://github.com/airbnb/javascript/tree/master/react#methods)
14. [Ordering](https://github.com/airbnb/javascript/tree/master/react#ordering)

## CSS

1. [Formatting](https://github.com/airbnb/css#formatting)
2. [Comments](https://github.com/airbnb/css#comments)
3. [OOCSS and BEM](https://github.com/airbnb/css#oocss-and-bem) *(amended out)*
4. [ID Selectors](https://github.com/airbnb/css#id-selectors)
5. [JavaScript hooks](https://github.com/airbnb/css#javascript-hooks)
6. [Border](https://github.com/airbnb/css#border)

## SASS

1. [Syntax](https://github.com/airbnb/css#syntax)
2. [Ordering](https://github.com/airbnb/css#ordering-of-property-declarations)
3. [Variables](https://github.com/airbnb/css#variables)
4. [Mixins](https://github.com/airbnb/css#mixins)
5. [Extend directive](https://github.com/airbnb/css#extend-directive)
6. [Nested selectors](https://github.com/airbnb/css#nested-selectors)

## Usage Amendments

### JavaScript

**Unresolved Imports**

The eslint rule "import/no-unresolved" has been disabled to due to an incompatibility with our built-in aliases (e.g. "Constants/...").

__

**Max Length**

The max length for our code is 79 characters (down from Airbnb's 100 characters as per [rule 19.13](https://github.com/airbnb/javascript#whitespace--max-len)). The same exceptions of long strings still apply. The main reason for this is to better match our front-end code with our back-end code (mostly Python) which is very opinionated on its line length.

The eslint rule "max-len" has been edited to adhere to this amendment.

__

**Wildcard Imports**

Wildcard imports are allowed (reversing rule [10.2](https://github.com/airbnb/javascript#modules--no-wildcard)). This syntax is supported by ECMA standard and the reasoning given by Airbnb is not compelling enough for such a restriction.

__

**Direct Exports From An Import**

Direct exports from an import are allowed when that is the only thing a file is doing (carving out an exception of [rule 10.3](https://github.com/airbnb/javascript#modules--no-export-from-import)). If a file has imports and exports as well as defining code of its own, the rule should be adhered to in order to maintain proper file order. However, the file is only importing and exporting, allowing direct exports saves time and code.

```jsx
/****** Bad: Combines direct exports with other code ******/
export { es6 as airbnbEsSix } from './AirbnbStyleGuide';

export default const MyComponent = () => {
	return null;
}

/****** Good: Doesn't use direct exports with other code ******/
import { es6 as airbnbEsSix } from './AirbnbStyleGuide';

export default const MyComponent = () => {
	return null;
}

export {
	airbnbEsSix
}

/****** Also Good: Uses direct exoprts exclusively ******/
export { es6 as airbnbEsSix } from './AirbnbStyleGuide';
export { es5 as airbnbEsFive } from './AirbnbStyleGuide/five';

```

### React

**Default Props & Prop Typing**

We don't require explicitly set defaultProps or prop types. While they are encouraged (especially for components that are part of a reusable library), conforming to this rule would not adhere to our value of unobtrusiveness.

The eslint rule "react/prop-types" has had its "skipUndeclared" option turned on to adhere to this amendment.

__

**Props Spreading**

Props spreading is allowed under our rules as many times it's the most unobtrusive way of handling children components. Make sure to understand the unintended consequences of props spreading, especially [accidentally passing props down to DOM elements.](https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html)

The eslint rule "react/jsx-props-no-spreading" has been disabled to adhere to this amendment.

__

### CSS

**OOCS and BEM (on class name)**

We don't require classnames adhere to the OOCS and BEM class naming structure suggested in the Airbnb style guide. While we can acknowledge the merits of some sort of class naming structure, such a drastic switch would not adhere to our value of unobtrusiveness.

We will look into adding this (or another) class naming structure in future amendments.

### SASS

*No SASS amendments yet*

# Coding Principles of Composition

Some rules are hard to enforce without resulting in arbitrary limitations. This section is designed to  provide guidelines to help improve the composition of your code.

## Organizing Code Into Files

Divisions for divisions' sake can cause unnecessary bloat in a project. We want as shallow code directories as possible, but we also want modules that are easy to read through. As stated in our values, the latter is the more important, by far. There's three ways to think about splitting files: line count, duplication, and complexity.

The first it the easiest: **line count**. Once you've reached around 100 lines, you're nearing the point where you should think about splitting your file. This isn't a hard and fast rule though, because it's mostly arbitrary. Think of it as your first red flag.

The second way is to avoid **duplication** – explained with the concept of DRY: "don't repeat yourself". This concept states that if you repeat the same code (usually if it's more than three times) , you should instead compose it into its own module. You can easily do this by making it its own importable function. For example, if you're filtering three different array based on the same criteria in three places throughout your codebase – that criteria should be turned into a function of its own.

The final way is the most important, but it's also the hardest to quantify: **complexity**. To determine your module's complexity, break it down by the tasks it completes. These things could range from performing a math calculation to transforming arrays to rendering a button using JSX. In an ideal world with unlimited time, you would do your best to have each module complete exactly ONE task. In the real world, you have to balance this with the limited time (and sanity) you have by siloing off the more complex modules. Adding two numbers is not complex enough to warrant its own file, but rendering a modal with three input forms, two buttons and various different text is. Where the line between those two points lies is up to you as a programmer.

Let's take a look at some more red flags and examples to help you think about organizing files.

### **Indentation**

Indentation in a file is useful for making blocks of code more readable. It can also help you realize when your code is getting too complex for a single file. This is because more indentation means more blocks which (usually) means more tasks being completed. As a general rule of thumb, **don't go over 6 levels of indentation** (that's 12 spaces if you're using this guide's two-spaces-per-indent rule). This applies to both general functions as well as React components.

### **Logic in JSX**

JSX allows us to code JavaScript alongside our markup. This is essential, but is also oftentimes overused. As a general rule of thumb, **avoid putting any logic in the JSX.** This logic includes (but is not limited to) conditional rendering of attributes or entire components and complex mapping functions.

For example, instead of using a ternary to render between two components, use an active prop that is handled in each chid, or use an intermediary component whose only task is determining which component should be rendered:

```jsx
/****** Bad: Uses a ternary in JSX ******/
// BadComponent/index.js
export default function BadComponent(){
  const [oneOrTwo] = useState('one');

  return (
    <div>
      {oneOrTwo === 'one' ?
        <One /> :
        <Two />
      }
    </div>
  )
}

/****** Good: Uses an "active" prop ******/
// GoodComponent/index.js
export default function GoodComponent(){
  const [oneOrTwo] = useState('one');

  return (
    <div>
      <One active={oneOrTwo === 'one'} />
      <Two active={oneOrTwo === 'two'} />
    </div>
  )
}

// GoodComponent/One/index.js
export default function One(props){
  const { active } === props;
  if(!active) { return null; }

  return (
    <div />
  )
}

// GoodComponent/Two/index.js
export default function Two(props){
  const { active } === props;
  if(!active) { return null; }

  return (
    <div />
  )
}

/****** Also Good: Uses an intermediary component ******/
// GoodComponent/index.js
export default function GoodComponent(){
  const [oneOrTwo] = useState('one');

  return (
    <div>
      <Layout oneOrTwo={oneOrTwo} />
    </div>
  )
}

// GoodComponent/Layout/index.js
export default function Layout(props){
  const { oneOrTwo } = props;

	let Component = () => null; // blank component
	switch (oneOrTwo) {
	  case 'one':
	    Component = One;
      break;
		case 'two':
			Component = Two;
			break;
	}

  return (
		<Component />
	);
}

// GoodComponent/Layout/One/index.js
export default function One(props){  
  return (
    <div />
  )
}

// GoodComponent/Layout/Two/index.js
export default function Two(props){  
  return (
    <div />
  )
}
```

You should also avoid having more than one return statement in a component because it makes it hard to reason about and can make fixing bugs more difficult. It also helps separate your file into vanilla JS and JSX keeping things tidy. (The one exception to this rule is if you're returning null before the component's main JSX section).

```jsx
/****** Bad: Uses multiple JSX return statements ******/
export default function BadComponent() {
  const [oneOrTwo] = useState('one');

  if(oneOrTwo === 'one'){
    return (
      <One />
    )
  }

  return (
    <Two />
  )
};

/****** Good: Preforms conditional before return ******/
export default function GoodComponent() {
  const [oneOrTwo] = useState('one');

  let Component = () => null; // blank component
  switch (oneOrTwo) {
    case 'one':
      Component = One;
      break;
    case 'two':
      Component = Two;
      break;

  return (
    <Component />
  );
};
```

As another example, sometimes you have to render different attributes depending on certain conditions (class names, styles, etc). If that's the case, you should determine these attributes before you start rendering your component.

```jsx
/****** Bad: Calculates attributes in JSX ******/
export default function BadComponent() {  
  return (
    <div>
      <p
        style={{
          top: aspectRatio === 'portrait' ? 2 * pageHeight : 2.73 * pageWidth,
          width: pageWidth / 2 > 1000 ? 1000 : pageWidth / 2;
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
			</p>
    </div>
  )
}

/****** Good: Calculates attributes before JSX ******/
export default function GoodComponent() {  
  const positionTop = aspectRatio === 'portrait'
		? 2 * pageHeight
		: 2.73 * pageWidth;
  const width = pageWidth / 2 > 1000 ? 1000 : pageWidth / 2;

  const paragraphStyle = {
    top: positionTop,
    width
  }

  return (
    <div>
      <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
			</p>
    </div>
  )
}
```

Finally, it may be tempting to perform complicated logic inside a map function in your JSX. This is almost always a trap and can lead to hard to track down bugs. Any logic you include inside your map function, you should instead perform inside the component itself. If you don't think that's possible (maybe you're using a component from an outside library you don't have control over), consider adding an intermediary component you do have control over.

```jsx
/****** Bad: Performs logic in map function ******/
// BadComponent/index.js
export default function BadComponent(){  
  return (
    <div>
      {data.map((d, i) => {
        let childClass = '';
        if(i === 0){
          childClass = 'first';
        }

        return (
          <BadChildComponent key={d.id} className={childClass} {...d} />
        )
      })}
    </div>
  )
}

// BadComponent/BadChildComponent/index.js
export default function BadChildComponent(props){  
  const { className } = props;

  return (
    <div className={className} />
  )
}

/****** Good: Performs logic inside child component ******/
// GoodComponent/index.js
export default function GoodComponent(){  
  return (
    <div>
      {data.map((d, i) => (
				<GoodChildComponent key={d.id} idx={i} {...d} />
			))}
    </div>
  )
}

// GoodComponent/GoodChildComponent/index.js
export default function GoodChildComponent(props){  
  const { idx } = props;
  const className = idx === 0 ? 'first' : '';

  return (
    <div className={className} />
  )
}

/****** Also Good: Performs logic in intermediary component ******/
// GoodComponent/index.js
export default function GoodComponent(){  
  return (
    <div>
      {data.map((d, i) => (
				<GoodIntermediaryComponent key={d.id} idx={i} {...d} />
			))}
    </div>
  )
}

// GoodComponent/GoodIntermediaryComponent/index.js
export default function GoodIntermediaryComponent(props){  
  const { idx } = props;
  const className = idx === 0 ? 'first' : '';

  return (
    <CustomLibraryComponent className={className} />
  )
}
```

### **A Note on Hooks**

Since their introduction in React 16, hooks have become a staple of our components' logic. An easy way to split component files that are getting too long is by hoisting hooks into their own file, especially if you're using two or more hooks for related tasks. (Remember that functions that use React's hooks are considered hooks and should have "use" as the start of their name, e.g. "useMyCustomHook".)

```jsx
/****** Mediocre: Lots of hook logic in one file ******/
// MediocreComponent/index.js
export default function MediocreComponent() {
  const { lastUpdated } = props;

  const [status, setStatus] = useState('incomplete');

  useEffect(() => {
    setStatus('incomplete')
  }, [lastUpdated]);

  const onChange = useCallback(e => {
    if(e.target.checked){
      setStatus('complete')
    } else {
      setStatus('incomplete')
    }
  }, [setStatus]);

  const isChecked = useMemo(() => {
    return status === 'complete';
  }, [status]);

  const displayText = useMemo(() => {
    if(status === 'incomplete'){
      return 'Task Incomplete'
    } else if(status === 'complete') {
      return 'Task Complete'
    } else {
      return 'Error: Task Status Unknown'
    }
  }, [status]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={onClick}
          checked={isChecked}
        />
        {displayText}
      </label>
    </div>
  )
};

/****** Better: Hook logic organized into multiple files ******/
// BetterComponent/index.js
export default function BetterComponent() {
  const { lastUpdated } = props;

  const {status, setStatus} = useStatusState();

  const {onChange, isChecked} = useCheckboxState({
    status,
    setStatus
  });

  const displayText = useDisplayText({status})

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={onClick}
          checked={isChecked}
        />
        {displayText}
      </label>
    </div>
  )
};

// BetterComponent/hooks/useStatusState.js
export default function useStatusState(){
  const [status, setStatus] = useState('incomplete');

  useEffect(() => {
    setStatus('incomplete')
  }, [lastUpdated]);

  return {
    status,
    setStatus
  }
}

// BetterComponent/hooks/useCheckboxState.js
export default function useCheckboxState({status, setStatus}){
  const onChange = useCallback(e => {
    if(e.target.checked){
      setStatus('complete')
    } else {
      setStatus('incomplete')
    }
  }, [setStatus]);

  const isChecked = useMemo(() => {
    return status === 'complete';
  }, [status]);

  return {
    onChange,
    isChecked
  }
}

// BetterComponent/hooks/useDisplayText.js
export default function useDisplayText({status}){
  return useMemo(() => {
    if(status === 'incomplete'){
      return 'Task Incomplete'
    } else if(status === 'complete') {
      return 'Task Complete'
    } else {
      return 'Error: Task Status Unknown'
    }
  }, [status])
}
```

## Optimization Through Memoization

*"We're not building Netflix"*

Performance matters for us for many reasons, but very rarely are we doing something so complex that we need to think about the most memory-optimizing way to complete a task in JavaScript. With that being said, sometimes things do lag on an interaction (e.g. button click, text input), and you need to fix that. The most likely culprit is that you're rendering too much each time that interaction is performed.

The first step is to determine which components are rendering when they likely shouldn't be. You can do this by using your [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi). Open it up in your inspector, click the options gear, and check the box where it says "Highlight updates when components render". Then as you interact with your page you can see components that are re-rendering through highlights.

![React Component Updating](./docs/react-component-updating.gif)

A navigation component probably shouldn't be re-rendering if an input in the body changes.

Once you've discovered the unnecessary re-renders, you can start narrowing in on what's causing the performance lags. There's two ways to eliminate this: memoizing the component's themselves and memoizing expensive calculations inside a component. Memoization is the process of telling React to only run a function (including a component's render) when certain values change.

React is pretty performant so rendering a basic component is unlikely to be causing tremendous lag, but if it has a lot of children within it, it might be the cause of your troubles. In order to memoize an entire component, use the "[memo](https://reactjs.org/docs/react-api.html#reactmemo)" function that comes with React. It takes a component as an argument and returns a memoized version as an output. By default React will compare your components props and preform a shallow comparison. If you want finer control over that process, you can pass a comparison function as the second argument.

The easiest way to use this is to combine it with your default export at the end of your file.

```jsx
import { memo } from 'react';

function MyComponent(props){

  ...

}

export default memo(MyComponent)
```

Now, MyComponent will only re-render when one or more of its props change. Otherwise, the same output from the last time they did change will be returned. If you're using an outside context, then any changes to that context will also trigger a re-render (if you don't understand/use contexts, don't worry about that part).

Alternatively, it may be the case that you need to re-render a component, but you don't need to re-calculate a complex value. Maybe you have a tooltip that needs to re-render as you move your mouse, but you don't have to re-calculate the content unless you've hovered over a new element. You can memoize values (or entire functions) with the [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) hook (or [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) for functions).

```jsx
import { useMemo } from 'react';

export default function Tooltip(props){
  const { mouseX, mouseY } = props;

  const style = {
    top: mouseY,
    left: mouseX
  }

  const hoverOverId = getHoverOrderId({ mouseX, mouseY });

  const content = useMemo(() => {
    // some complex way of getting content based on a ID
    ...
  }, [hoverOverId])

  return (
    <div style={style}>
      {content}
    </div>
  )
}
```

It's also important to not over-optimize right from the start. Adding memoization to the function does increase its base computational cost. If the function is going to re-run all the time anyway, don't bother adding memoization for the one fringe case where it might not have to run again. It also takes time and mental capacity to memoize things, so if it's not necessary you're wasting both.

## Using Fragments in JSX

React has something called [Fragments](https://reactjs.org/docs/fragments.html) which are a way of organizing blocks of markup in a single block that doesn't appear in markup. The rule of thumb for using fragments is: **don't**, unless you're sure you absolutely must have to. This is usually only the case in really extreme situations or if you're using a third-party library that requires it. In most cases, you can find a way around it.

# Amending This Style Guide

One of this document's values is flexibility — and therefore, we want to make it easy to amend.  

This process is broken down into four steps: **proposal, reconciliation, discussion,** and **ratification.**

## Proposal

Any coding member of the POLITICO newsroom family (that includes INT, Visuals, and Digital Strategy) can propose an amendment to this style guide. An amendment can add new rules, or remove or modify coding rules present in the Airbnb base. Specifically, this might result in a precise change in the "Usage Amendments" section, or a more conceptual change in "Coding Principles of Composition."

The proposal should also answer the following two questions:

- What is the goal of this change?
- How does this change enforce or better reflect our core values?

## Reconciliation

Once a proposal is made through a pull request, the keeper of the style guide (until further notice, that's Andrew Briz) will work with the proposers to make sure each proposal is complete.

For example, if the proposal has unintended side effects or will require a change to the eslint config, Briz will make sure each document is clear, concise, and ready for review. If there are multiple proposals to the same section at the same time, Briz will work to de-conflict them.

## Discussion

There's only one thing coders enjoy more than coding — and that's talking about coding! As such, our discussions will be vibrant but also time-boxed.

Every other Wednesday, we'll have a discussion session, which Briz will schedule no later than the Friday before. If there are no proposals ready for consideration, he will not schedule it. Again, every member of the broader coding family is welcome to attend or give asynchronous feedback.

The invite to the session will include links to each proposal's pull request. If someone cannot make it to the discussion session but would still like to vote on a proposal, they have until EOD Tuesday, the day before the session, to send their yes/no vote for each proposal to Briz. They can also provide some short thoughts which Briz will read during a discussion round if there's time.

The discussion will take no more than an hour, with the following schedule:

- **Meeting** **Introduction** (5 min): Briz will briefly introduce the proposals up for discussion at that meeting
- **Proposal Introduction** (5 min): The first proposal's creator will speak about their proposal, providing context and examples if they would like. If the proposal's creator would prefer Briz do this on their behalf, that's OK, too.
- **Discussion Round 1** (5 min): Each person who wishes to speak will raise their hand. Briz will randomly determine the order and hand over the floor for one minute per speaker. If they prefer, the speaker can also choose to ask questions of the proposer or someone else.
- **Discussion Round 2** (5 min): Each person will get another chance to speak if they wish by raising their hand again. Briz will randomly determine the order, with each speaker taking the mic for a minute.
- **Voting** (2 min): Each person will have one vote (either yes or no) to cast on the proposal. Andrew will then combine those votes with the absentee votes and will determine if the proposal will be amended into the main document. Every proposal will require a majority of affirmative votes.

    Editors (Andrew McGill and Lily Mihalik) will have absolute veto power to use when they wish. If either would like a proposal to instantly pass or fail, they can choose to exert this power (preferably before a vote even takes place).

This schedule should allow for roughly three proposals to be considered per session.

## Ratification

Once a set of proposals has been approved, they will merged into the repo and Briz will determine the new version number. If a new eslint config has to be published, he will take care of that as well.
