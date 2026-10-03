import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import Product, { toBilingual } from '../models/Product.js';

const __filename = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(__filename), '../..');
dotenv.config({ path: path.join(projectRoot, '.env') });

const migrate = async () => {
	const uri = process.env.MANGO_URI || process.env.MONGO_URI;
	if (!uri) {
		console.error('Missing MANGO_URI / MONGO_URI');
		process.exit(1);
	}

	await mongoose.connect(uri);
	const products = await Product.find({}).lean();
	let updated = 0;

	for (const doc of products) {
		const nameIsString = typeof doc.name === 'string';
		const subtitleIsString = typeof doc.subtitle === 'string';
		const descriptionIsString = typeof doc.description === 'string';

		if (!nameIsString && !subtitleIsString && !descriptionIsString) {
			continue;
		}

		await Product.updateOne(
			{ _id: doc._id },
			{
				$set: {
					name: toBilingual(doc.name),
					subtitle: toBilingual(doc.subtitle || ''),
					description: toBilingual(doc.description || ''),
				},
			}
		);
		updated += 1;
	}

	console.log(`Migrated ${updated} of ${products.length} products to bilingual fields.`);
	await mongoose.disconnect();
};

migrate().catch((err) => {
	console.error(err);
	process.exit(1);
});
