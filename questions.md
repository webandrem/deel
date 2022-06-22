## Questions

Disclaimer: I'm JavaScript/TypeScript passionated, does not matter the UI library - some of the questions were replied to considering computational concepts or Vue.js (where I have more experience and implement almost the same paradigm). It was replied after a huge study by reading the full documentation of reactjs.org.

#### 1. What is the difference between Component and PureComponent? give an example where it might break my app.

> Conceptually, PureComponent is an extended Component that implements purity concepts,  (1) the same input always will lead to the same render (2) limited scope, so no side effects and no outer mutations. For Pure ones, React implements `shouldComponentUpdate` differently aiming to provide more performance by doing a shallow comparison on renderings. So it can break our app in the case to have complex comparisons with nested values in state or props, so in some of the cases, it may not rerender properly.

#### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
> Context API is an expensive strcutrue used for deep communications, shouldComponentUpdate is a life-cycle method that shortening re-renders circuits and their CHILDREN, so Context propagation can be highly affected.

### 3. Describe 3 ways to pass information from a component to its PARENT.
> (1) Passing a setter to the child (2) Context API (3) In Vue we have Vuex, it's an robustic solution that implements Flux architecture to share and manage the state across the app, I believe Redux does the same.

### 4. Give 2 ways to prevent components from re-rendering.
> - shouldComponentUpdate for class components by comparing "oldState" vs "newState"
> - Memoization for functional ones 

### 5. What is a fragment and why do we need it? Give an example where it might break my app.
> That was my pain in Vue, now it's implemented in the new version. It's essentially about the obligation to have a root virtual wrapper, they don't influence the DOM.
```js
   const a = () => (<Component One /> <Component Two />) 😰
   const b = () => (<><Component One /> <Component Two /></>) ✅
```

6. Give 3 examples of the HOC pattern.
> The rationale behind the HOCs is to have a convention to share the logic between components, avoiding repetion and speeding up the development, so my three examples would be: 
> - One built-in example: `React.memo`o for memoizing results.
> - One library example: StyledComponents `styled`
> - One custom example: withLoader is a draft code of generic loader thsat can be inserted in any component.
```js
withLoader(WrsppedComponent, url) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchedData = await getData()
      setData(fetchedData)
    }, []);
    
    return <WrsppedComponent {...props} isLoaded={data} />; 
    // isLoaded false 
  };
}
```

7. what's the difference in handling exceptions in promises, callbacks and async...await.
> - Promisse uses resolving functions `.catch` and `.then`
```js
const data = getData()
                .then(respone => response.data)
                .then(data => json)
                .catch(e => console.error(e))
```
> - async/await requires a `try/catch` handler
```js
try {
    const data = await getData();
} catch(e) { console.error(e) }
```
> - callbacks: there's a convetion that uses the error as a first argumennt, so:
```js
(e, ...args) => { if (e) { console.error(e) } }
```

8. How many arguments does setState take and why is it async.
> We can pass two: (1) the new value and (2) a optionnal callback function with the inputs. 
> Honestly, I don't exactly know why React does this async, maybe because React needs to verify the other changes before, so avoiding multiple rerenders. 

9. List the steps needed to migrate a Class to Function Component.
> .Remove class declaration and use function structure
> .Replace `useState` for states (kill the this)
> .Replace `useEffect` for some lifecyces methods ("(un)mounted" / "update")
> .Replace `useRef` for some DOM interactions
> ...
> .Update JSX

10. List a few ways styles can be used with components.
> Import CSS to the component file / `className` attribution
> `CSS in JS` libraries like StyledComponents
> `utility-first` libraries like Tailwind
> `style` attribute 
- 

11. How to render an HTML string coming from the server.
We can render an HTML string from server using the `dangerouslySetInnerHTML`


