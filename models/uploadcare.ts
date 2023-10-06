import { UploadcareSimpleAuthSchema } from "@uploadcare/rest-client";

export const uploadCareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
    publicKey: 'e4e7900bd16b1b5b3363',
    secretKey: process.env.REDIS_PASSWORD
})