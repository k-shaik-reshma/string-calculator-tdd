# String Calculator TDD Kata

Hey there! Welcome to my take on the Incubyte TDD Assessment - String Calculator Kata. I built this little thing in JavaScript using Jest for testing, cause who doesn’t love a good test suite?

## What’s This About?

This is a simple string calculator that takes a string of numbers and adds them up. It can handle functionality like handling commas, newlines, custom delimiters, and even throwing a exception if you throw in negative numbers. Oh, and I added a bonus: it ignores numbers over 1000.

I followed TDD all the way—wrote tests first, made them fail, then wrote just enough code to pass. Kept it clean and readable, committed a bunch along the way. Hope you like it!

## How to Run It

Super easy to get going:

1. **Clone this repo**: Grab it from GitHub however you like.
2. **Install stuff**: Open your terminal here and run: `npm install`
3. **Run the tests**: Just type: `npm test`

You’ll see all 9 tests light up green - Check Screenshots Folder

You’ll need Node.js installed.

## What It Does

Here’s the rundown of what this calculator can handle:

- Empty string? Returns 0.
- One number? Gives it back as-is.
- Comma-separated numbers? Adds them up (like "1,5" = 6).
- Tons of numbers? No prob, sums them all.
- Newlines instead of commas? Works fine (like "1\n2,3" = 6).
- Custom delimiter? Yup, try "//;\n1;2" and get 3.
- Negative numbers? Nope, it'll throw "negative numbers not allowed" with the culprits listed.
- Numbers over 1000? Ignores them, so "2,1000,1001" = 1002.

I stopped there cause I didn’t wanna overdo it—kept it simple but threw in that >1000 thing for extra credit.

## Why I Did It This Way

Incubyte’s all about clean, testable code and TDD, so I stuck to that. Started with the simplest case (empty string), built up step-by-step, and refactored when it made sense. I committed a lot—check the history!—to show how the code evolved. Used JavaScript cause it’s my jam, and Jest cause it’s quick to setup and reads nice.

## Screenshots

Pop over to the `screenshots` folder: All 9 tests passing, looking pretty!

## Thoughts?

I had fun with this! It’s a solid little piece that does what it’s supposed to, stays easy to read, and let’s me play with TDD like Incubyte wants. If you’re reviewing this, let me know what you think — I’d love to chat about it. Looking forward hearing from you

Thank You,  
Reshma Shaik
