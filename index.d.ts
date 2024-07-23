/**
Canonicalizes (normalizes) email addresses to remove subdomains, plus addressing, and comments.

@example
```js
import { canonicalize } from 'canonical-email';

const email = 'some.one+tag@gmail.com';
const emailCanonical = canonicalize(email);

console.log(emailCanonical);
//=> someone@gmail.com
```
@param email valid email string
*/
export function canonicalize(email: string): string;
