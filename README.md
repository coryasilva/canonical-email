# canonical-email

Email address normalization to remove subdomains, plus addressing, and comments.

## Install

```sh
npm install canonical-email
```

## Usage

```js
import { canonicalize } from 'canonical-email';

const email = 'some.one+tag@gmail.com';
const emailCanonical = canonicalize(email);

console.log(emailCanonical);
//=> someone@gmail.com
```
