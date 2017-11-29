class OrderedArray extends Array{
    constructor(...args){
        super(...args);

        this.setDefaultEquals();

        if (arguments.length > 1){
            this.resort();
        }
    }

    setEquals(func){
        this._equalsHandler = func;

        if (this.length > 1){
            this.resort();
        }
    }

    setDefaultEquals(){
        this._equalsHandler = this.defaultEquals;
    }

    defaultEquals(a, b){
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }

    resort(){
        return this.sort(this._equalsHandler);
    }

    insert(entity){
        let index = this.length;
        this.push(entity);

        while (index > 0) {
            const i = index, j = --index;

            if (this._equalsHandler(this[i], this[j]) < 0) {
                const temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            } else {
                return;
            }
        }
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
