import { describe, expect, it } from "vitest";
import calculateHeroStrengthPower from "../utils/heroStrength";


describe("calculateHeroStrengthPower function",()=>{
    it("should return includes 'weak' when passing strength=9",()=>{
        expect(calculateHeroStrengthPower(9)).toMatch(/weak/i)
    })
    it("should return includes 'strong' when passing strength=12",()=>{
        expect(calculateHeroStrengthPower(12)).toMatch(/strong/i)
    })
    it("should return includes 'unbelievable' when passing strength=30",()=>{
        expect(calculateHeroStrengthPower(30)).toMatch(/unbelievable/i)
    })
})