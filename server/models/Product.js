import mongoose from 'mongoose';

const bilingualSchema = new mongoose.Schema(
	{
		en: { type: String, default: '' },
		hu: { type: String, default: '' },
	},
	{ _id: false }
);

const reviewSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
		title: { type: String, required: true },
		user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
	},
	{ timestamps: true }
);

const productSchema = new mongoose.Schema(
	{
		name: {
			type: bilingualSchema,
			required: true,
		},
		images: {
			type: Array,
			required: true,
			default: [],
		},
		brand: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		reviews: [reviewSchema],
		rating: {
			type: Number,
			required: true,
			default: 5,
		},
		numberOfReviews: {
			type: Number,
			default: 0,
		},
		subtitle: {
			type: bilingualSchema,
			default: () => ({ en: '', hu: '' }),
		},
		description: {
			type: bilingualSchema,
			default: () => ({ en: '', hu: '' }),
		},
		price: {
			type: Number,
			required: true,
		},
		stock: {
			type: Number,
			required: true,
		},
		productIsNew: {
			type: Boolean,
			required: true,
		},
		stripeId: {
			type: String,
			default: 0,
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;

/** Normalize string or {en,hu} into bilingual object. */
export const toBilingual = (value, fallback = '') => {
	if (value && typeof value === 'object' && ('en' in value || 'hu' in value)) {
		return {
			en: value.en || value.hu || fallback,
			hu: value.hu || value.en || fallback,
		};
	}
	const str = value != null && value !== '' ? String(value) : fallback;
	return { en: str, hu: str };
};
