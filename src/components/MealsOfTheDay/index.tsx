import {Meal} from "@components/Meal";

import {Container, DateTitle} from "@components/MealsOfTheDay/styles";

export function MealsOfTheDay() {
    function getFormattedDate() {
        const date = new Date();
        const day = date.getDate();
        const month =
            date.getUTCMonth() + 1 < 10
                ? `0${date.getUTCMonth() + 1}`
                : date.getUTCMonth() + 1;
        const year = date.getFullYear().toString().slice(-2);

        return `${day}.${month}.${year}`;
    }

    return (
        <Container>
            <DateTitle>{getFormattedDate()}</DateTitle>
            <Meal date={"09:00"} description={"Breakfast"} isItOnTheDiet/>
        </Container>
    );
}
