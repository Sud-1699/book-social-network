# Build stage
FROM maven:3.8.7-openjdk-18 AS build
WORKDIR /build
# Copy stage
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM amazoncorretto:17
# define few things
ARG PROFILE=dev
ARG APP_VERSION=1.0.1

WORKDIR /app
COPY --from=build /build/target/bsn-backend-*.jar /app/

EXPOSE 8088

ENV DB_URL=jdbc:postgresql://postgres-sql-bsn:5432/book_social_network
ENV DB_TIMEZONE=Asia/Kolkata
ENV ACTIVE_PROFILE=${PROFILE}
ENV JAR_VERSION=${APP_VERSION}
ENV EMAIL_HOSTNAME=missing_host_name
ENV EMAIL_USERNAME=missing_user_name
ENV EMAIL_PASSWORD=missing_password
ENV ALLOWED_ORIGINS=origins

CMD java -jar -Duser.timezone=${DB_TIMEZONE} -Dspring.profiles.active=${ACTIVE_PROFILE} -Dspring.datasource.url=${DB_URL} bsn-backend-${JAR_VERSION}.jar