/** Normalize i18n language to `en` or `hu`. */
export const normalizeLang = (lang) => {
	if (!lang) return 'hu';
	return String(lang).toLowerCase().startsWith('en') ? 'en' : 'hu';
};

/**
 * Resolve a bilingual field `{ en, hu }` or legacy string.
 * Fallback: active lang → other lang → empty string.
 */
export const getLocalized = (field, lang) => {
	const code = normalizeLang(lang);
	if (field == null) return '';
	if (typeof field === 'string') return field;
	if (typeof field === 'object') {
		const primary = field[code];
		if (primary) return primary;
		const other = code === 'en' ? field.hu : field.en;
		return other || field.en || field.hu || '';
	}
	return String(field);
};

/** Normalize API/admin payload into `{ en, hu }` objects. */
export const toBilingual = (value, fallback = '') => {
	if (value && typeof value === 'object' && ('en' in value || 'hu' in value)) {
		return {
			en: value.en || value.hu || fallback,
			hu: value.hu || value.en || fallback,
		};
	}
	const str = value != null ? String(value) : fallback;
	return { en: str, hu: str };
};
