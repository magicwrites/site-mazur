# Hi!

Thanks for having a look into my repository.

It implements a [svelte kit](https://kit.svelte.dev/) as it was defined in late 2022. On top of those patterns there are a few things that I have constructed myself:

- `src/components/content` directory holds what usually would be CMS data
- `src/components/shared` is where I keep simple, visual bricks that can be reused around
- `src/stores/language` is a simple library to handle translations

And that's it.

There are a few tricks like SSR language detection or HTTP redirection from `maciej.mazur.site` into `mazur.site/maciej`, but I will abstain from describing this level of technicalities.

Most of the code should be fairly readable on it's own.

Enjoy!
