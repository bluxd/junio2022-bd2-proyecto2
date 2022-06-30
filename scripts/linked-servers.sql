EXEC master.dbo.sp_addlinkedserver 
@server 	= N'imdb_server', 
@srvproduct	= N'SQLNCLI',
@provider	= N'SQLNCLI',
@datasrc	= N'20.206.79.6';


EXEC master.dbo.sp_addlinkedsrvlogin 
@rmtsrvname 	= N'imdb_server',
@rmtuser 		= N'panda',
@rmtpassword 	= N'Panda@123456';


SELECT 	*
FROM	imdb_server.imdb.dbo.rating;


--EXEC master.dbo.sp_dropserver 
--@server		= N'imdb_server',   
--@droplogins	= N'droplogins';
