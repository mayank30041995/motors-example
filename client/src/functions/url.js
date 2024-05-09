require('dotenv').config()

const PORT = process.env.SOCKET_URL || 8080

export const socketURL = () => {
  return `http://localhost:${PORT}`
}
