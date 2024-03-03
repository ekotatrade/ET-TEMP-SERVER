import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_uri: process.env.DATABASE_URI,
  node_env: process.env.NODE_ENV,
  round_salt: process.env.ROUND_SALT,
  s3_bucket_name: process.env.S3_BUCKET_NAME,
  s3_bucket_region: process.env.S3_BUCKET_REGION,
  s3_bucket_access_key: process.env.S3_BUCKET_ACCESS_KEY,
  s3_bucket_secret_key: process.env.S3_BUCKET_SECRET_KEY,
};
