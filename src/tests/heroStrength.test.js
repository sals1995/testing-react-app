import calculateHeroStrengthPower from "../utils/heroStrength";


describe("calculateHeroStrengthPower function",()=>{
    it("should return (weak) when passing 3",()=>{
        expect(calculateHeroStrengthPower(3)).toMatch(/weak/)
    })
    it("should return (strong) when passing 12",()=>{
        expect(calculateHeroStrengthPower(12)).toMatch(/strong/)
    })
    it("should return (unbelievable) when passing 23",()=>{
        expect(calculateHeroStrengthPower(23)).toMatch(/unbelievable/)
    })
})