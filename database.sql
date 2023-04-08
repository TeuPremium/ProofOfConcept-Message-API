CREATE DATABASE "TypeScriptPOC";

-- tables
CREATE TABLE "messages"(
    "id" SERIAL PRIMARY KEY,
    "message" varchar(255) NOT NULL,
    "from" varchar(255) NOT NULL,
    "to" varchar(255) NOT NULL
);
