/**
 * @readonly
 * @enum {string}
 */
export const Fix = {
	REMOVE_DOT: 'remove_subdomain_addressing',
	REMOVE_PLUS: 'remove_sub_addressing_plus',
	REMOVE_MINUS: 'remove_sub_addressing_minus',
	CANONICALIZE_DOMAIN: 'canonicalize_domain',
};

/**
 * @readonly
 * @enum {string}
 */
export const Vendor = {
	COMCAST: 'comcast',
	FASTMAIL: 'fastmail',
	GMAIL: 'gmail',
	GMX: 'gmx',
	ICLOUD: 'icloud',
	MAILFENCE: 'mailfence',
	PROTON: 'proton',
	SKIFF: 'skiff',
	OUTLOOK: 'outlook',
	YAHOO: 'yahoo',
	YANDEX: 'yandex',
	ZOHO: 'zoho',
	UNKNOWN: 'unknown',
};

/**
 * @type {Map<Vendor, Record<Fix, boolean | string>>}
 */
export const VendorFix = new Map([
	[
		Vendor.COMCAST,
		{
			[Fix.REMOVE_PLUS]: true,
		},
	],
	[
		Vendor.FASTMAIL,
		{
			[Fix.REMOVE_PLUS]: true,
			[Fix.REMOVE_DOT]: true,
		},
	],
	[
		Vendor.GMAIL,
		{
			[Fix.REMOVE_PLUS]: true,
			[Fix.REMOVE_DOT]: true,
			[Fix.CANONICALIZE_DOMAIN]: 'gmail.com',
		},
	],
	[
		Vendor.GMX,
		{
			[Fix.REMOVE_MINUS]: true,
		},
	],
	[
		Vendor.ICLOUD,
		{
			[Fix.REMOVE_PLUS]: true,
		},
	],
	[
		Vendor.MAILFENCE,
		{
			[Fix.REMOVE_PLUS]: true,
		},
	],
	[
		Vendor.OUTLOOK,
		{
			[Fix.REMOVE_PLUS]: true,
		},
	],
	[
		Vendor.PROTON,
		{
			[Fix.REMOVE_PLUS]: true,
		},
	],
	[
		Vendor.SKIFF,
		{
			[Fix.REMOVE_PLUS]: true,
			[Fix.REMOVE_DOT]: true,
		},
	],
	[
		Vendor.UNKNOWN,
		{
			[Fix.REMOVE_PLUS]: true,
		},
	],
	[
		Vendor.YAHOO,
		{
			[Fix.REMOVE_MINUS]: true,
		},
	],
	[
		Vendor.YANDEX,
		{
			[Fix.REMOVE_PLUS]: true,
		},
	],
	[
		Vendor.ZOHO,
		{
			[Fix.REMOVE_PLUS]: true,
		},
	],
]);

/**
 * @type {Map<string, Vendor>}
 */
