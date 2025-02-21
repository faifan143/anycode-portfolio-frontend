# Use Node.js 20.12.0 LTS as the base image
FROM node:20.17.0

# Install PM2 globally
RUN npm install -g pm2@latest npm@11.1.0

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Use npm ci for clean and faster installations
RUN npm ci 

# Copy all source files into the container
COPY . .

# Build the Next.js app in production mode
RUN npm run build

# Expose the application port
EXPOSE 3000

# Use pm2-runtime to start the Next.js app with a custom name
CMD ["pm2-runtime", "start", "npm", "--name", "frontend", "--", "start"]
