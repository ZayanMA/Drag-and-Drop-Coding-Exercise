# Drag and Drop Coding Exercise

Webpage that renders 4 quadrants and 5 circles. You are able to drag the circle into any of the 4 quadrant and each quadrant will transform the shape into a different one depending on which quadrant it is dragged into.

## Contents

- [Stack](#stack)
- [Trade-Offs](#trade-offs)
- [Bonus Task: Content Security Policy](#bonus-task-content-security-policy)
- [Running Locally](#running-locally)

## Stack
This project uses
- Vite
- React
- TypeScript
- CSS

I chose this because Vite is lightweight and very quick to setup and get running, which was ideal for a small task like this. React makes it simple to track shape state using react states. Also, typescript is good for typing and ensuring error-free code. Used plain CSS because it's quick.

## Trade-Offs

I used plain CSS to create the shapes because it was quick, simple, and avoided adding an extra rendering or UI dependency for such a small task. Circles and squares are handled with basic CSS properties, while the triangle and hexagon use `clip-path` and found the values for these using an online clip-path generator tool "https://bennettfeely.com/clippy/". I have added a comment in the CSS wherever this was used.

This does mean the shapes are fairly simple visually compared with what might be possible using SVGs or a dedicated graphics approach which is normally possible in React with various packages, but they are clear enough for the purpose of the exercise and keep the implementation lightweight.

I did not add animations or transition effects because I focused on keeping the core drag-and-drop behaviour clear, reliable, and easy to review within the time limit. The shapes update immediately on drop, which keeps the interaction simple. With more time, subtle transitions or hover/drag feedback could improve the visual polish without changing the underlying logic.

## Bonus Task: Content Security Policy

I added a content security policy in public/_headers.
This webpage is very simple and so the CSP is very strict.
Normally you may have a different CSP for dev and production.
We aren't using any third party scripts, or any external APIs, or any external stylesheets.

Here is the policy:
```txt
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests
```

Main choices:
- `default-src 'self'` limits resources to the app's own origin by default.
- `script-src 'self'` only allows JavaScript from the built app.
- `style-src 'self'` only allows stylesheets from the app itself.
- `img-src 'self' data:` allows same-origin images and data URLs if small embedded assets are needed.
- `font-src 'self'` prevents loading fonts from external providers.
- `connect-src 'self'` prevents the app from making network requests to external APIs.
- `object-src 'none'` blocks legacy plugin and embedded object content.
- `base-uri 'self'` restricts changes to the document base URL.
- `form-action 'none'` blocks form submissions, since this app has no forms.
- `frame-ancestors 'none'` prevents the app from being embedded in another page.
- `upgrade-insecure-requests` asks the browser to upgrade insecure HTTP resource requests to HTTPS where possible.

## Running Locally

In order to run locally, clone repository, install and run dev.

Requirements:
- Node.js 20.19+ or 22.12+ (As required by Vite)
- npm

Clone repo:
```bash
git clone https://github.com/ZayanMA/Drag-and-Drop-Coding-Exercise.git
```

From root folder, move to project folder, install dependencies:
```bash
cd drag-n-drop
npm install
```

Run the dev website locally:
```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```txt
http://localhost:5173
```