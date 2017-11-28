class OrderedArray extends Array{
    constructor(...args){
        super(...args);

        this.setDefaultEquals();
    }

    setEquals(func){
        this._equalsHandler = func;
    }

    setDefaultEquals(){
        this._equalsHandler = this.defaultEquals;
    }

    defaultEquals(a, b){
        return b < a ? 1 : b === a ? 0 : -1;
    }

    resort(){
        return this.sort(this._equalsHandler);
    }

    insert(entity){
        if (typeof this._equalsHandler !== 'function'){
            return this.push(entity);
        }

        for(let i = 0; i <= this.length; i++){
            if (this._equalsHandler(this[i], entity)){
                return this.splice(i, 0, entity);
            }
        }

        return this.push(entity);
    }

    remove(entity){
        const index = this.indexOf(entity);

        if (index === -1){
            return;
        }

        this.splice(index, 1);
    }
}

module.exports = OrderedArray;
