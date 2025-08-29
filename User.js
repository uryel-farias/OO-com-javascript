export default class User {
    #nome
    #email
    #nascimento 
    #role 
    #ativo 
    #listaCursos 
    constructor(nome, email, nascimento, listaCursos, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
        this.#listaCursos = listaCursos;
    }

    get nome() {
        return this.#nome
    }

    set nome(novoNome) {
    this.#nome = novoNome

}

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#rolegit 
    }

    get ativo() {
        return this.#ativo
    }

    #montaObjUser () {
        return ({
            nome: this.#nome,
            email: this.#email,
            nescimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo,
            listaCursos: this.#listaCursos,
        })
    }

    exibirInfos() {
        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}, ${objUser.nescimento}`
    }

    exibirListaCursos() {
        return `Lista de cursos: ${this.#listaCursos}`
    }
}

//const novoUser = new User('Uryel', 'uryel@email', '2025-11-25', ["JS", "Java", "Python"]);

//console.log(novoUser);
//console.log(novoUser.exibirInfos());
//console.log(novoUser.exibirListaCursos());