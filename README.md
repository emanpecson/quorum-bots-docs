# How to contribute

## Providing documentation to libraries (30-45 min)

### Getting started

Please install before continuing: [Node](https://nodejs.org/en/download/package-manager). This is a "JavaScript runtime environment" that allows us to run JavaScript code directly on our local machines instead of on a browser.

Next:

1. clone repository: [lego-spike-docs](https://github.com/emanpecson/lego-spike-docs)
2. run `npm install` in the terminal
3. open `localhost:3000` on a browser
4. click on `Docs` button in the header to get to our Documentation page

### Understanding the file structure

If you look within `src/app/docs/libraries/...`, there is a folder for each SPIKE library. Inside that folder is just a `page.tsx` file. This is a [React](https://react.dev/learn) file using [TypeScript](https://www.typescriptlang.org/).

Example:<br>
`src/app/docs/libraries/distance-sensor/page.tsx` -> `DistanceSensor` class.

This file is automatically associated with a page in our app with a URL ending in `.../docs/libraries/distance-sensor`. The pattern follows for the rest of our libraries.

### Understanding the `page.tsx`

In React, its conventional to define a main function that defines that page. In there, you are able to define variables. And it **MUST** return some _special_ React HTML, which is ultimately what is displayed on the web-page.

But before we get into that, there are a few variables in the `page.tsx` that we must define for each library:

1. `const refMap = useRefMap([]);`
2. `const headers: ContentHeaderType[] = []`

#### `1. refMap`

- `useRefMap()` takes in a list of strings, where each string is some unique name to define a header `ref` on the page
  - A `ref` is just a direct reference to an HTML element (kinda like a pointer ig)
- The reason we have this is b/c we display a table-of-contents on the right-side of the documentation labeled "ON THIS PAGE".
  - And so the `ref` is what lets us know what piece of the page is currently in view by highlighting it in that section.
- Observe the following example for how we defined `refMap` for each header of the `Button` library.

Example:<br>

```tsx
const refMap = useRefMap([
	// ref for header: "Constants"
	"constants",

	// ref for header: method IsLeftPressed()
	"IsLeftPressed",
	// refs for its subheaders
	"IsLeftPressedRet",
	"IsLeftPressedParams",
	"IsLeftPressedEx",
]);
```

#### `2. headers`

- This is where define headers that make up our documentation structure.
- `headers` is a list of objects, where each header object should be defined as follows:

```ts
// without subheaders
{
	id: string;
	label: string;
	ref: Ref;
	subheaders: [];
}

// or w/ subheaders
{
	id: string;
	label: string;
	ref: Ref;
	subheaders: [
		{
			id: string;
			label: string;
			ref: Ref;
		},
		{
			id: string;
			label: string;
			ref: Ref;
		},
	];
}
```

Example: <br>

```ts
const headers: ContentHeaderType[] = [
	{
		id: "0",
		label: "Constants",
		ref: refMap.constants,
		subheaders: [],
	},
	{
		id: "1",
		label: "IsLeftPressed()",
		ref: refMap.IsLeftPressed,
		subheaders: [
			{
				id: "2",
				label: "Returns",
				ref: refMap.IsLeftPressedRet,
			},
			{
				id: "3",
				label: "Parameters",
				ref: refMap.IsLeftPressedParams,
			},
			{
				id: "4",
				label: "Example",
				ref: refMap.IsLeftPressedEx,
			},
		],
	},
];
```

### Using the pre-defined components

You should not have to worry about styling on the web-page for now, as I have already defined a set of re-usable components that should hopefully make the documenting process more simple.

These are some components you might be using when documenting:

- `<NavWrapper></NavWrapper>`
  - Should be the root tag of every library return statement
  - This is what displays the left and right page navigation options
  - Takes properties: `title`, `description`, `headers`
- `<Content></Content>`
  - Another essential wrapper
  - Used to provide the same spacing among all library documentation pages
- `<ContentSection></ContentSection>`
  - Defines a section to hold the header and its content
  - Takes a property `header`
- `<ContentSubsection></ContentSubsection>`
  - Defines a sub-section to hold the subheader and its content
  - Should only be used inside `ContentSection` tags
  - Takes a property `subheader`
- `<ContentText></ContentText>`
  - Wraps around text to give it a thin style
- `<ContentCode />`
  - Display a code block
  - Takes a property `code` as a `string`
  - See `src/data/libraries/button.tsx` for examples of the formatted string
- `<MethodReturns></MethodReturns>`
  - Takes a property `type` that you define as the returned type
  - Wraps around text to give a description of that type
- `<MethodParams></MethodParams>`
  - Takes a property `params` as an array of `MethodParam`
  - See `src/types/method-params.ts` for defining each object in the array
- `<Constants />`
  - Takes a property `constants` as an array of `Constant`
  - See `src/types/constant.ts` for defining each object in the array

### Reference the completed example

Please reference `src/app/docs/libraries/button/page.tsx` as an example for setting up documentation. This is its documentation structure:

- header for constants (if there are any)
- header for each class method
  - subheader for its return type
  - subheader for its parameters
  - subheader for an example code block
