FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copy Maven project files
COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn

# Download dependencies (use Docker cache effectively)
RUN ./mvnw dependency:go-offline

# Copy the project source code
COPY src ./src

# Package the application (skip tests for faster build)
RUN ./mvnw package -DskipTests

# Expose the application port
EXPOSE 8080
CMD ["java", "-jar", "target/movies-0.0.1-SNAPSHOT.jar"]
