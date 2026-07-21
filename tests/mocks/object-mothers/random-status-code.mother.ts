import { RandomStatusCodeBuilder } from '../builders/status-code.builder'

export class RandomStatusCodeObjectMother {

    static successCode(): number {
        return RandomStatusCodeBuilder
            .instantiate()
            .successFamily()
            .build()
    }

    static serverErrorCode(): number {
        return RandomStatusCodeBuilder
            .instantiate()
            .serverErrorFamily()
            .build()
    }    

    static oneCodeBetweenAllValidFamilies(): number {
        return RandomStatusCodeBuilder
            .instantiate()
            .randomCodeBetweenAllFamilies()
            .build() 
    }

}
