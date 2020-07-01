/*3*/
INSERT INTO carros (nome, cor, ano, valor) VALUES ("Gol","Cinza",1999,19000);
INSERT INTO carros (nome, cor, ano, valor) VALUES ("Up","Branco",2015,22000);
INSERT INTO carros (nome, cor, ano, valor) VALUES ("Cruze","Vermelho",2013,39000);
INSERT INTO carros (nome, cor, ano, valor) VALUES ("Sandero","Preto",1998,19000);
INSERT INTO carros (nome, cor, ano, valor) VALUES ("Corolla","Branco",2017,50000);
INSERT INTO carros (nome, cor, ano, valor) VALUES ("Fusca","Azul",1977,15000);
INSERT INTO carros (nome, cor, ano, valor) VALUES ("Pajero","Preto",1999,25000);
INSERT INTO carros (nome, cor, ano, valor) VALUES ("C4 Cactus","Prata",2020,112000);
INSERT INTO carros (nome, cor, ano, valor) VALUES ("Clio","Branco",2011,12000);
INSERT INTO carros (nome, cor, ano, valor) VALUES ("Fusca","Vermelho",1987,33000);

/*4*/
SELECT * FROM carros WHERE ano > 2000;

/*5*/
SELECT DISTINCT cor from carros;

/*6*/
SELECT COUNT(*) from carros where ano < 2000;

/*7*/
SELECT AVG(valor) from carros where ano > 2000;

/*8*/
SELECT SUM(valor) from carros;

/*9*/
SELECT * FROM carros where nome like "f%";

/*10*/
SELECT * FROM carros where cor like "%a";

