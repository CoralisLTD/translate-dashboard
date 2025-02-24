# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for efficient caching
COPY translate-dashboard/package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application files
COPY translate-dashboard ./
COPY src ./src
COPY public ./public

# Expose the port your app runs on (if applicable)
EXPOSE 3000

# Set the command to start the application
CMD ["node", "index.js"]
