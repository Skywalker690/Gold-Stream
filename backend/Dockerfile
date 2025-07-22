FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy Maven wrapper and set executable permissions
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

RUN chmod +x mvnw && ./mvnw dependency:go-offline

# Copy the rest of the project
COPY src ./src

# Build the project
RUN ./mvnw package -DskipTests

# Run the Spring Boot app
CMD ["./mvnw", "spring-boot:run"]
