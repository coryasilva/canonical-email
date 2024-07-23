import test from 'ava';
import {canonicalize} from './index.js';

/**
 * TODO: Should I handle % mail routing
 * TODO: Should I handle quoted parts of local (which can contain at sign `@`)
 */

const emails = [
	['simple@example.com', 'simple@example.com'],
	[' simple@example.com ', 'simple@example.com'], // Additional spaces
	['SoMe.ONe@Casing.Example.org', 'some.one@casing.example.org'], // Ignores case on local and domain
	[
		'someone.email-address-with-hyphens@and.subdomains.example.com',
		'someone.email-address-with-hyphens@and.subdomains.example.com',
	],
	['some.one+tag+sorting@example.com', 'some.one@example.com'],
	['some/one@example.com', 'some/one@example.com'],
	['some-@example.org', 'some-@example.org'], // Local-part ending with non-alphanumeric character from the list of allowed printable characters
	['I❤️CHOCOLATE@example.com', 'i❤️chocolate@example.com'], // With SMTPUTF8

	// Provider specific rules
	['some.one+tag@comcast.net', 'some.one@comcast.net'],
	['some.one+tag@fastmail.com', 'someone@fastmail.com'],
	['some.one+tag@googlemail.com', 'someone@gmail.com'],
	['some.one+tag@googlemail.com', 'someone@gmail.com'],
	['some.one-tag@gmx.com', 'some.one@gmx.com'],
	['some.one+tag@icloud.com', 'some.one@icloud.com'],
	['some.one+tag@mailfence.com', 'some.one@mailfence.com'],
	['some.one+tag@protonmail.com', 'some.one@protonmail.com'],
	['some.one+tag@skiff.com', 'someone@skiff.com'],
	['some.one+tag@outlook.com', 'some.one@outlook.com'],
	['some.one-tag@yahoo.com', 'some.one@yahoo.com'],
	['some.one+tag@yandex.com', 'some.one@yandex.com'],
	['some.one+tag@zohomail.com', 'some.one@zohomail.com'],

	// Comments
	['(blah)some.one@example.com', 'some.one@example.com'],
	['some.one(blah)@example.com', 'some.one@example.com'],
	['some.one@(blah)example.com', 'some.one@example.com'],
	['some.one@example.com(blah)', 'some.one@example.com'],
	['(blah)some.one(blah)@(blah)example.com(blah)', 'some.one@example.com'], // Not sure this is allowed...
];

test('canonicalize', t => {
	for (const [email, emailCanonical] of emails) {
		t.is(canonicalize(email), emailCanonical);
	}
});
