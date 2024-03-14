import { normalize, schema } from 'normalizr'; // Importing normalize function and schema from 'normalizr' library

// Creating a schema for the 'course' entity
const course = new schema.Entity('courses');

// Normalizer function for courses data
export const coursesNormalizer = (data) => {
	// Normalizing the data using the 'course' schema
	return normalize(data, [course]);
};
