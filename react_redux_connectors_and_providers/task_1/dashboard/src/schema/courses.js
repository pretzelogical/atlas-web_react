import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');

export default function courseNormalizer(data) {
  return normalize(data, [course]);
}
