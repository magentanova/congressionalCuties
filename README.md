#GenProject 2!

What we have here is some basic scaffolding for a simple front-end app (an `index.html` that links to a `style.css` file and a `script.js` file). You may have done something like this before with a shell script that you wrote yourself. 

There is now **also** a file called `server.js`. If you run that file with `node server.js`, you will run a very simple HTTP server from the current directory. Requests to `http://localhost:3000` will arrive at this server, which will respond by sending up the `index.html` or any other requested file. 

So all you need to do is: 

  - run `node server.js`.
  - open a new tab in the terminal with `cmd+t` (you need to leave the server running in the original tab).
  - open the project in sublime, and edit your html, css and js files as normal. 
  - every time you want to check out your changes, just refresh `http://localhost:3000` in your browser. 

Note that you cannot run two of these servers at the same time. If you try to do that, you might get an error that looks like `Error: listen EADDRINUSE :::3000`. Just cancel one of them by entering `ctrl+c` in that tab, then try again. 