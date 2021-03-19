# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

    Context API helps with connecting state to whichever component tree you desire without having to set up a library like redux but can be used together in same project. Using it with redux is useful because redux can hold the global states and you can also use context api to create state for a  component tree just for that specific tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are action-creators that are used to do a new action and is passed into the reducer so that state can change based on the action used. The reducer is used to change component state in a predictable way so that the state changes exactly the way its supposed to. Store in redux is used to pass our reducer(s) and any applyMiddleware libraries and is passed to our redux provider as a prop so any component can be connected to our reducer.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

    redux-thunk allows us to use asynchronous functions within our actions-creators so using a library with axios can be implemented. Thunk can be used delay the dispatch action or if a condition is met.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

    My favorite state management system is the Context API just because it's easier to setup and for a simple app it is more enjoyable but I would use redux for a bigger project since it has a bigger payoff with libraries like logger and thunk.