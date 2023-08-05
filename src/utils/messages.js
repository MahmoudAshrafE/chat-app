const generateMessage = (username,text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
}
const generateTypingMessage = (username) => {
    return {
        username,
    }
}
module.exports = {
    generateMessage,
    generateLocationMessage,
    generateTypingMessage
}