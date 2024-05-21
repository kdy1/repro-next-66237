# Error Reproduction

Production build of Next.js app throws error during client render when using SWC minifier.

## Steps

1. Build project using `npm run build`.
2. Start test server using `npm run start`.
3. Open page on <http://localhost:3000>.
4. View browser console output.

Error in browser console:

```text
ReferenceError: e is not defined
    at Object.jU (848-7d911d46e30bd3f0.js:16:18331)
    at new k (848-7d911d46e30bd3f0.js:16:7592)
    at 9705 (848-7d911d46e30bd3f0.js:16:7777)
    at d (webpack-4b7c5c3f98de81bb.js:1:151)
    at 9393 (page-e76bcc040321554e.js:1:223)
    at Function.d (webpack-4b7c5c3f98de81bb.js:1:151)
```

## Analysis

```javascript
// Minified code of "node_modules/@sbb-esta/lyne-components/development/core/dom.js"
3712: function(t, o, r) {
        r.d(o, {
            $Q: function() {
                return l
            },
            Ev: function() {
                return i
            },
            e_: function() {
                return s
            },
            jU: function() {
                return e    // <-- ReferenceError: e is not defined
            }
        });
        try {
            "u" > typeof Intl && Intl.v8BreakIterator
        } catch (t) {}
        // This variable "n" (the "isBrowser" function) is what should be returned by "jU" function above
        let n = ()=>"object" == typeof document && !!document
          , s = ()=>n() && document.documentElement.getAttribute("dir") || "ltr";
        function i(t, o, r) {
            r ? t.setAttribute(o, r) : t.removeAttribute(o)
        }
```

## Notice

- Error only occurs when multiple different web components are used in a React component. Therefore the `TestComponent` uses `SbbToggle` and `SbbButton`. Rendering only `SbbToggle` does not produce the error.
- Error only occurs when using SWC minifier in Next.js build (which is the default). Setting `swcMinify: false` in `next.config.mjs` makes the error go away.
