/*------------------------------------------------------------------------------------------------------------------------------------------*/
INSERT INTO Title (titleTypeId, primaryTitle, originalTitle, isAdult, startYear, endyear, runtime) VALUES(1, 'Primary Title 1', 'Original Title 1', 0, 2001, 2002, 101);
INSERT INTO Title (titleTypeId, primaryTitle, originalTitle, isAdult, startYear, endyear, runtime) VALUES(2, 'Primary Title 2', 'Original Title 2', 1, 2002, 2003, 102);
INSERT INTO Title (titleTypeId, primaryTitle, originalTitle, isAdult, startYear, endyear, runtime) VALUES(1, 'Primary Title 3', 'Original Title 3', 0, 2003, 2004, 103);

INSERT INTO TitleGenre (titleId, genreId) VALUES(1, 1);
INSERT INTO TitleGenre (titleId, genreId) VALUES(2, 2);
INSERT INTO TitleGenre (titleId, genreId) VALUES(3, 3);

INSERT INTO KnowForTitle(nameId, titleId) VALUES(1, 1);
INSERT INTO KnowForTitle(nameId, titleId) VALUES(2, 2);
INSERT INTO KnowForTitle(nameId, titleId) VALUES(3, 3);

INSERT INTO Director(nameId, titleId) VALUES(1, 1);
INSERT INTO Director(nameId, titleId) VALUES(2, 2);
INSERT INTO Director(nameId, titleId) VALUES(3, 3);

INSERT INTO Writer(nameId, titleId) VALUES(10, 1);
INSERT INTO Writer(nameId, titleId) VALUES(9, 2);
INSERT INTO Writer(nameId, titleId) VALUES(8, 3);

INSERT INTO Principal(nameId, titleId, jobId, [order], [character]) VALUES(10, 1, 1, 1, 'Character 1');
INSERT INTO Principal(nameId, titleId, jobId, [order], [character]) VALUES(9, 2, 2, 2, 'Character 2');
INSERT INTO Principal(nameId, titleId, jobId, [order], [character]) VALUES(8, 3, 3, 3, 'Character 3');

INSERT INTO Episode(titleId, season, episode) VALUES(2, 1, 1);
INSERT INTO Episode(titleId, parentId, season, episode) VALUES(2, 1, 1, 2);
/*------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------*/
INSERT INTO Title (titleTypeId, primaryTitle, originalTitle, isAdult, startYear, endyear, runtime) VALUES(2, 'Primary Title 4', 'Original Title 4', 1, 2004, 2005, 104);
INSERT INTO TitleGenre (titleId, genreId) VALUES(4, 4);
INSERT INTO KnowForTitle(nameId, titleId) VALUES(4, 4);
INSERT INTO Director(nameId, titleId) VALUES(4, 4);
INSERT INTO Writer(nameId, titleId) VALUES(7, 4);
INSERT INTO Principal(nameId, titleId, jobId, [order], [character]) VALUES(7, 4, 4, 4, 'Character 4');
INSERT INTO Episode(titleId, season, episode) VALUES(4, 1, 1);
INSERT INTO Episode(titleId, parentId, season, episode) VALUES(4, 2, 1, 2);
/*------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------*/
INSERT INTO Title (titleTypeId, primaryTitle, originalTitle, isAdult, startYear, endyear, runtime) VALUES(1, 'Primary Title 5', 'Original Title 5', 0, 2005, 2006, 105);
INSERT INTO TitleGenre (titleId, genreId) VALUES(5, 5);
INSERT INTO KnowForTitle(nameId, titleId) VALUES(5, 5);
INSERT INTO Director(nameId, titleId) VALUES(5, 5);
INSERT INTO Writer(nameId, titleId) VALUES(6, 5);
INSERT INTO Principal(nameId, titleId, jobId, [order], [character]) VALUES(6, 5, 5, 5, 'Character 5');
/*------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------*/
INSERT INTO Title (titleTypeId, primaryTitle, originalTitle, isAdult, startYear, endyear, runtime) VALUES(2, 'Primary Title 6', 'Original Title 6', 1, 2006, 2007, 106);
INSERT INTO TitleGenre (titleId, genreId) VALUES(6, 6);
INSERT INTO KnowForTitle(nameId, titleId) VALUES(6, 6);
INSERT INTO Director(nameId, titleId) VALUES(6, 6);
INSERT INTO Writer(nameId, titleId) VALUES(5, 6);
INSERT INTO Principal(nameId, titleId, jobId, [order], [character]) VALUES(5, 6, 6, 6, 'Character 6');
INSERT INTO Episode(titleId, season, episode) VALUES(6, 1, 1);
INSERT INTO Episode(titleId, parentId, season, episode) VALUES(6, 3, 1, 2);
/*------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------*/
INSERT INTO Title (titleTypeId, primaryTitle, originalTitle, isAdult, startYear, endyear, runtime) VALUES(1, 'Primary Title 7', 'Original Title 7', 0, 2007, 2008, 107);
INSERT INTO TitleGenre (titleId, genreId) VALUES(7, 7);
INSERT INTO KnowForTitle(nameId, titleId) VALUES(7, 7);
INSERT INTO Director(nameId, titleId) VALUES(7, 7);
INSERT INTO Writer(nameId, titleId) VALUES(4, 7);
INSERT INTO Principal(nameId, titleId, jobId, [order], [character]) VALUES(4, 7, 7, 7, 'Character 7');
/*------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------*/






