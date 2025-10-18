import { Injectable } from '@nestjs/common';
import { CreateManufacturerInput } from '../dto/create-manufacturer.input';
import { UpdateManufacturerInput } from '../dto/update-manufacturer.input';
import { plainToInstance } from 'class-transformer';
import manufacturersJson from '../manufacturers.json';
import { Manufacturer } from '../entities/manufacturer.entity';
import Fuse from 'fuse.js';
import { paginate } from 'src/module/common/pagination/paginate';
import { ManufacturerPaginator } from '../dto/manufacturer-paginator.model';
import { GetManufacturersArgs } from '../dto/get-manufacturers.args';
import { GetManufacturerArgs } from '../dto/get-manufacturer.args';
import { GetProductArgs } from 'src/module/products/dto/get-product.args';
import { Product } from 'src/module/products/entities/product.entity';

const manufacturers = plainToInstance(Manufacturer, manufacturersJson as object[]);

const options = {
  keys: ['name', 'slug'],
  threshold: 0.3,
};

const fuse = new Fuse(manufacturers, options);

@Injectable()
export class ManufacturersService {
  private manufacturers: Manufacturer[] = manufacturers;

  create(createManufacturerInput: CreateManufacturerInput) {
    return this.manufacturers[0];
  }

  async getManufacturers({
    text,
    first,
    page,
  }: GetManufacturersArgs): Promise<ManufacturerPaginator> {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: Manufacturer[] = this.manufacturers;

    if (text?.replace(/%/g, '')) {
      const formatText = text?.replace(/%/g, '');
      data = fuse.search(formatText)?.map(({ item }) => item);
    }

    const results = data.slice(startIndex, endIndex);

    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  getManufacturer({ id, slug }: GetManufacturerArgs): Manufacturer {
    if (id) {
      return this.manufacturers.find((p) => p.id === Number(id));
    }
    return this.manufacturers.find((p) => p.slug === slug);
  }

  findOne(id: number) {
    return `This action returns a #${id} manufacturer`;
  }

  update(id: number, updateManufacturerInput: UpdateManufacturerInput) {
    const manufacturer = this.manufacturers.find((p) => p.id === Number(id));

    // Update author
    manufacturer.is_approved = updateManufacturerInput.is_approved ?? true;

    return manufacturer;
  }

  remove(id: number) {
    return this.manufacturers[0];
  }

  async topManufacturers(limit): Promise<Manufacturer[]> {
    return this.manufacturers.slice(0, limit);
  }
}
