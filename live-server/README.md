# Live Server Using Node JS

**install node js First nodejs.org/en**

  ## 1.Create A Package using [ npm init ] Command
  
```
C:\live-server>node -v
v18.17.1

C:\live-server>npm -v
9.8.1

C:\live-server>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (live-server)
version: (1.0.0)
description: Network app
entry point: (index.js)
test command:
git repository:
keywords: network app
author: Punit Katiyar
license: (ISC) MIT
About to write to C:\live-server\package.json:

{
  "name": "live-server",
  "version": "1.0.0",
  "description": "Network app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "network",
    "app"
  ],
  "author": "Punit Katiyar",
  "license": "MIT"
}

Is this OK? (yes) y

C:\live-server>
```

## 2.Install lite-server [ npm install lite-server ]

```
C:\live-server>npm install lite-server

added 157 packages, and audited 158 packages in 11s

8 packages are looking for funding
  run `npm fund` for details

1 high severity vulnerability

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.

C:\live-server>
```

## 3.Add Command To Package.json File Under scripts

```
{
  "name": "live-server",
  "version": "1.0.0",
  "description": "Network app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"lite-server"
  },
  "keywords": [
    "network",
    "app"
  ],
  "author": "Punit Katiyar",
  "license": "MIT",
  "dependencies": {
    "lite-server": "^2.6.1"
  }
}
```

## 4.Run The Server Type npm start

# finish


