class Pet {
    constructor(name, furColor) {
        this.name = name;
        this.fur = furColor;
        this.voice = 'Miaaau';
    }

    introduce() {
        console.log(`Labas, as esu ${this.name} ir mano kailis yra ${this.fur} spalvos.`);
    }

    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }
}

export { Pet }