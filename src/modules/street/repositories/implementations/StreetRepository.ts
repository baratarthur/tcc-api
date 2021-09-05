import { Localization } from "../../models/Localization";
import { Street } from "../../models/Street";
import { ISaveStreetDataDTO, IStreetRepository } from "../IStreetRepository";

class StreetRepository implements IStreetRepository {
    private streetsData: Street[];

    private static INSTANCE: StreetRepository;

    private constructor() {
        this.streetsData = [];
    }

    save({ data }: ISaveStreetDataDTO) {
        const media = data.reduce((total, valor) => total+valor.z/data.length, 0);
        const variancia = data.reduce((total, valor) => total + Math.pow(media - valor.z, 2)/data.length, 0);
        const desvioPadrao = Math.sqrt(variancia);
        
        const street = new Street();
        const streetLocalization = data.map(streetLoc => {
            const loc = new Localization();

            Object.assign(loc, {
                lat: streetLoc.lat,
                long: streetLoc.long,
                z: streetLoc.z
            });

            return loc;
        });

        Object.assign(street, {
            points: streetLocalization,
            quality: this.getStreetQuality(desvioPadrao)
        });

        this.streetsData.push(street);
    }

    getRange(locStart: Localization, locEnd: Localization): Street[] {
        return this.streetsData.filter(street => street.points
            .some(point =>
                (point.lat>locStart.lat && point.lat < locEnd.lat)
                && (point.long<locStart.long && point.long>locEnd.long)
            )
        );
    }

    getStreetQuality(desvioPadrao: number) {
        if(desvioPadrao<0.3) {
            return 'OTIMA'
        } else if(desvioPadrao<0.6) {
            return 'PRECISA DE REPAROS'
        } else {
            return 'VIA EM CONDICOES CRITICAS'
        }
    }

    public static getInstance(): StreetRepository {
        if (!StreetRepository.INSTANCE) {
            StreetRepository.INSTANCE = new StreetRepository();
        }

        return StreetRepository.INSTANCE;
    }
}

export { StreetRepository };
