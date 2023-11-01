// export default {
//     region: 'ap-south-1', // Replace with your AWS region
//     accessKeyId: 'AKIATOJFJTEECIOTB5FG', // Replace with your AWS access key
//     secretAccessKey: '8Mm8t0XU7xV5njnWGw/MOtXiUuytH5igKHHA1zpt' // Replace with your AWS secret key
// }

export default {
    region: import.meta.env.VITE_AWS_ACCESS_REGION ,
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID ,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
}