# index.html.js

I have often longed to go back to the simple days of making websites. Nothing but an `index.html`... maybe a `scripts.js` or `styles.css` if things get crazy. But I love the ergonomics of tools like `React`, `SCSS`, `Redux`, `PostCSS`, `ember.js` etc.

Reading up on Web Components whilst on the plane it struck me that today I could get a lot of that into a single HTML file. So fiddled I did... and this is where I'm at. Clearly it's not a framework... it's not meant to be. It's just me exploring how close to my favorite `webpack` powered starter kit I could get to without any dependancies.

It has one big caveat: it only works (without enabling flags) in Chrome. It should work in the next major Safari release - Firefox and Edge have started work but are a ways off.

Yes there are some less than beautiful things (components live in the global scope until module loading lands). And it's very POC-y. But I think it is promising! I look forward to a world where we have a concrete component standard for frameworks to work towards.

I would welcome any comments or suggestions! I'm sure there are other bleeding edge features I can cram in...

## Usage

1. Clone the files
2. Double click the `index.html`

## Requirements

- Shadow DOM V1
- Custom elements V1
- All of the ES6

## TODO

- Reconsider how state is made available
- Work out if and how to give each component a local state that then forces that component to re-render if changed
- Connected it to some (stubbed) API using the deliciousness of async/await <3
- Play with page routing
- Play with page to page transitions

## Considerations

No smarts around rendering the page. Whole page is re-rendered on any state change. This wouldn't be too hard to sneak in I don't think.

Lends a lot from Redux/FLUX - just without a lot of sanity checks. (Which would need to be put in if this were prod).

More to come I'm sure...

## License

MIT
