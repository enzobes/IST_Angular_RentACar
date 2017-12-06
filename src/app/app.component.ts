import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Car Rental Service';
  client = CLIENTS;
  selectedHero:Client;

  onSelect(client: Client):void{
      this.selectedHero = client;
  }
}


export class Client{
  id: number;
  lastName: string;
  firstName: string;
}

const CLIENTS: Client[] = [
  { id: 1, lastName: 'Mr. Nice',firstName:'Bes' },
  { id: 2, lastName: 'Narco', firstName:'Bes'  },
  { id: 3, lastName: 'Bombasto', firstName:'Bes'  },
  { id: 4, lastName: 'Celeritas',firstName:'Bes'  },
  { id: 5, lastName: 'Magneta',firstName:'Bes'  },
  { id: 6, lastName: 'RubberMan',firstName:'Bes'  },
  { id: 7, lastName: 'Dynama',firstName:'Bes'  },
  { id: 8, lastName: 'Dr IQ',firstName:'Bes'  },
  { id: 9, lastName: 'Magma',firstName:'Bes'  },
  { id: 10, lastName: 'Tornado',firstName:'Bes'  }
];