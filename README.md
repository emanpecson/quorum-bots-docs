## Getting started

Please install this before continuing: [Node](https://nodejs.org/en/download/package-manager). This is a "JavaScript runtime environment" that allows us to run JavaScript code directly on our local machines instead of on a browser.

Next:

1. clone repository: [lego-spike-docs](https://github.com/emanpecson/lego-spike-docs)
2. run `npm install` in the terminal
3. run `npm run dev` and open `localhost:3000` on a browser
4. click on `Docs` button in the header to get to our Documentation page

### Ways to contribute

- [1. Contributing to libraries](#1-contributing-to-libraries) - (~45-60 min)
- [2. Write some paragraphs for our docs introduction section](#2-write-some-paragraphs-for-our-docs-introduction-section) - (~15 min)
- [3. Add a new page](#3-add-a-new-page) - (~10 min)

### Git best practices
I advise that you create a new branch for the specific thing you work on. Then, you can setup a [pull request in GitHub](https://github.com/emanpecson/lego-spike-docs/pulls) so that we can get it reviewed before merging your branch into `main`. This way, we can prevent pushing anything that might break the page.

## 1. Contributing to libraries

### Understanding the file structure

If you look within `src/app/docs/libraries/...`, there is a folder for each SPIKE library. Inside that folder is just a `page.tsx` file. This is a [React](https://react.dev/learn) file using [TypeScript](https://www.typescriptlang.org/).

Example:<br>
`src/app/docs/libraries/distance-sensor/page.tsx` -> `DistanceSensor` class.

This file is automatically associated with a page in our app with a URL ending in `.../docs/libraries/distance-sensor`. The pattern follows for the rest of our libraries.

### Understanding the `page.tsx`

In React, it is conventional to define a main function that defines that page. In there, you are able to define variables. And it **MUST** return some _special_ React HTML, which is ultimately what is displayed on the web-page.

But before we get into that, there are a few variables in the `page.tsx` that we must define for each library:

1. `const refMap = useRefMap([]);`
2. `const headers: ContentHeaderType[] = []`

#### `1. refMap`

- `useRefMap()` takes in a list of strings, where each string is some unique name to define a header `ref` on the page
  - A `ref` is just a direct reference to an HTML element (think of it like a pointer)
- The reason we have this is because we display a table-of-contents on the right-side of the documentation labeled "ON THIS PAGE".
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
- `headers` is a list of objects, where each header object could be defined in 2 ways:

```ts
// 1: w/o subheaders
{
  id: string;
  label: string;
  ref: Ref;
  subheaders: [];
}

// 2: or w/ subheaders
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
    ref: refMap.constants, // notice how "constants" is the name we set in refMap...
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

#### `<NavWrapper></NavWrapper>`
  - Should be the root tag of every library return statement
  - This is what displays the left and right page navigation options
  - Takes properties: `title`, `description`, `headers`
	- Example:
		```tsx
		<NavWrapper
		  title="Distance Sensor"
		  description="Blah blah blah"
		  headers={headers} // variable `headers` defined earlier
		>
		</NavWrapper>
		```
#### `<Content></Content>`
  - Component that should be the direct child to `NavWrapper`
  - Used to provide the same spacing among all library documentation pages
	- Example:
		```tsx
		<NavWrapper>
		  <Content >
		    ...
		  </Content>
		</NavWrapper>
		```
#### `<ContentSection></ContentSection>`
  - Defines a section to hold the header and its content
  - Takes a property `header`
	- Example:
		```tsx
		<NavWrapper>
		  <Content>
		    {/* section 1 */}
		    <ContentSection header={headers[0]}>
		      ...
		    </ContentSection>

		    {/* section 2 */}
		    <ContentSection header={headers[1]}>
		      ...
		    </ContentSection>
		  </Content>
		</NavWrapper>
		```
#### `<ContentSubsection></ContentSubsection>`
  - Defines a sub-section to hold the subheader and its content
  - Should only be used inside `ContentSection` tags
  - Takes a property `subheader` (which we can acces from `headers[i].subheaders[j]`)
	- Example:
		```tsx
		<NavWrapper>
		  <Content>
		    <ContentSection header={headers[0]}>
		      {/* section 1 - subsection 1 */}
		      <ContentSubsection subheader={headers[0].subheaders[0]}>
		        ...
		      </ContentSubsection>

		      {/* section 1 - subsection 2 */}
		      <ContentSubsection subheader={headers[0].subheaders[1]}>
		        ...
		      </ContentSubsection>
		    </ContentSection>
		  </Content>
		</NavWrapper>
		```
#### `<ContentText></ContentText>`
  - Wraps around text to give it a style
	- Example:
		```tsx
		<NavWrapper>
		  <Content>
		    <ContentSection header={headers[0]}>
		      <ContentText>
		        Some description text
		      </ContentText>
		    </ContentSection>
		  </Content>
		</NavWrapper>
		```
#### `<ContentCode />`
  - Display a code block
  - Takes a property `code` as a `string`
  - See `src/data/libraries/button.tsx` for examples of the formatted string
	- Example:
		```tsx
		<NavWrapper>
		  <Content>
		    <ContentSection header={headers[0]}>
		     <ContentCode code={var} />
		    </ContentSection>
		  </Content>
		</NavWrapper>
		```
#### `<MethodReturns></MethodReturns>`
  - Takes a property `type` that you define as the returned type
  - Wraps around text to give a description of that type
	- Example:
		```tsx
		<NavWrapper>
		  <Content>
		    <ContentSection header={headers[0]}>
		      <ContentSubsection subheader={headers[0].subheaders[0]}>
		        <MethodReturns type="boolean">
		          Returns true if this happens, false if not
		        </MethodReturns>
		      </ContentSubsection>
		    </ContentSection>
		  </Content>
		</NavWrapper>
		```
#### `<MethodParams></MethodParams>`
  - Takes a property `params` as an array of `MethodParam`
  - See `src/types/method-params.ts` for defining each object in the array
	- Example:
		```tsx
		<NavWrapper>
		  <Content>
		    <ContentSection header={headers[0]}>
		      <ContentSubsection subheader={headers[0].subheaders[1]}>
		        <MethodParams
		          {/* where we have a method w/ 2 params */}
		          params={[
		            { type: "integer", identifier: "val", description: "Some value" },
		            { type: "boolean", identifier: "flag", description: "Some flag" },
		          ]}
		        />
		      </ContentSubsection>
		    </ContentSection>
		  </Content>
		</NavWrapper>
		```
#### `<Constants />`
  - Takes a property `constants` as an array of `Constant`
  - See `src/types/constant.ts` for defining each object in the array
	- Example:
		```tsx
		<NavWrapper>
		  <Content>
		    <ContentSection header={headers[0]}>
		      <Constants
		        constants={[
		          { type: "integer", identifier: "UP", value: "0" },
		          { type: "integer", identifier: "DOWN", value: "1" },
		          { type: "integer", identifier: "LEFT", value: "3" },
		          { type: "integer", identifier: "RIGHT", value: "4" },
		        ]}
		      />
		    </ContentSection>
		  </Content>
		</NavWrapper>
		```

### Reference the completed example

Please reference [`src/app/docs/libraries/button/page.tsx`](https://github.com/emanpecson/lego-spike-docs/blob/main/src/app/docs/libraries/button/page.tsx) as an example for setting up documentation. It pretty much just copies over the documentation comments from the Quorum Language library implementation and puts it in here, so if you follow along, providing documentation to our web-page as a beginner to web-development should be doable.

Here's one library documentation structure you can follow:
- header for constants (if there are any)
- header for each class method
  - subheader for its return type
  - subheader for its parameters
  - subheader for an example code block

## 2. Write some paragraphs for our docs introduction section

### Understanding the file structure

If you look under [`src/app/docs/(introduction)/...`](https://github.com/emanpecson/lego-spike-docs/tree/main/src/app/docs/(introduction)), there are some folders containing a `page.tsx`.

### To-do

These pages represent the introduction to our documentation website. One easy way to contribute is to simply add or modify the displayed text to make it _better_.

### Structuring the page

Please see [refMap](#1-refmap) and [headers](#2-headers) for understanding how to use these variables to structure your page.

## 3. Add a new page

### Types of pages
1. introduction pages
2. library pages
3. main pages

### Adding an "introduction" page

Consists of `page.tsx` files here: [`src/app/docs/(introduction)/{page-name}/page.tsx`](https://github.com/emanpecson/lego-spike-docs/tree/main/src/app/docs/(introduction)).

#### Steps:
1. Create a folder to represent page name
2. Create a file named `page.tsx` in the folder
3. Copy/paste the following template into the file
	```tsx
	"use client";
	import Content from "@/components/content/content";
	import NavWrapper from "@/components/navigation/nav-wrapper";
	import UnderDevelopment from "@/components/placeholder/under-development";
	import { useRefMap } from "@/hooks/useRefMap";
	import { ContentHeaderType } from "@/types/content-header";

	// ! update page name
	export default function MyPage() {
	  // generate ref map using these names
	  const refMap = useRefMap([]);

	  // define content headers
	  const headers: ContentHeaderType[] = [];

	  return (
	    <NavWrapper title="My Page" description="Under development" headers={headers}>
	      <Content>
	        <UnderDevelopment />
	      </Content>
	    </NavWrapper>
	  );
	}
	```
4. Change URL to `localhost:3000/docs/{page-name}` to see your file
	- But notice how the name of your page isn't located in the sidebar. See the next step for displaying the page as a navigation-option to the user.
5. Go to `src/data/routes.tsx` file and look for a variable called `introductionRouteGroup`
6. Update the `.routes` attribute by adding an object of the following structure:
	`{ name: string, path: string; }`
	- i.e. ``{ name: "My Page", path: `${dpath}/my-page` }``
7. You're done! You can now either edit the file yourself or leave it for someone to contribute to.

### Adding a "library" page

Consists of `page.tsx` files here: [`src/app/docs/libraries/{library-name}/page.tsx`](https://github.com/emanpecson/lego-spike-docs/tree/main/src/app/docs/libraries).

#### Steps:
1. Create a folder to represent library page name
2. Create a file named `page.tsx` in the folder
3. Copy/paste the following template into the file
	```tsx
	"use client";
	import Content from "@/components/content/content";
	import NavWrapper from "@/components/navigation/nav-wrapper";
	import UnderDevelopment from "@/components/placeholder/under-development";
	import { useRefMap } from "@/hooks/useRefMap";
	import { ContentHeaderType } from "@/types/content-header";

	// ! update page name
	export default function MyPage() {
	  // generate ref map using these names
	  const refMap = useRefMap([]);

	  // define content headers
	  const headers: ContentHeaderType[] = [];

	  return (
	    <NavWrapper title="My Page" description="Under development" headers={headers}>
	      <Content>
	        <UnderDevelopment />
	      </Content>
	    </NavWrapper>
	  );
	}
	```
4. Change URL to `localhost:3000/docs/libraries/{page-name}` to see your file
	- But notice how the name of your page isn't located in the sidebar. See the next step for displaying the page as a navigation-option to the user.
5. Go to `src/data/routes.tsx` file and look for a variable called `librariesRouteGroup`
6. Update the `.routes` attribute by adding an object of the following structure:
	`{ name: string, path: string; }`
	- i.e. ``{ name: "My Page", path: `${lpath}/my-page` }``
7. You're done! You can now either edit the file yourself or leave it for someone to contribute to.

### Adding a "main" page

Go to `src/data/routes.tsx` and look for `mainRoutes`. These are pages that make up the "main routes" of the webpage that can be seen in the header navigation section. If you would like to add a new main page. Follow the next steps:

#### Steps:
1. Create a folder under `src/app/` which will represent the name of your page.
2. Create a file named `page.tsx` in the folder
3. Copy/paste the following template into the file
	```tsx
	import UnderDevelopment from "@/components/placeholder/under-development";

	// ! update page name
	export default function MyPage() {
	  return (
	    <div className="py-4">
	      <UnderDevelopment />
	    </div>
	  );
	}
	```
4. To find your file as a URL, follow the page structure of the pathname after the `app/` path in the project itself and trace it to a URL.
	- i.e. `/src/app/contributors/page.tsx` -> `localhost:3000/contributors`
	- But notice how the name of your page isn't located in the header like the other main pages. See the next step for displaying the page as a navigation-option to the user.
5. Go to `src/data/routes.tsx` file and look for a variable called `mainRoutes`
6. Update the array by adding an object of the following structure:
	`{ name: string, path: string; }`
	- i.e. ``{ name: "My Page", path: `/my-page` }``
7. You're done! You can now either edit the file yourself or leave it for someone to contribute to.
