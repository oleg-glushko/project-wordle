# Word Game

## [Joy of React](https://github.com/joy-of-react/project-wordle), Project I

In this project, we'll recreate a popular online word game, Wordle:

![Demo showing the finished product, our Wordle clone](docs/wordle-demo.gif)

In Wordle, users have 6 attempts to guess a 5-letter word. You're helped along the way by ruling out letters that aren't in the word, and being told whether the correct letters are in the correct location or not.

## Exercise 1: GuessInput

First thing’s first: we need a way to submit guesses!

In the standard Wordle game, a global event listener registers keypresses. This isn't very accessible, and so we're going to do things a little bit differently.

We'll render a little form that holds a text input:

![Screenshot showing the guess input UI](docs/guess-input.png)

Your job in this first exercise is to create a new component for this UI, and render it inside the `Game` component.

Here's a minimal representation of the markup expected to be produced by this new component:

```html
<form class="guess-input-wrapper">
  <label for="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" />
</form>
```

**NOTE:** This is the _minimal_ markup required, for the styles to be applied and for accessibility. **It isn't set in stone!** Feel free to make tweaks in order to match all of the acceptance criteria below.

Here's a quick screen recording of the expected result:

![Screen recording showing the guess being entered. It gets logged to the console, and erased from the input](docs/submit-guess.gif)

**Acceptance Criteria:**

- Create a new component.
  - Don't forget, you can use an NPM script to generate the scaffolding for you! We learn how to do this in the [“Getting Started” video](https://courses.joshwcomeau.com/joy-of-react/project-wordle/04-overview)
- This component should render a `<form>` tag, including a label and a text input.
- The text input should be controlled by React state.
- When the form is submitted:
  - The entered value should be logged to the console (for now).
  - The input should be reset to an empty string.
- **The user's input should be converted to ALL UPPERCASE.** No lower-case letters allowed.
- The input should have a minimum and maximum length of 5.
  - **NOTE:** The `minLength` validator is a bit funky; you may wish to use the `pattern` attribute instead. This is discussed in more detail on the [Solution page](https://courses.joshwcomeau.com/joy-of-react/project-wordle/06-solution#an-alternative-to-minlength).

## Exercise 2: Keeping track of guesses

Instead of obliterating the user's guess, let's add it to a list, so we can show the user all of their previously-submitted guesses!

For now, we aren't worrying about any game-logic stuff. We're still setting up the scaffolding, getting some of the component + DOM structure in place.

Our goal in this exercise is to render each of the user's guesses:

![Screen recording showing each guess printed out above the text input from the last exercise](docs/printed-word-list.gif)

And here's an example of the expected DOM structure:

```html
<div class="guess-results">
  <p class="guess">FIRST</p>
  <p class="guess">GUESS</p>
</div>
```

**Acceptance Criteria:**

- A new component should be created, to render previous guesses.
- When the user submits their guess, that value should be rendered within this new component.
- There should be no key warnings in the console!
