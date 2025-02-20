import { Sauna } from '@/types';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor() {}

  private readonly generateSauna = (numberOfRecords: number = 5): Sauna[] => {
    return Array.from({ length: numberOfRecords }, () => ({
      id: uuidv4(),
      name: `${faker.company.name()} Sauna`,
      description: faker.lorem.sentence(),
      image: faker.image.urlLoremFlickr({ category: 'sauna' }),
      rating: faker.number.int({ min: 1, max: 5 }),
      location: {
        city: faker.location.city(),
        country: faker.location.country(),
      },
      price: faker.number.int({ min: 100, max: 1000 }),
      capacity: faker.number.int({ min: 1, max: 10 }),
      amenities: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
      isAvailable: faker.datatype.boolean(),
      numberOfReviews: faker.number.int({ min: 0, max: 100 }),
    }));
  };

  getSaunas(): Observable<Sauna[]> {
    return of(this.generateSauna());
  }
}
