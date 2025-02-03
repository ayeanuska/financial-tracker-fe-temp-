# AWS Deploy

## S3 Bucket Policy

- Replace the bucket name

Go to bucket policy >
{
"Version": "2012-10-17",
"Statement": [
{
"Sid": "PublicReadGetObject",
"Effect": "Allow",
"Principal": "*",
"Action": "s3:GetObject",
"Resource": "arn:aws:s3:::eaui/*"
}
]
}

## CORS policy

[
{
"AllowedHeaders": [],
"AllowedMethods": [
"GET"
],
"AllowedOrigins": [
"*"
],
"ExposeHeaders": []
}
]
