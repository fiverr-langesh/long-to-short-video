# Use an official Node.js runtime as a parent image
FROM node

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 8000
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
