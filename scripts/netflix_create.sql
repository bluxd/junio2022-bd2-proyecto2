CREATE DATABASE netflix;
USE netflix;

CREATE TABLE TitleType (
	id 			INT 			IDENTITY(1,1) PRIMARY KEY,
	name		VARCHAR(500)	NOT NULL
)


CREATE TABLE Title (
	id 				INT IDENTITY(1,1) PRIMARY KEY,
	titleTypeId		INT NOT NULL FOREIGN KEY REFERENCES TitleType(id),
	imdbId			INT ,
	primaryTitle	VARCHAR(500) NOT NULL,
	originalTitle	VARCHAR(500) NOT NULL,
	isAdult			BIT			 NOT NULL,
	startYear		INT			 NOT NULL,
	endyear			INT			 NOT NULL,
	runtime			INT			 NOT NULL
)

CREATE TABLE Genre (
	id 			INT 			IDENTITY(1,1) PRIMARY KEY,
	name		VARCHAR(500)	NOT NULL
)

CREATE TABLE TitleGenre (
	titleId 	INT 			NOT NULL FOREIGN KEY REFERENCES Title(id),
	genreId		INT				NOT NULL FOREIGN KEY REFERENCES Genre(id),
	
	PRIMARY KEY (titleId, genreId)
)


CREATE TABLE Principal (
    id 				INT IDENTITY(1,1) PRIMARY KEY,
    nameId 			INT NOT NULL,
    titleId 		INT NOT NULL,
    jobId 			INT NOT NULL,
    "order" 		INT NOT NULL,
    "character" 	VARCHAR(500) NOT NULL
);



CREATE TABLE KnowForTitle (
    nameId 			INT NOT NULL,
    titleId 		INT NOT NULL,
    PRIMARY KEY (nameId, titleId)
);

CREATE TABLE Director (
    nameId 			INT NOT NULL,
    titleId 		INT NOT NULL
    PRIMARY KEY (nameId, titleId)
);

CREATE TABLE Writer (
    nameId 			INT NOT NULL,
    titleId 		INT NOT NULL
    PRIMARY KEY (nameId, titleId)
);

CREATE TABLE Name (
    id 				INT IDENTITY(1,1) PRIMARY KEY,
    primaryName 	VARCHAR(500) NOT NULL,
    birthYear 		INT NOT NULL,
    deathYear 		INT
);


CREATE TABLE Episode (
    id 				INT IDENTITY(1,1) PRIMARY KEY,
    titleId 		INT NOT NULL,
    parentId 		INT,
    season 			INT NOT NULL,
    episode 		INT NOT NULL
);


ALTER TABLE Principal 		ADD FOREIGN KEY (nameId) 		REFERENCES Name(id);
ALTER TABLE Principal 		ADD FOREIGN KEY (titleId) 		REFERENCES Title(id);

ALTER TABLE KnowForTitle 	ADD FOREIGN KEY (nameId) 		REFERENCES Name(id);
ALTER TABLE KnowForTitle 	ADD FOREIGN KEY (titleId) 		REFERENCES Title(id);

ALTER TABLE Director 		ADD FOREIGN KEY (nameId) 		REFERENCES Name(id);
ALTER TABLE Director 		ADD FOREIGN KEY (titleId) 		REFERENCES Title(id);

ALTER TABLE Writer 			ADD FOREIGN KEY (nameId) 		REFERENCES Name(id);
ALTER TABLE Writer 			ADD FOREIGN KEY (titleId) 		REFERENCES Title(id);

ALTER TABLE Episode 		ADD FOREIGN KEY (titleId) 		REFERENCES Title(id);
ALTER TABLE Episode 		ADD FOREIGN KEY (parentId) 		REFERENCES Episode(id);
