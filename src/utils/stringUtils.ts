export class StringUtils{
    private static bindingParticles = ['da', 'de', 'di', 'do', 'du', 'das', 'dos', 'dus'];
    private static captalizeFirstCharacter(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    static capitalizeFirstCharacterInName(name: string): string{
        return name.trim().split(" ")
            .map(word => this.bindingParticles.includes(word) 
                ? word
                : this.captalizeFirstCharacter(word))
            .join(" ")
                
    }

    static capitalizeFistCharacterInText(text:string): string{
        return this.captalizeFirstCharacter(text)
    }
}
