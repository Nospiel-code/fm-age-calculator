# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![image](https://github.com/Nospiel-code/fm-age-calculator/assets/130290610/1e1aad42-5ac5-40e8-9f0e-05530693553b)
![image](https://github.com/Nospiel-code/fm-age-calculator/assets/130290610/1cbb79ed-b615-442d-9497-7dfa5ecdee83)
![image](https://github.com/Nospiel-code/fm-age-calculator/assets/130290610/002c3cc8-2b45-4a9b-8baf-6e127ad3af21)

### Links

- [Solution URL](https://github.com/Nospiel-code/fm-age-calculator)
- [Live Site URL](https://nospiel-code.github.io/fm-age-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- Date Object
- Mobile-first workflow



### What I learned

I learned how to remove the arrows from a numbers input

```html
 <style>
     .remove-arrow::-webkit-inner-spin-button, 
        .remove-arrow::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        } 
  
  </style>
```
I learned how to work with the JS Date Object

```js
    let inputDate = new Date(year, month - 1, day);
  
    let difference = new Date(now.getTime() - inputDate.getTime())
  
    let differenceYears = difference.getFullYear() - 1970;
    let differenceMonths = difference.getMonth();
    let differenceDays = difference.getDate();
```


### Useful resources

[Explanation on how to use the Date Object](https://javascript.info/date)

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

