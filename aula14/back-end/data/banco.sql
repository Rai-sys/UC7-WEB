create table aluno (
  matricula serial primary key,
  nome varchar(30) not null,
  email varchar(30) not null unique,
  senha char(10) not null unique
);

insert into aluno(matricula, nome, email, senha) values (12345, 'Samuel', 'samuelelel@gmail.com', 'asd1234567');
insert into aluno(matricula, nome, email, senha) values (97732 , 'Ana Julia', 'aninhaju@gmail.com', 'anana123');