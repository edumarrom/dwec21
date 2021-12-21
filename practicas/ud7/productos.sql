DROP TABLE IF EXISTS productos CASCADE;

CREATE TABLE productos (
      id bigserial PRIMARY key
    , nombre varchar(255) NOT NULL
    , imagen varchar(255) NOT NULL
    , descripcion varchar (255) NOT NULL
    , precio numeric(6,2)
);


- nombre
- fotografía
- descripción
- precio
