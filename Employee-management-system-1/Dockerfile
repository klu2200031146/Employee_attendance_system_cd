# Use OpenJDK base image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file into the container
COPY target/Employee-management-system-1-0.0.1-SNAPSHOT.jar app.jar


# Expose the port your Spring Boot app runs on (adjust if needed)
EXPOSE 7777

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
