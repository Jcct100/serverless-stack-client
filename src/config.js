export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploadstwo"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://bfghl2g3z1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_EB0RExaxL",
    APP_CLIENT_ID: "2ruj2j25kjd4o6hk0cvd3i5n8q",
    IDENTITY_POOL_ID: "us-east-1:baa7a024-940a-4175-9fa4-3687bc19b948"
  },
  MAX_ATTACHMENT_SIZE: 5000000
};
