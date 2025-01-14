# Use the official Node.js image from Docker Hub
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the bot's source code
COPY . .

# Expose the port your bot might use (if needed)
EXPOSE 3000

# Run your bot (replace 'index.js' with the entry file of your bot)
CMD ["node", "start.js"]
