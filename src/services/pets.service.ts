import axios from 'axios';

import { IPet } from '../store/actions/pets.types';

class PetService {
  private readonly baseUrl = 'http://localhost:3000/api/v1/pet';

  public async getPets(): Promise<IPet[]> {
    try {
      const result = await axios.get<IPet[]>(this.baseUrl);
      if (result.status === 200) {
        return result.data;
      } else {
        return [];
      }
    } catch (error) {
      throw error;
    }
  }

  public async deletePet(id: string): Promise<IPet> {
    try {
      const response = await axios.delete(`${this.baseUrl}/delete/${id}`);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(`The delete operation fails`);
    } catch (error) {
      throw error;
    }
  }

  public async updatePet(pet: IPet): Promise<IPet> {
    try {
      const response = await axios.put(`${this.baseUrl}/put`);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(`The update process fails`);
    } catch (error) {
      throw error;
    }
  }

  public async getPet(id: string): Promise<IPet> {
    try {
      const response = await axios.get<IPet>(`${this.baseUrl}/${id}`);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(`The get process fails`);
    } catch (error) {
      throw error;
    }
  }
}

const service = new PetService();

export default Object.freeze(service);
