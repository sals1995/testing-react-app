import  calculateHeroStrengthPower from "../utils/heroStrength"


describe("heroStrength function",()=>{
    it("should return 'weak' when passing 9",()=>{
        expect(calculateHeroStrengthPower(9)).toContain("weak")
    })
    it("should return 'strong' when passing 19",()=>{
        expect(calculateHeroStrengthPower(19)).toContain("strong")
    })
    it("should return 'unbelievable' when passing 21",()=>{
        expect(calculateHeroStrengthPower(21)).toContain("unbelievable")
    })
})