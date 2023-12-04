import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  private registros: Player[] = [
    {
      id: 1,
      nombre: 'Darel',
      direccion: 'Manta',
      eliminado: false,
    },
    {
      id: 2,
      nombre: 'Enrique',
      direccion: 'Jipijapa',
      eliminado: false,
    },
    {
      id: 3,
      nombre: 'Dayana ',
      direccion: 'Portoviejo',
      eliminado: false,
    },
    {
      id: 4,
      nombre: 'Elian ',
      direccion: 'Machala',
      eliminado: false,
    },
  ];

  create(createPlayerDto: CreatePlayerDto) {
    const element = new Player();
    element.id = this.registros.length + 1;
    element.nombre = createPlayerDto.nombre;
    element.direccion = createPlayerDto.direccion;
    element.eliminado = false;
    this.registros.push(element);
    return element;
  }

  findAll() {
    return this.registros;
  }

  findOne(id: number) {
    return this.registros.find((item) => item.id === id);
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    const element = this.findOne(id);
    element.nombre = updatePlayerDto.nombre;
    element.direccion = updatePlayerDto.direccion;

    this.registros = this.registros.map((item) => {
      if (item.id === id) {
        return element;
      }
      return item;
    });

    return element;
  }

  remove(id: number) {
    this.registros.map((item) => {
      if (item.id === id) {
        item.eliminado = true;
      }

      return item;
    });

    return this.findOne(id);
  }
}
