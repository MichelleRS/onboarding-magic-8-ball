# Onboarding: Magic 8 Ball

## Project Planning

### on page load / reset:

![expected layout](assets/expected-layout-01.svg)

### after button submit:

![expected layout](assets/expected-layout-02.svg)

### HTML

`<header>`

-   `h1` for title

`<main>` > `<section id="prompt>`

-   `p` for prompt
-   text `input` to ask question
-   `button` to submit question (`#submit`)

`<main>` > `<section id="fotrune">`

-   `img` for 8 ball
-   `p` for answer (`#answer`)
-   `button` to ask again(`#reset`)

### Events

-   button click (submit question)
    -   initialize array of answers, pick random number, set as random answer variable
    -   hide prompt
    -   display image
    -   set content of answer `p` to the the random answer
-   button click (ask again)
    -   hide the 8 ball and answer
    -   show prompt

## Workflow

-   Plan project in README.md [complete]
-   Build HTML and center with CSS [complete]
-   Get DOM elements [complete]
-   Display random answer on submit button click [complete]
-   Implement show/hide logic
-   Remove console.log statements

_Look for green check after each commit!_