export const DomainVendorMap = new Map([
	// Comcast
	['comcast.com', Vendor.COMCAST],
	['comcast.net', Vendor.COMCAST],

	// FastMail https://app.fastmail.com/signup/
	['fastmail.com', Vendor.FASTMAIL],
	['fastmail.cn', Vendor.FASTMAIL],
	['fastmail.co.uk', Vendor.FASTMAIL],
	['fastmail.com.au', Vendor.FASTMAIL],
	['fastmail.de', Vendor.FASTMAIL],
	['fastmail.es', Vendor.FASTMAIL],
	['fastmail.fm', Vendor.FASTMAIL],
	['fastmail.fr', Vendor.FASTMAIL],
	['astmail.im', Vendor.FASTMAIL],
	['fastmail.in', Vendor.FASTMAIL],
	['fastmail.jp', Vendor.FASTMAIL],
	['fastmail.mx', Vendor.FASTMAIL],
	['fastmail.net', Vendor.FASTMAIL],
	['fastmail.nl', Vendor.FASTMAIL],
	['fastmail.org', Vendor.FASTMAIL],
	['fastmail.se', Vendor.FASTMAIL],
	['fastmail.to', Vendor.FASTMAIL],
	['fastmail.tw', Vendor.FASTMAIL],
	['fastmail.uk', Vendor.FASTMAIL],
	['fastmail.us', Vendor.FASTMAIL],
	['sent.com', Vendor.FASTMAIL],

	// Gmail
	['gmail.com', Vendor.GMAIL],
	['googlemail.com', Vendor.GMAIL],

	// GMX
	['gmx.at', Vendor.GMX],
	['gmx.ca', Vendor.GMX],
	['gmx.ch', Vendor.GMX],
	['gmx.co.uk', Vendor.GMX],
	['gmx.com', Vendor.GMX],
	['gmx.de', Vendor.GMX],
	['gmx.es', Vendor.GMX],
	['gmx.fr', Vendor.GMX],
	['gmx.net', Vendor.GMX],
	['gmx.us', Vendor.GMX],
	['gmx.usa', Vendor.GMX],

	// ICloud
	['icloud.com', Vendor.ICLOUD],
	['me.com', Vendor.ICLOUD],

	// MailFence
	['mailfence.com', Vendor.MAILFENCE],

	// Outlook
	// This list is likely incomplete.
	['hotmail.at', Vendor.OUTLOOK],
	['hotmail.be', Vendor.OUTLOOK],
	['hotmail.ca', Vendor.OUTLOOK],
	['hotmail.cl', Vendor.OUTLOOK],
	['hotmail.co.il', Vendor.OUTLOOK],
	['hotmail.co.nz', Vendor.OUTLOOK],
	['hotmail.co.th', Vendor.OUTLOOK],
	['hotmail.co.uk', Vendor.OUTLOOK],
	['hotmail.com', Vendor.OUTLOOK],
	['hotmail.com.ar', Vendor.OUTLOOK],
	['hotmail.com.au', Vendor.OUTLOOK],
	['hotmail.com.br', Vendor.OUTLOOK],
	['hotmail.com.gr', Vendor.OUTLOOK],
	['hotmail.com.mx', Vendor.OUTLOOK],
	['hotmail.com.pe', Vendor.OUTLOOK],
	['hotmail.com.tr', Vendor.OUTLOOK],
	['hotmail.com.vn', Vendor.OUTLOOK],
	['hotmail.cz', Vendor.OUTLOOK],
	['hotmail.de', Vendor.OUTLOOK],
	['hotmail.dk', Vendor.OUTLOOK],
	['hotmail.es', Vendor.OUTLOOK],
	['hotmail.fr', Vendor.OUTLOOK],
	['hotmail.hu', Vendor.OUTLOOK],
	['hotmail.id', Vendor.OUTLOOK],
	['hotmail.ie', Vendor.OUTLOOK],
	['hotmail.in', Vendor.OUTLOOK],
	['hotmail.it', Vendor.OUTLOOK],
	['hotmail.jp', Vendor.OUTLOOK],
	['hotmail.kr', Vendor.OUTLOOK],
	['hotmail.lv', Vendor.OUTLOOK],
	['hotmail.my', Vendor.OUTLOOK],
	['hotmail.ph', Vendor.OUTLOOK],
	['hotmail.pt', Vendor.OUTLOOK],
	['hotmail.sa', Vendor.OUTLOOK],
	['hotmail.sg', Vendor.OUTLOOK],
	['hotmail.sk', Vendor.OUTLOOK],
	['live.be', Vendor.OUTLOOK],
	['live.co.uk', Vendor.OUTLOOK],
	['live.com', Vendor.OUTLOOK],
	['live.com.ar', Vendor.OUTLOOK],
	['live.com.mx', Vendor.OUTLOOK],
	['live.de', Vendor.OUTLOOK],
	['live.es', Vendor.OUTLOOK],
	['live.eu', Vendor.OUTLOOK],
	['live.fr', Vendor.OUTLOOK],
	['live.it', Vendor.OUTLOOK],
	['live.nl', Vendor.OUTLOOK],
	['msn.com', Vendor.OUTLOOK],
	['outlook.at', Vendor.OUTLOOK],
	['outlook.be', Vendor.OUTLOOK],
	['outlook.cl', Vendor.OUTLOOK],
	['outlook.co.il', Vendor.OUTLOOK],
	['outlook.co.nz', Vendor.OUTLOOK],
	['outlook.co.th', Vendor.OUTLOOK],
	['outlook.com', Vendor.OUTLOOK],
	['outlook.com.ar', Vendor.OUTLOOK],
	['outlook.com.au', Vendor.OUTLOOK],
	['outlook.com.br', Vendor.OUTLOOK],
	['outlook.com.gr', Vendor.OUTLOOK],
	['outlook.com.pe', Vendor.OUTLOOK],
	['outlook.com.tr', Vendor.OUTLOOK],
	['outlook.com.vn', Vendor.OUTLOOK],
	['outlook.cz', Vendor.OUTLOOK],
	['outlook.de', Vendor.OUTLOOK],
	['outlook.dk', Vendor.OUTLOOK],
	['outlook.es', Vendor.OUTLOOK],
	['outlook.fr', Vendor.OUTLOOK],
	['outlook.hu', Vendor.OUTLOOK],
	['outlook.id', Vendor.OUTLOOK],
	['outlook.ie', Vendor.OUTLOOK],
	['outlook.in', Vendor.OUTLOOK],
	['outlook.it', Vendor.OUTLOOK],
	['outlook.jp', Vendor.OUTLOOK],
	['outlook.kr', Vendor.OUTLOOK],
	['outlook.lv', Vendor.OUTLOOK],
	['outlook.my', Vendor.OUTLOOK],
	['outlook.ph', Vendor.OUTLOOK],
	['outlook.pt', Vendor.OUTLOOK],
	['outlook.sa', Vendor.OUTLOOK],
	['outlook.sg', Vendor.OUTLOOK],
	['outlook.sk', Vendor.OUTLOOK],
	['passport.com', Vendor.OUTLOOK],

	// Proton
	['proton.me', Vendor.PROTON],
	['protonmail.com', Vendor.PROTON],

	// Skiff
	['skiff.com', Vendor.SKIFF],

	// Yahoo
	['yahoo.ca', Vendor.YAHOO],
	['yahoo.co.uk', Vendor.YAHOO],
	['yahoo.com', Vendor.YAHOO],
	['yahoo.de', Vendor.YAHOO],
	['yahoo.fr', Vendor.YAHOO],
	['yahoo.in', Vendor.YAHOO],
	['yahoo.it', Vendor.YAHOO],
	['ymail.com', Vendor.YAHOO],
	['rocketmail.com', Vendor.YAHOO],
	['cox.net', Vendor.YAHOO],
	['sbcglobal.net', Vendor.YAHOO],

	// Yandex
	['yandex.ru', Vendor.YANDEX],
	['yandex.ua', Vendor.YANDEX],
	['yandex.kz', Vendor.YANDEX],
	['yandex.com', Vendor.YANDEX],
	['yandex.by', Vendor.YANDEX],
	['ya.ru', Vendor.YANDEX],

	// Zoho
	['zohomail.com', Vendor.ZOHO],
]);

