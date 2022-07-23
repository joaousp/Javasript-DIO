class ContaBancaria{
    constructor(agencia,numero,tipo,){
        this.agencia=agencia,
        this.numero=numero,
        this.tipo=tipo,
        this._saldo=0
    }

    get getSaldo(){
        return this._saldo;
    }
    set setSaldo(valor){
        this._saldo=valor;

    }

    sacar(valor){
        if(valor>this._saldo) throw Error('Não possui saldo suficiente');

        this._saldo-=valor;
        return this._saldo;
    }
    depositar(valor){
        this._saldo+=valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero);
        this.tipo='corrente';
        this.cartaoCredito=cartaoCredito;
    }

    get getCartaoCredito(){
        return this.cartaoCredito;
    }
    set setCartaoCredito(valor){
        this.cartaoCredito=valor;

    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo='poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo='universitaria';
    }
    
    sacar(valor){
        if(valor>this._saldo) throw Error('Não possui saldo suficiente');

        if(valor>=500) throw Error('Não é possivel fazer um saque superior a 499 reais');

        this._saldo-=valor;
        return this._saldo;
    }
}