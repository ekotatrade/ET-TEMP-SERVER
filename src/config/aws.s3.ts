import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import sharp from 'sharp';
import config from '.';

const s3Client = new S3Client({
  region: config.s3_bucket_region as string,
  credentials: {
    accessKeyId: config.s3_bucket_access_key as string,
    secretAccessKey: config.s3_bucket_secret_key as string,
  },
});

// put object
const putObject = async (file: any, path: string, resize: any) => {
  const resizeImage = await sharp(file.buffer)
    .resize({ ...resize })
    .toBuffer();
  const timestamp = Date.now();

  const command = new PutObjectCommand({
    Bucket: config.s3_bucket_name as string,
    Key: `uploads/${path}/${timestamp}`,
    Body: resizeImage,
    ContentType: file.mimetype,
  });
  await s3Client.send(command);
  return timestamp;
};

// get object
const getObject = async (result: any) => {
  for (const res of result) {
    const command = new GetObjectCommand({
      Bucket: config.s3_bucket_name as string,
      Key: res.image,
    });
    const url = await getSignedUrl(s3Client, command);
    res.image = url;
  }
  return result;
};

export const UploadObject = { putObject, getObject };