// Replace single dots, but not multiple consecutive dots
const dotsReplacer = match => (match.length > 1 ? match : '');

/**
 * Canonicalizes (normalizes) email addresses to remove subdomains, plus addressing, and comments.
 * @param {string} email
 */
export function canonicalize(email) {
	const commentRegex = /^\([^)(]*\)|\([^)(]*\)$/g;

	// ALL: Lower case domain per RFC 1035; pragmatically lower case local for sanity and security.
	let [local, domain] = email.toLowerCase().trim().split('@');

	// ALL: Replace comments
	local = local.replaceAll(commentRegex, '');
	domain = domain.replaceAll(commentRegex, '');

	// Lookup and process vendor rules
	const vendor = DomainVendorMap.get(domain) ?? Vendor.UNKNOWN;
	const rules = VendorFix.get(vendor);

	if (rules[Fix.REMOVE_PLUS]) {
		local = local.split('+')[0];
	}

	if (rules[Fix.REMOVE_MINUS]) {
		const parts = local.split('-');
		local = parts.length > 1 ? parts.slice(0, -1).join('-') : parts[0];
	}

	if (rules[Fix.REMOVE_DOT]) {
		local = local.replaceAll(/\.+/g, dotsReplacer);
	}

	if (rules[Fix.CANONICALIZE_DOMAIN]) {
		domain = rules[Fix.CANONICALIZE_DOMAIN].toString();
	}

	return `${local}@${domain}`;
}

export default canonicalize;
