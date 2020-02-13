# CONTRIBUTING.md 

* [README](../README.md)

<br>

## The five principle

### Unprovable logic is not complete logic.
This project oriented 100% test coverage.

<br>

### Follow git-flow
This project oriented de-centralized, async working.
so git-flow is mandatory

<br>

### Productivity is important
We should do everything to increase productivity  
We have to do TDD because of for increase productivity  
The farmer does not eat seeds.  
Do not risk the future.

<br>

### Think whole architecture and cost-effective.
We should think from front-web URL architecture, models, queries,
network, deploy everything.
Always remind 'Just for Fun' and 'Getting Real'
fun is the most important thing.
Also 'getting real' is a very important thing.

> Please follow the rules below to improve our productivity and ensure sustainable development.

<br>
<br>

# Coding-style guide

This project follow two rules
* [eslint:recommended](https://eslint.org/docs/rules/)
* [airbnb javascript style-guild](https://github.com/airbnb/javascript)

<br>
<br>

# Commit-conventions

## Intro

this convention inspired & forked from  [Angular's Commit Message Guidelines]([https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)) and also [Vuejs Commit Message Convention]([https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md)) is follow **Angular's Commit Message Guidelines**

recently it's called as [coventional-commits](https://www.conventionalcommits.org/)

<br>
<br>

## Formats

### body format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### **Types**

Must be one of the following:

- **feat**: A new feature
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **chore**: 

### Scope

input file name.

### examples

```
// new method 'sum' implemented in src/a-component.js,

feat(src/a-component.[js, test]): implement 'sum' method with test


// fix 'sum' method
fix(src/a-component.[js, test]): fix 'sum' method ref details

details:
'sum' method wasn't caculate last element
also fixed test code
```

<br>
<br>

# side-story

### this project use PascalCase for table and use camelCase for column

because we use ORM (sequelize).

if I use snake_case for column that will gonna make huge confuse in model(DTO)
so for readability, consistency I have to choose this.




