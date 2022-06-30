
CREATE OR ALTER TRIGGER imdbRatingTrigger
ON Title
AFTER  INSERT, UPDATE
AS
BEGIN
	SET NOCOUNT ON;
	UPDATE Title
	SET imdbId = (
		SELECT
			TOP(1) id
		FROM
			imdb_server.imdb.dbo.Title imdb_title
		WHERE
			imdb_title.primaryTitle = (
				SELECT primaryTitle
				FROM inserted
			)
	)
	WHERE 
		id = (
			SELECT id 
			FROM inserted
		);
END


UPDATE Title SET primaryTitle = 'Primary Title 6' WHERE id = 6;


SELECT * FROM Title;


SELECT 
	t.id AS 'Netflix titleID',
	t.primaryTitle AS 'Netflix primaryTitle',
	t.originalTitle AS 'Netflix originalTitle',
	r.id AS 'IMDB ratingID',
	r.titleId AS 'IMDB titleID',
	r.averageRating AS 'IMDB averageRating',
	r.numVotes AS 'IMDB numVotes'
FROM
	Title t,
	imdb_server.imdb.dbo.Rating r
WHERE
	t.imdbId = r.titleId
;

